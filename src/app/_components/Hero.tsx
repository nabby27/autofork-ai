import { Badge } from "@/shadcn/components/ui/badge"
import { Clock, Languages, Zap } from "lucide-react"
import { HeroInputEmail } from "./HeroInputEmail"
import { HeroAnimatedBeam } from "./HeroAnimatedBeam"
import { ShineBorder } from "@/shadcn/components/magicui/shine-border"

export function Hero() {
    return (
        <section className="pt-10 pb-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 text-center">
                <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
                    🚀 Coming Soon - Join the Waitlist
                </Badge>

                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Turn Your
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {" "}
                        Voice into Viral Content
                    </span>
                    <br/>
                    - in minutes.
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    AutoFork automatically transforms your videos, podcasts, and audio recordings into blog posts, threads, newsletters, and more. Publish everywhere without rewriting anything.
                </p>

                <div className="relative overflow-hidden bg-white/60 border border-gray-200 rounded-lg p-5 mb-6 max-w-2xl mx-auto shadow-sm">
                    <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

                    <p className="text-gray-700 font-medium text-base mb-1">✨ Early Access Available</p>
                    <p className="text-gray-600 text-sm mb-8">
                        Join our waitlist and be among the first to experience AutoFork before public launch.
                    </p>
                    <HeroInputEmail />

                </div>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-500 mb-8">
                    <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Save +10 hours per episode</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Languages className="w-4 h-4" />
                        <span>Multi-language support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span>Works with any audio/video</span>
                    </div>
                </div>

                <HeroAnimatedBeam />
            </div>
        </section>
    )
}
