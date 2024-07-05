import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

function InputField({label,input}) {
    const [showpass,setShowpass] = useState(false);  
    const [value, setvalue] = useState('');  
    const inputLength = input.length;


    const handleIconVisibility= (showpass) => {            
      setShowpass(!showpass ); 
    }


    const inputElements = input.map((inp, index) => {
      const inputProps = {       
        className: 'input-custom',
        type: inp.type,
        name: inp.name,
        placeholder: inp.placeholder,
        value: ''
      };
      return inp.type == 'password'
        ?(<div key={`div-${index}`}><input {...inputProps}  value={value}  onChange={(e) => setvalue(e.target.value)} />
            <div onClick={handleIconVisibility}> {showpass ? <IoMdEye /> : <IoMdEyeOff /> } </div>
          </div>)
        :(<input key={index} {...inputProps} value={value}  onChange={(e) => setvalue(e.target.value)} />)           
    });

  return (
    <fieldset className='flex flex-col '>      
        <label className='mb-10 font-bold text-sm'>{label} 
          {input.some(inp => inp.required) &&  <span className='text-red-600'>*</span>}             
        </label>
        {inputLength > 1 ? (
          <div className="grid  grid-cols-2 gap-4">
            {inputElements}
            { /* input.map(inp=>  <input className='input-custom' type={inp.type} name={inp.name} placeholder={inp.placeholder} value='' /> ) */ }
          </div>
        ): (
            inputElements
          )
        }         
    </fieldset>
  )
}

export default InputField