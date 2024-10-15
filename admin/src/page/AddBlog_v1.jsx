import React from 'react'
import InputField_v1 from '../components/InputField_v1'
import ImageUpload from '../components/ImageUpload'
import PageHeading from '../components/PageHeading';

function AddBlog() {
  return (
    <>
        <PageHeading heading="Add Blog" breadCrumb={[{label:'AddBlog',path:'/admin/blog'}]} />

        <form className='grid grid-cols-2 gap-y-8 gap-x-5'>
            <div className="white-box-cont">
                <InputField_v1 inputType="input" label="Title" type="text" name="title" placeholder="Add blog title" required="true" hint="Do not exceed 40 characters when entering the blog title."  />
                <InputField_v1 inputType="textarea"  label="Content" type="text" name="content" placeholder="Add blog description" required="true"   />
                <InputField_v1 inputType="input" label="Topic" type="text" name="topic" placeholder="Add blog topic"   />
                <InputField_v1 inputType="input"  label="Seo Title" type="text" name="seoTitle" placeholder="Add Seo title for your  blog" />
            </div>
            <div className="white-box-cont">
                <InputField_v1 inputType="textarea"  label="Seo Description" type="text" name="seoDescription" placeholder="Add Seo Description for your  blog" />
                <ImageUpload label="Upload images" name="image" required="true" hint=" Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions." /> 
                <a href="#" className='btn-custom'>Add Blog</a>
            </div>
        </form>         
    </>
  )
}

export default AddBlog