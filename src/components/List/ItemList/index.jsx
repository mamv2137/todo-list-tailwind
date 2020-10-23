import React from 'react'

const ItemList = ({
    item,
    onSelect = () => null,
    onDelete = () => null,
    onComplete = () => null,
    onEdit = () => null,
    addToFavorite = () => null,
}) => {
    return (
        <div className="flex justify-between items-center p-2 rounded-xl hover:bg-blue-100">
            <div className="flex items-center cursor-pointer" onClick={() => onComplete(item.id)}>
                <svg className={`w-8 h-8 ${item.isDone ? 'text-green-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-xs px-4 text-gray-600">{item.date}</span>
                <span className={`text-normal bold ${item.isDone ? 'text-gray-400 line-through italic' : 'text-gray-700'}`}>{item.task}</span>
            </div>
            <div className="flex items-center cursor-pointer">
                <a onClick={() => addToFavorite(item.id)}>
                    <svg className={`w-6 h-6 cursor-pointer ${item.isFavorite ? 'text-yellow-500 fill-current' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                </a>
                <a onClick={() => onEdit(item)}>
                    <svg className="w-6 h-6 text-blue-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </a>
                <a onClick={() => onDelete(item.id)}>
                    <svg className="w-6 h-6 text-red-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </a>
                <input type="checkbox" onChange={(e) => onSelect(item.id)} checked={item.isSelected} className="form-checkbox h-4 w-4 ml-2 items-center text-blue-500" />
            </div>
        </div>
    )
}

export default ItemList