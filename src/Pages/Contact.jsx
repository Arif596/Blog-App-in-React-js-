import React from 'react'
import {Box,Typography,TextField,Button} from '@mui/material'
export default function Contact() {
  return (
    <div>
      <Box sx={{
        my: 10, ml: 3,
        '& h5': {
          fontSize: 40,
          fontWeight: 'bold',
          ml: 2
        }, '& p': {

          textAlign: 'justify',
          marginLeft: 2,
          marginRight: 2,
          fontSize:'30px',
          fontWeight:'none'
        }
      }}>
        <Typography variant='h5'sx={{mb:5}}>
          Contact with my resturent
        </Typography>
        <p>
          Feel free to reach out to us through our contact page for any inquiries or assistance.
          We are here to serve you with the utmost care and dedication.
        </p>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}>
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h4" align="center"
              sx={{
                fontSize: 40, marginTop: '30px'
              }}>Contact us</Typography>
            <form  >
              <TextField xs={12} sx={{ width: 600 }}
                label="name" placeholder='Name'
                fullWidth
                required
                />
              <TextField sx={{ mt: 4 }}
                label="email"
                placeholder='Email'
                fullWidth
                required
                />
              <TextField sx={{ mt: 4 }}
                multiline
                rows={5}
                labell="message"
                placeholder='Message'
                fullWidth
                required
            />
              <Button
                variant='contained'
                sx={{
                  mt: 3, ml: 25,
                  '&:hover': {
                    color: 'goldenrod'
                  }
                }}>Submit</Button>
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
