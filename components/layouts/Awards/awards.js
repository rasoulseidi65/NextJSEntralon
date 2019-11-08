import React from "react";

const LoopModeWithMultipleSlidesPerGroup = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex">
        <div className="flex-fill">
          <img className="img-awards" src="/static/images/awards/awards.png" />
        </div>
        <div className="flex-fill">
          <img className="img-awards" src="/static/images/awards/awards.png" />
        </div>
        <div className="flex-fill">
          <img className="img-awards" src="/static/images/awards/awards.png" />
        </div>
        <div className="flex-fill">
          <img className="img-awards" src="/static/images/awards/awards.png" />
        </div>
        <div className="flex-fill">
          <img className="img-awards" src="/static/images/awards/awards.png" />
        </div>
        <div className="flex-fill">
          <img className="img-awards" src="/static/images/awards/awards.png" />
        </div>
      </div>
      <style jsx>
        {`
          .img-awards {
            height: 120px;
            width: 120px;
          }
        `}
      </style>
    </div>
  );
};

export default LoopModeWithMultipleSlidesPerGroup;
