import {
    Zap,
    Users,
    MessageSquare,
} from "lucide-react"
import { EarlyAccessAdvantageCard } from "./EarlyAccessAdvantageCard"

const advantages: {
    title: string
    description: string
    icon: React.ReactNode
    color: 'purple' | 'blue' | 'green'
}[] = [
    {
        title: "Shape the Product",
        description: "Your input will directly influence features, workflows, and the overall user experience.",
        icon: <Users className="w-6 h-6 text-purple-600" />,
        color: "purple"
    },
    {
        title: "First Access",
        description: "Get exclusive early access to AutoFork before it&apos;s available to the general public.",
        icon: <Zap className="w-6 h-6 text-blue-600" />,
        color: "blue"
    },
    {
        title: "Direct Line to Founders",
        description: "Join our community of early adopters and get direct access to the founding team.",
        icon: <MessageSquare className="w-6 h-6 text-green-600" />,
        color: "green"
    }
]

export function EarlyAccessSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Early Access = Early Influence</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                    Be among the first to try AutoFork and help shape how it grows. We&apos;re building this tool with creators like
                    you—your feedback matters.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {advantages.map((advantage) => (
                        <EarlyAccessAdvantageCard
                            key={advantage.title}
                            title={advantage.title}
                            description={advantage.description}
                            icon={advantage.icon}
                            color={advantage.color}
                        />
                    ))}
                </div>

                <div className="mt-12 bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-sm border border-gray-100">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div>
                            <p className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AutoFork</p>
                            <p className="text-sm text-gray-600">Building with transparency</p>
                        </div>
                    </div>
                    <p className="text-gray-700 italic">
                        &quot;We believe the best products are built with their users, not for them. Your voice will help us create
                        something truly valuable for the content creation community.&quot;
                    </p>
                </div>
            </div>
        </section>
    )
}
