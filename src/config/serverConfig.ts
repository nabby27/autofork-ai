import { GLOBAL_CONFIG } from "./globalConfig";

export const SERVER_CONFIG = {
    APP: {
        ...GLOBAL_CONFIG.APP,
    },
    GSHEET: {
        CLIENT_EMAIL: process.env.GSHEET_CLIENT_EMAIL!,
        PRIVATE_KEY: process.env.GSHEET_PRIVATE_KEY!.replace(/\\n/g, "\n"),
        PROJECT_ID: process.env.GSHEET_PROJECT_ID!,
        SPREADSHEET_ID: process.env.GSHEET_SPREADSHEET_ID!,
    },
    SLACK: {
        BOT_OAUTH_TOKEN: process.env.SLACK_BOT_OAUTH_TOKEN!,
        NEW_LEAD_CHANNEL: process.env.SLACK_NOTIFY_NEW_LEAD_CHANNEL!,
    }
}