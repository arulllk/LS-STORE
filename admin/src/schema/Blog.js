import * as yup from 'yup';

export const blogSchema = yup.object().shape({
    title:yup.string().required('Title cant be empty').min(5,'Title must be 5 characters long').max(40,'Title cannot exceed 40 characters long'),
    content:yup.string().required('Blog content cant be empty'),
    topic:yup.string(),
    seoTitle:yup.string(),
    seoDescription:yup.string(),
    image:yup
        .mixed()
        .nullable()
        .required('Please add image')
        .test(
            'filSize',
            'File size is too large, Maximum size allowed id 2mb',
            (value) => value && value.size <= 2000000 
        )
        .test(
            'fileType',
            'Unsupported file type. Please upload a JPEG, PNG, or GIF file.',
            (value) => value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
        ),
    altImage:yup.string().required('Please alt text to show on image for seo'),
    status:yup.string()
})
