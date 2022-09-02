import React from "react";

const Issue = () => {
  return (
    <div className="issue">
      <div className="issue__content">
        <div className="issue__content-top">
          <span>Happened’s issue</span>
          <p>
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
          <button>see more</button>
          <div className="content__top-item">
            <div className="item-1">
              <img src="img/16.png" alt="" />
            </div>
            <div className="item-2">
              <img src="img/17.png" alt="" />
            </div>
          </div>
        </div>
        <div className="issue__content-bottom">
          <div className="content__bottom-item">
            <div className="item-1">
              <span>whpn issue</span>
              <div className="item-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
              <div className="item-img">
                <img src="img/18.png" alt="" />
              </div>
            </div>
            <div className="item-2">
              <div className="item-hot">
                <span>Hot</span>
              </div>
              <div className="item-top">
                <span>b brand</span>
              </div>
              <div className="item-bottom">
                <img src="img/19.png" alt="" />
              </div>
            </div>
            <div className="item-3">
              <div className="item-top">
                <span>c brand</span>
              </div>
              <div className="item-bottom">
                <img src="img/20.png" alt="" />
              </div>
            </div>
            <div className="item-4">
              <div className="item-top">
                <span>d brand</span>
              </div>
              <div className="item-bottom">
                <img src="img/21.png" alt="" />
              </div>
              <div className="item-img">
                <img src="img/23.png" alt="" />
              </div>
            </div>
            <div className="item-5">
              <div className="item-top">
                <span>e brand</span>
              </div>
              <div className="item-bottom">
                <img src="img/22.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;
