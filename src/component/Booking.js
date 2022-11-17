import React, { useState } from "react"
import { Link } from "react-router-dom"
function Booking() {

const [bid , setbid] = useState("")
const [bname , setbname] = useState("")
const [mobile , setmobile] = useState("")
const [email , setemail] = useState("") 
const [bdate , setbdate] = useState("")

// console.log(fname)
// console.log(lname)
// console.log(fname)
// console.log(fname)
// console.log(fname)

const bidChangeHandler =(e)=>{
    setbid(e.target.value)
}

const bnameChangeHandler =(e)=>{
    setbname(e.target.value)
}

const mobileChangeHandler =(e)=>{
    setmobile(e.target.value)
}

const emailChangeHandler =(e)=>{
    setemail(e.target.value)
}

const bdateChangeHandler =(e)=>{
    setbdate(e.target.value)
}

const formSubmitHandler =(e)=>{

    e.preventDefault();

    if(bid == "" || bname=="" || mobile=="" || email=="" || bdate =="")
    {
        alert('Booking is done Successfully')
    
    }
    else{
        alert('All fileds are mandatory to filed')


    }

}


    return (
        <div className="container">

            <form>

            <br/>
            <br/>
            <h1>  <label for="fname"  class="form-label">Booking Page</label>
            </h1>

            <div class="mb-3">
                    <label for="fname" class="form-label">Booking ID : 0001</label>
                    {/* <input type="la" class="form-control" id="fname" aria-describedby="emailHelp" value={bid} onChange={bidChangeHandler} /> */}
                       
                </div>
                <div class="mb-3">
                    <label for="lname" class="form-label">Enter Name </label>
                    <input type="text" class="form-control" id="lname" aria-describedby="emailHelp" value={bname} onChange={bnameChangeHandler}/>
                        
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
                    <label for="exampleInputPassword1" class="form-label">Enter Booking Date (format dd:mm:yy)</label>
                    <input type="password" class="form-control" id="pass" value={bdate} onChange={bdateChangeHandler}/>
                </div>
                <Link to="/signin">
                <button type="submit" class="btn btn-primary" onClick={formSubmitHandler}>Book Appointment</button>
                </Link>
            </form>

        </div>
    )

}

export default Booking