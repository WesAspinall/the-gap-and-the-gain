import  DayCard  from "./components/ui/daycard";

function App() {
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
    <>
    <div className="w-50">
      {days.map((day: string) => (
      <DayCard key={day} day={day} />
      ))}
    </div>
    </>
  )
}

export default App
