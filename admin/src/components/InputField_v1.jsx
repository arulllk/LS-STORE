import React from 'react'

function InputField_v1({inputType, label,type,name,placeholder,required, hint,value, error , handleChange, handleBlur}) {
  console.log('error ', error);
  return (
    <fieldset className='flex flex-col relative'>
      <label className='mb-10 font-bold text-sm'>{label} {required && <span className='text-red-600'>*</span> }</label>      
      {inputType == 'input' && <input type={type} name={name} placeholder={placeholder} className={`input-custom ${error ? 'error' : ''}`} value={value} onChange={handleChange} onBlur={handleBlur} /> }
      {inputType == 'textarea' && <textarea type={type} name={name} placeholder={placeholder} className={`h-48 input-custom ${error ? 'error' : ''}`} value={value}  onChange={handleChange} onBlur={handleBlur}  /> }
      {hint && <p className='text-perfect-storm text-xs mt-10'>Do not exceed 20 characters when entering the product name.</p>}
      {error && <p className='text-red-600 text-xs mt-10'>{error}</p>}
    </fieldset>
  )
}

export default InputField_v1