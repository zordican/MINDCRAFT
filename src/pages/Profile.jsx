import Navbar from "../components/Navbar";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
    <div className={styles.child1}>
      <div className={styles.left}>
        <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706950346/vrizhhgkcwtgvlodt9ez.svg"></img>
        <h2 className={styles.lvl}>LEVEL 69</h2>
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
      <div className={styles.child2}>
    <div className={styles.plyrsadd}>
      <h2>PLAYERS ADDED</h2>
    </div>
    <div className={styles.players}>
      <div className={styles.player}>
        <div className={styles.img}>
          <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706950346/vrizhhgkcwtgvlodt9ez.svg"></img>
        </div>
        <div className={styles.name}>
          <h3>NAME</h3>
        </div>
        <div className={styles.rpbar}><h6>RP</h6></div>
        <div className={styles.xpbar}><h6>XP</h6></div>
      </div><div className={styles.player}>
        <div className={styles.img}>
          <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706950346/vrizhhgkcwtgvlodt9ez.svg"></img>
        </div>
        <div className={styles.name}>
          <h3>NAME</h3>
        </div>
        <div className={styles.rpbar}><h6>RP</h6></div>
        <div className={styles.xpbar}><h6>XP</h6></div>
      </div><div className={styles.player}>
        <div className={styles.img1}>
          <img src="https://res.cloudinary.com/db237jipn/image/upload/v1707015584/piupbkyypfrybckatcpa.svg"></img>
        </div>
        <div className={styles.name}>
          <h3>NAME</h3>
        </div>
        <div className={styles.rpbar}><h6>RP</h6></div>
        <div className={styles.xpbar}><h6>XP</h6></div>
      </div><div className={styles.player}>
        <div className={styles.img}>
          <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706950346/vrizhhgkcwtgvlodt9ez.svg"></img>
        </div>
        <div className={styles.name}>
          <h3>NAME</h3>
        </div>
        <div className={styles.rpbar}><h6>RP</h6></div>
        <div className={styles.xpbar}><h6>XP</h6></div>
      </div><div className={styles.player}>
        <div className={styles.img}>
          <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706950346/vrizhhgkcwtgvlodt9ez.svg"></img>
        </div>
        <div className={styles.name}>
          <h3>NAME</h3>
        </div>
        <div className={styles.rpbar}><h6>RP</h6></div>
        <div className={styles.xpbar}><h6>XP</h6></div>
      </div>
    </div>
</div>    
</div>
</>

  );
};
export default Profile;
