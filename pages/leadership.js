import BoardofDirectors from '@/components/BoardofDirectors'
import Layout from '@/components/Layout'
import ManagementTeam from '@/components/ManagementTeam'
import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const leadership = () => {
    const [selectedMenu, setSelectedMenu] = useState("Board of Directors")
    const handleMenu = (menu) => {
        setSelectedMenu(menu)
    }
    const renderContent = () => {
        switch (selectedMenu) {
            case "Board of Directors":
                return <BoardofDirectors/>;
            case "Management Team":
                return <ManagementTeam/>;
            default:
                return null;
        }
    }
    return (
        <Layout>
            <Box
                sx={{ pt: 19.9 }}
            >
                <Stack direction={"column"} spacing={3} sx={{ width: "97vw", maxWidth: "1410px", mx: "auto", pt: 5, pb: 6}}>
                    <Typography variant="productName" textAlign={"center"} color="primary">Our Leadership & Management Team</Typography>
                    <Stack>
                        <List sx={{ display: "flex", width: "95vw", maxWidth: "569px", margin: "0 auto", }}>
                            {[
                                "Board of Directors", "Management Team"
                            ].map((text, index) => <ListItem key={index} sx={{ height: "58px", backgroundColor: selectedMenu === text ? '#104870' : '#efefef', borderRadius:"3px"  }}>
                                <ListItemIcon sx={{textAlign:"center",}}>
                                    <img src="assets/leader.png" alt="" width={20} />
                                </ListItemIcon>
                                <ListItemText onClick={() => handleMenu(text)} sx={{cursor:"pointer",}} primaryTypographyProps={{
                                    // fontSize: 22,
                                    color: selectedMenu === text ? '#ffff' : '#104870', fontWeight: 700,
                                    
                                }} primary={text} />

                            </ListItem>)}
                        </List>
                    </Stack>
                    {renderContent()}
                </Stack>

            </Box>
        </Layout >
    )
}

export default leadership
