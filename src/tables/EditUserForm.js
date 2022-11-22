import React, { useState, useEffect } from 'react'

const EditStudentsForm = (props) => {
  const [student, setStudents] = useState(props.currentStudent)
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setStudents({ ...student, [name]: value })

  }

    useEffect(() => {
		  setStudents(props.currentStudent)
}, [props])


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updatedStudent(student.id, student)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleInputChange}
      />
      <label>age</label>
      <input
        type="text"
        name="age"
        value={student.age}
        onChange={handleInputChange}
      />
      <button>Update student</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditStudentsForm