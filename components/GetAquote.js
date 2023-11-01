import { Paper, Select, Stack, Typography, Divider, Grid, Button } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'

const GetAquote = () => {
    return (
        <>
            <Paper sx={{ width: "90vw", maxWidth: "1410px", mx: "auto", borderRadius: "10px" }}>


                <Grid container spacing={0} alignItems={"center"} p={5}>
                    <Grid item lg={7} xl={8} sx={{ display: "flex", flexDirection: "column", columnGap: 2, rowGap: 2 }} >
                        <Typography variant="normal" color="initial" fontWeight={"bold"}>Get A Quote For</Typography>

                        <Select size="small" fullWidth>

                        </Select>
                        <Grid container spacing={1}>
                            <Grid item lg={6}  sx={{ display: "flex", flexDirection: "column", columnGap: 2, rowGap: 2.9 }} >
                                <Typography variant="normal" color="initial" fontWeight={"bold"}>Date of Birth</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker  slotProps={{ textField: { size: 'small' } }} />
                                </LocalizationProvider>
                                <Select size="small" fullWidth>
                                </Select>
                                <Select size="small" fullWidth>
                                </Select>
                            </Grid>
                            <Grid item lg={6}  sx={{ display: "flex", flexDirection: "column", columnGap: 2, rowGap: 2 }} >
                                <Select size="small" fullWidth>
                                </Select>
                                <Select size="small" fullWidth>
                                </Select>
                                <Select size="small" fullWidth>
                                </Select>
                                <Select size="small" fullWidth>
                                </Select>
                            </Grid>

                        </Grid>
                        <Button variant="contained" color="primary">
                            Get Quote
                        </Button>
                    </Grid>
                    <Grid item lg={1} sx={{ display: "flex", justifyContent: "center" }}>
                        <img src="assets/Vector.png" alt="" />
                    </Grid>

                    <Grid item lg={4} xl={3} >
                        <Paper sx={{ width: "90vw",maxWidth:"314px", p: 2, backgroundColor: "#F0F1F1", borderRadius: "10px" }} >
                            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={3} pt={1} height={"277px"} >

                                <Typography variant="header1" color={"primary"} fontWeight={"bold"}>Your Quote!</Typography>
                                <Typography variant="productName" color="#000" fontWeight={"bold"} ><sup style={{ fontWeight: 400, fontSize: "15px" }}>BDT</sup>3,000<sub style={{ fontWeight: 400, fontSize: "15px" }}>Monthly</sub></Typography>
                                <Typography variant="cardHeader" color="#000" fontWeight={500} >for BDT <span style={{ fontWeight: "bold" }}>864,000</span> of AD&D Coverage</Typography>
                            </Stack>

                        </Paper>
                    </Grid>
                </Grid>



            </Paper>
        </>
    )
}

export default GetAquote
