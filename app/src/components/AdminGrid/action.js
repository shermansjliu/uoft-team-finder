const log = console.log

export const removeCourse = (page, course,card) => {
    log(course)
    // filters out the student we don't want.
    card.setState({isEditing:false})
    const filteredCourses = page.state.courses.filter(c => {
        return c !== course;
    });
    log(filteredCourses)
    page.setState({
        courses: filteredCourses
    });
};

export const addCourse = (page, img) => {

    // filters out the student we don't want.
    let courses = page.state.courses
     courses.push({
        courseName: 'new course name',
        department: 'department',
        description: 'This is a description',
        image: img,
    })
    page.setState({
        courses: courses
    });
};

export const edit = (card) =>{
    console.log(card.state);
    card.setState({isEditing: true});
}

export const save = (card, course) => {
    console.log(card.state);
    card.setState({isEditing: false});
    course.courseName = card.state.newCourseName
    course.department = card.state.newDepartment
    course.description = card.state.newDescription
    course.image = card.state.newImg
    console.log(card.state);
}

export const onSearch = (page, value) =>{
    console.log("onSearch");
    const courses = page.state.courses
    const filteredCourses = courses.filter(course => {
        return course.courseName.includes(value)})
    page.setState({displayedCourses: filteredCourses})
}