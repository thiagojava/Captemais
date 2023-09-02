import React from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
}

export default function Input({ label, ...props }: InputProps ) {
  return (
    <label htmlFor={props.id} className="flex flex-col mt-7 text-[#00000099]">
      {label}
      <input {...props} className='border border-black rounded-md py-4 px-4 mt-2' />
    </label>
  )
}
