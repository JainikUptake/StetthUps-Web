import React from 'react'
import { useParams } from 'react-router-dom'

const SubPlans = () => {
    const {id} = useParams()
  return (
    <div>subPlans{id}</div>
  )
}

export default SubPlans