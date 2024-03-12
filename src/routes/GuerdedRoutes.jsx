import React from "react";
import NotAuthorized from "../components/NotAuthorized";
 
export default function GuerdedRoutes  ({isAccessable , OnSuccess }){
    return(
isAccessable? <OnSuccess/> : <NotAuthorized/>
    )
}