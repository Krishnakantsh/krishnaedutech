import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

const navigation = [
  { name: "HOME", href: "/api/v2m/home" },
  { name: "MY COURSE", href: "/api/v2s/mycourse" },
  { name: "ABOUT", href: "/api/v2m/about" },
  { name: "HELP", href: "/api/v2m/help" },
  { name: "Management", href: "/api/v2m/login" },
];  

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const categories = [
    "Java",
    "Python",
    "Spring Boot",
    "PHP",
    "Laravel",
    "Django",
    "Flutter",
  ];

  const toggleDrawer = (open) => () => setMobileOpen(open);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const user = {
    firstname: "Krishna",
  };



  const handleNotofication = () =>{
    window.location.href = "/api/v2s/notification"
  }

  return (
    <div className="fixed top-0 left-0 w-full z-100 ">
      {/* Top Navbar */}
      <AppBar
        position="static"
        sx={{
          bgcolor: "rgb(255,255,255)",
          color: "rgb(0,0,0)",
          position: "relative",
        }}
      >
        <Toolbar
          sx={{
            color: "rgb(0,0,0)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <div className="flex items-center justify-center w-[fit-content] ">
            <Typography variant="h6" >
              <img
                src="/logo1.png"
                alt="Your Company"
                className="rounded-full h-5 md:h-10 w-full  "
              />
            </Typography>
            <Typography variant="h6" sx={{ ml: 2 }}>
              <p style={{ color: " #00246B", fontWeight: "700" }}>
                KrishnaTech
              </p>
            </Typography>
          </div>
          <div className="hidden lg:block  items-center justify-center m-1 h-12 lg:h-15 relative w-[15vw] md:w-[25vw] ">
            <div className=" absolute top-1.5 navsearch w-full "  >
              <form className="w-full ">
                <div className="flex h-full ">
                  {/* Dropdown Button */}
                  <div className="relative h-12   ">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="shrink-0 z-10 h-full inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    >
                      {selectedCategory}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute left-0 mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                          {categories.map((category) => (
                            <li key={category}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedCategory(category);
                                  setIsOpen(false);
                                }}
                                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                {category}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full h-12 ">
                  

                
                    <input
                      type="search"
                      className="block h-full p-1.5 md:p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder={`Search ${selectedCategory}...`}
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 w-12 p-1.5 md:p-2 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-red-500 hover:border-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-4 h-4"  
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
              

                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-4 text-black ">
            {navigation.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                className=" text-nowrap "
                sx={{ color: "#00246B", fontWeight: "500" }}
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-center  "  onClick={ handleNotofication }  > 

            <IconButton color="inherit">
              <NotificationsIcon sx={{ color: "rgb(23,141,241)" }} />
            </IconButton>

            {/* Profile Menu */}
            {user?.firstname && (
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <p className=" text-[rgb(23,141,241)]  h-7 w-7 text-lg ">
                  {user?.firstname.substring(0, 1).toUpperCase()}
                </p>
              </IconButton>
            )}
          </div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Your Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: 250 }}
        >
          <IconButton sx={{ m: 2 }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navigation.map((item) => (
              <ListItem key={item.name}>
                <ListItemButton href={item.href}>{item.name}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
