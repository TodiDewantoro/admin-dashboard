// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Link from 'next/link'
import CardMedia from '@mui/material/CardMedia'
import Table from 'src/views/dashboard/Table'
import KnowledgeManagementTable from './knowledge-management-table'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

const KnowledgeManagement = () => {
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'
  return (
    <>
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/module-images/conservation.jpg"
                alt="conservation"
              />
              <CardContent>
                <Typography variant='h6'>Conservation management & land degradation</Typography>
                <br />
                <Typography noWrap>
                  The overarching goal would be to promote sustainable practices that protect and enhance ecosystems, biodiversity, and natural resources while mitigating the negative impacts of human activities on the environment.
                </Typography>
                <br />
                {/* <Link passHref href='/pages/knowledge-management-topic'>
                  <Button size='small' variant='contained'>
                    Manage Learning Materials
                  </Button>
                </Link> */}
                <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/module-images/biodiversity.jpg"
                alt="conservation"
              />
              <CardContent>
                <Typography variant='h6'>Protection of biodiversity</Typography>
                <br />
                <Typography noWrap>
                  The overarching goal of your programs would likely be to conserve and sustainably manage the Earth's diverse ecosystems and the species that inhabit them. This goal can be achieved through a variety of targeted initiatives and projects aimed at addressing specific challenges related to biodiversity conservation.
                </Typography>
                <br />
                {/* <Button size='small' variant='contained'>
                  Manage Learning Materials
                </Button> */}
                <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/module-images/partnership.jpg"
                alt="conservation"
              />
              <CardContent>
                <Typography variant='h6'>Public and private investment</Typography>
                <br />
                <Typography noWrap>
                  Overseeing public and private investment programs, the overarching goal is to allocate resources strategically to address societal needs, foster economic development, and promote positive outcomes for communities.
                </Typography>
                <br />
                {/* <Button size='small' variant='contained'>
                  Manage Learning Materials
                </Button> */}
                <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/module-images/nocarbondev.jpg"
                alt="conservation"
              />
              <CardContent>
                <Typography variant='h6'>No carbon development</Typography>
                <br />
                <Typography noWrap>The primary goal would be to support initiatives and projects that contribute to the reduction or elimination of carbon emissions while promoting sustainable and environmentally friendly alternatives. The overarching objective is to address climate change and its associated impacts by fostering the transition to a low-carbon or carbon-neutral economy.</Typography>
                <br />
                {/* <Button size='small' variant='contained'>
                  Manage Learning Materials
                </Button> */}
                <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ApexChartWrapper>
      <br />
      <KnowledgeManagementTable></KnowledgeManagementTable>
    </>
  )
}

export default KnowledgeManagement
