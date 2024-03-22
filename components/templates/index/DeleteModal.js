import styles from "@/styles/Modal.module.css";

const DeleteModal = ({ hideDeleteModal, id, getCourse }) => {
  console.log(id);

  // deleteCourseHandler
  const deleteCourseHandler = async () => {
    if (id) {
      const res = await fetch("/api/course", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          courseID: id
        })
      })
      const result = await res.json()
      hideDeleteModal()
      getCourse()
    }
  }
  return (
    <div className={styles.modal_container} id="delete-modal">
      <div className={styles.modal_bg} onClick={hideDeleteModal}></div>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>ایا از حذف دوره مطمئن هستید؟</h1>
        <div className={styles.btn_groups}>
          <button className={styles.accept_btn} onClick={deleteCourseHandler}>بله</button>
          <button className={styles.unaccept_btn} onClick={hideDeleteModal}>خیر</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
