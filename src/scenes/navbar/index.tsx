import FlexBetween from '@/components/FlexBetween'
import { useTheme, Box, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

type Props = {}

const NavBar = (props: Props) => {
  const { palette } = useTheme()
  const [seleted, setSeleted] = useState('dashboard')

  return (
    <FlexBetween mb='0.25rem' p='0.5rem 0rem' color={palette.grey[300]}>
      {/* Left Side  */}
      <FlexBetween gap='0.75rem'>
        <AccountBalanceWalletIcon sx={{ fontSize: '28px' }} />
        <Typography variant='h4' fontSize='16px'>
          Finance App
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap='2em'>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link to='/' onClick={() => setSeleted('dashboard')} style={{ color: seleted === 'dashboard' ? 'inherit' : palette.grey[700], textDecoration: 'inherit' }}>Dashboard</Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link to='/predictions' onClick={() => setSeleted('predictions')} style={{ color: seleted === 'predictions' ? 'inherit' : palette.grey[700], textDecoration: 'inherit' }}>Predictions</Link>
        </Box>

      </FlexBetween>
    </FlexBetween>
  )
}

export default NavBar;