import React, { useEffect, useState } from "react";
import "./caseDescription.css";
import Header from "../../../components/usersite/header/header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetCaseByCaseId } from "../../../redux-toolkit/getCaseSlice";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

const CaseDescription = () => {
  const [activeTab, setActiveTab] = useState("0");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getCaseByCaseId, loading, error } = useSelector(
    (state) => state.getCaseByCaseId
  );

  useEffect(() => {
    dispatch(GetCaseByCaseId(id));
  }, [dispatch, id]);

  const getCaseDescription = getCaseByCaseId?.case_description;
  console.log(getCaseDescription, "----------------");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleCaseId = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="caseDescription-card">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {getCaseDescription && (
              <>
                <Nav tabs>
                  {getCaseDescription.map((allCaseDescription, index) => (
                    <NavItem key={allCaseDescription?.id}>
                      <NavLink
                        className={classnames({
                          active: activeTab === index.toString(),
                        })}
                        onClick={() => {
                          toggleTab(index.toString());
                        }}
                      >
                        {allCaseDescription?.title}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <TabContent activeTab={activeTab}>
                  {getCaseDescription.map((allCaseDescription, index) => (
                    <TabPane
                      tabId={index.toString()}
                      key={allCaseDescription?.id}
                    >
                      <div className="tab-content">
                        <p>{allCaseDescription?.description}</p>
                        {allCaseDescription?.description_file}
                      </div>
                    </TabPane>
                  ))}
                </TabContent>
              </>
            )}
            <button type="submit" onClick={() => handleCaseId(id)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseDescription;
