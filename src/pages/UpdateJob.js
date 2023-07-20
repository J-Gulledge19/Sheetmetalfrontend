import {observer} from 'mobx-react'
import { store } from '../router';
import { Form, useNavigate, useParams } from "react-router-dom"

function UpdateJob() {
    const { id } = useParams()
    let navigate = useNavigate()
    const selectedJob = store.jobStore._jobs.find(job => job.id === parseInt(id))
    console.log(selectedJob)

    return (
        <div className="showcard">
       <div className="form-page">
          <h2>Edit Job</h2>
          <Form onSubmit={async (event) => { 
            await store.jobStore.updateJob(event, selectedJob.id)
            navigate(`/show/${selectedJob.id}`)
            }}
            method="post">
                
            <h4>Job Name</h4>
              <textarea typeof="input" name="name" defaultValue={selectedJob.name}/><br/> 
            <h4>Job Number</h4>
              <textarea typeof="input" name="number" defaultValue={selectedJob.number}/><br/>
            <input type="submit" value={`Update ${selectedJob.name} `} />
            </Form>
            </div>
      </div>
  )
}

export default observer(UpdateJob)