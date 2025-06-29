"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/shadcn/components/ui/button"
import { Input } from "@/shadcn/components/ui/input"
import { CheckCircle, Loader2 } from "lucide-react"
import { useUTMParams } from "../../../hooks/useUTMParams"

export function HeroInputEmail() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const utms = useUTMParams({
        utm_content: "hero_section",
        utm_term: "join-waitlist",
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
        <>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2">
                <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1"
                        required
                        disabled={isLoading || isSubmitted}
                    />
                    <Button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        disabled={isLoading || isSubmitted}
                    >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : isSubmitted ? <CheckCircle className="w-4 h-4" /> : "Join Waitlist"}
                    </Button>
                </form>
            </div>

            {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-sm p-4 max-w-md mx-auto mb-8">
                    <p className="text-green-800 font-medium">🎉 You&apos;re officially on the VIP list!</p>
                </div>
            )}
        </>
    )
}
