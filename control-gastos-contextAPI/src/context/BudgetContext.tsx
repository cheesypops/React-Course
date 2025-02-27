import { useReducer, createContext } from "react"
import { initialBudgetState, budgetReducer, BudgetState, BudgetActions } from "../reducers/budgetReducer"

type BudgetContextProps = {
    state: BudgetState;
    dispatch: React.Dispatch<BudgetActions>;
}

type BudgetProviderProps = {
    children: React.ReactNode;
}

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialBudgetState);

    return (
        <BudgetContext.Provider value={{state, dispatch}}>
            {children}
        </BudgetContext.Provider>
    )
}