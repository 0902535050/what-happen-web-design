import React from "react";

const BestSeller = () => {
  return (
    <div className="bestseller">
      <div className="bestseller__content">
        <div className="bestseller__content-top">
          <h1>Best product</h1>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first{" "}
          </p>
        </div>
        <div className="bestseller__content-bottom">
          <div className="bottom__listItem">
            <div className="bottom__listItem-item">
              <div className="item">
                <img src="img/7.png" alt="" />
                <span className="index">01</span>
                <div className="bottom">
                  <span>How to create mobile-optimized</span>
                  <span className="go">Go</span>
                </div>
              </div>
              <img src="img/4.png" alt="" />
            </div>
            <div className="bottom__listItem-item">
              <div className="item">
                <img src="img/7.png" alt="" />
                <span className="index">02</span>
                <div className="bottom">
                  <span>How to create mobile-optimized</span>
                  <span className="go">Go</span>
                </div>
              </div>
              <img src="img/5.png" alt="" />
            </div>
            <div className="bottom__listItem-item">
              <div className="item">
                <img src="img/7.png" alt="" />
                <span className="index">03</span>
                <div className="bottom">
                  <span>How to create mobile-optimized</span>
                  <span className="go">Go</span>
                </div>
              </div>
              <img src="img/6.png" alt="" />
            </div>
          </div>
        </div>
        <img src="img/3.png" alt="" />
      </div>
    </div>
  );
};

export default BestSeller;
