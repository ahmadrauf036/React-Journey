import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='flex pt-5 justify-around h-[30vh] border-t-1 border-gray-400'>
          <h1 className='text-3xl font-bold'>your<span className='text-amber-700'>Logo</span></h1>
          <table className='w-1/2'>
            <tr>
              <th className='text-left align-baseline'>RESOURCES</th>
              <th className='text-left align-baseline'>FOLLOW US</th>
              <th className='text-left align-baseline'>LEGAL</th>
            </tr>
            <tr>
              <td className='align-baseline'>Home</td>
              <td className='align-baseline'>Github</td>
              <td className='align-baseline'>Privacy Policy</td>
            </tr>
            <tr>
              <td className='align-baseline'>About</td>
              <td className='align-baseline'>Discord</td>
              <td className='align-baseline'>Terms & Condition</td>
            </tr>
          </table>
        </footer>
        
    </>
  )
}

export default Footer