import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import Carousel from 'nuka-carousel';


const picStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
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
      backgroundColor:'transparent', 
      border:'0px',
      outline:'none',
      color:'#515759',
      fontSize:'18px',
      fontWeight: 700,
    },
    title: {
      flexGrow: 1,
      color:'#274047',
      fontSize:'15px',
      fontWeight: 700,
      fontFamily: 'Arial',
    },
  
  }));

const MyComponent = props => {
    const classes = picStyles();
  return(
    
    <Card className={classes.root}>
      {
         
      <CardActionArea>

        <Carousel className={classes.media} 
        renderCenterLeftControls={({ previousSlide }) => (
          <button className={classes.button} onClick={previousSlide}> &lt;</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button  className={classes.button} onClick={nextSlide}> &gt;</button>
        )}> 
          {
           props.myArrayItem.imgs.map((item) =>  <img src={item} />)
          } 
       </Carousel>


       
        <CardContent>
          <Typography gutterBottom className={classes.title}>
            {props.myArrayItem.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.myArrayItem.price1}<br/>
          {props.myArrayItem.price2}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      }
    </Card>
    
  );
};


export default MyComponent;