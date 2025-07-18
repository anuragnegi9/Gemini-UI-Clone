import { useRef, useEffect } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";

const Main = () => {


  return (
    <div className="main">
      <div className="nav">
        <p>Gemini AI</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev</span></p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">

          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Brainstorm team bonding activites for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Improve the readability pf the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter your prompt here' />

            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inacurate info, inculde about people, so double-check its responses. Your privacy and gemini apps.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main