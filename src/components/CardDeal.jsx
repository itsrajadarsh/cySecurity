import { card } from "../assets";
import styles, { layout } from "../style";
import KnowMore from "./KnowMore";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Effortless Management of <br className="sm:block hidden" /> Your Digital
        Assets
      </h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
        Unlock the potential of your data with our Data Management Solutions.
        Seamlessly organize, analyze, and optimize your digital assets with our
        innovative tools. From data storage to retrieval, our services ensure
        that your information is not just managed but transformed into a
        strategic asset driving your business forward.
      </p>

      <KnowMore styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
