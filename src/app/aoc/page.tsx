import { PageWrapper } from '~/components/PageWrapper'
import AdventOfCodeTable, {
  type AdventOfCodeTableItem,
} from '~/components/AdventOfCodeTable'
import { getUniqueKey } from '~/utils/helpers'
import Title from '~/components/Title'

export default function Page() {
  const aoc: Record<'2015' | '2022', AdventOfCodeTableItem[]> = {
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
    '2022': [
      {
        solutionUrl: 'https://codesandbox.io/s/aoc-2022-day-01-rf23mf',
        year: 2022,
        day: 1,
        instructionUrl: 'https://adventofcode.com/2022/day/1',
      },
      {
        solutionUrl: 'https://codesandbox.io/s/aoc-2022-day-02-2pymm2',
        year: 2022,
        day: 2,
        instructionUrl: 'https://adventofcode.com/2022/day/2',
      },
      {
        solutionUrl: 'https://codesandbox.io/s/aoc-2022-day-03-7phshx',
        year: 2022,
        day: 3,
        instructionUrl: 'https://adventofcode.com/2022/day/3',
      },
      {
        solutionUrl: 'https://codesandbox.io/s/aoc-2022-day-04-d6nfxz',
        year: 2022,
        day: 4,
        instructionUrl: 'https://adventofcode.com/2022/day/4',
      },
      {
        solutionUrl: 'https://codesandbox.io/s/aoc-2022-day-05-klk8sh',
        year: 2022,
        day: 5,
        instructionUrl: 'https://adventofcode.com/2022/day/5',
      },
    ],
  }

  return (
    <PageWrapper>
      <Title>Advent of Code</Title>

      {Object.values(aoc).map((items) => (
        <AdventOfCodeTable key={getUniqueKey()} items={items} />
      ))}
    </PageWrapper>
  )
}
