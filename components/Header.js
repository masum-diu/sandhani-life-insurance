import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { FcMenu } from "react-icons/fc";
import Grid from "@mui/material/Grid";
import { Toolbar, TextField, Typography, IconButton, Select, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AiOutlineGlobal } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const menus = [
    {
      title: "Home",
      slug: "/",
    },
    {
      sub: [
        {
          title: "About Us",
          slug: "about",
        },
       
        {
          title: "Mission & Vision",
          slug: "mission&vision",
        },
        {
          title: "Our Leadership",
          slug: "leadership",
        },
       
      ],
    },
    {
      title: "Products",
      slug: "",
    },
    {
      title: "Services",
      slug: "service",
    },
    {
      title: "Investor Relations",
      slug: "",
    },
    {
      title: "Compliance",
      slug: "",
    },
    {
      title: "News",
      slug: "",
    },
    {
      title: "Contact",
      slug: "contact",
    },
    {
      title: "User Portal",
      slug: "",
    },
  ];
  const router = useRouter();
  const [dropdown, setDropdown] = useState("about");
  const handleChange = (event) => {
    
    setDropdown(event.target.value);
    
  };


 



  return (
    <>
      {/* top navbar area start */}
      <AppBar position="fixed" color="primary" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Grid
            container
            spacing={0}
            sx={{ width: "90vw", maxWidth: "1410px", mx: "auto" }}
          >
            <Grid item md={4}></Grid>
            <Grid item md={4}>
              <TextField
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "12.51px",
                  height: "25.03px",
                  display: "flex",
                  input: {
                    "&::placeholder": {
                      textOverflow: "ellipsis !important",
                      color: "#104870",
                    },
                  },
                  "& .css-i4j0cp-MuiInputBase-root-MuiOutlinedInput-root ": {
                    paddingLeft: "7px",
                  },
                  "& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input ": {
                    paddingLeft: "8px",
                  },
                  "& fieldset": { border: "none" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
                InputProps={{
                  startAdornment: (
                    <SearchIcon
                      style={{
                        fontSize: "18px",
                        color: "#104870",
                        marginTop: "2px",
                      }}
                    />
                  ),
                }}
                placeholder="Search"
                size="small"
                id=""
                label=""
                //  value={}
                //  onChange={}
                fullWidth
              />
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                columnGap: 0.5,
                pr: 1.5,
              }}
            >
              <AiOutlineGlobal />
              EN
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* top navbar area end */}
      {/* main-navbar start */}
      <AppBar
        position="fixed"
        color="background"
        sx={{ boxShadow: "none", mt: 8 }}
      >
        <Toolbar>
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: "95px",
              width: "90vw",
              maxWidth: "1410px",
              mx: "auto",
            }}
          >
            <Grid item md={1} lg={2} sx={{ color: "#104870" }}>
              <img
                onClick={() => router.push("/")}
                src="assets/logo.png"
                style={{ width: "90vw", maxWidth: "120px", cursor: "pointer" }}
              />
            </Grid>

            <Grid
              item
              md={11}
              lg={10}
              sx={{
                display: "flex",
                columnGap: { xl: 5, lg: 3, md: 1 },
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              {menus.map((item) => (
                <div
                  key={item.title}
                  style={{ display: "flex", alignItems: "center" }}

                >
                  {item.sub && item.sub.length > 0 ? (
                    <>
                      <Select
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": { border: 0 },
                          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            border: 0,
                          },
                          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: 0,
                          },
                          width: "90vw",
                          maxWidth: 105,
                          fontWeight: "700",
                          color: "#104870",
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        size="small"
                        value={dropdown}
                        onChange={(e) => handleChange(e)}
                      >
                        {item.sub.map((subItem) => (

                          <MenuItem value={subItem.slug} key={subItem.slug} onClick={()=>router.push(subItem.slug)} sx={{fontWeight:700,color: "#104870",}} >
                            {subItem.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </>
                  ) : (
                    <Link href={item.slug}>
                      <Typography
                        variant="cardHader"
                        sx={{
                          textAlign: "center",
                          backgroundColor: "#fff",
                          cursor: "pointer",
                          fontWeight: "800",
                          color: "#104870",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Link>
                  )}
                </div>
              ))}
              <IconButton aria-label="">
                <FcMenu />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* main-navbar end */}
    </>
  );
};

export default Header;
