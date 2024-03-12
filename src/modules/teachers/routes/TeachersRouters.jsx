import Teachers from "../../teachers/pages/Teachers";
import { ROUTES } from "../constans/api";
export const teachersRouters = [{

  path: ROUTES.TEACHERS,
  loader: async () => {
    return fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => res.products);
  },
  element: <Teachers />
},]
