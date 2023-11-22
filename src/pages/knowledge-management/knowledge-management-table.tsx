import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

import { styled, useTheme } from '@mui/material/styles'
import { Pencil, TrashCan } from 'mdi-material-ui'

interface RowType {
    projectPartner: string
    board: string
    title: string
    region: string
    submitDate: string
}

interface StatusObj {
    [key: string]: {
        color: ThemeColor
    }
}

const rows: RowType[] = [
    {
        projectPartner: 'ABC Org.',
        board: 'Jakarta board',
        title: 'Learning material title',
        region: 'Jakarta',
        submitDate: '09/27/2018'
    },
    {
        projectPartner: 'ABC Org.',
        board: 'Jakarta board',
        title: 'Learning material title',
        region: 'Jakarta',
        submitDate: '09/27/2018'
    },
    {
        projectPartner: 'ABC Org.',
        board: 'Jakarta board',
        title: 'Learning material title',
        region: 'Jakarta',
        submitDate: '09/27/2018'
    },
    {
        projectPartner: 'ABC Org.',
        board: 'Jakarta board',
        title: 'Learning material title',
        region: 'Jakarta',
        submitDate: '09/27/2018'
    }
]

const KnowledgeManagementTable = () => {
    // const theme = useTheme()
    return (
        <Card>
            <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Project Partner</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Region</TableCell>
                            <TableCell>Submit Date</TableCell>
                            <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>Action</TableCell>
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
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.region}</TableCell>
                                <TableCell>{row.submitDate}</TableCell>
                                <TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link passHref href='/pages/knowledge-management-topic'>
                                        <Button sx={{ backgroundColor: 'whitesmoke', marginRight: '1vw' }} size='small' variant='contained'>
                                            <Pencil></Pencil>
                                        </Button>
                                    </Link>
                                    <Link passHref href='/pages/knowledge-management-topic'>
                                        <Button sx={{ backgroundColor: 'whitesmoke' }} size='small' variant='contained'>
                                            <TrashCan></TrashCan>
                                        </Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default KnowledgeManagementTable
