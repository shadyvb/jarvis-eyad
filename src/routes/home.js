import { Button, Card, Classes, Elevation, Icon } from "@blueprintjs/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../state";

const links = [
  { to: "/todos", icon: "endorsed", title: "Check off tasks!" },
  { to: "/journal", icon: "book", title: "Dear Diary.." },
  { to: "/code", icon: "code", title: "Code the future!" },
  { to: "/language", icon: "translate", title: "Parle au Francais!" },
  { to: "/math", icon: "numerical", title: "Do the Math!" },
  { to: "/read", icon: "predictive-analysis", title: "Expand your brain!" },
  { to: "/exercise", icon: "walk", title: "Exercise!" },
  { to: "/bike", icon: "cycle", title: "Cycle!" },
  { to: "/watch", icon: "video", title: "Chill with TV!" },
  { to: "/food", icon: "shopping-cart", title: "Pick a meal!" },
  { to: "/earn", icon: "dollar", title: "Earn money!" }
];

const listen = () => {
  var recognition = new webkitSpeechRecognition(); /* eslint-disable-line */
  recognition.onresult = function (event) {
    console.log(event);
  };
  recognition.start();
};

const Home = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Hello Eyad!</h1>
        <h2>What do you want to do now?</h2>
        {typeof webkitSpeechRecognition !== "undefined" && (
          <Button primary large onClick={listen}>
            Speak your words
          </Button>
        )}
      </div>
      <div className="card-container">
        {links.map((link) => (
          <div className="card">
            <NavLink to={link.to}>
              <Card interactive={true} elevation={Elevation.TWO}>
                <h5 className={Classes.HEADING}>
                  <NavLink to={link.to}>
                    <Icon icon={link.icon} />
                    {link.title}
                  </NavLink>
                </h5>
              </Card>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

Home.route = {
  path: "/",
  exact: true
};

export default Home;
