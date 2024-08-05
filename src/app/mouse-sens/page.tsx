import { Typography } from '@/components/Typography'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Page() {
  const sensativities = [
    {
      id: 'aiojfeaoijef',
      game: 'Apex Legends',
      hipSens: '1.33',
      adsSens: '1.0',
      vof: '110',
    },
    {
      id: 'daihsosafsoiojfeaoijefd',
      game: 'Escape',
      hipSens: '0.23',
      adsSens: '0.15',
      vof: '75',
    },
  ]
  return (
    <div className="container pt-4">
      <div>
        <Typography as="h1" className="mb-4">
          Mouse Sensativities
        </Typography>

        <Typography>Windows: 7</Typography>
        <Typography className="mb-4">DPI: 800</Typography>
      </div>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="border-r bg-background-light text-center">
              Game
            </TableHead>
            <TableHead className="border-r bg-background-light text-center">
              Hip Sens
            </TableHead>
            <TableHead className="border-r bg-background-light text-center">
              ADS Sens
            </TableHead>
            <TableHead className="border-r bg-background-light text-center">
              FOV
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sensativities.map((sens) => (
            <TableRow key={sens.id}>
              <TableCell className="border-r">{sens.game}</TableCell>
              <TableCell className="border-r text-right">
                {sens.hipSens}
              </TableCell>
              <TableCell className="border-r text-right">
                {sens.adsSens}
              </TableCell>
              <TableCell className="border-r text-right">{sens.vof}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
