import React from 'react'
import { useForm } from "react-hook-form";
import "./Contact.css";
import { json } from 'react-router';
import Header from "../../Components/Header/Header.jsx";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const getData = (info)=>{
    console.log(info);
    localStorage.setItem("userFeedback", JSON.stringify(info));
    reset();
  }

  return (
      <>
        <Header/>
    <div className="container">
      <div className='form-wrapper'>
      <form onSubmit={handleSubmit(getData)}>
        <h3>Feedback Form</h3>
      <input type='text' placeholder='enter your name' {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}
      
      <input placeholder='enter your email' {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}

      <textarea placeholder='comment...' {...register("comment", { required: true })}></textarea>
      {errors.comment && <span>This field is required</span>}
      
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
      </>
  )
}

export default Contact
