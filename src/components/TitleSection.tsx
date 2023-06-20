import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface TitleSectionProps {
  label: string
  href?: string
  showButtonEvaluate?: boolean
}

export function TitleSection({
  label,
  href,
  showButtonEvaluate = false,
}: TitleSectionProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm leading-base">{label}</h2>

      {href && (
        <Link
          href={href}
          className="text-purple-100 text-sm font-bold leading-base flex items-center gap-2 py-1 px-2 rounded-sm hover:bg-purple-100 hover:bg-opacity-20 transition-colors"
        >
          Ver todos
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}

      {showButtonEvaluate && (
        <button className="text-purple-100 text-sm font-bold leading-base flex items-center gap-2 py-1 px-2 rounded-sm hover:bg-purple-100 hover:bg-opacity-20 transition-colors">
          Avaliar
        </button>
      )}
    </div>
  )
}
