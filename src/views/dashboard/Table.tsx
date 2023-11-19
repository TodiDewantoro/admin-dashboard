// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

interface RowType {
  duration: number
  projectPartner: string
  dateOfAwarded: string
  projectTitle: string
  totalBudget: string
  status: string
  board: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {
    duration: 27,
    status: 'delayed',
    dateOfAwarded: '09/27/2018',
    projectPartner: 'ABC org.',
    totalBudget: '$19586.23',
    projectTitle: 'Project Title A',
    board: 'Yogyakarta Board'
  },
  {
    duration: 12,
    status: 'onProgress',
    dateOfAwarded: '09/27/2018',
    projectPartner: 'ASDASD org.',
    totalBudget: '$1956.23',
    projectTitle: 'Project Title B',
    board: 'Jakarta Board'
  },
  {
    duration: 27,
    status: 'ended',
    dateOfAwarded: '09/27/2018',
    projectPartner: 'XYZ org.',
    totalBudget: '$9586.23',
    projectTitle: 'Project Title C',
    board: 'Surabaya Board'
  },
]

const statusObj: StatusObj = {
  info: { color: 'info' },
  error: { color: 'error' },
  onProgress: { color: 'primary' },
  delayed: { color: 'warning' },
  ended: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Project Partner</TableCell>
              <TableCell>Project Title</TableCell>
              <TableCell>Date of Awarded</TableCell>
              <TableCell>Total Budget</TableCell>
              <TableCell>Duration (months)</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.projectPartner} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.projectPartner}</Typography>
                    <Typography variant='caption'>{row.board}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.projectTitle}</TableCell>
                <TableCell>{row.dateOfAwarded}</TableCell>
                <TableCell>{row.totalBudget}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
