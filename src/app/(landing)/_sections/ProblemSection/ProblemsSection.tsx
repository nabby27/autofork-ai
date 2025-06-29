import {
    MessageSquare,
    Clock,
    Users,
} from "lucide-react"
import { ProblemCard } from "./ProblemCard"

const problems: {
    title: string
    description: string
    icon: React.ReactNode
    color: 'red' | 'orange' | 'yellow'
}[] = [
    {
        title: "Time-Consuming",
        description: "Manually turning one podcast into five content pieces eats up your day—and your energy.",
        icon: <Clock className="w-6 h-6 text-red-600" />,
        color: "red"
    },
    {
        title: "Expensive Outsourcing",
        description: "Writers, editors, social media managers… repurposing costs stack up quickly.",
        icon: <Users className="w-6 h-6 text-orange-600" />,
        color: "orange"
    },
    {
        title: "Lost Reach",
        description: "Your best ideas stay trapped in a single format, never reaching their full potential across channels.",
        icon: <MessageSquare className="w-6 h-6 text-yellow-600" />,
        color: "yellow"
    }
]

export function ProblemsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Hidden Bottleneck in Content Creation</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Recording content is easy. Repurposing it for every platform? That’s where time and money disappear—until now.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {problems.map((problem) => (
                        <ProblemCard
                            key={problem.title}
                            title={problem.title}
                            description={problem.description}
                            icon={problem.icon}
                            color={problem.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
