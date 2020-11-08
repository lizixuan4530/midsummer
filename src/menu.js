import React from 'react';

import Bar from './bar';

import Core from './core';

import Footer from './footer'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function Menu() {
  

  return (
    
      <Grid container spacing={2} style={{backgroundColor: "#274047", width: '100vw'}}>

        <Grid item xs={12}>
            <Bar/>
        </Grid>

        <Grid item xs={12}>
            <Footer/>
        </Grid>

        <Grid item xs={12}>
            <Core/>
        </Grid>

        <Grid item xs={12} style={{backgroundColor: "#D2CDB7"}}>
           <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047",opacity:0.6,padding:"5%"}} fontWeight="fontWeightBold" fontSize={10}> 
                 @仲夏甜品工作室2020
             </Box>
             </Typography>
        </Grid>   
    </Grid>
   
  );
}