import React from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
  errorMessage?: string
  mask?: (value: string) => string
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, errorMessage, mask, ...props }, ref) => {

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(mask) {
      e.target.value = mask(e.target.value)
    }

    if(props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div className="flex flex-col h-[125px]">
      <label htmlFor={props.id} className="flex flex-col text-[#00000099]">
        {label}
        <input ref={ref} {...props} onChange={onChange} className={twMerge('border border-black rounded-md py-4 px-4 mt-2', errorMessage && 'border-red-500 outline-1 focus-visible:outline-red-500 focus:outline focus:outline-red-500')} />
      </label>
      <span className="mt-2 text-red-500 text-sm">{errorMessage}</span>
    </div>
  )
})

Input.displayName = 'Input';

export default Input;
