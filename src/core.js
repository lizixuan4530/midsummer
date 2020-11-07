import React from 'react';
import Grid from '@material-ui/core/Grid';
import Pic from './pics';

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
import Marron_5 from './img/Marron_5.jpg';
import Marron_6 from './img/Marron_6.jpg';

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

import RoseMousse_1 from './img/RoseMousse_1.jpg';
import RoseMousse_2 from './img/RoseMousse_2.jpg';
import RoseMousse_3 from './img/RoseMousse_3.jpg';

import StrawberryIceCream_1 from './img/StrawberryIceCream_1.jpg';
import StrawberryIceCream_2 from './img/StrawberryIceCream_2.jpg';

import Tiramisu_1 from './img/Tiramisu_1.jpg';
import Tiramisu_2 from './img/Tiramisu_2.jpg';

const foodData = [
  {
    imgs:[Caramel_1,Caramel_2,Caramel_3],
    title: '焦糖奶油咖啡戚风蛋糕',
    price1: '4寸(10cm).........24€',
    price2: '6寸(15cm).........36€',
  },
 {
   imgs:[Marron_1,Marron_2,Marron_3,Marron_4,Marron_5,Marron_6],
   title: '栗子奶油伯爵戚风蛋糕',
   price1: '4寸(10cm).........24€',
   price2: '6寸(15cm).........36€',
 },
 {
  imgs:[Pumpkin_1,Pumpkin_2,Pumpkin_3,Pumpkin_4,Pumpkin_5],
  title: '南瓜慕斯黑芝麻海绵蛋糕',
  price1: '4寸(10cm).........24€',
  price2: '6寸(15cm).........36€',
},
{
  imgs:[Mango_1,Mango_2,Mango_3,Mango_4,Mango_5],
  title: '芒果三重奏蛋糕',
  price1: '4寸(10cm).........24€',
  price2: '6寸(15cm).........36€',
},
{
  imgs:[Tiramisu_1,Tiramisu_2],
  title: '提拉米苏',
  price1: '4寸无酒/加酒.....20€/22€',
  price2: '6寸无酒/加酒.....30€/32€',
},
{
  imgs:[CoffeeLover_1,CoffeeLover_2,CoffeeLover_3],
  title: '咖啡狂热爱好者',
  price1: '4寸(10cm).........24€',
  price2: '6寸(15cm).........36€',
},
{
  imgs:[MatchaMousse_1,MatchaMousse_2,MatchaMousse_3],
  title: '抹茶酸奶慕斯蛋糕',
  price1: '4寸(10cm).........24€',
  price2: '6寸(15cm).........36€',
},
{
  imgs:[Rabbit_1,Rabbit_2,Rabbit_3,Rabbit_4],
  title: '蟾宫玉兔',
  price1: '养乐多果冻布丁',
  price2: '1只............5€',
},
{
  imgs:[Heart_1],
  title: '纪念日爱心蛋糕❤',
  price1: '香草覆盆子果酱',
  price2: '18cm............36€',
},
{
  imgs:[CheeseCake_1,CheeseCake_2,CheeseCake_3,CheeseCake_4,CheeseCake_5],
  title: '原味/珍珠奶茶/蓝莓 冻芝士蛋糕',
  price1: '4寸(10cm).........22€',
  price2: '6寸(15cm).........32€',
},
{
  imgs:[ChocoIceCream_1,ChocoIceCream_2],
  title: '巧克力爆珠冰激凌蛋糕',
  price1: '4寸(10cm).........24€',
  price2: '6寸(15cm).........36€',
},
{
  imgs:[StrawberryIceCream_1,StrawberryIceCream_2],
  title: '草莓香草冰激凌蛋糕',
  price1: '4寸(10cm).........24€',
  price2: '6寸(15cm).........36€',
},
{
  imgs:[MatchaIceCream_1,MatchaIceCream_2],
  title: '抹茶香草冰激凌蛋糕',
  price1: '4寸(10cm).........24€',
  price2: '6寸(15cm).........36€',
},
{
  imgs:[MontBlanc_1,MontBlanc_2,MontBlanc_3],
  title: 'MontBlanc勃朗峰小蛋糕',
  price1: '...............8.5€/个',
},
{
  imgs:[RoseMousse_1,RoseMousse_2,RoseMousse_3],
  title: '玫瑰荔枝慕斯小蛋糕',
  price1: '...............8.5€/个',
},
{
  imgs:[PassionFruit_1,PassionFruit_2],
  title: '百香果白巧克力慕斯小蛋糕',
  price1: '...............8.5€/个',
},

]

 
export default function ButtonAppBar() {
 
  return (
    <Grid container spacing={3} 
    style={{paddingLeft:"1%"}}
    direction="row"
    justify="center"
    alignItems="center">
      {foodData.map((item) => 
       <Grid item xs={6} sm={3}>
         
           <Pic myArrayItem = {item}></Pic>
         
       </Grid>)
      }
    </Grid>
  );
 }