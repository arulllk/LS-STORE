import React from 'react'

const SignIn = () => {
  return (
    <div className="w-full h-lvh  flex justify-center items-center bg-[#f2f7fb] p-[20px]">
       <div className='w-[550px] bg-white  rounded-[20px] p-8 flex flex-col gap-7'> 
            <div>
                <h3 className='text-2xl font-bold text-dreamless-sleep'>Login to account</h3>
                <p className='text-black-water'>Enter your email & password to login</p>
            </div>
            <form className='flex flex-col gap-6'>
                <fieldset className='flex flex-col '>
                    <label className='mb-10 font-bold text-sm'>Email address <span className='text-red-600'>*</span></label>
                    <input className='input-custom' type="email" name="email" placeholder='Enter your email address' value='' />
                </fieldset>

                <fieldset className='flex flex-col '>
                    <label className='mb-10 font-bold text-sm'>Password <span className='text-red-600'>*</span></label>
                    <input className='input-custom' type="email" name="email" placeholder='Enter your password' value='' />
                </fieldset>
                <div className='flex justify-between items-center'>
                  <div className="flex gap-10">
                    <input type='checkbox' id="signed" />
                    <label className='text-sm text-black-water'>Keep me signed in</label>
                  </div>

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