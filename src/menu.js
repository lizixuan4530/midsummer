import React from 'react';

import Bar from './bar';
import Core from './core';

import Footer from './footer'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { emit } from "./emit";
import intl from 'react-intl-universal';
import locales from './locales';
import { LIGHT_YELLOW, PINK, BROWN, LIGHT_PINK } from "./colors/color";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            intlDone:false
        }
      }

    async componentDidMount() {
        await  emit.on('change_language', lang => this.loadLocales(lang)); 
        await this.loadLocales(); 
      }
      
      loadLocales(lang = 'zh-CN') {
        intl.init({
          currentLocale: lang, 
          locales,
        }).then(() => {
            
          this.setState({
            intlDone:false
          });
        });
      }
    
  
render(){ 
  return (
    
      <Grid container spacing={2} style={{backgroundColor: LIGHT_PINK,overflow: "hidden"}}>

        <Grid item xs={12}>
            <Bar/>
        </Grid>

        <Grid item xs={12}>
            <Footer/>
        </Grid>

        <Grid item xs={12}>
            <Core/>
        </Grid>

        <Grid item xs={12} style={{backgroundColor: LIGHT_YELLOW}}>
           <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:BROWN,opacity:0.6,padding:"20px"}} fontWeight="fontWeightBold" fontSize={10}> 
                 @仲夏甜品工作室2020
             </Box>
             </Typography>
        </Grid>   
    </Grid>
   
  );}
}

export default Menu;