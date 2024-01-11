import React from "react";

const Vedio = (props) => {
  return (
    <div>
      <iframe
        width="700"
        height="400"
        src={props.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  );
};

export default Vedio;
