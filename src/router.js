import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Show from "./pages/Show"
// import NewJob from "./pages/NewJob"
// import Update from "./pages/Update"
// import UpdateJob from "./pages/UpdateJob"
// import CreateDl from "./pages/CreateDl"
import { RootStore } from "./stores/RootStore"


export const store = new RootStore()

const router = createBrowserRouter(createRoutesFromElements(
  <>
      <Route path="/" element={<App/>}>
          <Route path="show/:id" element={<Show/>} />
          {/* <Route path="create" element={<NewJob/>} />
          <Route path="newdl/:id" element={<CreateDl/>} />
          <Route path="edit/:id/:dlId" element={<Update/>} />
          <Route path="editjob/:id" element={<UpdateJob/>}/> */}
      </Route>
  </>
))

export default router