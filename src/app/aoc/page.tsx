import { PageWrapper } from '~/components/PageWrapper'
import { Typography } from '~/components/Typography'
import Link from 'next/link'

export default function Page() {
  return (
    <PageWrapper>
      <Typography size="4xl" weight="semibold" className="text-accent">
        Advent of Code
      </Typography>

      <Typography size="2xl">AoC - 2015</Typography>
      <div className="relative overflow-x-auto rounded border border-gray-200 dark:border-gray-700">
        <table className="w-full  border-gray-200 text-left text-sm dark:border-gray-700">
          <thead className="bg-gray-100 text-xs uppercase dark:bg-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Day
              </th>
              <th scope="col" className="px-6 py-3">
                Code sandbox
              </th>
              <th scope="col" className="px-6 py-3">
                Challenge
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-6 py-4">2015</td>
              <td className="px-6 py-4">01</td>
              <td className="px-6 py-4">
                <Link
                  className="text-accent"
                  href="https://codesandbox.io/s/aoc-2015-day-01-hplgvm"
                  target="_blank"
                >
                  Source Code
                </Link>
              </td>
              <td className="px-6 py-4">
                <Link
                  className="text-accent"
                  href="https://adventofcode.com/2015/day/1"
                  target="_blank"
                >
                  Instructions
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageWrapper>
  )
}
