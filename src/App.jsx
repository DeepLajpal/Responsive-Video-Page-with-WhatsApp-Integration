import { Outlet } from "react-router-dom"
function App() {

  return (

    <div className="border-2 h-screen w-screen grid place-items-center overflow-hidden" >
      <Outlet/>
    </div>
  )
}

export default App
