import BudgetForm from "./components/BudgetForm"
import ExpenseModal from "./components/ExpenseModal";
import BudgetTracker from "./components/BudgetTracker";
import { useBudget } from "./hooks/useBudget"
import { useMemo } from "react";

function App() {

  const { state } = useBudget();

  const isValidBudget = useMemo(() => {
    return state.budget > 0;
  }, [state.budget]);

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center text-white font-black text-4xl">Control de Gastos</h1>


      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-10 mt-10">
        {isValidBudget ? (
          <BudgetTracker />
        ) : (
          <BudgetForm />
        )}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseModal />
        </main>
      )}

    </>
  )
}

export default App
