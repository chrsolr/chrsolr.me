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
import { getUniqueKey } from '@/lib/utils'

export default function Page() {
  const sensitivities = [
    {
      id: 'sens-1',
      game: 'Apex Legends',
      inputType: 'Mouse',
      hipSens: '1.3',
      adsSens: '1.0',
      fov: '110',
      cm360: '39.97',
      dpi: '1200',
      extras: '-',
    },
    {
      id: 'sens-4',
      game: 'Apex Legends',
      inputType: 'Controller',
      hipSens: '4',
      adsSens: '3',
      fov: '110',
      cm360: 'N/A',
      dpi: '1200',
      extras: '-',
    },
    {
      id: 'sens-2',
      game: 'Escape from Tarkov',
      inputType: 'Mouse',
      hipSens: '0.106',
      adsSens: '0.15',
      fov: '75',
      cm360: 'N/A',
      dpi: '1200',
      extras: '-',
    },
    {
      id: 'sens-3',
      game: 'Fortnite',
      inputType: 'Mouse',
      hipSens: '5.149',
      adsSens: '1',
      fov: 'N/A',
      cm360: '39.97',
      dpi: '1200',
      extras: '-',
    },
    {
      id: 'sens-5',
      game: 'R6 Siege',
      inputType: 'Mouse',
      hipSens: '52',
      adsSens: '73/73/75/...',
      fov: '74',
      cm360: 'N/A',
      dpi: '700',
      extras: 'Multipler=0.002',
    },
    {
      id: 'sens-6',
      game: 'Destiny 2',
      inputType: 'Mouse',
      hipSens: '2',
      adsSens: '1',
      fov: '-',
      cm360: '-',
      dpi: '1200',
      extras: '-',
    },
    {
      id: 'sens-7',
      game: 'Marvel Rival',
      inputType: 'Mouse',
      hipSens: '0.75',
      adsSens: '1',
      fov: '-',
      cm360: '-',
      dpi: '1200',
      extras: '-',
    },
    {
      id: 'sens-8',
      game: 'Valorant',
      inputType: 'Mouse',
      hipSens: '0.189',
      adsSens: '1',
      fov: '-',
      cm360: '-',
      dpi: '1200',
      extras: '-',
    },
    {
      id: 'sens-9',
      game: 'COD: Black Ops 6',
      inputType: 'Mouse',
      hipSens: '2',
      adsSens: '1',
      fov: '120',
      cm360: '-',
      dpi: '1200',
      extras: '-',
    },
  ].sort((a, b) => a.game.localeCompare(b.game))

  return (
    <div className="container pt-4">
      <div>
        <Typography as="h1" className="mb-4">
          Gaming Sensitivities
        </Typography>

        <Badge className="mb-2 bg-accent-blue">
          Mouse: Razer Viper v3 Pro (Wireless)
        </Badge>

        <br />

        <Badge className="mb-2 bg-accent-pink">Windows: 10 (Default)</Badge>

        <br />

        <Badge className="mb-4 bg-accent-purple">DPI: 700</Badge>
      </div>

      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <Table className="w-full caption-bottom text-sm">
            <TableHeader>
              <TableRow className="bg-background-light-accent">
                <TableHead className="text-center">Game</TableHead>
                <TableHead className="text-center">Input Type</TableHead>
                <TableHead className="text-center">Hip Sens</TableHead>
                <TableHead className="text-center">ADS Sens</TableHead>
                <TableHead className="text-center">cm/360</TableHead>
                <TableHead className="text-center">FOV</TableHead>
                <TableHead className="text-center">DPI</TableHead>
                <TableHead className="text-center">Extras</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sensitivities.map((sens) => (
                <TableRow key={getUniqueKey()} className="bg-background-light">
                  <TableCell className="border-r">{sens.game}</TableCell>
                  <TableCell className="border-r text-center">
                    {sens.inputType === 'Mouse' ? (
                      <Badge className="bg-accent-pink">Mouse</Badge>
                    ) : (
                      <Badge className="bg-accent-purple">Controller</Badge>
                    )}
                  </TableCell>
                  <TableCell className="border-r text-right">
                    {sens.hipSens}
                  </TableCell>
                  <TableCell className="border-r text-right">
                    {sens.adsSens}
                  </TableCell>
                  <TableCell className="border-r text-right">
                    {sens.cm360}
                  </TableCell>
                  <TableCell className="border-r text-right">
                    {sens.fov}
                  </TableCell>
                  <TableCell className="border-r text-right">
                    {sens.dpi}
                  </TableCell>
                  <TableCell className="border-r text-right">
                    {sens.extras}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
