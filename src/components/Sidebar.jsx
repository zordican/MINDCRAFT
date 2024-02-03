import styles from "./Sidebar.module.scss"

const Sidebar = () => {
  return (
    <>
    <div className={styles.progressbar}></div>
    <div className={styles.main}>
      <div className={styles.avatar_container}>
        <img src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706980242/NITSX/g7gczvvzlg1yg0da3fmf.png" alt="" />
        <p>HARSH</p>
        <p>lvl 100</p>
      </div>
      <div className={styles.avatar_container}>
        <img src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706980242/NITSX/qtlk7n5fmapu6vaymnwf.png" alt="" />
        <p>SNEHA</p>
        <p>lvl 80</p>
      </div>
      <div className={styles.avatar_container}>
        <img src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706980242/NITSX/r1ep80erdlfjzmkbj2kf.png" alt="" />
        <p>ANKIT</p>
        <p>lvl 60</p>
      </div>
    </div>
    
    </>
  )
}

export default Sidebar
