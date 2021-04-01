import React from'react';
import './Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
    
        this.state = { 
            username : '',
            password : ''
        }
        this.checkCred = this.checkCred.bind(this,);
        this.handleUser = this.handleUser.bind(this,);
        this.handlePass = this.handlePass.bind(this,);
    }

    componentDidMount(){
        localStorage.setItem('loginSuccess',false);
    }
    handleUser(e){
        this.setState({
            username : e.target.value,
        });
    }
    handlePass(e){
        this.setState({
            password : e.target.value,
        });
    }

    checkCred(e){
        e.preventDefault();
        console.log("congrats");
        let username = this.state.username;
        let password = this.state.password;
        console.log(username);
        if(username === 'friday' &&  password === 'friday'){
            alert("Y0u Have G0t It...G00d J0b");
            localStorage.setItem('loginSuccess' , true);
            window.location='/flag';
        }
        else{
            localStorage.setItem('loginSuccess' , false);
            alert("Think Harder");
        }
        this.setState({
            username:'',
            password:''
        })
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.checkCred} >
                    <div className="login">
                        <p className="loginHeader">Login</p>
                        <input className="username" id="username" placeholder="Username" value={this.state.username} type="text" onChange={this.handleUser}/>
                        <br/>
                        <input className="password" id="password" placeholder="Password" value={this.state.password} type="password" onChange={this.handlePass}/>
                        <br/>
                        <button className="loginButton" type="submit">Login</button>
                    </div>
                    
                </form>
            </div>
          );
    }
}
 
export default Login;