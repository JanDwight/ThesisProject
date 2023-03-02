import React from 'react'
import StudentID from '../assets/profile_Icon.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
        <div className="leftSide">
          <Link to="/profile"> <img src={StudentID} /></Link>
        </div>
        {/*when clicked the user will be redirected to registered 
          links in App.js*/}
          <div className="rightSide">
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/links"> Links</Link>
            <Link to="/contact"> Contact</Link>

          {/*Same functionas above but this is for the mobile
            user*/}
            <button>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
            </Button>

            <Menu 
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{'aria-labelledby': 'basic-button',}}
            >
              <Link to="/" style={{ color: 'black', textDecoration: 'none'}}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
              <Link to="/about" style={{ color: 'black', textDecoration: 'none'}}>
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Link>
              <Link to="/links" style={{ color: 'black', textDecoration: 'none'}}>
                <MenuItem onClick={handleClose}>Links</MenuItem>
              </Link>
              <Link to="/contact" style={{ color: 'black', textDecoration: 'none'}}>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Link>
            </Menu>
          </button>
        </div>
    </div>
  )
}

export default navbar