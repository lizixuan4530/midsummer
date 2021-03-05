import React from 'react';
import cn from './lang/zh-CH'
import us from './lang/en-US'
import InitHoc from './InitHoc'
const locales = {
    "zh_CN":cn,
    "en_US":us
}
class IntlLearn extends React.Component{
    constructor(props){
        super(props)
        this.defaultLocale = props.defaultLocale
    }
    changeLanguage = ()=>{
        if(this.defaultLocale==='zh_CN'){
            this.defaultLocale = 'en_US'
        }else{
            this.defaultLocale = 'zh_CN'
        }
        sessionStorage['locale']= this.defaultLocale
        this.props.setLocale(this.defaultLocale)
    }
    
    render(){
        const {intlDone,intl}=this.props
        return(
            <div>
                {intlDone&&<div>
                    {intl.get("intl.hello")}
                    <br/>
                    {intl.getHTML('content')}
                    <br/>
                    <button onClick={()=>this.changeLanguage()}>  {intl.getHTML('intl.changeLang')}</button>
                </div>}
            </div>
        )
    }
}
export default InitHoc(IntlLearn,locales)