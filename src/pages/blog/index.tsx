import Head from "next/head";
import { PageWrapper } from "~/components/PageWrapper";

export default function Blog() {
  return <>
      <Head>
        <title>chrsolr.me - blog</title>
      </Head>
      <PageWrapper>
        BLOG POST HERE
      </PageWrapper>
  </>
}