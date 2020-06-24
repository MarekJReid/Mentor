import React from "react";

const Publicatons = () => {
  return (
    <div>
      <div
        className="section"
        style={{
          padding: `2rem`,
        }}
      >
        <div
          className="publication-header"
          style={{
            textAlign: `center`,
            paddingBottom: `2rem`,
          }}
        >
          <h1>
            Featured in the following leading financial publications and
            journals:
          </h1>
        </div>

        <div className="row">
          <div className="col s4 l2">
            <img src={require("./images/pub1.png")} />
          </div>
          <div className="col s4 l2">
            <img src={require("./images/pub2.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub3.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub4.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub5.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub6.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub7.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub8.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub9.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub10.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub11.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub12.png")} />
          </div>{" "}
          <div className="col s4 l2">
            <img src={require("./images/pub13.png")} />
          </div>
          <div className="col s4 l2">
            <img src={require("./images/pub14.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publicatons;
