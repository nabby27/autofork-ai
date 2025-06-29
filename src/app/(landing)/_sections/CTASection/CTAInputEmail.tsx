"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/shadcn/components/ui/button"
import { Input } from "@/shadcn/components/ui/input"
import { CheckCircle, Loader2 } from "lucide-react"
import { useUTMParams } from "@/hooks/useUTMParams"

export function CTAInputEmail() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const utms = useUTMParams({
        utm_content: "cta_section",
        utm_term: "get-early-access",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (email && !isLoading) {
            setIsLoading(true)
            try {
                await fetch("/api/lead", {
                    method: "POST",
                    body: JSON.stringify({ email, utms }),
                })
                setIsSubmitted(true)
            } catch (error) {
                console.error("Error submitting email:", error)
            } finally {
                setIsLoading(false)
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
        >
            <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                required
                disabled={isLoading || isSubmitted}
            />
            <Button 
                type="submit" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                disabled={isLoading || isSubmitted}
            >
                {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                {isSubmitted ? <CheckCircle className="w-4 h-4" /> : isLoading ? "Submitting..." : "Get Early Access"}
            </Button>
        </form>
    )
}
