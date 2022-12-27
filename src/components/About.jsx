import React,{useState} from 'react';
import {Box,Center,Image,Flex,Heading,Container,Text,VStack,SimpleGrid } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';
const About = () => {
    const [state] = useState({
     titleone:"Hi",
     titletwo:"I am Vedprakash Sinha",
     titlethree:"A Passionate Web Developer",

    })
    return (
        <div>
<SimpleGrid  items={[1,2]} padding={"5vh"} gap={"10rem"} >
<Box>
            <div >
      <div style={{fontSize:"40px",fontWeight:"bold"}}>{state.titleone}</div>
      <div style={{fontSize:"40px",fontWeight:"bold"}}>{state.titletwo}</div>
      </div>
      <div style={{fontSize:"30px",color:"Teal"}} className="text">
      <Typewriter
  options={{
    strings: ['A Passionate and Skilled', 'Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>

      </div>
<Box mt={"2rem"}>
    <Center>
    <Image h="40vh" borderRadius="50%" src="https://avatars.githubusercontent.com/u/108031543?v=4"/>
    </Center>
    
</Box>
</Box>
<Box _hover={{bg:"black",color:"white"}} bg={"whitesmoke"} mt="-7rem" color={"black"}  padding={"3rem"}>
<VStack>
    <Heading color={"Teal"} _hover={{color:"Teal"}}>About me</Heading>
    <Text _hover={{color:"teal"}} color={"teal"}>A self-motivated, hard-working and passionate Web Developer with proficiency in Full Stack Web Development
and have strong communication, collaboration and problem-solving skills.1000+ hours of coding and hands-on
experience in developing 4 fully functional Website. looking forward to working as a productive and
accountable employee in exciting tech company.</Text>
</VStack>
</Box>
</SimpleGrid>
        </div>

    );
}

export default About;
