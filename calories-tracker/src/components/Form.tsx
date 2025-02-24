import { v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categories"
import { useState } from "react"
import type { Activity } from "../types"
import { ActivityActions, ActivityState } from "../reducers/activityReducer"
import { useEffect } from 'react'

type FormProps = {
    dispatch: React.Dispatch<ActivityActions>
    state: ActivityState
}

const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

export default function Form({ dispatch, state } : FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)

    useEffect(() => {
        if(state.activeId){
            const selectedActivity = state.activities.filter( activityState => activityState.id === state.activeId)[0]

            setActivity(selectedActivity)
        }
    }, [state.activeId])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const isNumberFields = ['category', 'calories'].includes(e.target.id)
        
        setActivity({
            ...activity,
            [e.target.id]: isNumberFields ? parseInt(e.target.value) : e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        dispatch({
            type: 'save-activity',
            payload: { newActivity: activity }
        })

        setActivity({
            ...initialState,
            id: uuidv4(),
        })
    }

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(categoty => (
                        <option key={categoty.id} value={categoty.id}>{categoty.name}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input
                    type="text"
                    id="name"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ejemplo: Correr 5km, comida, ensalada, pesas, etc."
                    value={activity.name}
                    onChange={handleChange}
                >

                </input>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    type="number"
                    id="calories"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ejemplo: 300, 500, 1000, etc."
                    value={activity.calories}
                    onChange={handleChange}
                >

                </input>
            </div>

            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white rounded-lg uppercase cursor-pointer disabled:opacity-15 disabled:cursor-not-allowed"
                value={activity.category === 1 ? 'Agregar comida' : 'Agregar actividad'}
                disabled={!isValidActivity()}
            >

            </input>

        </form>
    )
}