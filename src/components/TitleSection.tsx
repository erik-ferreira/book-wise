import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface TitleSectionProps {
  label: string
  href?: string
}

export function TitleSection({ label, href }: TitleSectionProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm leading-base">{label}</h2>

      {href && (
        <Link
          href={href}
          className="text-purple-100 text-sm font-bold leading-base flex items-center gap-2"
        >
          Ver todos
          <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  )
}
