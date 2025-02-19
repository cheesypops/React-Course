import { useMemo } from 'react'
import type { OrderItem } from '../types'
import { formatCurrency } from '../helpers'


type OrderTotalsProps = {
    tip: number,
    order: OrderItem[],
    saveOrder: () => void
}

export default function OrderTotals({tip, order, saveOrder} : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => 
        order.reduce( (total, item) => total + (item.price * item.quantity), 0)
    , [order])

    const totalTip = useMemo(() => tip * subtotalAmount, [tip, subtotalAmount])

    const totalAmount = useMemo(() => subtotalAmount + totalTip, [subtotalAmount, totalTip])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>
                    Subtotal a pagar: {' '}
                    <span className="font-bold ">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>
                    Propina a pagar: {' '}
                    <span className="font-bold ">{formatCurrency(totalTip)}</span>
                </p>
                <p>
                    Total a pagar: {' '}
                    <span className="font-bold ">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button className='bg-teal-400 text-white w-full p-3 rounded-lg my-1 enabled:hover:bg-teal-500 uppercase font-bold disabled:opacity-50'
                onClick={() => saveOrder()}
                disabled={subtotalAmount === 0}
            >
                Guardar Orden
            </button>
        </>
    )
}