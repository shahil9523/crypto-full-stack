import React, {useState} from 'react'
const RegisterForm = () => {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  return (
   <>
   <form action ="/dashboard">
    <div>
       <label htmlFor="name">Name</label>
       <input type="text" name = "name" autoComplete="off"
       value={name}
       onChange={(e) => setEmail(e.target.value)}
       />
    </div>
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
      <div>
       <label htmlFor="confirmPass">Confirm Password</label>
       <input type="confirmPass" name = "confirmPass" autoComplete="off"
       value={confirmPassword}
       onChange={(e) => setPassword(e.target.value)}
       />
      </div>
       <button type="submit">Register and Login</button>
       </form>
       </>

  )
}
export default RegisterForm
