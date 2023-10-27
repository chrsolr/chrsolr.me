import { PageWrapper } from '~/components/PageWrapper'
import { Quote } from '~/components/Quote'

export default function Page() {
  return (
    <PageWrapper disableContainer>
      <div className="container mx-auto flex flex-1 flex-col justify-center">
        <Quote />
      </div>
    </PageWrapper>
  )
}
