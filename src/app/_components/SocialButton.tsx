import { Button } from "@/shadcn/components/ui/button"
import { CLIENT_CONFIG } from "../config/CLIENT_CONFIG"

export function SocialButton({
    platform,
    text,
    icon,
    shareText = "",
}: {
    platform: 'twitter' | 'linkedin' | 'facebook' | 'whatsapp' | 'telegram'
    text: string
    icon: React.ReactNode
    shareText?: string
}) {
    function url() {
        const utmParams = new URLSearchParams({
            utm_source: platform,
            utm_medium: 'social',
            utm_campaign: 'prelaunch',
        })

        const urlWithUTM = `${CLIENT_CONFIG.APP_URL}?${utmParams.toString()}`

        const platformUrls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(urlWithUTM)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlWithUTM)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlWithUTM)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${urlWithUTM}`)}`,
            telegram: `https://t.me/share/url?url=${encodeURIComponent(urlWithUTM)}&text=${encodeURIComponent(shareText)}`
        }
        
        return platformUrls[platform]
    }

    return (
        <Button
            asChild
            variant="outline"
            className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300"
        >
            <a
                href={url()}
                target="_blank"
                rel="noopener noreferrer"
            >
                {icon}
                <span>{text}</span>
            </a>
        </Button>
    )
}
