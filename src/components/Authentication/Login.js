import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import {useState} from "react";
import {auth} from "../../firebase";
import {useStateValue} from "../../context/StateProvider";

const Login =()=>{
    const [{basket},dispatch] = useStateValue();
    const history = useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                if(basket.length>0){
                    history.push('/checkout')
                }else{
                    history.push('/');
                }

            })
            .catch(error=> alert(error.message))

    }
    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth=>{
                if(auth){
                    history.push('/');
                }
            })
            .catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
           <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
           />
            </Link>
            <div className="login__container">
                <h1>Entrar</h1>
                <form>
                    <h5>Correo</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Contraseña</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__signInButton">Entrar</button>

                    <p>
                        Registrandote en este sitio estas aceptando todas las condiciones
                        sobre uso y venta de esta version FALSA de Amazon.

                    </p>

                    <button type="submit" onClick={register} className="login__registerButton">Crear Cuenta</button>
                </form>
            </div>
        </div>
    )
}

export default Login
