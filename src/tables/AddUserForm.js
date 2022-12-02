import React, { useState } from 'react'
import { useForm } from "react-hook-form";


const AddStudentForm = (props) => {
  const initialFormState = { id: null, name: '', age: '' }
  const [student, setStudents] = useState(initialFormState)

  // handle value of input field
  const handleInputChange = (event) => {
    const { name, value } = event.target


    setStudents({ ...student, [name]: value })
  }

  // validate for form
  const { register, handleSubmit, formState: { errors } } = useForm({
      criteriaMode: "all"
  });

  console.log(register)



  return (
    <form onSubmit={(event) => {
        // validation to make sure empty values cannot be submitted the set student will reset its initial value after successful submission
        event.preventDefault()
        if (!student.name || !student.age) return

        props.addUser(student)
        setStudents(initialFormState)
      }}>

      <label>Name</label>

      <input type="text" name="name" value={student.name}
       onChange={handleInputChange} {...register("exampleRequired", { required: true })}/>

       {errors.exampleRequired && <span>This field is required</span>}
      <label>Age</label>

      <input type="text" name="age" value={student.age}  onChange={handleInputChange}/>
      <button>Add new student</button>
    </form>
  )
}

export default AddStudentForm