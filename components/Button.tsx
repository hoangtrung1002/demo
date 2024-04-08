import React from 'react'

interface Props{
  text: string;
}

const Button = ({text}: Props) => {
  return (
    <div className='bg-blue-100 text-white px-6 py-5'>{text}</div>
  )
}

export default Button