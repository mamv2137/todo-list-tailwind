import React, { useState, useContext, useEffect } from 'react'
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'

import Modal from '../Modal'
import { ModalContext } from '../Modal/context'
import Input from '../inputs/Input'
import InputDate from '../inputs/InputDate'
import TaskIcon from '../Icons/TaskInputIcon'

import { onAddTodo, onEditTodo } from '../../store/todos/actions'

import { ContentContainer } from './CreateTask.styles.tw'


const CreateTask = () => {
    const [task, setTask] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState('')
    const [title, setTitle] = useState('')
    const { closeModal, data, handleModalCreator } = useContext(ModalContext)
    const dispatch = useDispatch();

    useEffect(() => {
        setTask(data.task || '')
        setDate(data.date ? moment(data.date).format('YYYY-MM-DD') : '')
        setTitle(Object.keys(data).length > 0 ? 'Edit' : 'Create')
    }, [data])

    const handleInput = (e) => {
        const text = e.target.value
        const input = e.target.name

        const inputs = {
            'date': () => setDate(text),
            'task': () => setTask(text),
        }
        
        inputs[input]();
    }

    const checkEmptyInputs = () => {
        if (!task || !date) {
            return setError(true)
        }
    }

    const onSave = () => {
        const hasErrors = checkEmptyInputs()
        if(hasErrors) return
        const newTask = {
            id: uuidv4(),
            isDone: false,
            isFavorite: false,
            isSelected: false,
            task,
            date: moment(date).format('YYYY-MM-DD')
        }
        dispatch(onAddTodo(newTask))
        handleModalCreator({})
        closeModal();
    }

    const onEdit = () => {
        const hasErrors = checkEmptyInputs()
        if (hasErrors) return
        const newTask = {
            ...data,
            task,
            date
        }
        dispatch(onEditTodo(newTask))
        handleModalCreator({})
        closeModal();
    }

    const handleSave = () => {
        if (Object.keys(data).length > 0) {
            onEdit()
        } else {
            onSave();
        }
    }
    return (
        <Modal onSave={handleSave} title={`${title} Task`}>
            <ContentContainer>
                <Input
                    onChange={handleInput}
                    defaultValue={task}
                    name="task"
                    type="text"
                    placeholder="Buy some meat to eat 🥩..."
                    icon={TaskIcon}
                />
                <InputDate
                    onChange={handleInput}
                    defaultValue={date}
                    name="date"
                />
            </ContentContainer>
        </Modal>
    )
}

export default CreateTask