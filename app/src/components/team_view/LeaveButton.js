import React from 'react'

class LeaveButton extends React.Component {
    render(){
        const {handleLeaveRequest} = this.props

        return (
            <button onClick={handleLeaveRequest}>Leave Team</button>
        )
    }
}

export default LeaveButton