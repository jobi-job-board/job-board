import bag from "../assets/icons/icon-bag.png";
import box from "../assets/homepage-section/box.png";
import code from "../assets/icons/icon-bag.png";
import curved from "../assets/icons/curved-line.png";
import pencil from "../assets/icons/icon-pencil.png";
import phone from "../assets/icons/icon-phone.png";
import video from "../assets/icons/icon-video.png";
import { ArrowUpRight } from "phosphor-react";
import categoriesLink from "../assets/homepage-section/categories-link.png";

const Grid = () => {
  return (
    <section class="job-categories">
      <div className="">
        <div className="flex grid-wrapper">
          <h2 className="left">
            Most demanding job <span className="new-line">categories.</span>
          </h2>
          <a href="#">
            <img src={categoriesLink} alt="Categories link" />
          </a>
        </div>
        <div className="">
          <div className="grid">
            <div className="grid-box flex-col">
              <div className="circle">
                <img className="icon" src={pencil} alt="pencil" />
              </div>
              <h5 className="regular">
                Design & <span className="new-line">Development</span>
              </h5>
              <p>2340 vacancy</p>
            </div>
            <div className="grid-box flex-col">
              <div className="circle">
                <img className="icon" src={pencil} alt="pencil" />
              </div>
              <h5 className="regular">
                Customer Marketing<span className="new-line">&Sales.</span>
              </h5>
              <p>1560 vacancy</p>
            </div>
            <div className="grid-box flex-col">
              <div className="circle">
                <img className="icon" src={bag} alt="bag" />
              </div>
              <h5 className="regular">
                Business<span className="new-line">Marketing.</span>
              </h5>
              <p>2210 vacancy</p>
            </div>
            <div className="grid-box flex-col">
              <div className="circle">
                <img className="icon" src={phone} alt="phone" />
              </div>
              <h5 className="regular">
                Business<span className="new-line">Development.</span>
              </h5>
              <p>960 vacancy</p>
            </div>
            <div className="grid-box flex-col">
              <div className="circle">
                <img className="icon" src={code} alt="code" />
              </div>
              <h5 className="regular">
                Programming & <span className="new-line">Code</span>
              </h5>
              <p>2340 vacancy</p>
            </div>
            <div className="grid-box flex-col">
              <div className="circle">
                <img className="icon" src={video} alt="video" />
              </div>
              <h5 className="regular">
                Video Edition <span className="new-line">& 3D work</span>
              </h5>
              <p>2340 vacancy</p>
            </div>
            <div className="grid-box flex-col">
              <div className="circle">
                <img className="icon" src={pencil} alt="pencil" />
              </div>
              <h5 className="regular">
                Art & <span className="new-line">Animation.</span>
              </h5>
              <p>2340 vacancy</p>
            </div>
            <div className="grid-box flex-col green">
              <h4 className="h4">13k+</h4>
              <p>Job already posted</p>
              <div className="flex-space-evenly">
                <img className="icon-line" src={curved} alt="code" />
                <div className="circle circle-green">
                  <ArrowUpRight size={32} weight="bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
