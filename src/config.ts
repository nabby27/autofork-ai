export const config = {
    app: {
        name: "AutoFork",
        title: "AutoFork - Repurpose video and audio content automatically",
        description: "AutoFork is the fastest way to turn your videos, podcasts, and webinars into blog posts, threads, emails, and more—automatically.",
        keywords: ["video repurposing", "audio repurposing", "video editing", "audio editing", "video transcription", "audio transcription", "video summarization", "audio summarization", "video summarization", "audio summarization"],
        supportEmail: "support@autofork.ai",
        githubRepoUrl: "https://github.com/nabby27/autofork-ai",
        url: process.env.NEXT_PUBLIC_APP_URL!,
    },
    gsheet: {
        clientEmail: process.env.GSHEET_CLIENT_EMAIL!,
        privateKey: process.env.GSHEET_PRIVATE_KEY!.replace(/\\n/g, "\n"),
        projectId: process.env.GSHEET_PROJECT_ID!,
        spreadsheetId: process.env.GSHEET_SPREADSHEET_ID!,
    },
    slack: {
        botOauthToken: process.env.SLACK_BOT_OAUTH_TOKEN!,
        newLeadChannel: process.env.SLACK_NOTIFY_NEW_LEAD_CHANNEL!,
    }
}