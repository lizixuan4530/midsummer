import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import intl from 'react-intl-universal';
import { LIGHT_YELLOW, BROWN, PINK } from "./colors/color";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  Paper: {
    padding: theme.spacing(2),
    backgroundColor: LIGHT_YELLOW,
    alignItems: 'center',
    justify: 'center',
    textAlign: 'center',
    marginRight: '3%',
    marginLeft: '3%',
    marginBottom: '3%',
  }

}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.Paper}>
        <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:BROWN,marginBottom:'5px'}} fontWeight="fontWeightBold" fontSize={12}> 
            {intl.get("phone")} 0666869061 /  {intl.get("wechat")} zhongxia052020 
             </Box>
            
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:PINK}} fontWeight="fontWeightBold" fontSize={15}> 
               {intl.get("attention")} <br/>
             </Box>
            <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:BROWN}} fontWeight="fontWeightBold" fontSize={10}> 
            {intl.get("attention.delivery")}
             </Box>
            <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:BROWN}} fontWeight="fontWeightBold" fontSize={10}> 
            {intl.get("attention.time")}
             </Box>
             <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:BROWN}} fontWeight="fontWeightBold" fontSize={10}> 
             {intl.get("attention.ordertime")}
             </Box>
             <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:BROWN}} fontWeight="fontWeightBold" fontSize={10}> 
              {intl.get("attention.frozen")}
             </Box>
             <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:BROWN}} fontWeight="fontWeightBold" fontSize={10}> 
             {intl.get("attention.occasion")}
             </Box>
             <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:BROWN}} fontWeight="fontWeightBold" fontSize={10}> 
             {intl.get("attention.allergy")}
             </Box>
             <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:BROWN}} fontWeight="fontWeightBold" fontSize={10}> 
             {intl.get("attention.fresh")}
             </Box>
             <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:BROWN}} fontWeight="fontWeightBold" fontSize={10}> 
             {intl.get("attention.thanks")}
             </Box>
         </Typography>
       
      </Paper>
    </div>
  );
}