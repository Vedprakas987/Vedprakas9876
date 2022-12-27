import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'
  
const Mobilecomp = () => {
    return (
        <div width="100%">
            <Menu>
  <MenuButton _hover={{bg:"transparent"}}  as={Button} rightIcon={<FaBars m={"auto"} />}>
  </MenuButton>
  <MenuList  w={"100%"}>
    <MenuItem>
    <Link to="/About">About</Link>
    </MenuItem>
    <MenuItem>
    <Link to="/Skills">Skills</Link>
    </MenuItem> <MenuItem>
    <Link to="/Project">Project</Link>
    </MenuItem>
    <MenuItem>
    <Link to="/Resume">Resume</Link>
    </MenuItem>
     <MenuItem>
    <Link to="/Contact">Contacts</Link>
    </MenuItem>

  </MenuList>
</Menu>
        </div>
    );
}

export default Mobilecomp;
