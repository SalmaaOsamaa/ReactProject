import React from 'react'
import styled from 'styled-components';
import HeaderCard from './HeaderCard';
import { motion } from 'framer-motion';

const HeaderBackground = styled(motion.div)`
display: flex;
background-repeat: no-repeat;
background-position: center top ;
background-size: cover;
margin-top: 10px;
height: 70vh;
margin-top:0;
background-image: url("/hhh.jpg");
`;


const Header = () => {

    return (
        
        <HeaderBackground initial="pageInitial"
        animate="pageAnimate"
        variants={{
            pageInitial:{
                opacity: 0,
                translateX: -50
            },
            pageAnimate: {
                opacity: 1,
                translateX: 0,
              },
        }}
        
        >
        <HeaderCard />
   </HeaderBackground>
        


    )
}

export default Header