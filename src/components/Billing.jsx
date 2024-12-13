import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import KnowMore from "./KnowMore";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Guardians of Your <br className="sm:block hidden" />
        Digital Fortress
      </h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
        Empower your business with our state-of-the-art Data Protection
        Services. We specialize in creating robust defense mechanisms to
        safeguard your sensitive information. From encryption to threat
        detection, trust us to fortify your digital fortress and keep your data
        secure from evolving cyber threats.
      </p>
      <KnowMore styles={`mt-10`} />

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;
