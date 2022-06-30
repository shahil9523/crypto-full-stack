import React, {useState} from 'react'
const LoginForm = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return (
   <>
   <form action ="/dashboard">
     <div>
       <label htmlFor="email">username</label>
       <input type="text" name = "email" autoComplete="off"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       />
       </div>
       <div>
       <label htmlFor="password">Password</label>
       <input type="password" name = "password" autoComplete="off"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       />
       </div>
       <button type="submit">Login</button>
       </form>
       </>

  )
}
export default LoginForm
