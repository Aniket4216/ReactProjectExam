import React, {useState} from "react"
import { Link } from "react-router-dom"
function Signin() {

const [email , setemail] = useState("")
const [pass , setpass] = useState("")


const emailChangeHandler =(e)=>{
    setemail(e.target.value)
}

const passChangeHandler =(e)=>{
    setpass(e.target.value)
}

const formSubmitHandler =(e)=>{

    e.preventDefault();

    if( email=="aniketghaytadkar4216@gmail.com" && pass =="123")
    {
        alert('Login Success')
    
    }
    else{
        alert('Invalid Credentials')
        

    }

}


    return (
        <div className="container">
 <br/>
            <br/>
            <h1>  <label for="fname"  class="form-label">SignIn Page</label>
            </h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={emailChangeHandler} />
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" value={pass} onChange={passChangeHandler} />
                </div>
                <Link to="/booking">
                <button type="submit" class="btn btn-primary " onClick={formSubmitHandler}>Login</button>
                </Link>
            </form>

        </div>
    )

}

export default Signin