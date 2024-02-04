import styles from "./Navbar.module.scss"
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={styles.header}>
        <Link to="/hero"><img className={styles.logo} src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706928294/NITSX/qlbwnyuuvmvofao3bnck.svg" alt="" /></Link>
        <nav>
            <ul>
                <li><Link to="/hero">Home</Link></li>
                <li><a href="#">Tasks</a></li>
                <li><a href="#">Games</a></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
