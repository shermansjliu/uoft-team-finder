import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Row, Col, Card, Button, Divider  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./styles.css";


class Loginview extends React.Component {
  state = {
    type: "login",
    notice: '',
    type: 'tab2',
    autoLogin: true,
  };
  onSubmit = (err, values) => {
    console.log("login");
    window.location = "./Home";
    // console.log('value collected ->', {
    //   ...values,
    //   autoLogin: this.state.autoLogin,
    // });
    // if (this.state.type === 'login') {
    //   this.setState(
    //     {
    //       notice: '',
    //     },
    //     () => {
    //       if (!err && (values.username !== 'admin' || values.password !== '888888')) {
    //         setTimeout(() => {
    //           this.setState({
    //             notice: 'The combination of username and password is incorrect!',
    //           });
    //         }, 500);
    //       }
    //     }
    //   );
    // }
  };
  onTabChange = key => {
    this.setState({
      type: key,
    });
  };
  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };
  render() {
    return (
      <div className="login-wrap">
        <div className="padding"> </div>
        <Row align="center" >
          <Col >
            <Card title="Login" style={{ textAlign: 'center', width: 400 }}>
              <Input size="large" placeholder="username" prefix={<UserOutlined />} />
              <Input size="large" placeholder="userpassward"  prefix={<LockOutlined />}/>
              <Button className="btn" type="primary" size={"large"} style={{ margin: 8 }} onClick={this.onSubmit}>
                Login
              </Button>
              <Button className="btn" type="primary" size={"large"} style={{ margin: 8 }}>
                Sign up
              </Button>
              <br/>
              <a className="forget">Don't remember the password?</a>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}



export default Loginview;