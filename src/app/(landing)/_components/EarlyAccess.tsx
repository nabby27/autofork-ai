import {
    Zap,
    Users,
    MessageSquare,
} from "lucide-react"
import { Card, CardContent } from "@/shadcn/components/ui/card"

export function EarlyAccess() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Early Access = Early Influence</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                    Be among the first to try AutoFork and help shape how it grows. We&apos;re building this tool with creators like
                    you—your feedback matters.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <Card className="border-purple-100 bg-purple-50/50">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Shape the Product</h3>
                            <p className="text-gray-600 text-sm">
                                Your input will directly influence features, workflows, and the overall user experience.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-blue-100 bg-blue-50/50">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">First Access</h3>
                            <p className="text-gray-600 text-sm">
                                Get exclusive early access to AutoFork before it&apos;s available to the general public.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-green-100 bg-green-50/50">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Direct Line to Founders</h3>
                            <p className="text-gray-600 text-sm">
                                Join our community of early adopters and get direct access to the founding team.
                            </p>
                        </CardContent>
                    </Card>
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
