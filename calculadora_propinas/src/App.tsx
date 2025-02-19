import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContent from "./components/OrderContent"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

function App() {
  
  const { order, tip, setTip, addOrderItem, removeItem, saveOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-10">
        <div className="p-5">
          <h2 className="text-4xl font-black py-2">Menú</h2>

          <div className="mt-10 space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addOrderItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 rounded-lg p-5 space-y-10 justify-center">
          {order.length > 0 ? (
            <>
              <OrderContent 
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals 
                tip={tip}
                order={order}
                saveOrder={saveOrder}
              />
            </>
          ) : 
            <p className="text-lg text-center font-black">No hay elementos en la orden</p>
          }
          
        </div>
      </main>

    </>
  )
}

export default App
