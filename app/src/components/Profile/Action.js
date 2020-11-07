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

export const removeCourse = (queue, course) => {
    // filters out the course we don't want.
    const filteredCourses = queue.state.courses.filter(s => {
      return s !== course;
    });
    queue.setState({
      courses: filteredCourses
    });
};

export const removeTeam = (queue, team) => {
    // filters out the team we don't want.
    const filteredTeams = queue.state.teams.filter(s => {
      return s !== team;
    });
    queue.setState({
      teams: filteredTeams
    });
};

export const removeExp = (queue, exp) => {
    // filters out the experience we don't want.
    const filteredExps = queue.state.exps.filter(s => {
      return s !== exp;
    });
    queue.setState({
      exps: filteredExps
    });
};

export const setExpContent = (infos, exp, newContent) => {
    if (newContent === "") {
        alert("Please enter a non-empty description")
    } else {
        const exps = infos.state.exps
        var index = exps.indexOf(exp);
        if (~index) {
            exp.content = newContent;
            exps[index] = exp;
            infos.setState({exps: exps})   
        }
    }
}