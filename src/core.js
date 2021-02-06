import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Pic from './pics';

import { makeStyles } from '@material-ui/core/styles';

import Lemon_1 from './img/Lemon_1.jpg';
import Lemon_2 from './img/Lemon_2.jpg';

import Caramel_1 from './img/Caramel_1.jpg';
import Caramel_2 from './img/Caramel_2.jpg';
import Caramel_3 from './img/Caramel_3.jpg';

import Chocolate_1 from './img/Chocolate_1.jpg';
import Chocolate_2 from './img/Chocolate_2.jpg';
import Chocolate_3 from './img/Chocolate_3.jpg';

import Marron_1 from './img/Marron_1.jpg';
import Marron_2 from './img/Marron_2.jpg';
import Marron_3 from './img/Marron_3.jpg';
import Marron_4 from './img/Marron_4.jpg';

import CheeseCake_1 from './img/CheeseCake_1.jpg';
import CheeseCake_2 from './img/CheeseCake_2.jpg';
import CheeseCake_3 from './img/CheeseCake_3.jpg';
import CheeseCake_4 from './img/CheeseCake_4.jpg';
import CheeseCake_5 from './img/CheeseCake_5.jpg';

import ChocoIceCream_1 from './img/ChocoIceCream_1.jpg';
import ChocoIceCream_2 from './img/ChocoIceCream_2.jpg';

import CoffeeLover_1 from './img/CoffeeLover_1.jpg';
import CoffeeLover_2 from './img/CoffeeLover_2.jpg';
import CoffeeLover_3 from './img/CoffeeLover_3.jpg';


import Pumpkin_1 from './img/Pumpkin_1.jpg';
import Pumpkin_2 from './img/Pumpkin_2.jpg';
import Pumpkin_3 from './img/Pumpkin_3.jpg';
import Pumpkin_4 from './img/Pumpkin_4.jpg';
import Pumpkin_5 from './img/Pumpkin_5.jpg';

import Heart_1 from './img/Heart_1.jpg';

import Mango_1 from './img/Mango_1.jpg';
import Mango_2 from './img/Mango_2.jpg';
import Mango_3 from './img/Mango_3.jpg';
import Mango_4 from './img/Mango_4.jpg';
import Mango_5 from './img/Mango_5.jpg';

import MatchaIceCream_1 from './img/MatchaIceCream_1.jpg';
import MatchaIceCream_2 from './img/MatchaIceCream_2.jpg';

import MatchaMousse_1 from './img/MatchaMousse_1.jpg';
import MatchaMousse_2 from './img/MatchaMousse_2.jpg';
import MatchaMousse_3 from './img/MatchaMousse_3.jpg';

import MontBlanc_1 from './img/MontBlanc_1.jpg';
import MontBlanc_2 from './img/MontBlanc_2.jpg';
import MontBlanc_3 from './img/MontBlanc_3.jpg';

import PassionFruit_1 from './img/PassionFruit_1.jpg';
import PassionFruit_2 from './img/PassionFruit_2.jpg';

import Rabbit_1 from './img/Rabbit_1.jpg';
import Rabbit_2 from './img/Rabbit_2.jpg';
import Rabbit_3 from './img/Rabbit_3.jpg';
import Rabbit_4 from './img/Rabbit_4.jpg';
import Rabbit_5 from './img/Rabbit_5.jpg';

import RoseMousse_1 from './img/RoseMousse_1.jpg';
import RoseMousse_2 from './img/RoseMousse_2.jpg';
import RoseMousse_3 from './img/RoseMousse_3.jpg';

import StrawberryIceCream_1 from './img/StrawberryIceCream_1.jpg';
import StrawberryIceCream_2 from './img/StrawberryIceCream_2.jpg';

import Tiramisu_1 from './img/Tiramisu_1.jpg';
import Tiramisu_2 from './img/Tiramisu_2.jpg';

import MatchaChoco_1 from './img/MatchaChoco_1.jpg';
import MatchaChoco_2 from './img/MatchaChoco_2.jpg';
import MatchaChoco_3 from './img/MatchaChoco_3.jpg';
import MatchaChoco_4 from './img/MatchaChoco_4.jpg';

import Sesame_1 from './img/Sesame_1.jpg';
import Sesame_2 from './img/Sesame_2.jpg';
import Sesame_3 from './img/Sesame_3.jpg';
import Sesame_4 from './img/Sesame_4.jpg';

