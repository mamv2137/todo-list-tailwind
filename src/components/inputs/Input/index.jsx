import React, { useRef } from 'react'
import { InputContainer, Input as StyledInput, IconContainer } from './Input.styles.tw'

const Input = ({
    defaultValue,
    placeholder,
    type,
    name,
    onChange,
    icon = null,
}) => {
    const IconComponent = icon
    return (
        <InputContainer>
            <StyledInput onChange={onChange} defaultValue={defaultValue} name={name} type={type} placeholder={placeholder} />
            {
                icon && (
                    <IconContainer>
                        <IconComponent />
                    </IconContainer>
                )
            }
        </InputContainer>
    )
}

export default Input;