import { Mail } from "lucide-react"
import { SERVER_CONFIG } from "../config/SERVER_CONFIG"
import { GitHubBrandLogo } from "../_logos/GitHubBrandLogo"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <Image
                                src="/assets/logo/autofork-logo.svg"
                                alt="AutoFork Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>  
                        <span className="text-xl font-bold">{SERVER_CONFIG.APP_NAME}</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <a 
                            href={`mailto:${SERVER_CONFIG.SUPPORT_EMAIL}`} 
                            className="p-2 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-gray-800"
                            aria-label="Contact us via email"
                        >
                            <Mail size={20} color="white" />
                        </a>
                        <a 
                            href={SERVER_CONFIG.GITHUB_REPO_URL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-gray-800"
                            aria-label="View source on GitHub"
                        >
                            <GitHubBrandLogo size={20} color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
