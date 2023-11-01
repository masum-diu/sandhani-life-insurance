import Layout from "@/components/Layout";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const about = () => {
  return (
    <Layout>
      <Box
        sx={{ pt: 19.9 }}
      >
        <Stack direction={"column"} spacing={2} sx={{ width: "90vw", maxWidth: "1410px", mx: "auto", pt: 5, pb: 6 }}>
          <Typography variant="productName" color="primary">About Us</Typography>
          <Typography variant="tabText" color="primary" lineHeight={2} fontWeight={600} >
            SLIC is one of the leading Life Insurance Company in Bangladesh since 1990 <br />
            Clients are the spirit of our business, so we build a genial & realistic relationship with clients.<br />
            SLIC enlarge its network by establishing agency o􀃻ices. As a result in 31st December 2014 9.09 lac Policyholder is now under the
            shade of Sandhani.<br />
            SLIC provide Life Insurance coverage in the remote area as well as within all the people of the country<br />      
            The core business activities of SLIC covers Micro Insurance for the Poor People, Ordinary Life Policy for the General, Group Insurance
            for the Corporate, Education Policy for the Students, Hajj Policy for the Religious People and so on<br />
            To be a competent service provider, SLIC maintain the quality, also increasing the growth rate by maximizing the Return on Investment.<br />
            As a whole SLIC is a complete package with corporate practice, diversified business profile and foster entrepreneurship.<br />
            <span style={{fontWeight:700}}>Our Commitments:</span> To build a safe and sound prospect for every Individual, Society and Community.<br />
            <span style={{fontWeight:700}}>Policyholder:</span> SLIC seeks to build an ever relationship with the policyholder by providing a qualitative service.<br />
           <span style={{fontWeight:700}}>Employees :</span> SLIC seeks to enhance employees skill, e􀃻iciency and make them more innovative and dedicative by providing e􀃻ective
            professional training and a highly motivated remuneration package<br />
            <span style={{fontWeight:700}}>Shareholders:</span> SLIC seeks to satisfy the shareholders by achieving consistent operating performance and by disclosing transparent
            financial information.<br />
            <span style={{fontWeight:700}}>Business Partners:</span> SLIC seeks to maintain excellent relationship with its business partners.<br />
            <span style={{fontWeight:700}}>Community:</span> SLIC seeks to live up its responsibilities to the community by providing various types of Philanthropic activities to play a
            supportive role to protect our social, cultural, environmental, economical and national interest.
          </Typography>

        </Stack>

      </Box>
    </Layout>
  );
};

export default about;
