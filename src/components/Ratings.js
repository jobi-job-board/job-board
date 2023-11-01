import female1 from "../assets/avatars/female-1.jpeg";
import male1 from "../assets/avatars/male-1.jpeg";
import female2 from "../assets/avatars/female-2.jpeg";
const Ratings = () => {
  return (
    <section>
      <div className="ratings flex">
        <div className="ratings-avatars flex">
          <img src={female1} alt="female1-thumbnail" />
          <img src={male1} alt="male1-thumbnail" />
          <img src={female2} alt="female2-thumbnail" />
          <div className="plus flex">+</div>
        </div>
        <div className="ratings-stats flex-col">
          <h6>18k+</h6>
          <p> Individual Freelancer</p>
        </div>
        <div className="ratings-stars flex-col">
          <h6>A+ Rating</h6>
          <p>⭐ ⭐ ⭐ ⭐ ⭐ 4.78 (300k+)</p>
        </div>
      </div>
    </section>
  );
};

export default Ratings;
