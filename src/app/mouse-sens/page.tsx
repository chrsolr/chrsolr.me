import { Typography } from '@/components/Typography'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Page() {
  const sensativities = [
    {
      id: 'sens-1',
      game: 'Apex Legends',
      hipSens: '1.33',
      adsSens: '1.0',
      fov: '110',
      cm360: '39.06',
    },
    {
      id: 'sens-2',
      game: 'Escape from Tarkov',
      hipSens: '0.23',
      adsSens: '0.15',
      fov: '75',
      cm360: '39.06',
    },
  ]

  return (
    <div className="container pt-4">
      <div>
        <Typography as="h1" className="mb-4">
          Mouse Sensativities
        </Typography>

        <Badge className="mb-2 bg-accent-pink">Windows: 7</Badge>

        <br />

        <Badge className="mb-4 bg-accent-blue">DPI: 800</Badge>
      </div>

      <Table className="border">
        <TableHeader>
          <TableRow className="bg-background-light-accent">
            <TableHead className="border-r text-center">Game</TableHead>
            <TableHead className="border-r text-center">Hip Sens</TableHead>
            <TableHead className="border-r text-center">ADS Sens</TableHead>
            <TableHead className="border-r text-center">cm/360</TableHead>
            <TableHead className="border-r text-center">FOV</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sensativities.map((sens) => (
            <TableRow key={sens.id} className="bg-background-light">
              <TableCell className="border-r">{sens.game}</TableCell>
              <TableCell className="border-r text-right">
                {sens.hipSens}
              </TableCell>
              <TableCell className="border-r text-right">
                {sens.adsSens}
              </TableCell>
              <TableCell className="border-r text-right">
                {sens.cm360}
              </TableCell>
              <TableCell className="border-r text-right">{sens.fov}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
