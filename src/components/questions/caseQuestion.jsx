import React from "react";
import "./caseQuestion.css";

const CaseQuestion = ({ subData }) => {
    return (
        <div className="container  my-5 p-4 border rounded">
            <div className="question">
                {subData?.question}
            </div>
            <ul className="options">
                <li>{subData?.option_a}</li>
                <li>{subData?.option_b}</li>
                <li>{subData?.option_c}</li>
                <li>{subData?.option_d}</li>
            </ul>
            <div className="explanation">
                <span className="text-dark">Explanation:-</span>
        
                {subData?.explanation}
            </div>
        </div>
    );
};

export default CaseQuestion;
