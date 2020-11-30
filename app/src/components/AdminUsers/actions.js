
export const changePassword = (record) => {
    let newPassword = prompt('Please Enter new password for this user')
    if (newPassword){
        record.password = newPassword
    }
    console.log("password changed",record)
}

export const  deleteUser = (record, page) => {
    const filteredDate = page.state.data.filter((item) => {
        return item.username !== record.username
    })
    page.setState({data:filteredDate})
    console.log("deleteUser",record.username)
}