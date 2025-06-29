import { CTAInputEmail } from "./CTAInputEmail"

export function CTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to multiply your content—without multiplying the work?</h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                    AutoFork is launching soon. Join our waitlist and get exclusive early access.
                </p>

                <CTAInputEmail/>
            </div>
        </section>
    )
}
