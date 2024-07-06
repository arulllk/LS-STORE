import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function InputField({label,input}) {
  const [iconVisibiltiy, setIconVisibility] = useState(false)

  const handleIconVisibility = () => {
    setIconVisibility(!iconVisibiltiy)
  }  

  const inputElement = input.map(
    (inp,index)=> {
      return  (
        <>           
            <input key={index} className='input-custom' type={ iconVisibiltiy ?  inp.type : 'text'} name={inp.name} placeholder={inp.placeholder} value='' autoComplete='off' />
            {inp.type == 'password'  &&  <a onClick={handleIconVisibility} className='absolute top-11 right-5 text-[#cbd5e1] text-[20px]'> 
                                              { iconVisibiltiy ? <IoMdEye /> :  <IoMdEyeOff /> }
                                          </a> 
                
            }
          </>
        )
    }    
  )
 
  return (
    <fieldset className='flex flex-col relative'>
      <label className='mb-10 font-bold text-sm'>{label} <span className='text-red-600'>*</span></label>      
      { 
        input.length > 1 
          ?<div className="grid  grid-cols-2 gap-4">
            {inputElement}
          </div>
          : (inputElement)
      }       
    </fieldset>
  )
}

export default InputField