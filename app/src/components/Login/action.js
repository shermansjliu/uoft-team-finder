const log = console.log;

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
    if (userList.some(u => u.username === user.username)) {
        failed = true;
        emsg = "The username is already token. Try another name!"
    } else if (user.password.length < 6) {
        failed = true;
        emsg = "The password length must greater than 6."
    }
    if (failed) {
        log("failed");
        request.setState({
            msg: "Failed to register:" + emsg,
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
            if (u.admin) {
                // go to admin
                request.props.history.push({
                    pathname: '/Admin',
                    state: {
                        user: u
                    }
                })
            } else {
                // go to home
                request.props.history.push({
                    pathname: '/Home',
                    state: {
                        user: u
                    }
                })
            }

        }
    })
    log("failed to login");
    request.setState({
        users: userList,
        msg: "Invalid username or password.",
        msgColor: "red"
    });
}


export const forgetPWD = request => {
    // reset the msg
    request.setState({
        msg: ""
    });
    log("forgetPWD");
    let findPasword = false;
    const userList = request.state.users;
    const user = {
        username: request.state.userName,
        password: request.state.userPassword,
    };

    userList.map(u => {
        if (u.username === user.username ) {
            request.setState({user: u});
            if (u.admin) {
                // admin cannot forget password, and we don't want user know this is admin id
            } else {
                // tell them name directly for now
                findPasword = true;
                request.setState({
                    msg: "We found your password! Your password is:   " + [u.password],
                    msgColor: "green"
                });
            }

        }
    })
    if (! findPasword) {
        request.setState({
            msg: "Invalid username. Oh, Dear! Feels bad if you cannot even remember your user id!",
            msgColor: "red"
        });
    }
}

