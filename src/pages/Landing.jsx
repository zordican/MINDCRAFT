import styles from "./Land.module.scss";

const Landing = () => {
  return (
    <div className={styles.Maindiv}>
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
      <button className={styles.btn} type="button">GET STARTED</button>
    </div>
  );
};

export default Landing;
