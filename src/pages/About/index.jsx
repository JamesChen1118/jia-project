import { Link } from "react-router-dom";
import "./index.css";

const About = () => {
  return (
    <>
      <div className="about-main">
        <p className="about-mainText">
          我們寧靜得佇立 在這車水馬龍喧鬧的的台北市一角 我們有著溫馨的環境
          溫暖友善的待客之道 並奉上擁有溫度的食物 每天上班下班奔波勞碌之餘
          最期待就是回到家那舒適的港灣 累了?就進來坐坐
        </p>
        <img src="https://picsum.photos/id/684/600/400" alt=""  className="about-img"/>

        <Link to="/Booking" className="about-link">歡迎回JIA</Link>
      </div>
    </>
  );
};

export default About;
