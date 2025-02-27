
export type BudgetActions = 
    { type: 'ADD_BUDGET', payload: {budget: number} } |
    { type: 'SHOW_MODAL' } |
    { type: 'HIDE_MODAL' }

export type BudgetState = {
    budget: number;
    modal: boolean;
}

export const initialBudgetState: BudgetState = {
    budget: 0,
    modal: false
}

export const budgetReducer = (
    state: BudgetState = initialBudgetState, 
    action: BudgetActions)
    : BudgetState => {
    
    switch(action.type) {
        case 'ADD_BUDGET':
            return {
                ...state,
                budget: action.payload.budget
            }
        case 'SHOW_MODAL':
            return {
                ...state,
                modal: true
            }
        case 'HIDE_MODAL':
            return {
                ...state,
                modal: false
            }
        default:
            return state;
    }
}