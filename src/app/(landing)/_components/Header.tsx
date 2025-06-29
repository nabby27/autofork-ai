import Image from "next/image"
import { GitHubLight } from "@ridemountainpig/svgl-react"
import { SERVER_CONFIG } from "@/config/serverConfig"

export function Header() {
    return (
        <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <Image
                            src="/assets/logo/autofork-logo.svg"
                            alt="AutoFork Logo"
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900">{SERVER_CONFIG.APP.NAME}</span>
                </div>

                <div className="flex items-center">
                    <a 
                        href={SERVER_CONFIG.APP.GITHUB_REPO_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100"
                        aria-label="View source on GitHub"
                    >
                        <GitHubLight className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </header>
    )
}
