import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import BinaryClock from '../shared/components/BinaryClock'
import Typography from '../shared/components/Typography'

import ProgressBar from '../shared/components/ProgressBar'

export default function WorkInProgress() {
  return (
    <PageWrapper>
      <Typography size="xxl" style={{ textAlign: 'center' }}>
        Binary Clock
      </Typography>
      <ProgressBar progress={95} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <BinaryClock />
      </div>
    </PageWrapper>
  )
}
