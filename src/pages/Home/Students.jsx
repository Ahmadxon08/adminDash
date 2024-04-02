/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Students = (props) => {
  const { students, showModal, setShowModal, deleteStudent, setSelectedId } =
    props;

  const handleDeleteStudent = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  return (
    <>
      <div className="body_data">
        {students &&
          students.map((student) => (
            <div className="data_row" key={student.id}>
              <span>{student.id}</span>
              <span>{student.firstName}</span>
              <span>{student.lastName}</span>
              <span>{student.age}</span>
              <span>{student.group}</span>
              <span className="btn0">
                <Link className="btn11" to={`/edit/${student.id}`}>
                  Edit
                </Link>

                <button
                  className="btn22"
                  onClick={() => handleDeleteStudent(student.id)}
                >
                  Delete
                </button>
              </span>
            </div>
          ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal_content">
            <h1>Delete Student</h1>
            <p>Are you sure you want to delete this student?</p>
            <div className="modal_btn">
              <button className="btn1" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="btn2" onClick={deleteStudent}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Students;
