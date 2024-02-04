import styles from "./Login.module.scss"
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <form>
        <h1>Login to your Account</h1>
        <div className={styles.inputBox}>
            <input type="text" placeholder="Username" required/>
        </div >
        <div className={styles.inputBox}>
        <input type="password" placeholder="Password" required/>
        </div>
        <div className={styles.remFor}>
            <a href="#">Forgot password?</a>
        </div>
       <Link to='./hero'><button type="submit" className={styles.btn} >Login</button></Link> 
        {/* <div className={styles.registerLink}>
            <p> Don&apos;t have an account? <span className={styles.undrline}>Register</span> </p>
        </div> */}
      </form>
    </div>
  )
}

export default Login