import Customized_p_1 from './img/Customized_p_1.jpg';
import Customized_p_2 from './img/Customized_p_2.jpg';
import Customized_p_3 from './img/Customized_p_3.jpg';
import Customized_p_4 from './img/Customized_p_4.jpg';
import Customized_p_5 from './img/Customized_p_5.jpg';
import Customized_p_6 from './img/Customized_p_6.jpg';
import Customized_p_7 from './img/Customized_p_7.jpg';
import Customized_p_8 from './img/Customized_p_8.jpg';
import Customized_p_9 from './img/Customized_p_9.jpg';

import Customized_o_1 from './img/Customized_o_1.jpg';
import Customized_o_2 from './img/Customized_o_2.jpg';
import Customized_o_3 from './img/Customized_o_3.jpg';
import Customized_o_4 from './img/Customized_o_4.jpg';

import Box_1 from './img/Box_1.jpg';
import Box_2 from './img/Box_2.jpg';
import Box_3 from './img/Box_3.jpg';

import Bao_1 from './img/NewYear/Bao_1.jpg';
import Bao_2 from './img/NewYear/Bao_2.jpg';
import Bao_3 from './img/NewYear/Bao_3.jpg';
import Bao_4 from './img/NewYear/Bao_4.jpg';

const CuzStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor:'#274047'
    },
  custo: {
    flexGrow: 1,
    color:'#D2CDB7',
    fontSize:'12px',
    fontWeight: 500,
    fontFamily: 'Arial',
    paddingLeft:'2px',
  },

}));




const winterCake = [
  {
    id:1,
    imgs:[Sesame_1,Sesame_2,Sesame_3,Sesame_4],
    title: '黑芝麻奶油南瓜戚风蛋糕',
    price1: '4寸(12cm)...........24€',
    price2: '6寸(18cm)...........36€',
  },
  {
    id:2,
    imgs:[MatchaChoco_1,MatchaChoco_2,MatchaChoco_3,MatchaChoco_4],
    title: '抹茶抹茶🍵',
    price1: '4寸(12cm)...........28€',
    price2: '6寸(18cm)...........40€',
  },
  {
    id:3,
    imgs:[Caramel_1,Caramel_2,Caramel_3],
    title: '焦糖奶油咖啡戚风蛋糕',
    price1: '4寸(12cm)...........24€',
    price2: '6寸(18cm)...........36€',
  },
 {
   id:4,
   imgs:[Marron_1,Marron_2,Marron_3,Marron_4],
   title: '栗子奶油伯爵戚风蛋糕',
   price1: '4寸(12cm)...........24€',
   price2: '6寸(18cm)...........36€',
 },
 {
  id:5,
  imgs:[Pumpkin_1,Pumpkin_2,Pumpkin_3,Pumpkin_4,Pumpkin_5],
  title: '南瓜慕斯黑芝麻海绵蛋糕',
  price1: '4寸(12cm)...........24€',
  price2: '6寸(18cm)...........36€',
},
{
  id:6,
  imgs:[Mango_1,Mango_2,Mango_3,Mango_4,Mango_5],
  title: '芒果三重奏蛋糕',
  price1: '4寸(12cm)...........24€',
  price2: '6寸(18cm)...........36€',
},
]
  
  const littleCake = [
    {
      id:1,
      imgs:[Box_1,Box_2,Box_3],
      title: '北海道戚风蛋糕',
      price1: '一盒(4个)...........18€',
    },
    {
      id:2,
      imgs:[MontBlanc_1,MontBlanc_2,MontBlanc_3],
      title: 'MontBlanc勃朗峰',
      price1: '小蛋糕...........8.5€/个',
    },
    {
      id:3,
      imgs:[RoseMousse_1,RoseMousse_2,RoseMousse_3],
      title: '玫瑰荔枝慕斯',
      price1: '小蛋糕...........8.5€/个',
    },
    {
      id:4,
      imgs:[PassionFruit_1,PassionFruit_2],
      title: '百香果白巧克力慕斯',
      price1: '小蛋糕...........8.5€/个',
    },
    {
      id:5,
      imgs:[Chocolate_1,Chocolate_2,Chocolate_3],
      title: '黑巧克力慕斯',
      price1: '小蛋糕...........8.5€/个',
    },
    {
      id:6,
      imgs:[Rabbit_1,Rabbit_2,Rabbit_3,Rabbit_4,Rabbit_5],
      title: '蟾宫玉兔',
      price1: '养乐多果冻布丁',
      price2: '1只🐰................5€',
    },
]

