import React from 'react'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className='h-[80vh] w-screen grid place-items-center'>
      <div className={`flex justify-around items-center`}>
        <ContactInfo/>
        <ContactForm styles="ml-2"/>
      </div>
    </div>
  )
}

export default Contact