import React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import Carousel from 'react-elastic-carousel'
const ManagementTeam = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
];

const offerObj = [
    {
        title: "Mr. Mojibul Islam",
        deg: "Chairman ",

        desc: "Joy Industries Ltd. Represented by Mr. Mojibul Islam is Chairman of Sandhani Life Insurance Co. Ltd., He is a young entrepreneur. He was born in 1974 at Dhaka in an aristocrat Muslim family. He completed MBA from London. He is also Chairman of Purabi General Insurance Co. Ltd., Vice-Chairman, Samorita Hospital Ltd., Managing Director, Mona Garments Industries Ltd., Panna Textile Mills Ltd., Panna Spinning Mills Ltd., Amico Laboratories Ltd., MH Samorita Medical College & Hospital, Director, Mona Financial Consultancy & Securities Ltd., Member Board of Trustees, City University, and Bangaldesh Iron & Steel Merchant Association.",
        icon: "assets/Ellipse-14.png"
    },
    {
        title: "Mr. Mojibul Islam",
        deg: "Chairman ",

        desc: "Joy Industries Ltd. Represented by Mr. Mojibul Islam is Chairman of Sandhani Life Insurance Co. Ltd., He is a young entrepreneur. He was born in 1974 at Dhaka in an aristocrat Muslim family. He completed MBA from London. He is also Chairman of Purabi General Insurance Co. Ltd., Vice-Chairman, Samorita Hospital Ltd., Managing Director, Mona Garments Industries Ltd., Panna Textile Mills Ltd., Panna Spinning Mills Ltd., Amico Laboratories Ltd., MH Samorita Medical College & Hospital, Director, Mona Financial Consultancy & Securities Ltd., Member Board of Trustees, City University, and Bangaldesh Iron & Steel Merchant Association.",
        icon: "assets/Ellipse-14.png"
    },
    {
        title: "Mr. Mojibul Islam",
        deg: "Chairman ",

        desc: "Joy Industries Ltd. Represented by Mr. Mojibul Islam is Chairman of Sandhani Life Insurance Co. Ltd., He is a young entrepreneur. He was born in 1974 at Dhaka in an aristocrat Muslim family. He completed MBA from London. He is also Chairman of Purabi General Insurance Co. Ltd., Vice-Chairman, Samorita Hospital Ltd., Managing Director, Mona Garments Industries Ltd., Panna Textile Mills Ltd., Panna Spinning Mills Ltd., Amico Laboratories Ltd., MH Samorita Medical College & Hospital, Director, Mona Financial Consultancy & Securities Ltd., Member Board of Trustees, City University, and Bangaldesh Iron & Steel Merchant Association.",
        icon: "assets/Ellipse-14.png"
    },

]
  return ( <>
    <Stack sx={{ width: "97vw", maxWidth: "1410px", mx: "auto", }}>
                {/* <OfferSlider /> */}
                <Typography variant="productName" color="primary" sx={{ textAlign: "center" }} >Management Team</Typography>
                {/* <Carousel breakPoints={breakPoints} pagination={false}>
                    <Stack direction={"row"} spacing={3} pt={5} mb={1.5}>
                        {
                            offerObj.map((item) =>
                                <Paper sx={{ width: "224px", p: 2, backgroundColor: "#F4F5F6", borderRadius: "10px" }} >
                                    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={1.5} pt={1} >
                                        <img src={item.icon} alt="" width={100} />
                                        <Typography variant="pre" fontWeight={800}>{item.title}</Typography>
                                        <Typography variant="pre" fontWeight={800}>{item.deg}</Typography>
                                        <Typography variant="cardHeader" color="#9B9B9B" textAlign={"center"} >{item.desc.slice(0, 190)}</Typography>
                                    </Stack>

                                </Paper>
                            )
                        }
                    </Stack>
                </Carousel> */}
            </Stack>
            </>
  )
}

export default ManagementTeam
