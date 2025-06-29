'use client'

import { AnimatedBeam } from "@/shadcn/components/magicui/animated-beam"
import { cn } from "@/shadcn/lib/utils";
import { PlayCircle } from "lucide-react";
import { forwardRef, useRef } from "react";
import Image from "next/image";
import { Gmail, LinkedIn, Twitter, WordPress } from "@ridemountainpig/svgl-react";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function HeroAnimatedBeam({
    className,
}: {
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const linkedinIconRef = useRef<HTMLDivElement>(null);
    const xIconRef = useRef<HTMLDivElement>(null);
    const gmailIconRef = useRef<HTMLDivElement>(null);
    const wordpressIconRef = useRef<HTMLDivElement>(null);
    const autoforkIconRef = useRef<HTMLDivElement>(null);
    const playIconRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                "relative flex w-full items-center justify-center overflow-hidden mb-8",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
                <div className="flex flex-col justify-center">
                    <Circle ref={playIconRef}>
                        <PlayCircle />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={autoforkIconRef} className="size-16">
                        <Image
                            src="/assets/logo/autofork-logo.svg"
                            alt="AutoFork Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <Circle ref={linkedinIconRef}>
                        <LinkedIn />
                    </Circle>
                    <Circle ref={xIconRef}>
                        <Twitter />
                    </Circle>
                    <Circle ref={gmailIconRef}>
                        <Gmail />
                    </Circle>
                    <Circle ref={wordpressIconRef}>
                        <WordPress />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={linkedinIconRef}
                toRef={autoforkIconRef}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={xIconRef}
                toRef={autoforkIconRef}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={gmailIconRef}
                toRef={autoforkIconRef}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={wordpressIconRef}
                toRef={autoforkIconRef}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={autoforkIconRef}
                toRef={playIconRef}
                duration={3}
            />
        </div>
    )
}
