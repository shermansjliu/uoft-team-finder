import bkimg from "../../img/home-books.jpg";

const log = console.log

export const removeCourse = (page, course,card) => {
    log(course)
    const courseId = course._id
    // filters out the student we don't want.
    card.setState({isEditing:false})
    const url = '/api/courses/' + courseId
    const new_request = new Request(url, {
        method: "delete",
        body: "",
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
        }).then(json => {console.log(json)})
        .catch(error => {
            console.log(error);
        });
};

export const addCourse = (page, img) => {

    // filters out the student we don't want.

    const course = {
        courseCode: "new course name",
        description: "This is a description",
        teams:[]
    }
    const new_request = new Request("/api/courses", {
        method: "post",
        body: JSON.stringify(course),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(new_request).then(res => {
        console.log(res.status)
        if (res.status === 200) {
            return res.json();
        }else{
            throw new Error("Failed to add");
        }
    }).catch(error => {
            console.log(error);
        });
};

export const edit = (card) =>{
    console.log(card.state);
    card.setState({isEditing: true});
}

export const save = (card, course) => {
    console.log(card.state);
    card.setState({isEditing: false});
    const courseId = course._id
    const new_course = {
        courseCode: card.state.newCourseName,
        description: card.state.newDescription,
    }
    const new_request = new Request('/api/courses/' + courseId, {
        method: "put",
        body: JSON.stringify(new_course),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(new_request).then(res => {
        console.log(res.status)
        if (res.status === 200) {
            return res.json();
        }else{
            throw new Error("Failed to edit");
        }
    }).catch(error => {
        console.log(error);
    });
};

export const onSearch = (page, value) =>{
    log("onSearch");
    const courses = page.state.courses
    const filteredCourses = courses.filter(course => {
        return course.courseName.includes(value)})
    page.setState({displayedCourses: filteredCourses})
    log("result: ", filteredCourses)
}

export const getAllCourses = (field) => {
    const new_request = new Request("/api/courses", {
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
            const array = json.courses
            const allCourses = array.map(c => {c.image = bkimg; return c})
            field.setState({courses: allCourses})
        })
        .catch(error => {
            console.log(error);
            return []
        });
};