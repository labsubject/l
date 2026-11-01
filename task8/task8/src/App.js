import React from "react"
function App(){
  const d=new Date()
  return(
    <div>
      <h1>
        Current Date and Time
      </h1>
      <h1>{d.toLocaleString()}</h1>
    </div>
  )
}
export default App