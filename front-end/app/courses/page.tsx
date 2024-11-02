


interface Course {
    _id: string | number;
    name: string;
}

const CoursesPage = async () => {

    const getAllCourse = async () => {
        const data = await fetch("http://localhost:3000/api/mycourses")
        const res = await data.json()
        return res
    }


    const data = await getAllCourse()


    return (
        <section>
            <h1>ALl courses are here</h1>
            <ul>
                {
                    data?.result?.map((course: Course) => (
                        <li key={course._id}>{course.name}</li>
                    ))
                }

            </ul>
        </section>
    );
}

export default CoursesPage;