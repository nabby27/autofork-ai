import { SocialButton } from "./SocialButton"
import { ClipboardShareButton } from "./ClipboardShareButton"
import { Facebook, LinkedIn, Telegram, Twitter, WhatsApp } from "@ridemountainpig/svgl-react"

export function ShareSection() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Help Us Spread the Word</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Know someone who creates content? Share AutoFork and help them discover the future of content repurposing.
                </p>

                <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                    <SocialButton
                        platform="twitter"
                        text="Share on X"
                        icon={<Twitter />}
                        shareText="🚀 Just discovered AutoFork - it transforms any video or audio into endless content automatically! Perfect for content creators who want to multiply their reach without the manual work. Join the waitlist: "
                    />
                    
                    <SocialButton
                        platform="linkedin"
                        text="Share on LinkedIn"
                        icon={<LinkedIn />}
                    />

                    <SocialButton
                        platform="facebook"
                        text="Share on Facebook"
                        icon={<Facebook />}
                    />

                    <SocialButton
                        platform="whatsapp"
                        text="Share on WhatsApp"
                        icon={<WhatsApp />}
                        shareText="🚀 Just discovered AutoFork - it transforms any video or audio into endless content automatically! Perfect for content creators who want to multiply their reach without the manual work. Join the waitlist: "
                    />

                    <SocialButton
                        platform="telegram"
                        text="Share on Telegram"
                        icon={<Telegram />}
                        shareText="🚀 Just discovered AutoFork - it transforms any video or audio into endless content automatically! Perfect for content creators who want to multiply their reach without the manual work. Join the waitlist: "
                    />

                    <ClipboardShareButton />
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100 max-w-2xl mx-auto">
                    <p className="text-sm text-purple-700 font-medium mb-2">💡 Sharing Tip</p>
                    <p className="text-sm text-purple-600">
                        Tag friends who create content, run podcasts, or manage social media. They&apos;ll thank you for introducing
                        them to AutoFork!
                    </p>
                </div>
            </div>
        </section>
    )
}
