import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CaloriesDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({ activities }: CalorieTrackerProps) {

    const consumedCalories = useMemo(() => activities.reduce((acc, activity) => activity.category === 1 ? 
    acc + activity.calories : acc, 0), [activities])
    const burnedCalories = useMemo(() => activities.reduce((acc, activity) => activity.category === 2 ? 
    acc + activity.calories : acc, 0), [activities])

    const totalCalories = useMemo(() => consumedCalories - burnedCalories, [consumedCalories, burnedCalories])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay calories={consumedCalories} tag="Consumidas" />

                <CalorieDisplay calories={burnedCalories} tag="Quemadas" />

                <CalorieDisplay calories={totalCalories} tag="Total" />
            </div>
        </>
    )
}