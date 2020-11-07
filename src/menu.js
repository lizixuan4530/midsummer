import React from 'react';

import Bar from './bar';

import Core from './core';

import Footer from './footer'
import Grid from '@material-ui/core/Grid';


export default function Menu() {
  

  return (
    
      <Grid container spacing={2} style={{backgroundColor: "#b1c7c3", width: '100vw'}}>

        <Grid item xs={12} xs={12} >
            <Bar/>
        </Grid>

        <Grid item xs={12} xs={12}>
            <Core/>
        </Grid>

        <Grid item xs={12} xs={12}>
            <Footer/>
        </Grid>

       
    </Grid>
   
  );
}