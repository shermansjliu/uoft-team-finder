import {getAllUsers} from "../../actions/users";

export const changePassword = (record) => {
    console.log(record);
    let newPassword = prompt('Please Enter new password for this user')
    if (!newPassword) {
        console.log('cancelled')
        return}
    const username = record.username;
    const new_user = {
        password: newPassword
    }
    const new_request = new Request('/api/changePassword/' + username, {
        method: "put",
        body: JSON.stringify(new_user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(new_request).then(res => {
        console.log(res.status)
        if (res.status === 200) {
            console.log('Password Changed!')
            return res.json();
        }else{
            throw new Error("Failed to change password");
        }
    }).catch(error => {
        console.log(error);
        prompt(error)
    });
}

export const changeUsernameAdmin = (record) => {
    console.log(record);
    let newUsername = prompt('Please Enter new Username for this user')
    if (!newUsername) {
        console.log('cancelled')
        return}
    const username = record.username;
    const new_user = {
        username: newUsername
    }
    const new_request = new Request('/api/changePassword/' + username, {
        method: "put",
        body: JSON.stringify(new_user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(new_request).then(res => {
        console.log(res.status)
        if (res.status === 200) {
            console.log('Password Changed!')
            return res.json();
        }else{
            throw new Error("Failed to change Username");
        }
    }).catch(error => {
        console.log(error);
        prompt(error)
    });
}

export const  deleteUser = (record, page) => {
    const username = record.username
    const new_request = new Request('/api/users/' + username, {
        method: "delete",
        body: "",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(new_request).then(res => {
        console.log(res.status)
        if (res.status === 200) {
            console.log('User Deleted!')
            return res.json();
        }else{
            throw new Error("Failed ");
        }
    }).catch(error => {
        console.log(error);
    });
    getAllUsers(page);
    // const filteredDate = page.state.data.filter((item) => {
    //     return item.username !== record.username
    // })
    // page.setState({data:filteredDate})
    // console.log("deleteUser",record.username)
}