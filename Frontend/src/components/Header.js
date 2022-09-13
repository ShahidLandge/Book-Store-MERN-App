import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
// import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <AutoStoriesOutlinedIcon fontSize="large" />
            </Typography>
          </NavLink>
          <Typography
            sx={{ ml: "auto" }}
            variant="h5"
            style={{ color: "#ccc" }}
          >
            <i>Book Store</i>
          </Typography>

          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
            <Tab LinkComponent={NavLink} to="/about" label="More" />
            <Tab LinkComponent={NavLink} to="/login" label="Login" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
