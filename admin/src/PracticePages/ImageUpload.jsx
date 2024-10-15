import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload  } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik'
import * as yup from 'yup';
import axios from 'axios'



 function ImageUpload () {
  const [filePreview,setFilePreview] = useState(null);

  const basicSchema = yup.object().shape({
    image:yup
          .mixed()
          .nullable() // Allowed the filed to be intiallly null
          .test('fileSize','File is too large Must be under 2mb', (value)=>value&& value.size <= 2000000)
          .test('fileType', 'Unsupported File type, Please upload a JPEG, PNG, or GIF file.', (value)=>value && ['image/jpeg','image/png','image/gif'].includes(value.type) ),
     title:yup.string().required('Title is required'),
     content:yup.string().required('Blog content is required'),
     altImage:yup.string().required('alt image cannot be empty')
  })
 
  
  //custom handle change function 
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('image',file);
    if(file){
      setFilePreview(URL.createObjectURL(file));
    }
    formik.setFieldTouched('image',true,true)
  }

  const onSubmit = async (values) => {
    const formData = new FormData();   
    // Dynamically append all form fields
    Object.keys(values).forEach(key=>{  
      console.log('key is ' , key);
      console.log('value is ' , values[key])
      formData.append(key,values[key])                            
    })

    

    // Debugging: Log FormData entries
    for (let pair of formData.entries()) {
      console.log(`check ${pair[0]}: ${pair[1]}`);
    }


    try {
      const response = await axios.post('/api/v1/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Form submission successful:', response.data);
    } catch (error) {
      console.log('Error submiting from')
    }
  }

   
  const formik = useFormik({
    initialValues:{
      image:null,
      title:'',
      content:'',
      altImage:''
    },
    validationSchema:basicSchema,
    onSubmit
  })

 

  return(
    <form onSubmit={formik.handleSubmit}>

    <fieldset className='flex flex-col relative mb-3'>
      <label className='mb-10 font-bold text-sm'> Blog title <span className='text-red-600'>*</span></label>      
      <input type="text" name="title" placeholder=""  className="input-custom"   value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} />         
      {formik.errors.title && formik.touched.title && <p className="text-red-600 text-xs mt-10">{formik.errors.title}</p>}
    </fieldset>

    <fieldset className='flex flex-col relative mb-3'>
      <label className='mb-10 font-bold text-sm'> Blog Content <span className='text-red-600'>*</span></label>      
      <input type="text" name="content" placeholder=""  className="input-custom"   value={formik.values.content} onChange={formik.handleChange} onBlur={formik.handleBlur} />         
      {formik.errors.content && formik.touched.content && <p className="text-red-600 text-xs mt-10">{formik.errors.content}</p>}
    </fieldset>

    <fieldset className='flex flex-col relative mb-3'>
      <label className='mb-10 font-bold text-sm'> Alt Image <span className='text-red-600'>*</span></label>      
      <input type="text" name="altImage" placeholder=""  className="input-custom"   value={formik.values.altImage} onChange={formik.handleChange} onBlur={formik.handleBlur} />         
      {formik.errors.altImage && formik.touched.altImage && <p className="text-red-600 text-xs mt-10">{formik.errors.altImage}</p>}
    </fieldset>

      <fieldset className='flex flex-col relative'>
        <label className='mb-10 font-bold text-sm'>Upload Images   <span className='text-red-600'>*</span></label>  
        <div className='flex gap-10 '>
          {filePreview && !formik.errors.image && (
            <div className="uploaded-img-cont">
              <img src={filePreview} />
            </div>
          )}
        
          
          <div className='image-upload-cont'>
            <label htmlFor='myFile' className='w-full h-full flex items-center justify-center gap-10 cursor-pointer flex flex-col'>
              <FontAwesomeIcon icon={faUpload } className='text-[20px]' />
              <span className='w-[177px] text-xs text-center'>Drop your images here or select  <span className='text-bolt-blue'>click to browse</span></span>
              <input type='file' id='myFile' name='filename' className='absolute invisible opacity-0' onChange={handleFileChange} />
            </label>
          </div>
        </div>  
        {formik.errors.image && formik.touched.image &&<p className="text-red-600 text-xs mt-10">{formik.errors.image}</p>}
      </fieldset>
      <button type='submit' className='btn-custom mt-4'>Add From</button>
    </form>
  )
 }

export default ImageUpload