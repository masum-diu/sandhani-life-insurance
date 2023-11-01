import Layout from "@/components/Layout";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const service = () => {
    return (
        <Layout>
            <Box
                sx={{ pt: 19.9 }}
            >
                <Stack direction={"column"} spacing={2} sx={{ width: "90vw", maxWidth: "1410px", mx: "auto", pt: 5, pb: 6 }}>
                    <Stack>
                        <Typography variant="header1" color="#FFF" fontWeight={800} p={2} textAlign={"center"} bgcolor={"#104870"}>Premium Calculator</Typography>
                        <Paper sx={{ p: 2 }} elevation={4}  >

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt incidunt, adipisci porro quas et cumque explicabo vitae iste est consequatur ullam blanditiis dolore doloremque nostrum omnis soluta architecto error.
                        </Paper>
                    </Stack>

                </Stack>

            </Box>
        </Layout>
    );
};

export default service;
