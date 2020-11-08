import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

class AdminTitle extends React.Component {

    render() {
        const {title, setTitle} = this.props;

        return (
            <div>
                    <Title className="teamTitle" editable={{ onChange:setTitle, maxLength: 40}}>{title}</Title> :
                    <Title className="teamTitle">{title}</Title>
            </div>

        );
    }
}

export default AdminTitle;