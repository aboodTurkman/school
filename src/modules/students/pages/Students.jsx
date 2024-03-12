import React from "react"
import { useLoaderData } from "react-router-dom"
function Students() {
const data = useLoaderData()
  return (
 <div className="row">
  {
     data.map((item , index )=>{
      return (<div key={index} className="col-lg-4">
        {item.firstName} </div>)
    })
  }
 </div>
  )
}

export default Students
