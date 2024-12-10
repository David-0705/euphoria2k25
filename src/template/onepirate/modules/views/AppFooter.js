import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import InstagramIcon from '@mui/icons-material/Instagram';
import { LocationOn } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="" sx={{textDecoration:'none'}}>
        Euphoria
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  verticalAlign: 'middle', 
  marginRight: '8px', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'danger.main',
  mr: 1,
  '&:hover': {
    color: 'warning.dark',
  },
};

const followicon={
  height:'40px',
  width:'40px',
  color: 'primary',
  mr: 1,
  '&:hover': {
    color: 'warning.dark',
  },
}
const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex',  display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        bgcolor: 'secondary.light',
        height: 'auto', 
        py: 4, 
         }}>
        <table style={{alignContent:'center'}}>
          <tr>
          <Grid container spacing={25}>
          <Grid size={4} item xs={6} sm={4} md={3}>
            <span>
            <Typography variant="h6" marked="left" gutterBottom>
            Contact US
            </Typography>
            <table>
              <tr>
                <a href='' style={{textDecoration:'none'}}>
                <td><LocationOn sx={iconStyle} /></td>
                <td style={{textAlign:'left'}}>DBCL<br />Kurla(West) <br/>Mumbai - 400070</td>
                </a>
              </tr>
           </table>
           <table>
            <tr>
                <a href='' style={{textDecoration:'none'}}>
                  <td><LocalPhoneIcon sx={iconStyle}  /></td>
                  <td style={{textAlign:'left'}}>7453258914</td>
                </a>
            </tr>
           </table>
           <table>
            <tr>
                <a href='' style={{textDecoration:'none'}}>
                  <td><EmailIcon sx={iconStyle}  /></td>
                  <td style={{textAlign:'left'}}>Mail</td>
                </a>
            </tr>
           </table>
                
            </span>
          </Grid>
          <Grid size={4} item xs={6} sm={4} md={3}>
          <Typography variant="h6" marked="left" gutterBottom>
            Follow Us
            </Typography>
            <Grid
              container
              direction="column"
              spacing={2}
              sx={{ justifyContent: 'flex-end', height: 60}}
            >
              
              <Grid size={4} item sx={{ display: 'flex' }}>
                <Box component="a" href="https://www.instagram.com/euphoriadbcl?igsh=ZWxtemViN2F6bHQ0">
                  <InstagramIcon sx={followicon} />
                </Box>
                <Box component="a" href="https://www.instagram.com/euphoriadbcl?igsh=ZWxtemViN2F6bHQ0">
                  <YouTubeIcon sx={followicon} />
                </Box>
              </Grid>
            
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Quick LInks
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/">Link 1</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/">Link 2 </Link>
              </Box>
            </Box>
          </Grid>
          
         
        </Grid>
          </tr>
          <tr>
          <Copyright/>
          </tr>
        </table>
        
        
      </Container>
      
    </Typography>
    
  );
}
