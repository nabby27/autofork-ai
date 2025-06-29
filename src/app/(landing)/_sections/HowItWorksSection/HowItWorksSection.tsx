import {
    FileText,
    MessageSquare,
    Mail,
    Zap,
    Users,
    ArrowRight,
    Mic,
    Video,
} from "lucide-react"

export function HowItWorksSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Create once. Publish everywhere.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Upload your recording once. AutoFork turns it into ready-to-publish content across platforms—automatically.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Video className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Upload Your Content</h3>
                                        <p className="text-gray-600">
                                            Drop your video, podcast, or audio file. Or just share a link. We support all major sources.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">AI-powered transformation</h3>
                                        <p className="text-gray-600">
                                            Our system finds key ideas, restructures them, and writes for each format—keeping your voice intact.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Content ready in minutes</h3>
                                        <p className="text-gray-600">
                                            Receive polished blog posts, social media content, summaries, and newsletters—ready to go.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <div className="text-center mb-6">
                                <div className="flex justify-center space-x-2 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                                        <Video className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                        <Mic className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-gray-900">Your Video or Audio</h4>
                            </div>

                            <div className="space-y-3">
                                <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                                        <FileText className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                                        <span className="text-xs text-purple-700 font-medium">Blog Article</span>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                                        <MessageSquare className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                                        <span className="text-xs text-blue-700 font-medium">Twitter Thread</span>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-3 text-center">
                                        <Users className="w-5 h-5 text-green-600 mx-auto mb-1" />
                                        <span className="text-xs text-green-700 font-medium">LinkedIn Post</span>
                                    </div>
                                    <div className="bg-orange-50 rounded-lg p-3 text-center">
                                        <Mail className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                                        <span className="text-xs text-orange-700 font-medium">Newsletter</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
