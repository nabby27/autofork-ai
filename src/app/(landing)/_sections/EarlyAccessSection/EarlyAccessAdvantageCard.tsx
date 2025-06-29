import { Card, CardContent } from "@/shadcn/components/ui/card"

export function EarlyAccessAdvantageCard({
    title,
    description,
    icon,
    color,
}: {
    title: string
    description: string
    icon: React.ReactNode
    color: 'purple' | 'blue' | 'green'
}) {
    return (
        <Card className={`border-${color}-100 bg-${color}-50/50`}>
            <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    {icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}
