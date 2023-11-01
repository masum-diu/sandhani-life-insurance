import Layout from "@/components/Layout";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const missionvision = () => {
  return (
    <Layout>
      <Box
        sx={{ pt: 19.9 }}
      >
        <Stack direction={"column"} spacing={2} sx={{ width: "90vw", maxWidth: "1410px", mx: "auto", pt: 5, pb: 6 }}>
          <Typography variant="productName" color="primary">Our Mission & Vision</Typography>
          <Stack direction={"column"} spacing={2}>
            <Typography variant="tabText" color="primary" fontWeight={800}  >Sandhani Life's Vision & Mission:</Typography>
            <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}>1. To ensure social & family protection through Life Insurance Policy of all families of Bangladesh.<br />
              2. To ensure highest possible services to Shareholders & Policyholders of the company with modern technology & dedicated professionalism.<br />
              3. To settle & handover insurance claims to the doorstep of policyholders or their nominees within quickest possible time.<br />
              4. To provide highest dividend & bonus to the shareholders & policyholders respectively.<br />
              5. To increase asset, investment & life fund with modern technology & most efficient management.</Typography>
          </Stack>
          <Stack direction={"column"} spacing={2}>
            <Typography variant="tabText" color="primary" fontWeight={800}  >Strategic Objectives:</Typography>
            <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}>In order to achieve company’s long-term goal, it has maintain a number of key business objectives which are <br />
              1. Prompt claim settlement<br />
              2. Improve staff-client relationship<br />
              3. Enhancement of employees’ skill and efficiency<br />
              4. Maximize shareholders’ wealth through a sustainable return on their investment<br />
              5. Maintenance of social commitment<br />
              6. Establishment of corporate governance</Typography>
          </Stack>
          <Stack direction={"column"} spacing={2}>
            <Typography variant="tabText" color="primary" fontWeight={800}  >Ethical Principle:</Typography>
            <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}>We are committed to living by the principles and practices established by our corporate and social responsibility and business ethics, which enable us to
              manage
              e􀃻effectively our impact on the society and environment. Our core values, depends on: </Typography>
              <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}>· Integrity & Honesty: We believe only integrated, honest and sincere employees can bring the company in a sustainable position</Typography>
              <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}>· Objectivity: We are committed to serve our clients and beneficiaries and conduct all business activities according to the business principles</Typography>
              <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}>· Accuracy and In Timely Manner: We are very much aware about the accuracy of all the calculation and evaluation by using the report of the expertise and serve to
            the valued clients in timely manner</Typography>
              <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}> · Performance in due care: To maintain the professional competence, it requires a continuing awareness and an understanding of relevant technical professional and
            business developments, so as a public service provider we exercise a sound judgment in applying professional knowledge and skill in the performance of such service.</Typography>
              <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}>· Safety & Confidentiality: According to the principles of safety and confidentiality we are alert to the possibility of inadvertent disclosure of information of a prospective
            client or employer and the identification, evaluation and elimination of hazards that could cause harm to our employees, property and the environment.</Typography>
              <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}>· Respect and Trustiness: We earn the trust and respect of our shareholders, employees, clients and business partners by being honest, fair & open and honoring our
            commitment.</Typography>
              <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}> Accountability & Transparency: We are in practice of highest level of accountability and transparency regarding our product, business activities, performance and
            financial results to meet the expectation of all the valued users and beneficiaries.</Typography>

        </Stack>
      </Stack>

    </Box>
    </Layout >
  );
};

export default missionvision;
