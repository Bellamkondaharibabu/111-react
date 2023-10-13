
import React, { useState } from 'react';


import './App.css';


const App = () => {
  const [data, setdata] = useState({
    username: '',
    password: ''
  })
  const { username, password } = data;
  const changeHandler = e => {
    setdata({ ...data, [e.target.name]: [e.target.value] })
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  };
      


  return (
    <div>
      <div className="containar">

        <div className='brand-logo'>
          <img src="./Bailey and co.jpg" alt='' />
          <h2>Bailey And Co.</h2>
        </div>
        <div className='line'>
          <hr />
        </div>
        <center >
          <div className='login-user'>
            <h1>wellcome</h1>
            <p>Please login to Admin Dashboard</p><br />
            <form onSubmit={submitHandler} >

              <input type="text" name='username' onChange={changeHandler} placeholder='username' value={username} required />
              
              <br />

              <input type="password" name='password' onChange={changeHandler} placeholder='password' value={password} />
               
                <br />

              {/* function App() { */}
                <button type="submit" className='button' value='login' onClick={() => alert("successfull")}>login</button>

              {/* } */}


              <br />

              <a href="https://accounts.google.com/v3/signin/challenge/pwd?TL=AJeL0C56P92ZeYOyF6bbW7I8usKeUXlgru-o1IR-GE2DtyKowHNLamdfAsAqznhB&amp;cid=1&amp;continue=https://myaccount.google.com/signinoptions/password?continue%3Dhttps://myaccount.google.com/security&amp;flowName=GlifWebSignIn&amp;hl=en_US&amp;ifkv=AYZoVhePK1dbWV-z1ig-ianKymfm1YFSMKTdaozUpeilvPtwTZf6trA-s0noJlzaF3cVn8HneWHZHg&amp;kdi=CAM&amp;rart=ANgoxceF9Fn-YayumsYofvTjQ2FTD9dtqiv-77zAsDJ1inlkbj7It_U4f393rrkUC14X-4nCTVSdXsJ3IEcmrx9HTxwjJ1j2Pg&amp;rpbg=1&amp;sarp=1&amp;scc=1&amp;service=accountsettings" className="link">
                Forgotten Your Password ?
              </a>
            </form>
          </div >
        </center >
      </div >
    </div>
  )
}

export default App

