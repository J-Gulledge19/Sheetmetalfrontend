import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Show from "./pages/Show"
import Index from "./pages/Index"
import NewJob from "./pages/NewJob"
import UpdateDl from "./pages/UpdateDl"
// import UpdateJob from "./pages/UpdateJob"
import CreateDl from "./pages/CreateDl"
import { RootStore } from "./stores/RootStore"


export const store = new RootStore()

const router = createBrowserRouter(createRoutesFromElements(
  <>
      <Route path="/" element={<App/>}>
      <Route path="" element={<Index/>}/>
          <Route path="show/:id" element={<Show/>} />
          <Route path="create" element={<NewJob/>} />
          <Route path="newdl/:id" element={<CreateDl/>} />
          <Route path="edit/:id/:dlId" element={<UpdateDl/>} />
          {/* <Route path="editjob/:id" element={<UpdateJob/>}/> */}
      </Route>
  </>
))

export default router