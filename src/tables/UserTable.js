import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
     {props.students.length > 0 ? (
      props.students.map((student) =>(

        <tr>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>
            <button className="button muted-button" onClick={() => {
              props.editRow(student)
            }}>Edit</button>
            <button className="button muted-button" onClick={() => props.deleteStudents(student.id)}>Delete</button>
          </td>
        </tr>
      ))
         
       ) : (

          <tr>
            <td colSpan={3}>No users</td>
          </tr>

       )

     }
     
    </tbody>
  </table>
)

export default UserTable