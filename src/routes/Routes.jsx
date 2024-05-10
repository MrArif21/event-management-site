import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetails from "../pages/EventDetails/EventDetails";



export const router = createBrowerRouter([
    {path:'/',element:<EventList/>},
    {path:'/find-events',element:<FilterEvents/>},
    {path:'/events/:id',element:<EventDetails/>}, 
  ])