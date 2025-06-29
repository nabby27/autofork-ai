import { Card, CardContent } from "@/shadcn/components/ui/card"
import {
    MessageSquare,
    Clock,
    Users,
} from "lucide-react"

export function Problem() {
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
                    <Card className="border-red-100 bg-red-50/50">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Time-Consuming</h3>
                            <p className="text-gray-600 text-sm">
                                Manually turning one podcast into five content pieces eats up your day—and your energy.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-orange-100 bg-orange-50/50">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Expensive Outsourcing</h3>
                            <p className="text-gray-600 text-sm">
                                Writers, editors, social media managers… repurposing costs stack up quickly.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-yellow-100 bg-yellow-50/50">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Lost Reach</h3>
                            <p className="text-gray-600 text-sm">
                                Your best ideas stay trapped in a single format, never reaching their full potential across channels.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
