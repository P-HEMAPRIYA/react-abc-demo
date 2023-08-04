import { React, useEffect } from "react";
import { useState } from "react";

export default function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  var diff = like - dislike;

  useEffect(() => {
    console.log("like is updated", like);
  }, [like, dislike]); //dependencies array

  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍{like}
      </button>
      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        👎{dislike}
      </button>
      {diff >= 10 ? <h1>Awesome</h1> : " "};
    </div>
  );
}