const classicCake = [
  {
    id:1,
    imgs:[Lemon_1,Lemon_2],
    title: '柠檬戚风柠檬奶油蛋糕',
    price1: '4寸(12cm)...........24€',
    price2: '6寸(18cm)...........36€',
  },
  {
    id:2,
    imgs:[CoffeeLover_1,CoffeeLover_2,CoffeeLover_3],
    title: '咖啡狂热爱好者',
    price1: '4寸(12cm)...........24€',
    price2: '6寸(18cm)...........36€',
  },
  {
    id:3,
    imgs:[Tiramisu_1,Tiramisu_2],
    title: '提拉米苏',
    price1: '4寸无酒/加酒.....20€/22€',
    price2: '6寸无酒/加酒.....30€/32€',
  },
  {
    id:4,
    imgs:[MatchaMousse_1,MatchaMousse_2,MatchaMousse_3],
    title: '抹茶酸奶慕斯蛋糕',
    price1: '4寸(12cm)...........28€',
    price2: '6寸(18cm)...........40€',
  },
  {
    id:5,
    imgs:[Heart_1],
    title: '纪念日爱心蛋糕❤',
    price1: '香草覆盆子果酱',
    price2: '18cm..............36€',
  },
  {
    id:6,
    imgs:[CheeseCake_1,CheeseCake_2,CheeseCake_3,CheeseCake_4,CheeseCake_5],
    title: '原味/珍珠奶茶/蓝莓 冻芝士蛋糕',
    price1: '4寸(12cm)...........22€',
    price2: '6寸(18cm)...........32€',
  },
  {
    id:7,
    imgs:[ChocoIceCream_1,ChocoIceCream_2],
    title: '巧克力爆珠冰激凌蛋糕',
    price1: '4寸(12cm)...........24€',
    price2: '6寸(18cm)...........36€',
  },
  {
    id:8,
    imgs:[StrawberryIceCream_1,StrawberryIceCream_2],
    title: '草莓香草冰激凌蛋糕',
    price1: '4寸(12cm)...........24€',
    price2: '6寸(18cm)...........36€',
  },
  {
    id:9,
    imgs:[MatchaIceCream_1,MatchaIceCream_2],
    title: '抹茶香草冰激凌蛋糕',
    price1: '4寸(12cm)...........28€',
    price2: '6寸(18cm)...........40€',
  },
]

const Newyear = [
  {
    id:1,
    imgs:[Bao_1,Bao_2,Bao_3,Bao_4],
    title: '黑金流沙包',
    price1: '1个...........4€',
    price2: '冷冻流沙包，回家蒸一下哦',
  },]

const Customized_p = [Customized_p_1,Customized_p_2,Customized_p_3,Customized_p_4,
  Customized_p_5,Customized_p_6,Customized_p_7,Customized_p_8,Customized_p_9]

