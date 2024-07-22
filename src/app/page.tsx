import { Typography } from "@/components/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center">
      <div style={{ display: "flex" }}>
        <Typography as="h1">
          <Typography as="span" className="text-accent-yellow">
            christian
          </Typography>
          <Typography as="span" className="text-accent-blue">
            soler
          </Typography>
        </Typography>
      </div>
      <Link className="text-accent-pink" href="https://github.com/chrsolr/">
        <Typography as="h3">github</Typography>
      </Link>
    </main>
  );
}
