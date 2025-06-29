"use client"

import { Button } from "@/shadcn/components/ui/button"
import { useEffect, useState } from "react"
import { CheckIcon, Loader2Icon } from "lucide-react"
import { config } from "@/config"

export function ClipboardShareButton() {
    const [isCopied, setIsCopied] = useState(false)
    const [isCopying, setIsCopying] = useState(false)

    async function copyToClipboard() {
        setIsCopying(true)
        const utmParams = new URLSearchParams({
            utm_source: 'direct',
            utm_medium: 'referral',
            utm_campaign: 'prelaunch',
        })

        const url = `${config.app.url}?${utmParams.toString()}`

        await navigator.clipboard.writeText(url)
        setIsCopied(true)
        setIsCopying(false)
    }

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false)
            }, 2000)
        }
    }, [isCopied])

    if (isCopying) {
        return (
            <Button
                onClick={copyToClipboard}
                variant="outline"
                className="flex items-center space-x-2 hover:bg-gray-50 hover:border-gray-300"
            >
                <Loader2Icon className="animate-spin" />
                <span>Copying...</span>
            </Button>
        )
    }

    if (isCopied) {
        return (
            <Button
                onClick={copyToClipboard}
                variant="outline"
                className="flex items-center space-x-2 hover:bg-gray-50 hover:border-gray-300"
            >
                <CheckIcon className="text-green-500" />
                <span>Copied</span>
            </Button>
        )
    }

    return (
        <Button
            onClick={copyToClipboard}
            variant="outline"
            className="flex items-center space-x-2 hover:bg-gray-50 hover:border-gray-300"
        >
            <CopyIcon />
            <span>Copy Link</span>
        </Button>
               
    )
}

const CopyIcon = () => {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
        </svg>
    )
}