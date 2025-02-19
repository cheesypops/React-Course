import type { MenuItem } from '../types'

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {


    return (
        <button
        className='border-2 border-teal-400 w-full p-3 rounded-lg my-1 hover:bg-teal-400 hover:text-white flex justify-between items-center'
        onClick={() => addItem({...item})}
        >
            <p className='text-lg font-sans'>{item.name}</p>
            <p className='text-lg font-mono font-medium'>${item.price}</p>
        </button>
    )
}