import Login from "./components/Login"
import ContextProvider from "./context/ContextProvider"
import Profile from "./components/Profile"
function App() {
  
  return (
    <ContextProvider>
       <h1 className="text-3xl font-bold text-center p-6">Context Api </h1>
        <Login /> 
        <Profile />
      
    </ContextProvider>
  )
}

export default App
