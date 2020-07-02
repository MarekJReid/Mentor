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
          data-sal="slide-down"
                         data-sal-delay="400"
                         data-sal-duration="1000"
                         data-sal-easing="ease"
                       
        >
          <h1>
            Featured in the following leading financial publications and
            journals:
          </h1>
        </div>

        <div className="row">
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub1.png")} />
          </div>
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="200"
          data-sal-duration="500"
          data-sal-easing="ease">
            <img src={require("./images/pub2.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-duration="500"
          data-sal-easing="ease">
            <img src={require("./images/pub3.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="400"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub4.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="600"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub5.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="700"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub6.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-duration="800"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub7.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="900"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub8.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="1000"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub9.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="1100"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub10.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="1200"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub11.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="1300"
          data-sal-duration="500"
          data-sal-easing="ease"
          >
            <img src={require("./images/pub12.png")} />
          </div>{" "}
          <div className="col s4 l2"
          data-sal="slide-left"
          data-sal-delay="1400"
          data-sal-duration="500"
          data-sal-easing="ease">
            <img src={require("./images/pub13.png")} />
          </div>
          <div className="col s4 l2"
          
          >
            <img src={require("./images/pub14.png")} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publicatons;
