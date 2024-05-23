import React, { useEffect } from 'react'
import "./case.css"
import Header from '../../../components/usersite/header/header'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCaseByTopicId } from '../../../redux-toolkit/caseSlice';

const Case = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { getCaseByTopicId, loading, error } = useSelector(
    (state) => state.getCaseByTopic
  );
  console.log(getCaseByTopicId, "-----ddd");
  

  useEffect(() => {
    dispatch(GetCaseByTopicId(id));
  }, [id])
  return (
    <>
    <div className="bgImg vh-100">
      <Header />
      <div className="dash-container">
        <div className="case-card">
          <div className="fs-4 fw-bold"> Select case </div>
          
            <ul className="list-group">
              <li className="list-group-item"><button> hey case</button></li>
            </ul> <ul className="list-group">
            {
            getCaseByTopicId?.map((getAllCase)=>(
                
                <li className="list-group-item"><Link to={`/user/case/video/${getAllCase?.id}`}><span>{getAllCase?.case_name}</span> </Link></li>
            ))
          }
            </ul>
          </div>
        </div>
      </div>
 
  </>
  )
}

export default Case