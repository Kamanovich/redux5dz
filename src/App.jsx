import { useState } from "react"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from './firebase'
import './sass/home.scss'

function App( ) {

  const[registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  });

  const register = async () => {
    try{
         const user =  await createUserWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
         );
         console.log(user);

    }catch(error){
      console.log(error.message);
    }
  };
  const login = async () => {
    try{
      const user =  await signInWithEmailAndPassword(
       auth,
       registerEmail,
       registerPassword
      );
      console.log(user);

 }catch(error){
   console.log(error.message);
 }
  };
  const logout = async () => {
    await signOut(auth)
  }
  return (
    <div className="container" >
      <div className="main">
      <div className="main-card">
        <h3 className="main__title">Register User</h3>
        <input type="email" placeholder="email"  onChange={(event) => {setRegisterEmail(event.target.value)}}/>
        <input type="password" placeholder="password" onChange={(event) => {setRegisterPassword(event.target.target)}} />
        <button className="main__btn" onClick={register}>Create User</button>
      </div>
      <div>
          <h3> Login </h3>
          <input
          type='email'
            placeholder="email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
          type="password"
            placeholder="password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button className="main__btn-second" onClick={login}>Login</button>
        </div>

        <h4 > User Logged In: </h4>
        {auth.email}
        <button className="main__btn-second" onClick={logout} > Sign Out </button>
      </div>
    </div>
    
  );
}

export default App;
