import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706950346/vrizhhgkcwtgvlodt9ez.svg"></img>
        <h2 className={styles.lvl}>LEVEL 60</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.name}>
          <h2>PRX Something</h2>
        </div>
        <br></br>
        <div className={styles.hp}>
          <div className={styles.hpbar}>
            <br></br>
            <div className={styles.rpoint}>
              <h4>REST POINTS</h4>
            </div>
          </div>
          <button className={styles.wtest1}>
            <h4>TAKE YOUR WEEKLY TEST</h4>
          </button>
        </div>
        <br></br>
        <br></br>
        <div className={styles.XPbar}></div>
        <div className={styles.XP}>
          <h4>XP</h4>
        </div>
      </div>
    </div>
  );
};
export default Profile;
