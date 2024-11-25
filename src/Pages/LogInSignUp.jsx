


 import './LogInSignUp.css'

function LogInSignUp() {

  return (
   <div className='LogInSignUp'>
    <div className="LogInSignUp-container">
      <h1>Sign Up</h1>
      <div className="LogInSignUp-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email' />
        <input type="password" placeholder='Your Password' />
      </div>
      <button>Continue</button>
      <p className="LogInSignUp-login">Alewady have an Account <span>Login here</span></p>
      <div className="LogInSignUp-agree">
        <input type="checkbox" name='' id='' />
        <p>By Continuing, i agree to the terms of use & privacy policy </p>
      </div>
    </div>
   </div>
  )
}

export default LogInSignUp
