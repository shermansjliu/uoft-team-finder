
const log =  console.log;

export const register = request => {
    request.setState({
        msg: ""
    });
    log("register");
    log(request);
    const userList = request.state.users;

    const user = {
        username: request.state.userName,
        password: request.state.userPassword,
        admin: false
    };
    let failed = false;
    let emsg = "";
    if (userList.some(u => u.username === user.username)){
        failed = true;
        emsg = "The username is already token. Try another name!"
    }else if(user.password.length < 6) {
        failed = true;
        emsg = "The password length must greater than 6."
    }
    if (failed){
        log("failed");
        request.setState({
            msg: "failed to register:" + emsg,
            msgColor: "red"
        });
    } else {
        log("register success");
        userList.push(user);
        request.setState({
            users: userList,
            msg: "Signed up Successfully! Click Login to login.",
            msgColor: "green"
        });
    }
};

export const login = request => {
    request.setState({
        msg: ""
    });


    log("login");
    const userList = request.state.users;
    const user = {
        username: request.state.userName,
        password: request.state.userPassword,
    };

    userList.map(u => {
        if (u.username === user.username && u.password === user.password) {
            request.setState({user: u});
            if(u.admin){
                // go to admin
                window.location = "./Admin";
            }else{
                // go to home
                window.location = "./Home";
            }

        }
    })
     log("failed to login");

};
