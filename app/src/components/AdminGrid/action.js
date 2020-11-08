

const log = console.log
export const removeCourse = (page, course) => {
    log(course)

    // filters out the student we don't want.
    const filteredCourses = page.state.courses.filter(c => {
        return c !== course;
    });

    log(filteredCourses)

    page.setState({
        courses: filteredCourses
    });
};

export const addCourse = (page) => {

    // filters out the student we don't want.
    let courses = page.state.courses
    courses.push({
        courseName: 'new course name',
        department: 'department',
        description: 'This is a description',
        image: "",
    })


    page.setState({
        courses: courses
    });
};

export const editCourse = (page, oldCourse, newCourse) => {


    // filters out the student we don't want.
    oldCourse.courseName = newCourse.courseName;

    log("page:", page.state)

    // page.setState({
    //     courses: filteredCourses
    // });
};