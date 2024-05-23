import React, { useEffect } from 'react'
import "./subject.css"
import Header from '../../../components/usersite/header/header'
import { useDispatch, useSelector } from 'react-redux';
import { GetSubject } from '../../../redux-toolkit/subjectSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Subject = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { getSubject, loading, error } = useSelector((state) => state.getSubject);
    console.log(getSubject, "subject into jsx");
  
    // Fetch all subscription plans
    useEffect(() => {
      dispatch(GetSubject());
    }, [dispatch]);
  return (
    <>
    <div className="bgImg vh-100">
      <Header />
      <div className="dash-container">
        <div className="subject-card">
          <div className="fs-4 fw-bold"> Select Subject </div>
         
         
            <ul className="list-group">
            {
            getSubject?.map((getAllSubject)=>(
                
                <li className="list-group-item"><Link to={`/user/topic/${getAllSubject?.id}`}> {getAllSubject?.subject_name}</Link></li>
            ))
          }
            </ul>
         
        </div>
      </div>
    </div>
  </>
  )
}

export default Subject