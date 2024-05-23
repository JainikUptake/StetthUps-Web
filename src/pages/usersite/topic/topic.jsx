import React, { useEffect } from 'react'
import "./topic.css"
import Header from '../../../components/usersite/header/header'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetTopicBySubjectId } from '../../../redux-toolkit/topicSlice';

const Topic = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { getTopicBySubjectID, loading, error } = useSelector(
    (state) => state.getTopicBySubject
  );
  console.log(getTopicBySubjectID, "-----ddd");
  

  useEffect(() => {
    dispatch(GetTopicBySubjectId(id));
  }, [id]);

  return (
    <>
    <div className="bgImg vh-100">
      <Header />
      <div className="dash-container">
        <div className="topic-card">
          <div className="fs-4 fw-bold"> Select Topic </div>
       
         
            <ul className="list-group">
            {
            getTopicBySubjectID?.map((getTopic)=>(
                
                <li className="list-group-item"><Link to={`/user/case/${getTopic?.id}`}> {getTopic?.topic_name}</Link></li>
            ))
          }
              {/* <li className="list-group-item"><button> hey topic{id}</button></li> */}
            </ul>
        
        </div>
      </div>
    </div>
  </>
  )
}

export default Topic