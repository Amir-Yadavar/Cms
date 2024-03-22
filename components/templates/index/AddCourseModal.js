import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faFile, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";
import swal from "sweetalert";

const AddCourseModal = ({ hideAddCourseModal, getCourse}) => {
    const [titleCourse, setTitleCourse] = useState("")


    // btnAddCourseHandler
    const btnAddCourseHandler = async (e) => {
        e.preventDefault()
        // const res = await fetch('/api/course')
        // const data = await res.json()
        // console.log(data);

        const res = await fetch('/api/course', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: titleCourse })
        })
        const data = await res.json()

        if (res.status === 201) {
            swal({
                title: "دوره با موفقیت ثبت شد",
                icon: "success",
                button: "حله"
            })
            getCourse()
            setTitleCourse("")
            hideAddCourseModal()
        }
       
    }

    return (
        <div className={styles.modal_container} id="add-new-course-modal">
            <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
            <div className={styles.modal_content}>

                <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
                <form action="#" className={styles.edit_user_form}>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag} /></span>
                        <input
                            type="text"
                            placeholder="نام دوره"
                            spellCheck="false"
                            value={titleCourse}
                            onChange={(e) => setTitleCourse(e.target.value)}
                        />
                    </div>
                    {/* <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faCashRegister} /> </span>
                        <input
                            type="text"
                            placeholder="قیمت دوره"
                            spellCheck="false"
                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <input
                            type="text"
                            placeholder="مدرس دوره"
                            spellcheck="false"
                        />
                    </div> */}
                    {/* <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faFile} /></span>
                        <input type="file" name="" id="" />
                    </div> */}

                    <button type="submit" className={styles.update_btn} onClick={btnAddCourseHandler}>
                        اپدیت دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCourseModal
