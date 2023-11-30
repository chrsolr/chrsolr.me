'use client'

import Title from '~/components/Title'
import { PageWrapper } from '~/components/PageWrapper'
import { useSearchParams } from 'next/navigation'

type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params: { slug } }: Params) {
  const searchParams = useSearchParams()

  const day = searchParams.get('day')
  const year = searchParams.get('year')
  const title = `$AoC - ${year}-Day-${day}`

  return (
    <PageWrapper>
      <Title>
        Advent of Code - Day {day} - {year}
      </Title>

      <iframe
        src={`https://codesandbox.io/embed/${slug}?fontsize=14&hidenavigation=1&theme=dark&view=editor`}
        style={{
          width: '100%',
          height: '100vh',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        title={title}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </PageWrapper>
  )
}
