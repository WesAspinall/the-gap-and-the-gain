import { Button } from "@/components/ui/button"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <p className="text-center pb-4">
          Clicked {count} times
        </p>
        <Button onClick={()=>increment()}>Click me</Button>
      </div>
    </>
  )
}

export default App
