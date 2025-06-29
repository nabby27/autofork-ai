import {
    FileText,
    Globe,
    Zap,
    CheckCircle,
    Mic,
    Languages,
} from "lucide-react"
import { FeatureCard } from "./FeatureCard"

const features: {
    title: string
    description: string
    icon: React.ReactNode
    color: 'purple' | 'blue' | 'green' | 'orange' | 'pink' | 'yellow'
}[] = [
    {
        title: "Multi-Language Output",
        description: "Effortlessly translate your content into multiple languages—without losing your style.",
        icon: <Languages className="w-6 h-6 text-purple-600" />,
        color: "purple"
    },
    {
        title: "Crystal-Clear Transcription",
        description: " Accurate results from any audio: interviews, webinars, podcasts, or livestreams.",
        icon: <Mic className="w-6 h-6 text-blue-600" />,
        color: "blue"
    },
    {
        title: "Fast Turnaround",
        description: "Generate publish-ready content in minutes, not hours.",
        icon: <Zap className="w-6 h-6 text-green-600" />,
        color: "green"
    },
    {
        title: "Multiple Content Types",
        description: "Twitter threads, blog posts, LinkedIn articles, emails, Instagram captions—you name it.",
        icon: <FileText className="w-6 h-6 text-orange-600" />,
        color: "orange"
    },
    {
        title: "Platform Optimization",
        description: "Each piece is fine-tuned for the platform&apos;s ideal format, tone and length.",
        icon: <Globe className="w-6 h-6 text-pink-600" />,
        color: "pink"
    },
    {
        title: "Ready to Publish",
        description: "No extra editing. Just copy, paste, and share.",
        icon: <CheckCircle className="w-6 h-6 text-yellow-600" />,
        color: "yellow"
    }
]

export function FeaturesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Everything You Need to Repurpose Smarter
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            color={feature.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
