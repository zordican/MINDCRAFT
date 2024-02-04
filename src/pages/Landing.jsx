import styles from "./Land.module.scss";
import { useState } from "react";
import Login from "./Login";

const Landing = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal)
    }
  
    return (
        
    <div className={styles.Maindiv}>
        {modal && (
            <div className={styles.ModalWrapper}>
            <div className={styles.overlay} onClick={toggleModal}></div>
            <div className={styles.Modal}><Login/></div>
        </div>
            )}
        
      <div className={styles.logo}>
        <img
          className={styles.logo_img}
          src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706928294/NITSX/qlbwnyuuvmvofao3bnck.svg"
          alt=""
        />
      </div>
      <div className={styles.Imagewrapper}>
        <img
          src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706936933/NITSX/zxwnojbdrbcvxmy0uncs.svg"
          alt="HERO IMAGE"
        />
      </div>
      <h2>LEVELING UP YOUR HEALTH</h2>
      <p>
        Similarity between life and RPG is literally 100%. At MINDCRAFT you
        build your character by completing your daily life goals. Compete
        against many quests and side quests for development of your character,
        earn XP by playing mind boosting games and unlock achievements to
        compete against other players
      </p>
      <button className={styles.btn} type="button" onClick={toggleModal}>GET STARTED</button>
    </div>
  );
};

export default Landing;
