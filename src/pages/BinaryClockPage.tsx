import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import styled from 'styled-components'
import Typography from '../shared/components/Typography'
import ProgressBar from '../shared/components/ProgressBar'
import BinaryClock from '../shared/components/BinaryClock'

const ContentWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
`
export default function BinaryClockPage() {
  return (
    <ContentWrapper>
      <Typography size='xxl' style={{ textAlign: 'center' }}>
        Binary Clock
      </Typography>
      <ProgressBar progress={50} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <BinaryClock />
      </div>


      <Typography size='xxl' style={{ textAlign: 'center' }}>
        Code Sandbox
      </Typography>
      <ProgressBar progress={50} />

      <iframe src="https://codesandbox.io/embed/reactbinaryclock-2zk7rc?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FBinaryClock.tsx&theme=dark&view=editor"
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
    </ContentWrapper>
  )
}
