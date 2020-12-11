// Send a request to check if a user is logged in through the session cookie
export const checkSession = (app) => {
    const url = "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser , admin: json.currentUser});
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const getAllUsers = (field) => {
    const new_request = new Request("/api/users", {
        method: "get",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(new_request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            field.setState({users: json})
        })
        .catch(error => {
            console.log(error);
            return []
        });
};

