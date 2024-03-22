import Course from "@/components/templates/CourseSearch";
import courseModel from "@/models/course";
import connectToDb from "@/utils/db";

const index = ({ courses }) => {
    // console.log(courses);
    return <Course dataCourse={courses} />;
};

export async function getServerSideProps(context) {
    connectToDb()
    const { query } = context
    console.log(context);
    const courses = await courseModel.find({ title: { $regex: query.q } })

    // console.log(courses);
    return {
        props: {
            courses: JSON.parse(JSON.stringify(courses))
        }
    }
}

export default index;
