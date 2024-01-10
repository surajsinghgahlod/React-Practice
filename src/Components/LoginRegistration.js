import React, { useState } from 'react'

export default function LoginRegistration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistered, setIsRegistered] = useState(false)
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [users, setUsers] = useState([])

    const handleAuth = () => {
        if(isRegistered){
            //Login
            if(isRegistered){
                const user = users.find((u) => u.email === email && u.password=== password);
                if(user){
                    setIsLoggedin(true)
                }else{
                    alert("lOGIN FAIL")
                }
            }
        }else{
            //Register
            const newUser = {email, password}
            setUsers([...users, newUser])
            localStorage.serItem('users', JSON.stringify([...users, newUser]))
            setIsLoggedin(true)
        }
    }

    const handleLogout = () => {
        setIsLoggedin(false)
        setEmail('')
        setPassword('')
    }

  return (
    <div>
        {
            isLoggedin? (
                <div>
                    <h2>Welcome, {email}!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>{isRegistered ? 'Login' : 'Register' }</h2>
                    <form>
                        <input type="email" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}/>
                        <input type="password" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} />
                        <button onClick={handleAuth}>
                            {isRegistered? 'Login' : 'Registered'}
                        </button>
                    </form>
                    <p>
                        {isRegistered ? "Dont have an account? Register Now" : "Already have an account? Log in"}
                    </p>
                    <button onClick={() => {setIsRegistered(!isRegistered)}}>
                        {isRegistered ? 'Registered' : 'Login'}
                    </button>
                </div>
            )
        }

    </div>
  )
}
