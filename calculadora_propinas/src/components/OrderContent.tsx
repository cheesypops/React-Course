import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type OrderContentProps = {
    order: OrderItem[], 
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContent({order, removeItem} : OrderContentProps) {


    return (
        <div>
            <h2 className="text-4xl font-black py-2">Orden</h2>

            <div className="space-y-3 mt-10"> 
                {order.map(item => {
                            return (
                                <div key={item.id}
                                    className="flex justify-between items-center border border-slate-300 p-3 rounded-lg"
                                >
                                    <div>
                                        <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                                        <p className="font-black">
                                            Cantidad: {item.quantity}
                                        </p>
                                    </div>

                                    <button className="bg-red-500 text-white h-8 w-8 rounded-full font-black" 
                                        onClick={() => {removeItem(item.id)}}
                                    >
                                        X
                                    </button>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}