import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
  const params = useParams()
  return (
    <PageWrapper>
      <div>BLOG DETAILS : {params.slug}</div>
    </PageWrapper>
  )
}
