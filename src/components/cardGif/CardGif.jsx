import React from "react";

function CardGif({dataGif}) {
  return (
    <div>
      {console.log(dataGif.images.fixed_height.url)}
      <img src={dataGif.images.fixed_height.url} alt="" />
    </div>
  );
}

export default CardGif;
