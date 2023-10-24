type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params: { slug } }: Params) {
  return <h1>{slug}</h1>
}
