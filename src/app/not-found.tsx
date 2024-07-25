import { Typography } from '@/components/Typography'
import { cn, getUniqueKey } from '@/lib/utils'

function createText(content: Record<string, string>[]) {
  return (
    <div className="flex">
      {content.map(({ text, color }) => {
        return (
          <Typography
            key={getUniqueKey()}
            className={cn('select-none', color)}
            as="h1"
          >
            {text}
          </Typography>
        )
      })}
    </div>
  )
}

export default function NotFound() {
  return (
    <div className="container flex min-h-screen min-w-full flex-col items-center justify-center">
      {createText([
        { text: '4', color: 'text-accent-blue' },
        { text: '0', color: 'text-accent-yellow' },
        { text: '4', color: 'text-accent-pink' },
      ])}

      {createText([
        { text: 'Not', color: 'text-accent-yellow' },
        { text: 'Found', color: 'text-accent-blue' },
      ])}

      <Typography className="mt-0 text-foreground-muted">
        Could not find requested resource
      </Typography>
    </div>
  )
}
