import React from 'react'

class JoinButton extends React.Component {

    render(){
        const {handleJoinRequest} = this.props
        return (
            <button onClick={handleJoinRequest}>Join</button>
        )
    }
}

export default JoinButton