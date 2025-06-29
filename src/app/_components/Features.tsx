import { Card, CardContent } from "@/shadcn/components/ui/card"
import {
    FileText,
    Globe,
    Zap,
    CheckCircle,
    Mic,
    Languages,
} from "lucide-react"

export function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Everything You Need to Repurpose Smarter
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <Languages className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Multi-Language Output</h3>
                            <p className="text-gray-600 text-sm">
                                Effortlessly translate your content into multiple languages—without losing your style.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Mic className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Crystal-Clear Transcription</h3>
                            <p className="text-gray-600 text-sm">
                                Accurate results from any audio: interviews, webinars, podcasts, or livestreams.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
                            <p className="text-gray-600 text-sm">
                                Generate publish-ready content in minutes, not hours.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <FileText className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Multiple Content Types</h3>
                            <p className="text-gray-600 text-sm">
                                Twitter threads, blog posts, LinkedIn articles, emails, Instagram captions—you name it.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-pink-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Platform Optimization</h3>
                            <p className="text-gray-600 text-sm">
                                Each piece is fine-tuned for the platform&apos;s ideal format, tone and length.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Ready to Publish</h3>
                            <p className="text-gray-600 text-sm">
                                No extra editing. Just copy, paste, and share.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
