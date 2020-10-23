import React, { useRef } from 'react'
import ClearIcon from '../../Icons/ClearIcon'
import { InputDateContainer, InputDate as StyledInputDate, IconContainer } from './InputDate.styles.tw'


const InputDate = ({
    defaultValue,
    name,
    onBlur = () => null,
    onClear = null,
}) => {
    const inputRef = useRef(null) 
    const clearInput = () => {
        inputRef.current.value = '';
        onClear()
    }
    return (
        <InputDateContainer>
            <StyledInputDate ref={inputRef} onBlur={onBlur} type="date" defaultValue={defaultValue} name={name} type="date" />
            {
                onClear && (
                    <IconContainer onClick={clearInput}>
                        <ClearIcon />
                    </IconContainer> 
                )
            }
        </InputDateContainer>
    )
}

export default InputDate;