import { SERVER_CONFIG } from "@/config/serverConfig";
import { UTMs } from "@/hooks/useUTMParams";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { email, utms } = await request.json();

    await Promise.all([
        saveData(email, utms),
        notifyNewLead()
    ]);

    return new NextResponse(null, { status: 204 });
}

async function saveData(email: string, utms: UTMs) {
    const auth = new google.auth.GoogleAuth({
        projectId: SERVER_CONFIG.GSHEET.PROJECT_ID,
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
        credentials: {
            client_email: SERVER_CONFIG.GSHEET.CLIENT_EMAIL,
            private_key: SERVER_CONFIG.GSHEET.PRIVATE_KEY,
        }
    })
    const sheets = google.sheets({ version: "v4", auth });

    sheets.spreadsheets.values.append({
        spreadsheetId: SERVER_CONFIG.GSHEET.SPREADSHEET_ID,
        range: "Sheet1!A1:B1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [
                [email, new Date().toISOString(), utms.utm_source, utms.utm_medium, utms.utm_campaign, utms.utm_content, utms.utm_term]
            ]
        }
    })
}

async function notifyNewLead() {
    await fetch('https://slack.com/api/chat.postMessage', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${SERVER_CONFIG.SLACK.BOT_OAUTH_TOKEN}`,
            'Content-Type': 'application/json',
            'charset': 'utf-8'
        },
        body: JSON.stringify({
            channel: SERVER_CONFIG.SLACK.NEW_LEAD_CHANNEL,
            text: "New lead arrived 🎉"
        })
    });
}