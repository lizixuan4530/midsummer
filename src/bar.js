import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './img/logo.png';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { LIGHT_YELLOW } from "./colors/color";
import FormControl from '@material-ui/core/FormControl';
import { emit } from "./emit";
import intl from 'react-intl-universal';

const useBarStyles = theme => ({

  img: {
    width: '49px',
    height: '70px',
    verticalAlign:'middle',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 50,
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
});



class ButtonAppBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {lang:"zh-CN"};
  }
 
render(){ 
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: LIGHT_YELLOW }}>
        <Toolbar>
          <img className={classes.img} alt="img" src={logo}/>
          <Typography variant="h6" className={classes.title}>
             {intl.get("midsummer")}
          </Typography>
      <FormControl className={classes.formControl}>
        
        <Select
          value={this.state.lang}
          onChange={(event) => {
            emit.emit('change_language', event.target.value);
            this.setState({lang: event.target.value});
          }}
        >
          <MenuItem value={'zh-CN'}>🇨🇳</MenuItem>
          <MenuItem value={'en-US'}>🇬🇧</MenuItem>
        </Select>
        </FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );}
}

export default withStyles(useBarStyles)(ButtonAppBar);