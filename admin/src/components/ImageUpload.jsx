import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload  } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



function ImageUpload({label,hint,required, error, setFieldValue,resetPreviewRef }) {
  const [filePreview,setFilePreview] = useState(null)

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0]
    setFieldValue('image',file);
    console.log('file ', file);
    if(file){
      setFilePreview(URL.createObjectURL(file))
    }
    //setFieldTouched('image',true,true)
  }

  const deletePreview =() => {    
    setFilePreview(null)
  }   

  useEffect(()=>{
    if(resetPreviewRef) {
      resetPreviewRef.current = () => setFilePreview(null);
    }
  },[resetPreviewRef])


  useEffect(()=>{
    if(!filePreview) {
      setFieldValue('image','');
    }
  },[filePreview])

  return (
    <fieldset className='flex flex-col relative'>
      <label className='mb-10 font-bold text-sm'>{label} {required && <span className='text-red-600'>*</span> }</label>  
      <div className='flex gap-10 '>
        { filePreview && !error  && (
          <div className="uploaded-img-cont">
            <img src={filePreview} className='object-cover'  />
            <div className='absolute top-0 right-0 p-2 bg-white text-black hover:bg-black hover:text-white cursor-pointer' onClick={deletePreview}>
              <FontAwesomeIcon icon={faTrash } className='text-[20px]' />
            </div>
        </div> 
        )}
        {
           !filePreview  && (
            <div className={`image-upload-cont ${error ? 'error' : ''}`}>
              <label htmlFor='blogImage' className='w-full h-full flex items-center justify-center gap-10 cursor-pointer flex flex-col'>
                <FontAwesomeIcon icon={faUpload } className='text-[20px]' />
                <span className='w-[177px] text-xs text-center'>Drop your images here or select  <span className='text-bolt-blue'>click to browse</span></span>
                <input type='file' id='blogImage' name='image' className='absolute invisible opacity-0' onChange={handleFileChange} />
              </label>
            </div>
           )
        }

      </div>  
      {error && <p className='text-red-600 text-xs mt-10'>{error}</p>}
    </fieldset>
  )
}

export default ImageUpload