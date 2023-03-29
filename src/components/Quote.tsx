import { getUniqueKey } from './../utils/helpers'
import { ProgressBarDivider } from './ProgressBarDivider'
import { Typography } from './Typography'

export type QuoteProps = {
  content: string
  author: string
  tags: string[]
  authorSlug: string
  permalink: string
}

export const Quote = ({ author, content, tags }: QuoteProps) => {
  return (
    <div className="flex flex-col items-center">
      <Typography
        size="5xl"
        className="text-center sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
      >
        {author}
      </Typography>

      <Typography
        size="base"
        weight="light"
        className="text-center md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
      >
        {content}
      </Typography>

      <ProgressBarDivider />

      <div className="flex">
        {tags?.map((tag) => (
          <>
            <div
              key={getUniqueKey()}
              className={`mr-4 overflow-hidden rounded-full bg-accent py-1 px-4 text-primary-light last:mr-0`}
            >
              {tag}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
