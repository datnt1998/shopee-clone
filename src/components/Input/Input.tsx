import React from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  name: string
  placeholder?: string
  wrapperClassName?: string
  errorMessage?: string
  rules?: RegisterOptions
  autoComplete?: string
  register?: UseFormRegister<any>
}

function Input({ type, name, placeholder, wrapperClassName, errorMessage, rules, autoComplete, register }: Props) {
  return (
    <div className={wrapperClassName}>
      <input
        type={type}
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...(register && register(name, rules))}
      />
      <div className='mt-1 min-h-[1rem] text-sm text-red-600'>{errorMessage}</div>
    </div>
  )
}

export default Input
