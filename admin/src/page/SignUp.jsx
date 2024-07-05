import React from 'react'
import InputField from '../components/InputField'
import CheckBox from '../components/CheckBox'

const SignUp = () => {
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