import { useState, useContext } from "react"
import UserContext from "../context/UserContext"
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const {setUser} = useContext(UserContext)

  const handleSubmit =(e)=>{
    e.preventDefault()
    setUser({username, password})
  }
  return (
    <div className="w-80 bg-gray-700 p-6 mx-auto mt-10 rounded-md">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full py-2 px-4 outline-none border-2 mt-4 rounded-md border-gray-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full py-2 px-4 outline-none border-2 border-gray-500 mt-4 rounded-md"
      />
      <button onClick={handleSubmit} className="w-full py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 mt-6 rounded-md cursor-pointer">
        Login
      </button>

    </div>
  )
}

export default Login
