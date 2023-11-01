import React from 'react'
import Box from '@mui/material/Box'
import Layout from '@/components/Layout'
import HomeShowcaseSlider from '@/components/HomeShowcaseSlider'
import { Paper, Stack, Typography, Button } from '@mui/material'
import Carousel from 'react-elastic-carousel'
import GetAquote from '@/components/GetAquote'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import "react-circular-progressbar/dist/styles.css";
import Progress from '@/components/Progress'
const home = () => {
  const customStyles = buildStyles({
    rotation: 0.27,
    textSize: '16px',
    textColor: '#104870',
    pathColor: '#104870',
    trailColor: '#e1e1e1',
    backgroundColor: '#eee',
    className: 'CircularProgressbar-text', // Add a class name for the text
  });
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  const offerObj = [
    {
      title: "Asset Assurance",
      desc: "Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      icon: "assets/love.png"
    },
    {
      title: "DPS",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      icon: "assets/safe1.png"
    },
    {
      title: "Child Policy",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      icon: "assets/happy-children1.png"
    },
    {
      title: "Death Benefit",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      icon: "assets/tomb1.png"
    },
  ]

  return (
    <>
      <Layout>
        <Box sx={{ pt: 19.9 }} >
          <HomeShowcaseSlider />
          <Stack sx={{ width: "97vw", maxWidth: "1410px", mx: "auto", pt: 8, pb: 6 }}>
            {/* <OfferSlider /> */}
            <Typography variant="productName" color="primary" sx={{ textAlign: "center" }} >What We Offer</Typography>
            <Carousel breakPoints={breakPoints} pagination={false}>
              <Stack direction={"row"} spacing={3} pt={5} mb={1.5}>
                {
                  offerObj.map((item) =>
                    <Paper sx={{ width: "224px", p: 2, backgroundColor: "#F4F5F6", borderRadius: "10px" }} >
                      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={1.5} pt={1} >
                        <img src={item.icon} alt="" width={51.6} />
                        <Typography variant="pre" fontWeight={"bold"}>{item.title}</Typography>
                        <Typography variant="cardHeader" color="#9B9B9B" textAlign={"center"} >{item.desc}</Typography>
                      </Stack>

                    </Paper>
                  )
                }
              </Stack>
            </Carousel>
          </Stack>
          <Stack sx={{ pt: 8, backgroundColor: "#f6f6f6", pb: 5 }}>
            {/* <OfferSlider /> */}
            <Typography variant="productName" color="primary" sx={{ textAlign: "center", pb: 5 }} >Get A Quote</Typography>
            <GetAquote />

            {/* <Typography variant="header1" color="primary" className="make">Make Payment</Typography> */}
          </Stack>

          <Stack sx={{
            backgroundImage: "url('assets/banner.png')", height: "100vh", maxHeight: "710px", backgroundRepeat: "no-repeat", backgroundSize: "cover",
          }}>
            <Box direction={"column"} sx={{ width: "100vw", maxWidth: "535px", alignItems: "center", height: "710px", justifyContent: "center", px: { lg: 25 }, py: { lg: 25 } }}>
              <Stack direction={"column"} spacing={2} >
                <Typography variant="header1" color="#fff">Buy Life Insurance, Pay Renewal Premiums,</Typography>
                <Typography variant="productName" color="#fff">Get Quotes For Sandhani Life</Typography>
                <Typography variant="productName" color="#fff">Insurance 100% Digitally.</Typography>
                <Typography variant="normal" textAlign={"justify"} color="#fff">I-Life is easy to use app that allows user to browser different life insurance products,
                  calculate personalized premium payments, and pay premium 100% digitally online .
                  I-Life is a single app for all your Bima needs in Bangladesh.</Typography>
                <Stack direction={"row"} spacing={1}>

                  <Button variant="text" color="primary">
                    <img src="assets/apple.png" alt="" width={149} />
                  </Button>
                  <Button variant="text" color="primary">
                    <img src="assets/googleIcons.png" alt="" width={149} />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          <Stack sx={{ width: "97vw", maxWidth: "1410px", mx: "auto", pt: 8, }}>
            {/* <OfferSlider /> */}
            <Typography variant="productName" color="primary" sx={{ textAlign: "center" }} >How Can We Help</Typography>
            <Carousel breakPoints={breakPoints} pagination={false}>
              <Stack direction={"row"} spacing={3} pt={5} mb={1.5}>
                {
                  offerObj.map((item) =>
                    <Paper sx={{ width: "224px", p: 2, backgroundColor: "#F4F5F6", borderRadius: "10px" }} >
                      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={1.5} pt={1} >
                        <img src={item.icon} alt="" width={51.6} />
                        <Typography variant="pre" fontWeight={"bold"}>{item.title}</Typography>
                        <Typography variant="cardHeader" color="#9B9B9B" textAlign={"center"} >{item.desc}</Typography>
                      </Stack>

                    </Paper>
                  )
                }
              </Stack>
            </Carousel>


          </Stack >
          <Stack direction={"row"} sx={{ width: "90vw", maxWidth: "1410px", mx: "auto",}}>
            <Progress>
              <CircularProgressbar styles={customStyles} value={70} text={"10,000+"} strokeWidth={7} />
              <Stack direction={"column"} spacing={1} mt={2} sx={{textAlign:"center"}}>
                <Typography variant="normal" color="primary" fontWeight={"bold"}>Lorem Ipsum</Typography>
                <Typography variant="cardLocation123" color="#9B9B9B">Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.</Typography>
              </Stack>
            </Progress>
            <Progress>
              <CircularProgressbar styles={customStyles} value={80} text={"8,000+"} strokeWidth={7} />
              <Stack direction={"column"} spacing={1} mt={2} sx={{textAlign:"center"}}>
                <Typography variant="normal" color="primary" fontWeight={"bold"}>Lorem Ipsum</Typography>
                <Typography variant="cardLocation123" color="#9B9B9B">Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.</Typography>
              </Stack>
            </Progress>
            <Progress>
              <CircularProgressbar styles={customStyles} value={60} text={"3,000+"} strokeWidth={7} />
              <Stack direction={"column"} spacing={1} mt={2} sx={{textAlign:"center"}}>
                <Typography variant="normal" color="primary" fontWeight={"bold"}>Lorem Ipsum</Typography>
                <Typography variant="cardLocation123" color="#9B9B9B">Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.</Typography>
              </Stack>
            </Progress>
            <Progress>
              <CircularProgressbar styles={customStyles} value={75} text={"25,000+"} strokeWidth={7} />
              <Stack direction={"column"} spacing={1} mt={2} sx={{textAlign:"center"}}>
                <Typography variant="normal" color="primary" fontWeight={"bold"}>Lorem Ipsum</Typography>
                <Typography variant="cardLocation123" color="#9B9B9B">Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.</Typography>
              </Stack>
            </Progress>
            <Progress>
              <CircularProgressbar styles={customStyles} value={100} text={"100%"} strokeWidth={7} />
              <Stack direction={"column"} spacing={1} mt={2} sx={{textAlign:"center"}}>
                <Typography variant="normal" color="primary" fontWeight={"bold"}>Lorem Ipsum</Typography>
                <Typography variant="cardLocation123" color="#9B9B9B">Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.</Typography>
              </Stack>
            </Progress>
          </Stack>

        </Box>
      </Layout>


    </>
  )
}

export default home
