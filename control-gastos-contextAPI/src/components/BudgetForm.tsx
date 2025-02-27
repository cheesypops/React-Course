import { useMemo, useState } from 'react';
import { useBudget } from '../hooks/useBudget';

export default function BudgetForm() {

    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber);
    }

    const isValid = useMemo(() => {
        return budget > 0 && !isNaN(budget);
    }, [budget]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        dispatch({ type: 'ADD_BUDGET', payload: { budget } });
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                    Definir presupuesto
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full bg-white border border-b-gray-200 p-2"
                    placeholder="Define tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>

            <input 
                type="submit"
                value="Definir presupuesto"
                className="bg-blue-600 not-disabled:hover:bg-blue-700 w-full cursor-pointer text-white p-2 font-black uppercase disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={!isValid}
            />
        </form>
    )
}