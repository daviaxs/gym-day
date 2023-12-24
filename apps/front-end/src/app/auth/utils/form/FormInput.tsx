'use client'

import { ReactNode } from 'react'
import { InputContainer } from './Form.style'
import { InputType, getIcon } from './utils/InputIcons'
import { ShowPasswordIcons } from './utils/ShowPasswordIcons'
import { useShowPassword } from '@/shared/hooks/useShowPassword'

interface FormInputProps {
  name: string
  type: InputType
  icon?: ReactNode
  placeholder?: string
}

export function FormInput({ name, type, placeholder }: FormInputProps) {
  const { toggleShowPassword, verifyInputType, showPassword } = useShowPassword(
    { type },
  )

  return (
    <InputContainer>
      {getIcon(type)}

      <input type={verifyInputType} name={name} placeholder={placeholder} />

      {type === 'password' && (
        <span onClick={toggleShowPassword} className="showPassword">
          {showPassword ? ShowPasswordIcons.eye : ShowPasswordIcons.eyeOff}
        </span>
      )}
    </InputContainer>
  )
}
