import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  Paper: {
    padding: theme.spacing(3),
    backgroundColor:"#d5dbda",
    alignItems: 'center',
    justify: 'center',
    textAlign: 'center',
    margin: '3%',
  },
  link:{
    color:"#F1BD4D",
    display:'inline',
    fontFamily: '"Segoe UI"',
    fontWeight: 900,
    fontSize: 20,
    '&:hover ': {
        color:'#EDD2C7',
        }
  },
  icon:{
    color:"#F1BD4D",
    fontSize:'40px',
    '&:hover ': {
        color:'#EDD2C7',
        }
  }
}));

function handleLinkedInPage() {
    window.open("https://www.linkedin.com/in/zixuan-li-0ba0ab170/",'_blank')
    }

function handleGitPage() {
    window.open("https://github.com/lizixuan4530/",'_blank')
    }

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.Paper}>
        <Typography>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={20}> 
              ⭐⭐⭐ 注意事项 ⭐⭐⭐ <br/>
             </Box>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={15}> 
              🚘 小巴黎满25€起送，大巴黎地铁，RER直达区域满35€起送
             </Box>
            <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={15}> 
              ⏰ 每天接受预定时间10：00-22：00 
             </Box>
             <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={15}> 
              📆 小蛋糕提前24h预定，4寸及以上蛋糕提前两天预定 
             </Box>
             <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={15}> 
              🧊 所有甜品拿到后需冷藏，冰淇淋蛋糕需要冷冻
             </Box>
             <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={15}> 
              🍰 接受各种特殊蛋糕，特别场合（婚礼，百日宴，生日会等）甜品预定。请直接与客服联系，价格可能会根据需求适当调整
             </Box>
             <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={15}> 
              🥜 如有过敏、忌口（酒精，咖啡，果仁等）请提前告知所有甜品均为当天制作，材料保证新鲜
             </Box>
             <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={15}> 
              🍑 所有甜品均为当天制作，材料保证新鲜
             </Box>
             <Box textAlign="center" fontFamily='"Segoe UI"' style={{color:"#274047"}} fontWeight="fontWeightBold" fontSize={15}> 
              🧸 私人工坊能力有限，多谢谅解
             </Box>
         </Typography>
       
      </Paper>
    </div>
  );
}