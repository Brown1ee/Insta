import React from "react";
import { Link, useLocation } from "react-router-dom";

const IMG = ({ itemSrc, itemKey, pic, index, alt, getImageId }) => {
  let location = useLocation();

  return (
    <div>
      <Link
        key={itemKey}
        to={{
          pathname: `/image/${itemKey}`,
          state: {
            background: location
          }
        }}
      >
        <img
          className="feed-pic"
          src={itemSrc}
          key={itemKey}
          alt={alt}
          onClick={getImageId}
        ></img>
      </Link>
    </div>
  );
};

export default IMG;
