import React, { useState } from 'react'
import InputField from '../components/InputField'
import CheckBox from '../components/CheckBox'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const SignUp = () => {
  const [iconVisibility, setIconVisibility] = useState(false);
  const [value, setvalue] = useState('');   

  const handleIconVisibility = () => {
    setIconVisibility(!iconVisibility)
  }

  return (
    <div className="w-full h-lvh  flex justify-center items-center bg-[#f2f7fb] p-[20px]">
      <div className='w-[550px] bg-white  rounded-[20px] p-8 flex flex-col gap-7'> 
        <div>
          <h3 className='text-2xl font-bold text-dreamless-sleep'>Create your account</h3>
          <p className='text-black-water'>Enter your personal details to create account</p>
        </div>
        <form className='flex flex-col gap-6'>

        

        <InputField label="Your username" 
          input={[
            { type:"text", name:"firstname", placeholder:'Enter your First Name', required:false},
            { type:"text", name:"lastname", placeholder:'Enter Last Name', required:true}
          ]}/>

        <InputField label="Email address" 
          input={[
            { type:"email", name:"email", placeholder:'Enter your email address', required:true},                       
          ]}/>

        <InputField label="Password" 
            input={[
              { type:"password", name:"password", placeholder:'Enter your password', required:true},           
            ]}/>
            
        <InputField label="Confirm password" 
        input={[
          { type:"password", name:"confrimpassword", placeholder:'Retype your password', required:true},           
        ]}/>



        {  /* 
          <fieldset className='flex flex-col '>
              <label className='mb-10 font-bold text-sm'>Password <span className='text-red-600'>*</span></label>
              <input className='input-custom' type={iconVisibility ? 'text' : 'password' } name="password" placeholder='Enter your password' value={value}  onChange={(e) => setvalue(e.target.value)}  />
              <div onClick={handleIconVisibility}>
                { iconVisibility ?  <IoMdEye />  : <IoMdEyeOff /> }
              </div>
             
          </fieldset>

          
          <fieldset className='flex flex-col '>
              <label className='mb-10 font-bold text-sm'>Password <span className='text-red-600'>*</span></label>
              <input className='input-custom' type={iconVisibility ? 'text' : 'password' } name="retype-password" placeholder='Enter your password' value={value}  onChange={(e) => setvalue(e.target.value)}  />
              <div onClick={handleIconVisibility}>
                { iconVisibility ?  <IoMdEye />  : <IoMdEyeOff /> }
              </div>
             
          </fieldset>

          

            <InputField label="Password" 
            input={[
              { type:"password", name:"password", placeholder:'Enter your password', required:true},           
            ]}/>

            <InputField label="Confirm password" 
            input={[
              { type:"password", name:"confrimpassword", placeholder:'Retype your password', required:true},           
            ]}/> */
          }
                   
                 

          <div className='flex justify-between items-center'>
            <CheckBox  id="agreePrivacy" label="Agree with Privacy Policy" />                       
          </div>
          <a href='/' className='btn-custom'>Login</a>
        </form>
        <p className='text-sm text-center' text-black-water>You have an account? <a href='/' className='text-bolt-blue'>Login Now</a> </p>
      </div>
    </div>
  )
}

export default SignUp