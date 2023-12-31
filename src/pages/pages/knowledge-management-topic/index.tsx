// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
// import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations'

// ** Styled Components
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

const KnowledgeManagementTopic = () => {
    return <Box className='content-center'>
    <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <BoxWrapper>
        <Typography variant='h6'>To Be Develop Based on Client's Requirement</Typography>
      </BoxWrapper>
      <br/>
      <Link passHref href='/'>
        <Button component='a' variant='contained' sx={{ px: 5.5 }}>
          Back to Home
        </Button>
      </Link>
    </Box>
    <Img height='410' alt='error-illustration' src='/images/pages/401.png' />
  </Box>
}

KnowledgeManagementTopic.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default KnowledgeManagementTopic