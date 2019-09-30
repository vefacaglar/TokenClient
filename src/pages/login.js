import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        const token = props.match.params.token;
        localStorage.setItem("token",token)
    }

    render() { 

        return ( 
            <div>
                login başarılı
            </div>
         );
    }
}
 
export default Login;