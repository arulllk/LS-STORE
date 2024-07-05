import React from 'react'
import InputField from '../components/InputField'
import CheckBox from '../components/CheckBox'


const SignIn = () => {
  const fruits = ['apple','banana', 'mango'];
  const favoriteFruits = {
    favorite:'mango'
  }
  console.log('fruits' , fruits);

  return (
    <div className="w-full h-lvh  flex justify-center items-center bg-[#f2f7fb] p-[20px]">
       <div className='w-[550px] bg-white  rounded-[20px] p-8 flex flex-col gap-7'> 
            <div>
                <h3 className='text-2xl font-bold text-dreamless-sleep'>Login to account</h3>
                <p className='text-black-water'>Enter your email & password to login</p>
            </div>
            <form className='flex flex-col gap-6'>
                <InputField label="Email address" type="email" name="email" placeholder="Enter your email address" required  />
                <InputField label="Password" type="password" name="password" placeholder="Enter your password" required  />                 
                <div className='flex justify-between items-center'>
                  <CheckBox id="signed" label="Keep me signed in" />                   
                  <a href='/' className='text-sm text-bolt-blue'>Forgot password?</a>
                </div>
                <a href='/' className='btn-custom'>Login</a>

            </form>
            <p className='text-sm text-center' text-black-water>You don't have an account yet? <a href='/' className='text-bolt-blue'>Register Now</a> </p>
       </div>
    </div>
  )
}

export default SignIn