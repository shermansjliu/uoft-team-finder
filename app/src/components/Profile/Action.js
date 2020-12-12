const log = console.log

const checkIdentity = (infos) => {
    // if (infos.state.username === app.currentUser.username){
    //     alert('You cannot edit information of other users.')
    // }
    // return !infos.state.isVisiter
    return true
}

export const setUserName = (infos, newName) => {
    if (checkIdentity(infos)){
        if (newName === "") {
            alert("Please enter a non-empty name")
        } else {
            const username = infos.state.username
            const user = {
                username: newName
            }
            // Create our request constructor with all the parameters we need
            const new_request = new Request("/api/users/" + username, {
                method: "put",
                body: JSON.stringify(user),
                headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
                }
            });
            // Send the request with fetch()
            fetch(new_request).then(res => {
                // console.log(res.status)
                if (res.status === 200) {
                return res.json();
                }else{
                throw new Error("Failed to change username");
                }
            }).then(json => {
                    infos.setState({username: newName})
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}   

export const setMajor = (infos, newMajor) => {
    if (checkIdentity(infos)){
        if (newMajor === "") {
            alert("Please enter a non-empty specialist/major name")
        } else {
            const username = infos.state.username
            const user = {
                major: newMajor
            }
            // Create our request constructor with all the parameters we need
            const new_request = new Request("/api/users/" + username, {
                method: "put",
                body: JSON.stringify(user),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            });
            // Send the request with fetch()
            fetch(new_request).then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    return res.json();
                }else{
                    throw new Error("Failed to change username");
                }
            })
                .then(json => {
                    infos.setState({major: newMajor})
                })
                .catch(error => {
                    console.log(error);
                });
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
            const username = infos.state.username
            const user = {
                email: newEmail
            }
            // Create our request constructor with all the parameters we need
            const new_request = new Request("/api/users/" + username, {
                method: "put",
                body: JSON.stringify(user),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            });
            // Send the request with fetch()
            fetch(new_request).then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    return res.json();
                }else{
                    throw new Error("Failed to change username");
                }
            })
                .then(json => {
                    infos.setState({email: newEmail})
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}   

export const setDescription = (infos, newDescription) => {
        if (newDescription === "") {
            alert("Please enter a non-empty description")
        } else {
            const username = infos.state.username
            const user = {
                description: newDescription
            }
            console.log(newDescription)
            // Create our request constructor with all the parameters we need
            const new_request = new Request("/api/users/" + username, {
                method: "put",
                body: JSON.stringify(user),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            });
            // Send the request with fetch()
            fetch(new_request).then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    return res.json();
                }else{
                    throw new Error("Failed to change username");
                }
            })
                .then(json => {
                    infos.setState({description: newDescription})
                })
                .catch(error => {
                    console.log(error);
                });
        }
}

export const setYear = (infos, newYear) => {
    const username = infos.state.username
    console.log(newYear)
    const user = {
        year: newYear
    }
    console.log(user)
    // Create our request constructor with all the parameters we need
    const new_request = new Request("/api/users/" + username, {
        method: "put",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    // Send the request with fetch()
    fetch(new_request).then(res => {
        console.log(res.status)
        if (res.status === 200) {
            return res.json();
        }else{
            throw new Error("Failed to change username");
        }
    })
        .then(json => {
            infos.setState({year: newYear})
        })
        .catch(error => {
            console.log(error);
        });
}

export const setGPA = (infos, newGPA) => {
    const username = infos.state.username
    const user = {
        cGPA: newGPA
    }
    // Create our request constructor with all the parameters we need
    const new_request = new Request("/api/users/" + username, {
        method: "put",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    // Send the request with fetch()
    fetch(new_request).then(res => {
        console.log(res.status)
        if (res.status === 200) {
            return res.json();
        }else{
            throw new Error("Failed to change username");
        }
    })
        .then(json => {
            infos.setState({cGPA: newGPA})
        })
        .catch(error => {
            console.log(error);
        });
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
    course.courseCode = card.state.newCourseName
    if ((card.state.newDescription).length > 16) {
        alert("please enter a description with less than 16 characters")
    } else {
        course.description = card.state.newDescription
    }
    course.image = card.state.newImg
}

export const addCourse = (infos, img) => {

    if(checkIdentity(infos)){
    const course =  {
            courseCode: 'new course name',
            description: 'This is a description',
        }
    // filters out the student we don't want.
    let courses = infos.state.courses
    courses.push(course)
        const username = infos.state.username
        const user = {
            courses: courses
        }
        // Create our request constructor with all the parameters we need
        const new_request = new Request("/api/users/" + username, {
            method: "put",
            body: JSON.stringify(user),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
        // Send the request with fetch()
        fetch(new_request).then(res => {
            // console.log(res.status)
            if (res.status === 200) {
                return res.json();
            }else{
                throw new Error("Failed to add a course");
            }
        }).then(json => {
            infos.setState({courses: courses})
        }).catch(error => {
                console.log(error);
            });
    }
};


export const removeCourse = (infos, course,card) => {
    if (checkIdentity(infos)){
    // filters out the student we don't want.
    card.setState({isEditing:false})
    const filteredCourses = infos.state.courses.filter(c => {
        return c !== course;
    });
        const username = infos.state.username
        const user = {
            courses: filteredCourses
        }
        // Create our request constructor with all the parameters we need
        const new_request = new Request("/api/users/" + username, {
            method: "put",
            body: JSON.stringify(user),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
        // Send the request with fetch()
        fetch(new_request).then(res => {
            // console.log(res.status)
            if (res.status === 200) {
                return res.json();
            }else{
                throw new Error("Failed to remove a course");
            }
        }).then(json => {
            infos.setState({courses: filteredCourses})
        }).catch(error => {
            console.log(error);
        });
    }
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
        const username = infos.state.username
        const user = {
            teams: teams
        }
        // Create our request constructor with all the parameters we need
        const new_request = new Request("/api/users/" + username, {
            method: "put",
            body: JSON.stringify(user),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
        // Send the request with fetch()
        fetch(new_request).then(res => {
            // console.log(res.status)
            if (res.status === 200) {
                return res.json();
            }else{
                throw new Error("Failed to add a course");
            }
        }).then(json => {
            infos.setState({teams: teams})
        }).catch(error => {
            console.log(error);
        });

}}

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


export const initialize = async (username, infos) => {
    console.log('=============================== PROFILE =============================');
    const new_request = new Request("/api/users/" + username, {
        method: "get",
        headers: {
           Accept: "application/json, text/plain, */*",
           "Content-Type": "application/json"
         }
       });
       // Send the request with fetch()
    await  fetch(new_request).then(res => {
         console.log(res.status)
         if (res.status === 200) {
           return res.json();
         }else{
           throw new Error("Failed to get the user");
         }
       }).then(json => {
            const user = json[0]
            infos.setState({username: user.username})
            infos.setState({courses: user.courses})
            infos.setState({email: user.email})
            infos.setState({exps: user.exps})
            infos.setState({teams: user.teams})
            infos.setState({year: user.year})
            infos.setState({cGPA: user.cGPA})
            infos.setState({description: user.description})
            infos.setState({major: user.major})
            // infos.email = user,
            // name:"",
            // major:"",
            // description:"Write something about you!",
            // year:"3",
            // cGPA:"",
            // courses: [],
            // teams:[],
            // exps:[]
           })
           .catch(error => {
             console.log(error);
           });
}