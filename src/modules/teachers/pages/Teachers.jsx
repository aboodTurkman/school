import React from "react"
import { useLoaderData } from "react-router-dom"
// import { useEffect } from "react";
// import { useState } from "react";
// const [data , setData]= useState()
function Teachers() {
// useEffect(()=>{
  
// fetch('https://dummyjson.com/products')
// .then((res) => res.json())
// .then((res) => setData(res.products))
// } ,[])

const data = useLoaderData()
  return (
<div className="row">
  
{ data && data?.map((item )=>{
    return <div  className="col-lg-4">{item.title}</div>
  })
}
</div>
  )}

export default Teachers
