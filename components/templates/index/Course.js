import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Course = (props) => {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const hideAddCourseModal = () => setShowAddCourseModal(false);
  // console.log(props.dataCourse);

  const [allCourse, setAllCourse] = useState([...props.dataCourse])
  //  get course

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
          <h2 className={styles.courses_title}>دوره ها</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            اضافه کردن دوره جدید
          </a>
        </div>
        <ul className={styles.courses_list}>
          {allCourse && (
            allCourse.map(item => (
              <CoursesItem {...item} key={item._id} getCourse={getCourse}/>

            ))
          )}

        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal hideAddCourseModal={hideAddCourseModal} getCourse={getCourse} />
      )}
    </>
  );
};

export default Course;
