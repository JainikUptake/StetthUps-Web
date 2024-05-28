import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetSummary } from '../../../redux-toolkit/userSummarySlice';
import Header from '../../../components/usersite/header/header';
import "./userSummary.css"

const UserSummary = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { getuserSummary } = useSelector(
      (state) => state.getSummary
    );
    console.log(getuserSummary, "-----get All case");
  
    useEffect(() => {
      dispatch(GetSummary(id));
    }, []);
  return (
    <div className="bgImg vh-100">
    <Header />
    <div className="dash-container">
      <div className="userSummary-card">
        <div className='fw-bold fs-2'>Summary</div>

        {/* <p>{getuserSummary?.[0]?.case_name}</p>

        dangerouslySetInnerHTML={{
                __html: subscriptionPlanById?.description,
              }}
        <p>{getuserSummary?.[0]?.case_analysis}</p>

        case_analysis */}

        </div>
        </div>
        </div>
  )
}

export default UserSummary