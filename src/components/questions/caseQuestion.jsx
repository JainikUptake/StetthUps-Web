import React from "react";

const CaseQuestion = (subData) => {
    console.log(subData,"----------------------subbbbb")


  return (
    <>
      <div>{subData?.subData?.question}</div>
      <ul>
        <li>{subData?.subData?.option_a}</li>
        <li>{subData?.subData?.option_b}</li>
        <li>{subData?.subData?.option_c}</li>
        <li>{subData?.subData?.option_d}</li>
      </ul>
      <div>{subData?.subData?.explanation}</div>
    </>
  );
};

export default CaseQuestion;
