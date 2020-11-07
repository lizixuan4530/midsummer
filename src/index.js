import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Menu from './menu';

class App extends React.Component{
    render(){
        return(
            <div>   
                <Menu/>
                {this.props.children}
            </div>              
        )
    }
}

ReactDOM.render((
    <Router>
        <Switch>
        <Route path="/" component={App}>
            <Route path="*" component={Menu}/>
        </Route>
        </Switch>
    </Router>
    ),document.body
);