import React,{useState} from 'react';
import About from "./About.jsx"
import { Button,Box,HStack,Flex,Spacer } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'
import Mobilecomp from './Mobilecomp';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
        <Flex  gap={"20%"} w={"100%"} bg={"Teal"} padding="20px">
        <Box display={{ base:"none", md: 'block', lg: 'block',sm:'none' }} ClassName="big">
        <Button _hover={{bg:"transparent"}} color={"white"} bg={"none"}>
<Link to="/About">About</Link>
    </Button>
<Button _hover={{bg:"transparent"}} color={"white"}   bg={"none"}>
<Link to="/Skills">Skills</Link>
</Button>
<Button _hover={{bg:"transparent"}} color={"white"}  bg={"none"}>
<Link to="/Projects">Projects</Link>

</Button>
<Button _hover={{bg:"transparent"}} color={"white"} bg={"none"}>
<Link to="/Resume">Resume</Link>
</Button>
<Button _hover={{bg:"transparent"}} color={"white"}  bg={"none"}>
<Link to="/Contact">Contact</Link>
</Button>
<Box >
</Box>
        </Box>
        <Spacer />

<Box display={{ base:"block", md: 'none', lg: 'none',sm:'none' }}>
<Mobilecomp  />
</Box>

        </Flex>
        <Box>
       <About/>
        </Box>
        </>
    );
}

export default Navbar;
