import styles from "./Login.module.scss"

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <form>
        <h1>Login</h1>
        <div className={styles.inputBox}>
            <input type="text" placeholder="Username" required/>
        </div >
        <div className={styles.inputBox}>
        <input type="password" placeholder="Password" required/>
        </div>
        <div className={styles.remFor}>
            <label><input type="checkbox"/> Remember me</label>
            <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className={styles.btn} >Login</button>
        <div className={styles.registerLink}>
            <p> Don&apos;t have an account? <a href="#">Register</a> </p>
        </div>
      </form>
    </div>
  )
}

export default Login