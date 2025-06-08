import { AlertCircle } from "lucide-react"

interface DemoNoticeProps {
  className?: string
}

export function DemoNotice({ className = "" }: DemoNoticeProps) {
  return (
    <div className={`bg-blue-900/20 border border-blue-800 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-2">
        <AlertCircle className="h-4 w-4 text-blue-400 mt-0.5" />
        <div>
          <p className="text-blue-400 font-medium">Demo Website Notice</p>
          <p className="text-gray-300 text-sm mt-1">
            PlayJunction is a demonstration website. Download links will direct you to real app stores with actual
            games, but no real purchases will be made. Game keys and some download options are simulated for
            demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  )
}
