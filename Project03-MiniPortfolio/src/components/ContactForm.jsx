import { Formik, Form, Field } from 'formik'
import React from 'react'

const ContactForm = (
    {
        styles=""
    }
) => {
  return (
    <div id="contactForm" className={`${styles} w-[350px]`}>
        <h1 className='text-xl font-bold mb-3'>Fill in the form to start the conversation</h1>
        <Formik
            initialValues={{
                fullName:'',
                email:'',
                telephone:''
            }}
            onSubmit={
                async (values)=>{
                    await new Promise((r)=>setTimeout(r, 3000));
                    alert(values)
                }
            }
        >
            <Form className='flex flex-col'>
                <Field id="fullName" name="fullName" placeholder="FullName" className='mb-1.5 border-1 border-grey-300 p-1 rounded-xl w-60' />
                <Field id="fullName" name="fullName" placeholder="Email" className='mb-1.5 border-1 border-grey-300 p-1 rounded-xl w-60' />
                <Field id="fullName" name="fullName" placeholder="Telephone no." className='mb-1.5 border-1 border-grey-300 p-1 rounded-xl w-60' />
                <button type="submit" className='p-1.5 px-3 rounded-xl bg-amber-700 w-fit'>Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default ContactForm