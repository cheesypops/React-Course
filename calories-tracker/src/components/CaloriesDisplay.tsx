
type CalorieDisplayProps = {
    calories: number,
    tag: string
}

export default function CalorieDisplay({calories, tag}: CalorieDisplayProps) {
  return (
    <p
        className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center"
    >
        <span className="font-black text-6xl text-orange-200">{calories}</span>
        {tag}
    </p>
  )
}