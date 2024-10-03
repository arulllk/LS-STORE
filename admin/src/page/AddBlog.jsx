import React from 'react'
import { useFormik } from 'formik'
import InputField_v1 from '../components/InputField_v1'
import ImageUpload from '../components/ImageUpload'
import PageHeading from '../components/PageHeading';
import { blogSchema } from '../schema';


const onSubmit = () => {
  console.log('form submitted');
}

function AddBlog() {
  const {values, errors, touched, isSubmitting, handleChange,handleBlur,handleSubmit} = useFormik({
    initialValues:{
      title:'',
      content:'',
      topic:'',
      seoTitle:'',
      altImage:'',
      seoDescription:'',
      image:''
    },
    validationSchema:blogSchema,
    onSubmit
  })
  
  console.log( ' touched ' , touched);

  return (
    <>
        <PageHeading heading="Add Blog" breadCrumb={[{label:'AddBlog',path:'/admin/blog'}]} />
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-y-8 gap-x-5'>
            <div className="white-box-cont">
                <InputField_v1 inputType="input" label="Title" type="text" name="title" placeholder="Add blog title" required="true" hint="Do not exceed 40 characters when entering the blog title." value={values.title} handleChange={handleChange} handleBlur={handleBlur} error={ touched.title && errors.title ? errors.title : '' }   />
                <InputField_v1 inputType="textarea"  label="Content" type="text" name="content" placeholder="Add blog description" required="true" value={values.content}  error={touched.content && errors.content ? errors.content :'' } handleChange={handleChange} handleBlur={handleBlur}   />
                <InputField_v1 inputType="input" label="Topic" type="text" name="topic" placeholder="Add blog topic" value={values.topic}  error={touched.topic && errors.topic  ? errors.topic : ''} handleChange={handleChange} handleBlur={handleBlur}   />
                <InputField_v1 inputType="input"  label="Seo Title" type="text" name="seoTitle" placeholder="Add Seo title for your  blog" value={values.seoTitle}  error={touched.seoTitle && errors.seoTitle ? errors.seoTitle : ''} handleChange={handleChange} handleBlur={handleBlur} />
            </div>
            <div className="white-box-cont">
                <InputField_v1 inputType="textarea"  label="Seo Description" type="text" name="seoDescription" placeholder="Add Seo Description for your  blog" value={values.seoDescription} handleChange={handleChange} handleBlur={handleBlur} error={ touched.seoDescription && errors.seoDescription ? errors.seoDescription :'' } />
                <InputField_v1 inputType="input"  label="Image Alt" type="text" name="altImage" placeholder="Add alt tag text for the image" value={values.altImage}  error={touched.altImage && errors.altImage ? errors.altImage : ''} handleChange={handleChange} handleBlur={handleBlur} />
                <ImageUpload label="Upload images" name="image" required="true" hint=" Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions." error={touched.image && errors.image ? errors.image : ''}  /> 
                <button type='submit' className='btn-custom'>Add Blog</button>
            </div>
        </form>         
    </>
  )
}

export default AddBlog