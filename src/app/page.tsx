import { Typography } from "@/components/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Link href="https://github.com/chrsolr/">
        <Typography as="h1">chrsolr.me</Typography>
      </Link>
    </main>
  );
}
