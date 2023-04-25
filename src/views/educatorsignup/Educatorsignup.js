import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import "../../css/aos.css"
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Crumbs from '../../component/Crumbs/Crumbs'
import educatorsemi from "../../assets/img/study/educator-semi.svg"


import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function Educatorsignup() {

    const initialValues = {  email: "", password: "",confirmpassword : "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const Navigate = useNavigate()

    
    const field = {
      type : "Educator Register",
      content : "Socially Purpose Driven Business Providing A Next Generation Learning as a Service Platform (GRIT LaaS)",
      route : [{name : "Home",route : "/home"},{name: "Lass",route :"/home"},{name: "Login",route :"/home"}]
    }
 
 useEffect(()=>{
 console.clear()
 },[])
    const handleChange = (e) => {
       const { name, value } = e.target;
       setFormValues({ ...formValues, [name]: value });
     };

     useEffect(() => {
      var data = {
         "userId": 10007,
         "firstName": "Mohit",
         "lastName": "Roy",
         "email": "mr@gritdigitech.com",
         "phone": "9884033102",
         "age": "38",
         "educationType": "BE",
         "password": "mr@123",
         "role": "Student"
     }
 axios.post("https://44.202.89.70:8989/api/createUser", data)
 .then((res)=>{
   console.log(res)
   toast.success("Signed up successfully")
 })
 .catch((err)=>{
   console.log(err)
 })

//  axios.get("http://44.202.89.70:8989/api/getAllCourse")
//  .then((res)=>{
   
//  })
     }, [])
     
 
 
     const handleSubmit = (e) => {
       e.preventDefault();
 
       let error  = validate(formValues)
 
       if(Object.keys(error).length === 0){
         var data ={
            "userId": 10007,
            "firstName": "Mohit",
            "lastName": "Roy",
            "email": formValues.email,
            "phone": "9884033102",
            "age": "38",
            "educationType": "BE",
            "password": formValues.password ,
            "role": "Student"
        }
        console.log(formValues)

        axios.post("http://44.202.89.70:8989/api/createUser",data)
        .then((res)=>{
         console.log(res)
         
         setFormValues(initialValues);
         setFormErrors({})
toast.success(res.data)
      })
        .catch((err)=>{
         toast.error("Somethign went wrong")
         console.log(err)
        })       }
       else{
          setFormErrors(validate(formValues));
 
       }
       // setIsSubmit(true);
     };
   
 
     const validate = (values) => {
       const errors = {};
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     
       if (!values.email) {
         errors.email = "Email is required!";
       } else if (!regex.test(values.email)) {
         errors.email = "This is not a valid email format!";
       }
       if (!values.password) {
         errors.password = "Password is required";
       } else if (values.password.length < 4) {
         errors.password = "Password must be more than 4 characters";
       } else if (values.password.length > 10) {
         errors.password = "Password cannot exceed more than 10 characters";
       }
       return errors;
     };

  return (
    <> 
     <Header/>

     <Crumbs data={field}/>


      <main id="main">
         <section id="login" className="login">
            <div className="container" >
               <div className="row gy-5 banner-wrap" >
                  <div className="col-lg-6 text-center">
                     <img src={educatorsemi } className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-6 ps-0 ps-lg-5 d-flex flex-column  relative  text-lg-start">
                     <div className="login-wrap p-4 p-md-5">
                        <div className="form-title">
                           <h3 className="mb-2 primary-color">Let's Create an Account!!</h3>
                           {/* <p className="mb-4">Please enter your email and password</p> */}
                        </div>
                        <form id="studentform" name="signform" className="signin-form" >
                           <div className="form-group mt-3">
                              <input type="text" autoComplete className="form-control" onChange={handleChange} name="email" value={formValues.email} placeholder="Email" required/>
                              <p className="text-danger">{formErrors.email}</p>

                           </div>
                           <div className="form-group mt-3">
                              <input type="text" autoComplete className="form-control" onChange={handleChange} name="password" value={formValues.password} placeholder="password" required/>
                              <p className="text-danger">{formErrors.password}</p>

                           </div>
                           <div className="form-group">
                              <input id="password-field" autoComplete  name="confirmpassword" type="password" onChange={handleChange} className="form-control" value={formValues.confirmpassword} placeholder="confirm password" required/>
                              <p className="text-danger">{formErrors.confirmpassword}</p>

                    <span toggle= "#password-field" className="bi bi-eye field-icon toggle-password" ></span>
                           </div>
				
                           <div className="form-group">
                              <button type="submit" onClick={(e)=>handleSubmit(e)} className="form-control btn btn-primary rounded submit px-3">Sign up</button>
                           </div>
                           <div className="form-group d-md-flex">
                              {/* <div className="w-50 text-left">
                                 <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                 <input type="checkbox" checked/>
                                 <span className="checkmark"></span>
                                 </label>
                              </div> */}
                              {/* <div className="w-50 d-flex justify-content-end">
                                 <a href="#">Forgot Password</a>
                              </div> */}
                           </div>
                        </form>
                        <p className="text-center mb-0" onClick={()=>Navigate("/educatorlogin")}>Already ! Have an Account  <a data-toggle="tab" href="#">Login</a></p>
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>


     <Footer/>


     </>  
  )
}

export default Educatorsignup