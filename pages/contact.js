import Layout from '@/components/Layout'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const contact = () => {
    return (
        <Layout>
            <Box
                sx={{ pt: 19.9 }}  
            >
                <Stack direction={"column"} spacing={2} sx={{ width: "90vw", maxWidth: "1410px", mx: "auto", pt: 5, pb: 6 }}>
                    <Typography variant="productName" textAlign={"center"} color="primary">Contact</Typography>
                    <Stack direction={"row"} spacing={3} pt={5}>
                        <Stack>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58419.70864753154!2d90.37393336897527!3d23.774758979007462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91dab76534b%3A0xcea49c3b02ea560e!2sSandhani%20Life%20Insurance!5e0!3m2!1sen!2sbd!4v1698233219915!5m2!1sen!2sbd" width="600" height="377" style={{ border: "none", borderRadius: "12px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Stack>
                        <Stack direction={"column"} spacing={2}>
                            <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}>  <span style={{ fontWeight: 800 }}>HEAD OFFICE :</span> SANDHANI LIFE TOWER, RAJUK PLOT NO-34,
                                BANGLA MOTOR, DHAKA- 1000.</Typography>
                            <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}><span style={{ fontWeight: 800 }}>PABX :</span> 55168181-5, 9611197, 9664931, 9661241, 01833-325681-2,
                                FAX: 02-9614405</Typography>
                            <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}><span style={{ fontWeight: 800 }}>E-mail :</span> slic@sandhanilife.com , <span style={{ fontWeight: 800 }}>Web stie :</span> www.sandhanilife.com</Typography>
                            <Typography variant="cardHeader1" color="primary" fontWeight={600} lineHeight={1.5}><span style={{ fontWeight: 800 }}>Chief Executive Officer :</span> ceo@sandhanilife.com</Typography>
                        </Stack>
                    </Stack>


                </Stack>

            </Box>
        </Layout>
    )
}

export default contact
