import { PageWrapper } from '~/components/PageWrapper'
import AdventOfCodeTable, {
  type AdventOfCodeTableItem,
} from '~/components/AdventOfCodeTable'
import { getUniqueKey } from '~/utils/helpers'
import Title from '~/components/Title'
import Link from 'next/link'

export default function Page() {
  const aoc: Record<'2015' | '2022' | '2023', AdventOfCodeTableItem[]> = {
    '2015': [
      {
        year: 2015,
        day: 1,
        instructionUrl: 'https://adventofcode.com/2015/day/1',
        revised: true,
        slug: 'aoc-2015-day-01-hplgvm',
      },
      {
        year: 2015,
        day: 2,
        instructionUrl: 'https://adventofcode.com/2015/day/2',
        revised: true,
        slug: 'aoc-2015-day-02-2f4jp8',
      },
      {
        year: 2015,
        day: 3,
        instructionUrl: 'https://adventofcode.com/2015/day/3',
        revised: true,
        slug: 'aoc-2015-day-03-jx2zst',
      },
      {
        year: 2015,
        day: 4,
        instructionUrl: 'https://adventofcode.com/2015/day/4',
        revised: true,
        slug: 'aoc-2015-day-04-f3tsz6',
      },
      {
        year: 2015,
        day: 5,
        instructionUrl: 'https://adventofcode.com/2015/day/5',
        revised: true,
        slug: 'aoc-2015-day-05-pd9k3r',
      },
      {
        year: 2015,
        day: 6,
        instructionUrl: 'https://adventofcode.com/2015/day/6',
        revised: true,
        slug: 'aoc-2015-day-06-84gd6g',
      },
    ],
    '2022': [
      {
        year: 2022,
        day: 1,
        instructionUrl: 'https://adventofcode.com/2022/day/1',
        revised: true,
        slug: 'aoc-2022-day-01-rf23mf',
      },
      {
        year: 2022,
        day: 2,
        instructionUrl: 'https://adventofcode.com/2022/day/2',
        revised: false,
        slug: 'aoc-2022-day-02-2pymm2',
      },
      {
        year: 2022,
        day: 3,
        instructionUrl: 'https://adventofcode.com/2022/day/3',
        revised: false,
        slug: 'aoc-2022-day-03-7phshx',
      },
      {
        year: 2022,
        day: 4,
        instructionUrl: 'https://adventofcode.com/2022/day/4',
        revised: false,
        slug: 'aoc-2022-day-04-d6nfxz',
      },
      {
        year: 2022,
        day: 5,
        instructionUrl: 'https://adventofcode.com/2022/day/5',
        revised: false,
        slug: 'aoc-2022-day-05-klk8sh',
      },
    ],
    '2023': [
      {
        year: 2023,
        day: 1,
        instructionUrl: 'https://adventofcode.com/2023/day/1',
        revised: true,
        slug: 'aoc-2023-day-01-k7clcq',
      },
    ]
  }

  return (
    <PageWrapper>
      <Title className="mb-2">Advent of Code</Title>
      <Link
        className="text-accent"
        href="https://github.com/chrsolr-playground/advent-of-code"
        target="_blank"
      >
        <p className="mb-2">Github - Source Code</p>
      </Link>

      {Object.values(aoc).map((items) => (
        <AdventOfCodeTable key={getUniqueKey()} items={items} />
      ))}
    </PageWrapper>
  )
}
