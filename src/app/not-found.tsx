import { Typography } from '@/components/Typography'

export default function NotFound() {
  return (
    <div className="flex container min-h-screen items-center justify-center min-w-full flex-col">
      <div className="flex">
        <Typography className="text-accent-yellow" as="h1">
          Not
        </Typography>
        <Typography className="text-accent-blue" as="h1">
          Found
        </Typography>
      </div>

      <Typography className="text-foreground">
        Could not find requested resource
      </Typography>

      <a className="text-accent-pink" href="/">
        <Typography as="h3">Return Home</Typography>
      </a>
    </div>
  )
}
