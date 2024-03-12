// import React from "react";
// import { Route } from "react-router-dom";
// import App from "../App";
// const Routers = () => {
//     return (
//     <Route path="/Route" element={<App />} ></Route>
//     )
// }


// export default Routers

import Main from "../modules/main/pages/Main";
import App from "../App";
import { teachersRouters } from "../../src/modules/teachers/routes/TeachersRouters";
import { studentsRouters } from "../modules/students/routes/StudentsRouters";
export  const routes =[{
    path: "/" ,
    element:<App/> ,
    children: [
        {
            path: "" ,
            element:<Main/> 
        },
     
...teachersRouters ,
...studentsRouters,
    
    ]
}];