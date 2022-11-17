import React, { useState } from "react"
import { Link } from "react-router-dom"
function Signup() {

const [fname , setfname] = useState("")
const [lname , setlname] = useState("")
const [mobile , setmobile] = useState("")
const [email , setemail] = useState("") 
const [pass , setpass] = useState("")

// console.log(fname)
// console.log(lname)
// console.log(fname)
// console.log(fname)
// console.log(fname)

const fnameChangeHandler =(e)=>{
    setfname(e.target.value)
}

const lnameChangeHandler =(e)=>{
    setlname(e.target.value)
}

const mobileChangeHandler =(e)=>{
    setmobile(e.target.value)
}

const emailChangeHandler =(e)=>{
    setemail(e.target.value)
}

const passChangeHandler =(e)=>{
    setpass(e.target.value)
}

const formSubmitHandler =(e)=>{

    e.preventDefault();

    if(fname == "" || lname=="" || mobile=="" || email=="" || pass =="")
    {
        alert('All Fileds are mandatory to fill')
    
    }
    else{
        alert('Registration Successfully')


    }

}


    return (
        <div className="container">
            <br/>
            <br/>
            <h1>  <label for="fname"  class="form-label">SignUp Page</label>
            </h1>
            <form>
                
            <div class="mb-3">
                    <label for="fname" class="form-label">Enter First Name</label>
                    <input type="text" class="form-control" id="fname" aria-describedby="emailHelp" value={fname} onChange={fnameChangeHandler} />
                       
                </div>
                <div class="mb-3">
                    <label for="lname" class="form-label">Enter Last Name</label>
                    <input type="text" class="form-control" id="lname" aria-describedby="emailHelp" value={lname} onChange={lnameChangeHandler}/>
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Enter Phone No.</label>
                    <input type="number" class="form-control" id="mobile" aria-describedby="emailHelp" value={mobile} onChange={mobileChangeHandler}/>
                        
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={emailChangeHandler}/>
                        
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="pass" value={pass} onChange={passChangeHandler}/>
                </div>
                <Link to="/signin">
                <button type="submit" class="btn btn-primary" onClick={formSubmitHandler}>Submit</button>
                </Link>
            </form>

        </div>
    )

}

export default Signup