import styles from "./styles/App.module.css";
import cardImage from "./assets/drawers.jpg";
import userImage from "./assets/avatar-michelle.jpg";
import { useState } from "react";
const facebookIcon = require("./assets/icon-facebook.svg").default;
const twitterIcon = require("./assets/icon-twitter.svg").default;
const PinterestIcon = require("./assets/icon-pinterest.svg").default;
const shareIcon = require("./assets/icon-share.svg").default;
const selectedShareIcon = require("./assets/icon-share-selected.svg").default;

function App() {
  const [hovered, setHovered] = useState(false);
  const {
    card,
    imageContainer,
    content,
    user,
    shareContainer,
    shareHighlight,
    ShareIconContainer,
    iconShare,
    userInfo,
    mobileShareContainer,
  } = styles;

  return (
    <main className={card}>
      <div className={imageContainer}>
        <img src={cardImage} alt="cardImage" />
      </div>
      <div className={content}>
        <h1>
          {" "}
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>

        <div className={user}>
          <img src={userImage} alt="UserImage" />
          <div className={userInfo}>
            <h1>Michelle Appleton</h1>
            <p>28 Jun 2020</p>
          </div>
          <div className={shareContainer}>
            {hovered && (
              <div className={shareHighlight}>
                <p>Share</p>
                <div>
                  <img src={facebookIcon} alt="FacebookIcon" />
                  <img src={twitterIcon} alt="TwitterIcon" />
                  <img src={PinterestIcon} alt="PinterestIcon" />
                </div>
              </div>
            )}
            <div
              className={ShareIconContainer}
              onClick={() => setHovered(!hovered)}
            >
              <img
                className={iconShare}
                src={!hovered ? shareIcon : selectedShareIcon}
                alt="share"
              />
            </div>
          </div>
          {hovered && (
            <div className={mobileShareContainer}>
              <p>Share</p>
              <div>
                <img src={facebookIcon} alt="FacebookIcon" />
                <img src={twitterIcon} alt="TwitterIcon" />
                <img src={PinterestIcon} alt="PinterestIcon" />
              </div>
              <div
                className={ShareIconContainer}
                onClick={() => setHovered(!hovered)}
              >
                <img className={iconShare} src={shareIcon} alt="share" />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
