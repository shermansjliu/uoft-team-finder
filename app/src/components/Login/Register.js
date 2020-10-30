
import React from 'react'

class Register extends  React.Component {
    handleClick(event) {
        console.log("values:", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
        console.log("user registered")
    }
}

export default Register;