import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload  } from '@fortawesome/free-solid-svg-icons';



function ImageUpload({label,hint,required, error, handleChange, handleBlur}) {
  return (
    <fieldset className='flex flex-col relative'>
      <label className='mb-10 font-bold text-sm'>{label} {required && <span className='text-red-600'>*</span> }</label>  
      <div className='flex gap-10 '>
        {/* <div className="uploaded-img-cont">
          <img src="https://lsmedia.linker-cdn.net/291274/2024/13267948.jpeg?d=300" />
        </div> */}
        
        <div className={`image-upload-cont ${error ? 'error' : ''}`}>
          <label htmlFor='myFile' className='w-full h-full flex items-center justify-center gap-10 cursor-pointer flex flex-col'>
            <FontAwesomeIcon icon={faUpload } className='text-[20px]' />
            <span className='w-[177px] text-xs text-center'>Drop your images here or select  <span className='text-bolt-blue'>click to browse</span></span>
            <input type='file' id='myFile' name='filename' className='absolute invisible opacity-0' />
          </label>
        </div>
      </div>  
      {error && <p className='text-red-600 text-xs mt-10'>{error}</p>}
    </fieldset>
  )
}

export default ImageUpload