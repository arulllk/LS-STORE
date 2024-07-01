import React from 'react'

const SignIn = () => {
  return (
    <div className="w-full h-lvh  flex justify-center items-center bg-[#f2f7fb] p-[20px]">
       <div className='w-[550px] bg-white  rounded-[20px] p-8 flex flex-col gap-7'> 
            <div>
                <h3 className='text-2xl font-bold text-dreamless-sleep'>Login to account</h3>
                <p className='text-black-water'>Enter your email & password to login</p>
            </div>
            <form>
                <fieldset className='flex flex-col '>
                    <label className='mb-10'>Email address </label>
                    <input className='border-powder-white border-solid border-1 h-12 rounded-xl px-3 py-5 text-sm' type="email" name="email" placeholder='Enter your email address' value='' />
                </fieldset>
            </form>
       </div>
    </div>
  )
}

export default SignIn