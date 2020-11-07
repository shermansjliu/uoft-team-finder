export const setUserName = (infos, newName) => {
    if (newName === "") {
        alert("Please enter a non-empty name")
    } else {
        infos.setState({name: newName})
    }
}   

export const setMajor = (infos, newMajor) => {
    if (newMajor === "") {
        alert("Please enter a non-empty specialist/major name")
    } else {
        infos.setState({major: newMajor})
    }
}

export const setDescription = (infos, newDescription) => {
    if (newDescription === "") {
        alert("Please enter a non-empty description")
    } else {
        infos.setState({description: newDescription})
    }
}

export const setYear = (infos, newYear) => {
    infos.setState({year: newYear})
}

export const setGPA = (infos, newGPA) => {
    infos.setState({cGPA: newGPA})
}
