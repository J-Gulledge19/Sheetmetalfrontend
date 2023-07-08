import {observer} from 'mobx-react'
import { store } from '../router';
import { Form, useNavigate, useParams } from "react-router-dom"

function NewDl() {
    let navigate = useNavigate()
    const { id } = useParams()
    const selectedJob = store.jobStore._jobs.find(job => job.id === parseInt(id))
    return (
        <div className="showcard">
       <div className="form-page">
          <h2>New Download</h2>
          <Form onSubmit={async (event) => { 
            await store.jobStore.createDl(event)
            navigate(`/show/${selectedJob.id}`)
            }}
            method="post">
            <h4>Download Name</h4>
              <textarea typeof="input" name="dlName" placeholder='Name'/><br/> 
            <h4>Date Turned In</h4>
              <textarea typeof="input" name="dateTurnedIn" placeholder='Date Turned In'/><br/>
            <h4>Date Due</h4>
              <textarea typeof="input" name="dateDue" placeholder='Date Due'/><br/>
              <h4>Received By</h4>
              <textarea typeof="input" name="dateDue" placeholder='Date Due'/><br/>
              <h4>Number of Fittings</h4>
              <textarea typeof="input" name="fittings" placeholder='Date Due'/><br/>
              <h4>Amount of Duct</h4>
              <textarea typeof="input" name="duct" placeholder='Date Due'/><br/>
              <h4>Total Download Weight</h4>
              <textarea typeof="input" name="weight" placeholder='Date Due'/><br/>
              <label>
                Active<input className='checkbox' type="checkbox" name="active"/>
                Cut Out<input className='checkbox' type="checkbox" name="cutOut"/>
                Job Completed<input className='checkbox' type="checkbox" name="done"/>
            </label><br/>

            <input type="submit" value={`Add Download to ${selectedJob.name} `} />
            </Form>
            </div>
      </div>
  )
}

export default observer(NewDl)