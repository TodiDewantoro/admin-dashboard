// ** Next Import
import Link from 'next/link'
import * as React from 'react';

// ** MUI Components
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Imports
import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations'
import KnowledgeManagementTable from '../knowledge-management/knowledge-management-table';

// ** Styled Components
// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(13)
  }
}))

const DatabaseManagement = () => {
  const [region, setRegion] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };

  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Region"
            onChange={handleChange}
          >
            <MenuItem value={'Jakarta'}>Jakarta</MenuItem>
            <MenuItem value={'Yogyakarta'}>Yogyakarta</MenuItem>
            <MenuItem value={'Surabaya'}>Surabaya</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {
        region !== '' ?
          <>
            <Typography sx={{ mt: '2vw' }} variant='h6'>Topics based on {region} region :</Typography>
            <ApexChartWrapper>
              <Grid container spacing={6} sx={{ mt: '.1vw' }}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ position: 'relative' }}>
                    <CardContent>
                      <Typography variant='h6'>Conservation management & land degradation</Typography>
                      <br />
                      <Typography>
                        The overarching goal would be to promote sustainable practices that protect and enhance ecosystems, biodiversity, and natural resources while mitigating the negative impacts of human activities on the environment.
                      </Typography>
                      <br />
                      <Link passHref href='/pages/knowledge-management-topic'>
                        <Button size='small' variant='contained'>
                          View Details
                        </Button>
                      </Link>
                      <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ position: 'relative' }}>
                    <CardContent>
                      <Typography variant='h6'>Protection of biodiversity</Typography>
                      <br />
                      <Typography>
                        The overarching goal of your programs would likely be to conserve and sustainably manage the Earth's diverse ecosystems and the species that inhabit them. This goal can be achieved through a variety of targeted initiatives and projects aimed at addressing specific challenges related to biodiversity conservation.
                      </Typography>
                      <br />
                      <Link passHref href='/pages/knowledge-management-topic'>
                        <Button size='small' variant='contained'>
                          View Details
                        </Button>
                      </Link>
                      <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ position: 'relative' }}>
                    <CardContent>
                      <Typography variant='h6'>Public and private investment</Typography>
                      <br />
                      <Typography>
                        Overseeing public and private investment programs, the overarching goal is to allocate resources strategically to address societal needs, foster economic development, and promote positive outcomes for communities.
                      </Typography>
                      <br />
                      <Link passHref href='/pages/knowledge-management-topic'>
                        <Button size='small' variant='contained'>
                          View Details
                        </Button>
                      </Link>
                      <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ position: 'relative' }}>
                    <CardContent>
                      <Typography variant='h6'>No carbon development</Typography>
                      <br />
                      <Typography>The primary goal would be to support initiatives and projects that contribute to the reduction or elimination of carbon emissions while promoting sustainable and environmentally friendly alternatives. The overarching objective is to address climate change and its associated impacts by fostering the transition to a low-carbon or carbon-neutral economy.</Typography>
                      <br />
                      <Link passHref href='/pages/knowledge-management-topic'>
                        <Button size='small' variant='contained'>
                          View Details
                        </Button>
                      </Link>
                      <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </ApexChartWrapper>
            <br />
            <KnowledgeManagementTable></KnowledgeManagementTable>
          </>
          :
          <>
            {/* <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h4'>Database Management</Typography>
        </BoxWrapper>
        <BoxWrapper>
          <Typography variant='h6'>To be develop</Typography>
        </BoxWrapper>
        <Img height='410' alt='error-illustration' src='/images/pages/401.png' />
        <Link passHref href='/'>
          <Button component='a' variant='contained' sx={{ px: 5.5 }}>
            Back to Home
          </Button>
        </Link>
      </Box>
      <FooterIllustrations />
    </Box> */}
          </>
      }
    </>
  )
}

export default DatabaseManagement
