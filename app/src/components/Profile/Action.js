const checkIdentity = (infos) => {
    if (infos.state.isVisiter){
        alert('You cannot edit information of other users.')
    }
    return !infos.state.isVisiter
}

export const setUserName = (infos, newName) => {
    if (checkIdentity(infos)){
        if (newName === "") {
            alert("Please enter a non-empty name")
        } else {
            infos.setState({name: newName})
        }
    }
}   

export const setMajor = (infos, newMajor) => {
    if (checkIdentity(infos)){
        if (newMajor === "") {
            alert("Please enter a non-empty specialist/major name")
        } else {
            infos.setState({major: newMajor})
        }
    }
}

export const setEmail = (infos, newEmail) => {
    if (checkIdentity(infos)){
        if (newEmail === "") {
            alert("Please enter a non-empty email address")
        } else if(!newEmail.includes('@')) {
            alert("Please enter a valid email address")
        } else {
            infos.setState({email: newEmail})
        }
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

export const sendComment = (card, exp) => {
    if ((card.state.newComment).length > 50) {
        alert("please send a comment with less than 50 characters")
    } else {
        const newComment = {
            commenter:"commenter",
            content:card.state.newComment,
        }
        const comments = exp.comments;
        comments.push(newComment)
        exp.comments = comments;
        card.setState({newComment: card.state.newComment})
    }
}

export const removeComment = (infos, exp, comment) => {
    if (checkIdentity(infos)){
        const filteredComments = exp.comments.filter(c => {
            return c !== comment;
        });
        exp.comments = filteredComments
        infos.setState({exps: infos.state.exps})
    }
}

export const edit = (infos, card) =>{
    if (checkIdentity(infos)){
        card.setState({isEditing: true});
    }
}

export const saveCourse = (card, course) => {
    card.setState({isEditing: false});
    course.courseName = card.state.newCourseName
    course.department = card.state.newDepartment
    if ((card.state.newDescription).length > 16) {
        alert("please enter a description with less than 16 characters")
    } else {
        course.description = card.state.newDescription
    }
    course.image = card.state.newImg
}

export const addCourse = (infos, img) => {

    if(checkIdentity(infos)){
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
    });}
};


export const removeCourse = (infos, course,card) => {
    if (checkIdentity(infos)){
    // filters out the student we don't want.
    card.setState({isEditing:false})
    const filteredCourses = infos.state.courses.filter(c => {
        return c !== course;
    });
    infos.setState({
        courses: filteredCourses
    });}
}


export const saveTeam = (card, team) => {
    card.setState({isEditing: false});
    team.teamName = card.state.newTeamName
    if ((card.state.newDescription).length > 16) {
        alert("please enter a description with less than 16 characters")
    } else {
        team.description = card.state.newDescription
    }
    team.image = card.state.newImg
}


export const addTeam = (infos, img) => {
    if (checkIdentity(infos)){
    // filters out the student we don't want.
    let teams = infos.state.teams
     teams.push({
        teamName: 'new team name',
        description: 'This is a description',
        image: img,
    })
    infos.setState({
        teams: teams
    });}
};


export const removeTeam = (infos, team,card) => {
    if (checkIdentity(infos)){
    // filters out the student we don't want.
    card.setState({isEditing:false})
    const filteredTeams = infos.state.teams.filter(c => {
        return c !== team;
    });
    infos.setState({
        teams: filteredTeams
    });}
};


export const saveExp = (card, exp) => {
    card.setState({isEditing: false});
    exp.expName = card.state.newExpName
    exp.description = card.state.newDescription
    exp.image = card.state.newImg
};


export const addExperience = (infos, img) => {
    if (checkIdentity(infos)){
    // filters out the student we don't want.
    let exps = infos.state.exps
     exps.push({
        expName: 'new exp name',
        description: 'This is a description',
        image: img,
    })
    infos.setState({
        exps: exps
    });}
};


export const removeExp = (infos, exp,card) => {
    if (checkIdentity(infos)){
    // filters out the student we don't want.
    card.setState({isEditing:false})
    const filteredExps = infos.state.exps.filter(c => {
        return c !== exp;
    });
    infos.setState({
        exps: filteredExps
    });}
};
