import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddStudentForm from './tables/AddUserForm'
import EditStudentsForm from './tables/EditUserForm'
const App = () => {

  // Data
  const studentData = [
      { id: 1, name: 'Jayson', age: 13 },
      { id: 2, name: 'Jayson Vo', age: 13 },
      { id: 3, name: 'Tien Dat', age: 13 },
    ]

  const [students, setStudents] = useState(studentData)

  // Add New Student
  const addStudent = (student) => {
    student.id = students.length + 1
    setStudents([...students, student])
  }

  // Delete Student
  const deleteStudents = (id) => {
    setStudents(students.filter((student) => student.id !== id))
  }

  // Update Student
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', age: '' }
  const [currentStudent, setCurrentStudent] = useState(initialFormState)

  const editRow = (student) => {
      setEditing(true)
      setCurrentStudent({ id: student.id, name: student.name, age: student.age })

    }

  const updatedStudent = (id, updatedStudent) => {
      setEditing(false)
      setStudents(students.map((student) => (student.id === id ? updatedStudent : student)))
    }





  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
            {editing ? (
              <div>
                <h2>Edit user</h2>
                <EditStudentsForm
                  setEditing={setEditing}
                  currentStudent={currentStudent}
                  updatedStudent={updatedStudent}
                />
              </div>
            ) : (
              <div>
                <h2>Add student</h2>
                <AddStudentForm addUser={addStudent} />
              </div>

            )}
        </div>
        <div className="flex-large">
          <h2>View student</h2>
          <UserTable students={students}  deleteStudents={deleteStudents} editRow={editRow}/>

        

        </div>
      </div>
    </div>  
  )
}

export default App