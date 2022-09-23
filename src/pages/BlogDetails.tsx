import React from 'react'
import PageWrapper from '../shared/components/PageWrapper'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
  const params = useParams() as { slug: string }
  return (
    <PageWrapper>
      <h1>{params.toString()}</h1>
    </PageWrapper>
  )
}
