import { Typography } from './Typography'

export default function ({
  modeState = 'normal',
  location = '/',
}: {
  modeState: 'normal' | 'insert'
  location: string
}) {
  return (
    <div className="flex min-w-full bg-slate-700 justify-between fixed left-0 bottom-0">
      <div className="flex">
        {modeState === 'normal' && (
          <Typography
            as="span"
            className="bg-accent-pink text-background px-4 py-1 text-center">
            {modeState}
          </Typography>
        )}
        {modeState === 'insert' && (
          <Typography
            as="span"
            className="bg-accent-yellow text-background px-4 py-1 text-center">
            {modeState}
          </Typography>
        )}
        <Typography
          as="span"
          className="bg-slate-600 text-foreground px-4 py-1 text-center">
          main
        </Typography>
        <Typography
          as="span"
          className="bg-slate-700 text-foreground px-4 py-1 text-center">
          {location}
        </Typography>
      </div>
      <div className="flex">
        <Typography
          as="span"
          className="bg-accent-purple text-background px-4 py-1 text-center">
          {'7:30 PM'}
        </Typography>
      </div>
    </div>
  )
}