const Customized_o = [Customized_o_1,Customized_o_2,Customized_o_3,Customized_o_4]

 
export default function ButtonAppBar() {
  const classes = CuzStyles();
  const [showWinterCake, setShowWinterCake] = useState(false);
  const [showLittleCake, setShowLittleCake] = useState(false);
  const [showClassicCake, setShowClassicCake] = useState(false);

  const [showNewyear, setShowNewyear] = useState(true);

  const [showCustoPaintCake, setShowCustoPaintCake] = useState(true);
  const [showObjectCake, setShowObjectCake] = useState(false);

  return (
    <Grid container>

<Grid item container spacing={3} xs={12}
    style={{paddingLeft:"1%",padding:'1%',background:'linear-gradient(105deg, #A3262A 0%,  #274047 90%)',marginBottom:'10px'}}
    direction="row"
    justify="flex-start"
    alignItems="center" onClick={() => setShowNewyear(!showNewyear)}>     
        <Typography>
            <Box textAlign="left" fontFamily='"Segoe UI"' style={{color:"#FFCA62"}} fontWeight="fontWeightBold" fontSize={16}> 
            🏮春节限定🏮
             </Box>
             <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#FFCA62",display:"inline"}} fontWeight="fontWeightBold" fontSize={14}> 
            (即日起到正月十五开放预定，除夕和初一除外)
             </Box>
             <Box pl={3} textAlign="right" fontFamily='"Segoe UI"' style={{color:"#FFCA62",display:"inline"}} fontWeight="fontWeightBold" fontSize={20}> 
            {showNewyear ? "▼" : "ᐅ"}
             </Box>
         </Typography>
    </Grid>
    <Grid container spacing={3} 
    style={{paddingLeft:"1%",paddingTop:'2%'}}
    direction="row"
    justify="space-between"
    alignItems="flex-start">
      {showNewyear && Newyear.map((item) => 
       <Grid item xs={6} sm={3}  key={item.id}>
         
           <Pic myArrayItem = {item} key={item.id}></Pic>
         
       </Grid>)
      }
    </Grid>

 
<Grid container item spacing={3} xs={12}
    style={{paddingLeft:"1%",padding:'2%',background:' linear-gradient(120deg, #de738d 0%, #bf9fc4 50%, #274047 90%)',marginTop:'10px',marginBottom:'10px'}}
    direction="row"
    justify="flex-start"
    alignItems="center">     
        <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#182A28",  fontWeight: 700}}  fontSize={16}> 
            🎉仲夏私人定制成品展示(价格请私信) 
             </Box>
         </Typography>
    </Grid>
    <Typography className={classes.custo}>
      <Box fontWeight="fontWeightBold" fontSize={13}>私人定制样式颜色可自选，详情私信</Box>
      <Box>蛋糕胚口味：原味，可可，抹茶，咖啡, 伯爵红茶</Box>
      <Box>奶油口味：原味，焦糖，抹茶，巧克力，栗子</Box>
    </Typography>

    <Grid item container spacing={3} xs={12}
    style={{paddingLeft:"1%",padding:'1%',background:'linear-gradient(105deg, #567077 0%, #274047 90%)',marginTop:'10px',marginBottom:'10px'}}
    direction="row"
    justify="flex-start"
    alignItems="center" onClick={() => setShowCustoPaintCake(!showCustoPaintCake)}>     
        <Typography>
            <Box pl={3} textAlign="center" fontFamily='"Segoe UI"' style={{color:"#ECDEC4",display:"inline"}} fontWeight="fontWeightBold" fontSize={14}> 
            👩‍🎨手绘蛋糕
             </Box>
             <Box pl={3} textAlign="right" fontFamily='"Segoe UI"' style={{color:"#ECDEC4",display:"inline"}} fontWeight="fontWeightBold" fontSize={16}> 
            {showCustoPaintCake ? "▼" : "ᐅ"}
             </Box>
         </Typography>
    </Grid>
    <Grid container spacing={3} 
    style={{paddingLeft:"1%",paddingTop:'2%'}}
    direction="row"
    justify="flex-start"
    alignItems="flex-start">
      {showCustoPaintCake && Customized_p.map((item) => 
       <Grid item xs={6} sm={3}>   
           <Card className={classes.root} elevation={0}>
            <CardMedia>
               <img style={{height:'100%',width:'100%'}} alt='img' src={item} />
             </CardMedia>
          </Card>       
       </Grid>)
      }
    </Grid>


    <Grid item container spacing={3} xs={12}
    style={{paddingLeft:"1%",padding:'1%',background:'linear-gradient(105deg, #567077 0%, #274047 90%)',marginTop:'10px',marginBottom:'10px'}}
    direction="row"
    justify="flex-start"
    alignItems="center" onClick={() => setShowObjectCake(!showObjectCake)}>     
        <Typography>
            <Box pl={3} textAlign="center" fontFamily='"Segoe UI"' style={{color:"#ECDEC4",display:"inline"}} fontWeight="fontWeightBold" fontSize={14}> 
            🍓插件蛋糕
             </Box>
             <Box pl={3} textAlign="right" fontFamily='"Segoe UI"' style={{color:"#ECDEC4",display:"inline"}} fontWeight="fontWeightBold" fontSize={16}> 
            {showObjectCake ? "▼" : "ᐅ"}
             </Box>
         </Typography>
    </Grid>
    <Grid container spacing={3} 
    style={{paddingLeft:"1%",paddingTop:'2%'}}
    direction="row"
    justify="flex-start"
    alignItems="flex-start">
      {showObjectCake && Customized_o.map((item) => 
       <Grid item xs={6} sm={3}>   
           <Card className={classes.root} elevation={0}>
            <CardMedia>
               <img style={{height:'100%',width:'100%'}} alt='img' src={item} />
             </CardMedia>
          </Card>       
       </Grid>)
      }
    </Grid>
   

      <Grid item container spacing={3} xs={12}
    style={{paddingLeft:"1%",padding:'2%',background:'linear-gradient(105deg, #D9AFD9 0%, #97D9E1 50%, #274047 90%)',marginTop:'10px',marginBottom:'10px'}}
    direction="row"
    justify="flex-start"
    alignItems="center" onClick={() => setShowWinterCake(!showWinterCake)}>     
        <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#182A28",display:"inline"}} fontWeight="fontWeightBold" fontSize={16}> 
            ⛄秋冬季节限定 
             </Box>
             <Box pl={3} textAlign="right" fontFamily='"Segoe UI"' style={{color:"#182A28",display:"inline"}} fontWeight="fontWeightBold" fontSize={20}> 
            {showWinterCake ? "▼" : "ᐅ"}
             </Box>
         </Typography>
    </Grid>
    <Grid container spacing={3} 
    style={{paddingLeft:"1%",paddingTop:'2%'}}
    direction="row"
    justify="space-between"
    alignItems="flex-start">
      {showWinterCake && winterCake.map((item) => 
       <Grid item xs={6} sm={3}  key={item.id}>
         
           <Pic myArrayItem = {item} key={item.id}></Pic>
         
       </Grid>)
      }
    </Grid>

    
    <Grid container item spacing={3} xs={12}
    style={{paddingLeft:"1%",padding:'2%',background:' linear-gradient(120deg, #FAACA8 0%, #dcb4ca 50%, #274047 90%)',marginTop:'10px',marginBottom:'10px'}}
    direction="row"
    justify="flex-start"
    alignItems="center" onClick={() => setShowClassicCake(!showClassicCake)}>     
        <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#182A28",display:"inline",  fontWeight: 700}}  fontSize={16}> 
            🎂仲夏经典蛋糕
             </Box>
             <Box pl={3} textAlign="right" fontFamily='"Segoe UI"' style={{color:"#182A28",display:"inline"}} fontWeight="fontWeightBold" fontSize={20}> 
            {showClassicCake ? "▼" : "ᐅ"}
             </Box>
         </Typography>
    </Grid>

    <Grid container spacing={3} 
    style={{paddingLeft:"1%",paddingTop:'2%'}}
    direction="row"
    justify="space-between"
    alignItems="flex-start">
      {showClassicCake && classicCake.map((item) => 
       <Grid item xs={6} sm={3} key={item.id}>   
           <Pic myArrayItem = {item} key={item.id}></Pic>       
       </Grid>)
      }
    </Grid>
  
    <Grid container item spacing={3} xs={12}
    style={{paddingLeft:"1%",padding:'2%',background:'linear-gradient(119deg, #FBAB7E 0%, #F7CE68 50%, #274047 90%)',marginTop:'10px',marginBottom:'10px'}}
    direction="row"
    justify="flex-start"
    alignItems="center"  onClick={() => setShowLittleCake(!showLittleCake)}>     
        <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#182A28",display:"inline"}} fontWeight="fontWeightBold" fontSize={16}> 
            🧁小蛋糕系列 
             </Box>
             <Box pl={3} textAlign="right" fontFamily='"Segoe UI"' style={{color:"#182A28",display:"inline"}} fontWeight="fontWeightBold" fontSize={20}> 
            {showLittleCake ? "▼" : "ᐅ"}
             </Box>
         </Typography>
    </Grid>
    <Grid container spacing={3} 
    style={{paddingLeft:"1%",paddingTop:'2%'}}
    direction="row"
    justify="space-between"
    alignItems="flex-start">
      {showLittleCake && littleCake.map((item) => 
       <Grid item xs={6} sm={3} key={item.id}>
         
           <Pic myArrayItem = {item} key={item.id}></Pic>
         
       </Grid>)
      }
    </Grid>

    </Grid>
  );
 }