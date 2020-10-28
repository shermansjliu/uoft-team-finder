import React from 'react'

class Member extends React.Component {
    render() {
        const isTeamLeader = this.props.isTeamLeader
        const name = this.props.name
        // const picture = this.props.pictureURL

        return (
            <div>
            <hr/>
                {isTeamLeader && 
                    <h3> Team Leader!</h3>
                }
                <h4>{name}</h4>
                <hr/>
            </div>
        );
    }
}

export default Member