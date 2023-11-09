import Link from 'next/link'

export type AdventOfCodeTableItem = {
  solutionUrl: string
  year: number
  day: number
  instructionUrl: string
  revised: boolean
}

type Props = {
  items: AdventOfCodeTableItem[]
}

export default function AdventOfCodeTable({ items }: Props) {
  return (
    <div className="relative mb-8 overflow-x-auto rounded border border-gray-200 dark:border-gray-700">
      <table className="w-full  border-gray-200 text-left text-sm dark:border-gray-700">
        <thead className="bg-gray-100 text-xs uppercase dark:bg-gray-600">
          <tr>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              Year
            </th>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              Day
            </th>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              Code sandbox
            </th>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              Challenge
            </th>
            <th scope="col" className="whitespace-nowrap px-6 py-3">
              Revised
            </th>
          </tr>
        </thead>
        <tbody>
          {Boolean(items.length) &&
            items.map(({ year, day, solutionUrl, instructionUrl, revised }) => (
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
                <td className="px-6 py-4">{revised ? 'Yes' : 'No'}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
