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


export const edit = (card) =>{
    card.setState({isEditing: true});
}

export const saveCourse = (card, course) => {
    card.setState({isEditing: false});
    course.courseName = card.state.newCourseName
    course.department = card.state.newDepartment
    course.description = card.state.newDescription
    course.image = card.state.newImg
}

export const addCourse = (infos, img) => {

    // filters out the student we don't want.
    let courses = infos.state.courses
     courses.push({
        courseName: 'new course name',
        department: 'department',
        description: 'This is a description',
        image: img,
    })
    infos.setState({
        courses: courses
    });
};


export const removeCourse = (page, course,card) => {
    // filters out the student we don't want.
    card.setState({isEditing:false})
    const filteredCourses = page.state.courses.filter(c => {
        return c !== course;
    });
    page.setState({
        courses: filteredCourses
    });
}


export const saveTeam = (card, team) => {
    card.setState({isEditing: false});
    team.teamName = card.state.newTeamName
    team.description = card.state.newDescription
    team.image = card.state.newImg
}


export const addTeam = (infos, img) => {
    // filters out the student we don't want.
    let teams = infos.state.teams
     teams.push({
        teamName: 'new team name',
        description: 'This is a description',
        image: img,
    })
    infos.setState({
        teams: teams
    });
};


export const removeTeam = (page, team,card) => {
    // filters out the student we don't want.
    card.setState({isEditing:false})
    const filteredTeams = page.state.teams.filter(c => {
        return c !== team;
    });
    page.setState({
        teams: filteredTeams
    });
};


export const saveExp = (card, exp) => {
    card.setState({isEditing: false});
    exp.expName = card.state.newExpName
    exp.description = card.state.newDescription
    exp.image = card.state.newImg
};


export const addExperience = (infos, img) => {

    // filters out the student we don't want.
    let exps = infos.state.exps
     exps.push({
        expName: 'new exp name',
        description: 'This is a description',
        image: img,
    })
    infos.setState({
        exps: exps
    });
};


export const removeExp = (page, exp,card) => {
    // filters out the student we don't want.
    card.setState({isEditing:false})
    const filteredExps = page.state.exps.filter(c => {
        return c !== exp;
    });
    page.setState({
        exps: filteredExps
    });
};