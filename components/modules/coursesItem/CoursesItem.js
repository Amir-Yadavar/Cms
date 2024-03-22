import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import { useState } from "react";
import styles from "@/styles/Course.module.css";
import { useRouter } from "next/router";
const CoursesItem = ({ title, _id, getCourse }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideEditModal = () => setShowEditModal(false);
  const hideDeleteModal = () => setShowDeleteModal(false);

  const rout = useRouter()
  // btnDeleteCourseHandler
  const btnDeleteCourseHandler = () => {
    // rout.push("/")
    setShowDeleteModal(true)
    console.log(_id);//body
  }

  // btnEditCourseHandler
  const btnEditCourseHandler =  () => {
    // await rout.push("/")
    setShowEditModal(true)
  }

  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            // src={image}
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={btnEditCourseHandler}
          >
            {" "}
            ویرایش{" "}
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={btnDeleteCourseHandler}
          >
            {" "}
            حذف{" "}
          </a>
        </div>
      </li >
      {showEditModal && <EditModal hideEditModal={hideEditModal} id={_id} getCourse={getCourse} />
      }
      {showDeleteModal && <DeleteModal hideDeleteModal={hideDeleteModal} id={_id} getCourse={getCourse} />}
    </>
  );
};

export default CoursesItem;
