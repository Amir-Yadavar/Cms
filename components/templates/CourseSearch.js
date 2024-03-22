import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import styles from "@/styles/Course.module.css";
import { useState } from "react";

const Course = (props) => {
  const [allCourse, setAllCourse] = useState([...props.dataCourse])

  const getCourse = async () => {
    const res = await fetch("/api/course")
    const result = await res.json(res)
    if (res.status === 200) {

      setAllCourse(result)
    }
  }

  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>نتیجه :</h2>

        </div>
        <ul className={styles.courses_list}>
          {allCourse && (
            allCourse.map(item => (
              <CoursesItem {...item} key={item._id} getCourse={getCourse} />

            ))
          )}
          {/* <CoursesItem title="test"/> */}

        </ul>
      </section>


    </>
  );
};

export default Course;
