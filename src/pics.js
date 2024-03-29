import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'nuka-carousel';
import intl from 'react-intl-universal';
import { LIGHT_YELLOW, BROWN } from "./colors/color";

const picStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor:BROWN
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
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      border:'0px',
      outline:'none',
      color: '#FFFFFF',
      fontSize:'17px',
      fontWeight: 700,
      padding:5,
    },
    title: {
      flexGrow: 1,
      color:BROWN,
      fontSize:'13px',
      fontWeight: 700,
      fontFamily: 'Arial',
      paddingLeft:'2px',
      paddingTop:'2px'
    },
    subtitle: {
      flexGrow: 1,
      color:BROWN,
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
       <p></p>
    <Card className={classes.root} elevation={0}>
      {
        <Carousel className={classes.media} 
        renderCenterLeftControls={({ previousSlide }) => (
          <button className={classes.button} onClick={previousSlide}>&lt;</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button  className={classes.button} onClick={nextSlide}>&gt;</button>
        )}
        >      
          {
           props.myArrayItem.imgs.map((item) =>  <img alt='img' src={item} />)
          } 
       </Carousel>
      }
    </Card>

          <Typography gutterBottom className={classes.title}>
          {props.myArrayItem.title && intl.get(props.myArrayItem.title)}
          </Typography>
          <Typography className={classes.subtitle} color="textSecondary" component="p">
          {props.myArrayItem.price1 && intl.get(props.myArrayItem.price1)}<br/>
          {props.myArrayItem.price2 && intl.get(props.myArrayItem.price2)}
          </Typography>
    </div>
  );
};


export default MyComponent;