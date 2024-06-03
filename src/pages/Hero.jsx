import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
    
    <div>
    <Navbar/>
    <Sidebar/>
    <div className={styles.container}>
        <div className={styles.head}>
          <h2>MUST TODOO...</h2>
        </div>
        <div className={styles.runcontainer1}>
          <div className={styles.runitems}>
            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706939464/NITSX/e6qbfiuuzbz5ofpwscux.jpg"
                alt="character"
                className={styles.image}
              />
            </div>
            <div className={styles.imgtext}>
              <h4>Run 5000m</h4>
            </div>
            <div className={styles.healthbar}></div>
            <div className={styles.details}>
              <h5>Earned 145 Rest Points</h5>
            </div>
          </div>

          <div className={styles.runitems}>
            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706939464/NITSX/e6qbfiuuzbz5ofpwscux.jpg"
                alt="Your Image Alt Text"
                className={styles.image}
              />
            </div>
            <div className={styles.imgtext}>
              <h4>Run 5000m</h4>
            </div>
            <div className={styles.healthbar}></div>
            <div className={styles.details}>
              <h5>Earned 145 Rest Points</h5>
            </div>
          </div>
          <div className={styles.runitems}>
            <div className="image-container">
              <img
                src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706939464/NITSX/e6qbfiuuzbz5ofpwscux.jpg"
                alt="Your Image Alt Text"
                className={styles.image}
              />
            </div>
            <div className={styles.imgtext}>
              <h4>Run 5000m</h4>
            </div>
            <div className={styles.healthbar}></div>
            <div className={styles.details}>
              <h5>Earned 145 Rest Pointsss</h5>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.container2}>
        <div className={styles.head2}>
          <h2>UPCOMING UNLOCKS...</h2>
        </div>
        <div className={styles.runcontainer2}>
          <div className={styles.left}>
            <div className={styles.img2_1}>
              <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706950346/vrizhhgkcwtgvlodt9ez.svg"></img>
              <h4 className={styles.xp}>LEVEL 40</h4>
            </div>
            <div className={styles.img2_2}>
              <h3 className={styles.xp}>5000 XP LEFT</h3>
              <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706950575/d3sjf1s0wtpeekbfhbam.svg"></img>
            </div>
            <div className={styles.img2_3}>
              <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706950452/xqenmgmspgmixcfqsc4g.svg"></img>
              <h4 className={styles.xp}>LEVEL 40</h4>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgr2}>
              <h3 className={styles.xp1}>500 Rest Points Left</h3>
            </div>
            <div className={styles.rightimg}>
              <div className={styles.imgr1}>
                <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706951329/b7jxq4wfhppafwsd1s7c.svg"></img>
                <h4 className={styles.xp}>Earn 400 XP</h4>
              </div>
              <div className={styles.imgr3}>
                <img src="https://res.cloudinary.com/db237jipn/image/upload/v1706951322/yjs3wmljrb73vvkfnkpz.svg"></img>
                <h4 className={styles.xp}>Earn 500 XP</h4>
              </div>
            </div>
            </div>
    </div>
    </div>
    </div>

    </>

  );
};

export default Hero;
