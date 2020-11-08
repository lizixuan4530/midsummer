import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from './img/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  img: {
    width: '49px',
    height: '70px',
    verticalAlign:'middle',
  },
 
  title: {
    flexGrow: 1,
    color:'#274047',
    fontSize:'18px',
    fontWeight: 700,
    fontFamily: 'Arial',
  },
  link: {
    color: '#274047',
    fontSize:'15px',
    fontWeight: 700,
    fontFamily: 'Arial',
    '&:hover ': {
        color:'#557680',
        }
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#D2CDB7' }}>
        <Toolbar>
          <img className={classes.img} alt="img" src={logo}/>
          <Typography variant="h6" className={classes.title}>
            仲夏甜品工作室
          </Typography>

          <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={10}> 
               预定电话📞:0666869061
             </Box>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={10}> 
               微信ID: zhongxia052020
             </Box>
             </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}