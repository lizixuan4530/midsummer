import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Carousel from 'nuka-carousel';


const picStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor:'#274047'
      },
    media: {
       height: 345,
       width:  300,
       [theme.breakpoints.down('xs')]:{
        height: 150,
        width:150,
      }
      },
    button:{
      opacity:0.6,
      backgroundColor:'#293F4A', 
      borderRadius:'50%',
      border:'0px',
      outline:'none',
      color: '#FFFFFF',
      fontSize:'20px',
      fontWeight: 700,
    },
    title: {
      flexGrow: 1,
      color:'#D2CDB7',
      fontSize:'13px',
      fontWeight: 700,
      fontFamily: 'Arial',
      paddingLeft:'2px',
      paddingTop:'2px'
    },
    subtitle: {
      flexGrow: 1,
      color:'#D2CDB7',
      fontSize:'12px',
      fontWeight: 500,
      fontFamily: 'Arial',
      paddingLeft:'2px',
    },
  
  }));

const MyComponent = props => {
    const classes = picStyles();
  return(
    <div>
    <Card className={classes.root} elevation={0}>
      {
        <Carousel className={classes.media} 
        renderCenterLeftControls={({ previousSlide }) => (
          <button className={classes.button} onClick={previousSlide}> &lt;</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button  className={classes.button} onClick={nextSlide}> &gt;</button>
        )}
        >      
          {
           props.myArrayItem.imgs.map((item) =>  <img alt='img' src={item} />)
          } 
       </Carousel>
      }
    </Card>

          <Typography gutterBottom className={classes.title}>
            {props.myArrayItem.title}
          </Typography>
          <Typography className={classes.subtitle} color="textSecondary" component="p">
          {props.myArrayItem.price1}<br/>
          {props.myArrayItem.price2}
          </Typography>
    </div>
  );
};


export default MyComponent;