const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    tip: number,
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentageForm({tip, setTip} : TipPercentageFormProps) {

    return (
        <div>
            <h3 className="text-2xl font-black">Porcentaje de propina</h3>

            <form>
                {tipOptions.map(option => (
                    <div key={option.id} className="flex gap-2">
                        <input 
                            type="radio" 
                            name="tip" 
                            id={option.id} 
                            value={option.value} 
                            onChange={e => setTip(parseFloat(e.target.value))}
                            checked={tip === option.value}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>
                ))}
            </form>
        </div>
    )
}