import styles from "./Navbar.module.scss"
const Navbar = () => {
  return (
    <div className={styles.header}>
        <img className={styles.logo} src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706928294/NITSX/qlbwnyuuvmvofao3bnck.svg" alt="" />
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tasks</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
