import React from'react';
import markximg from './marx10_new.png';

class Flag extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0,
            canRender:false,
         }
         this.leadtorealflag=this.leadtorealflag.bind(this,);
    }

    componentDidMount(){
        const loginSuccess = localStorage.getItem('loginSuccess') ;
        const success = (loginSuccess === 'true') ? true : false;
        console.log(loginSuccess);
        if(success){
            this.setState({
                canRender:true
            })
        }
        localStorage.setItem('hasVisited' , false);
    }
    
    leadtorealflag(){
         let temp = this.state.count;
         temp =temp +1;
         this.setState({
             count: temp,
         }) 
         if(temp===10){
             localStorage.setItem('hasVisited', true);

             window.location="/realFlag";
         }
         else{
             alert("Its Simple Spell But Quite Unbreakable..");
         }
    }

    render() { 
        return (
           <> { this.state.canRender ? <div>
                <h2>Logged In Successfull</h2>
                <img src={markximg} onClick={this.leadtorealflag}/>
                <p>hii made with love from Iqube</p>
            </div> : <div><h1>Try To Open The Portal....</h1></div> }</>
        );
         
    }
}
 
export default Flag;