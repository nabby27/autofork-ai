import { SERVER_CONFIG } from "@/config/SERVER_CONFIG";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

type UTMs = {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_term: string;
}

export async function POST(request: NextRequest) {
    const { email, utms } = await request.json();

    await saveData(email, utms);
    await notifyNewLead();

    return new NextResponse(null, { status: 204 });
}

async function saveData(email: string, utms: UTMs) {
    const auth = new google.auth.GoogleAuth({
        projectId: SERVER_CONFIG.ENV.GSHEET_PROJECT_ID,
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
        credentials: {
            client_email: SERVER_CONFIG.ENV.GSHEET_CLIENT_EMAIL,
            private_key: SERVER_CONFIG.ENV.GSHEET_PRIVATE_KEY,
        }
    })
    const sheets = google.sheets({ version: "v4", auth });

    sheets.spreadsheets.values.append({
        spreadsheetId: SERVER_CONFIG.ENV.GSHEET_SPREADSHEET_ID,
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
    const res = await fetch('https://slack.com/api/chat.postMessage', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${SERVER_CONFIG.ENV.SLACK_BOT_OAUTH_TOKEN}`,
            'Content-Type': 'application/json',
            'charset': 'utf-8'
        },
        body: JSON.stringify({
            channel: SERVER_CONFIG.ENV.SLACK_NOTIFY_NEW_LEAD_CHANNEL,
            text: "New lead arrived 🎉"
        })
    });

    if (!res.ok) {
        console.error('Failed to notify new lead', res);
    }
    
    const data = await res.json();
    console.log('Notified new lead', data);
}