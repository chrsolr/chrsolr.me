import Head from 'next/head'
import { PageWrapper } from '~/components/PageWrapper'
import { ProgressBarDivider } from '~/components/ProgressBarDivider'
import { Typography } from '~/components/Typography'

export default function BinaryClock() {
  return (
    <>
      <Head>
        <title>chrsolr.me - binary clock</title>
      </Head>
      <PageWrapper>
        <Typography size="5xl" className="mb-8 text-center">
          Binary Clock
        </Typography>

        <ProgressBarDivider />

        <iframe
          className="mt-8"
          src="https://codesandbox.io/embed/reactbinaryclock-2zk7rc?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FBinaryClock.tsx&theme=dark&view=editor"
          style={{
            width: '100%',
            height: '100vh',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="ReactBinaryClock"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </PageWrapper>
    </>
  )
}
