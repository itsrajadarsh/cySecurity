import { apple, intell, google } from "../assets";
import styles, { layout } from "../style";
import KnowMore from "./KnowMore";

const Control = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={intell}
        alt="control"
        className="w-[70%] h-[80%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Intelligent Control, <br className="sm:block hidden" />
        Seamless Operations
      </h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
        Experience the future of control systems with our Smart Control System
        Solutions. Our cutting-edge technology ensures intelligent, automated
        control, bringing efficiency and precision to your operations. From
        smart monitoring to responsive systems, we redefine control, empowering
        your business with the tools it needs to thrive in the digital era.
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

export default Control;
