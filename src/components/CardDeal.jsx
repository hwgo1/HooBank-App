import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in a few
          easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Unlock exclusive credit card offers tailored just for you. With our
          user-friendly platform, discovering the perfect card deal is a breeze.
          Compare, choose, and elevate your financial journey today. Your ideal
          credit card awaits!
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="Credit Card Analyses" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
