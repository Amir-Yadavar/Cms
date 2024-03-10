import Course from "@/components/templates/index/Course";
import courseModel from "@/models/course";
import connectToDb from "@/utils/db";

const index = ({ courses }) => {
  // console.log(courses);
  return <Course dataCourse={courses} />;
};

export async function getStaticProps(context) {
  connectToDb()

  const courses = await courseModel.find({})

  // console.log(courses);
  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses))
    },
    revalidate: 60 * 60 * 12
  }
}

export default index;
