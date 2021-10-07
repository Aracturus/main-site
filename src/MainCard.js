import React from "react";
import Cards from "./Cards";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg"
import four from "./images/four.jpg"
import five from "./images/five.jpg"
import six from "./images/six.jpg"
import seven from "./images/seven.jpg"
import eight from "./images/eight.jpg"
import nine from "./images/nine.jpg"
import ten from "./images/ten.jpg"
import eleven from "./images/eleven.jpg"
import twelve from "./images/twelve.jpg"
import thirteen from "./images/thirteen.jpg"

let fCard = {
    first : one,
    second: two,
    third : three,
    fourth : {
        first : four,
        second : five,
        third : six
    },
    fifth:{
        first: seven,
        second : eight,
        third: nine
    },
    sixth : {
        first : ten,
        second: eleven,
        third: twelve
    },
    seventh : {
        first : thirteen,
        second : one,
        third: five
    }
}

const MainCard = () => {
  return (
    <>
      <div class="container-fluid w-100 d-flex align-items-center justify-content-between pb-lg-5">
        <Cards src={fCard} class="d-flex flex-column first_card" />
        <Cards src={fCard.fourth} class="d-flex flex-column second_card" />
        <Cards src={fCard.fifth} class="d-flex flex-column third_card" />
        <Cards src={fCard.sixth} class="d-flex flex-column second_card" />
        <Cards src={fCard.seventh} class="d-flex flex-column first_card" />
      </div>
    </>
  );
};

export default MainCard;
