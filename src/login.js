import React from 'react'
import logimg from './undraw_access_account_re_8spm.svg';
import classes from './login.module.css';
export default function Login() {
const svgimage={
    width: '300px',
    height: '300px',
}

    return (
        <div>
              <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 pt-5">
              <img src={logimg} style={svgimage} alt="login" />
          </div>
          <div className="col-lg-6 pt-5">
            
                <form className="pt-5" >
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                      <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{"width": "100%; height:50px"}}>Submit</button>
                  </form>
           
          </div>
<br/>
<br/>
          <h5 className="text-center pt-5" style={{"position": "relative; top: 100px"}}>New here? <a href="signup.html" style={{"text-decoration": "none;"}}>Sign Up</a> First.</h5>

         </div>
      </div>
  
        </div>
    )
}
