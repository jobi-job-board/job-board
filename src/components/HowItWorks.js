import icon1 from "../assets/icons/icon-1.png";
import icon2 from "../assets/icons/icon-2.png";
import icon3 from "../assets/icons/icon-3.png";

const HowItWorks = () => {
  return (
    <section>
      <div className="wrapper how-it-works">
        <div className="line-left"></div>
        <h2>How it works!</h2>
        <div className="line-right">
          <ul className="grid-container-three">
            <li className="box">
              <img src={icon1} alt="icon one" />
              <h5 className="h5-strong">Create Account</h5>
              <p className="mt-11 lh-small">
                It's very easy to open an account and start your journey.
              </p>
            </li>
            <li className="box">
              <img src={icon2} alt="icon two" />
              <h5 className="h5-strong">Complete your Profile</h5>
              <p className="mt-11 lh-small">
                Complete your profile with all the info to get attention of
                client.
              </p>
            </li>
            <li className="box">
              <img src={icon3} alt="icon three" />
              <h5 className="h5-strong">Apply or Hire</h5>
              <p className="mt-11 lh-small">
                Apply & get your preferable jobs with all the requirements & get
                it.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
