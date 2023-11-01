import { Box, Stack, Grid, Typography, IconButton, Divider } from '@mui/material'
import React from 'react'
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#104870", color: "#fff", }} >
      <Stack sx={{
        // display: "flex",
        // alignItems: "center",
        width: "90vw",
        maxWidth: "1410px",
        mx: "auto",
        pt: 10,

      }}>
        <Grid container spacing={0} pb={4} >
          <Grid item md={3}>
            <img
              onClick={() => router.push("/")}
              src="assets/logoWhite.png"
              style={{ width: "90vw", maxWidth: "120px", cursor: "pointer" }}
            />
           
            <Stack direction={"column"} pt={3}>
            <Typography variant="cardHader" color="#7d95a9"  textAlign={"justify"}>
              SLIC is one of the leading Life Insurance Company
              in Bangladesh since 1990. Clients are the spirit of
              our business, so we build a genial & realistic
              relationship with clients. SLIC enlarge its network
              by establishing agency offices. As a result
              in 31st December 2014 9.09 lac Policyholder is
              now under the shade of Sandhani. SLIC provide
              Life Insurance coverage in the remote area
              as well as within all the people of the country.
            </Typography>
            </Stack>
           
            <Stack direction={"row"} spacing={2} pt={4}   >
              <IconButton aria-label="" >
                <FaFacebookF width={"512px"} color={"#fff"} />
              </IconButton>
              <IconButton aria-label="">
                <BiLogoLinkedin width={"512px"} color={"#fff"} />
              </IconButton>
              <IconButton aria-label="">
                <FaYoutube width={"512px"} color={"#fff"} />
              </IconButton>



            </Stack>
          </Grid>
          <Grid item md={3}  >
            <Typography variant="legend" sx={{ display: "flex", justifyContent: "center" }} color="#fff"  >Product</Typography>

            <Stack pt={3} direction={"column"} spacing={.5} >

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 3 }}>Product Name 1</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 3 }}>Product Name 2</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 3 }}>Product Name 3</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 3 }}>Product Name 4</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 3 }}>Product Name 5</Typography></Stack>


          </Grid>
          <Grid item md={3}  >
            <Typography variant="legend" color="#fff" sx={{ display: "flex", justifyContent: "center" }}>Services</Typography>
            <Stack pt={3} direction={"column"} spacing={.5} >
              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 2 }}>Claim Process</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 6 }}>Premium Calculate</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 2.8 }}>Policy Renewal</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pr: 1 }}>E-Services</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 3.7 }}>Learning Center</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pr: 6 }}>FAQ</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 4 }}>Forms Download</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 1.5 }}>Our Branches</Typography>
            </Stack>


          </Grid>
          <Grid item md={3}>
            <Typography variant="legend" color="#fff" sx={{ display: "flex", justifyContent: "center" }}>Contact Us</Typography>
            <Stack pt={3} direction={"column"} spacing={.5} >
              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pl: 3.7 }}>Contact Information</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pr: 2 }}>Enquiry Form</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pr: 4.5 }}>Locate Us</Typography>

              <Typography variant="cardHeader3" color="#7d95a9" sx={{ display: "flex", justifyContent: "center", pr: 6 }}>Careers</Typography>


            </Stack>
          </Grid>
        </Grid>

      </Stack>
      <Divider
        sx={{ backgroundColor: "#175f99", padding: .1 }}
        variant="fullWidth"
        orientation="horizontal"

      />
      <Stack sx={{padding:3}}>
        <Typography variant="tabText" textAlign={"center"} fontWeight={"bold"} color="#fff"><span style={{ fontWeight: "400", color: "#d9e2e8" }}>© 2023 for</span> Shandhani Life Insurance Co. Ltd. <span style={{ fontWeight: "400", color: "#d9e2e8" }}>by:</span> WebAble Digital</Typography>
      </Stack>

    </Box>
  )
}

export default Footer
