import { ROUTES } from "../constans/api";
import Students from "../pages/Students";
export const studentsRouters = [{
  path: ROUTES.STUDENTS ,
  loader: async () => { return (
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((res) => res.users)
  )
  },
  element: <Students />
},
]