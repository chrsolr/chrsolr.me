import { PageWrapper } from '~/components/PageWrapper'
import { Quote } from '~/components/Quote'

export default function Page() {
  return (
    <PageWrapper className="h-[calc(100vh-28vh)]" disableContainer>
      <div className="container mx-auto flex flex-1 flex-col justify-center">
        <Quote />
      </div>
    </PageWrapper>
  )
}
