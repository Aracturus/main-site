import React from "react";
import HeadingContent from "./HeadingContent";
import HeadingParagraph from "./HeadingParagraph";

const MainContent = () => {
  return (
    <>
      <div
        className=" mx-auto position-relative p-2 mainContent"
        style={{ margin: "290px 0 0 0 " }}
      >
        <HeadingContent class="text-center text-capitalize display-3 w-lg-50 w-75 mx-auto headingContent">
          Less process more productivity
        </HeadingContent>

        <HeadingParagraph class="mt-lg-3 mx-auto text-center text-capitalize mainPara">
          No more email chains, no more print-and-scan-change requests, no-more
          missed deadlines. We've simpilfied the design process so you can see
          results faster and we can put more time into what we do the best,
          design...
        </HeadingParagraph>

        <h3 className="plain-txt text-center text-capitalize">Testimonials</h3>
      </div>
    </>
  );
};

export default MainContent;
