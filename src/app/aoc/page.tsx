import { PageWrapper } from '~/components/PageWrapper'
import { Typography } from '~/components/Typography'
import Link from 'next/link'

export default function Page() {
  const aoc = {
    '2015': [
      {
        solutionUrl: 'https://codesandbox.io/s/aoc-2015-day-01-hplgvm',
        year: 2015,
        day: 1,
        instructionUrl: 'https://adventofcode.com/2015/day/1',
      },
      {
        solutionUrl: 'https://codesandbox.io/s/aoc-2015-day-02-2f4jp8"',
        year: 2015,
        day: 2,
        instructionUrl: 'https://adventofcode.com/2015/day/2',
      },
      {
        solutionUrl: 'https://codesandbox.io/s/aoc-2015-day-03-jx2zst',
        year: 2015,
        day: 3,
        instructionUrl: 'https://adventofcode.com/2015/day/3',
      },
      {
        solutionUrl: 'https://codesandbox.io/s/aoc-2015-day-04-f3tsz6',
        year: 2015,
        day: 4,
        instructionUrl: 'https://adventofcode.com/2015/day/4',
      },
    ],
  }
  return (
    <PageWrapper>
      <Typography size="4xl" weight="semibold" className="text-accent">
        Advent of Code
      </Typography>

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
            {Boolean(aoc['2015'].length) &&
              aoc['2015'].map(({ year, day, solutionUrl, instructionUrl }) => (
                <tr key={`${year}-${day}`} className="">
                  <td className="px-6 py-4">{year}</td>
                  <td className="px-6 py-4">{day}</td>
                  <td className="px-6 py-4">
                    <Link
                      className="text-accent"
                      href={solutionUrl}
                      target="_blank"
                    >
                      Code
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      className="text-accent"
                      href={instructionUrl}
                      target="_blank"
                    >
                      Instructions
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  )
}
