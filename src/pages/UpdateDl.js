import {observer} from 'mobx-react'
import { store } from '../router';
import { Form, useNavigate, useParams } from "react-router-dom"

function UpdateDl() {
    const { id, dlId } = useParams()
    let navigate = useNavigate()
    const selectedJob = store.jobStore._jobs.find(job => job.id === parseInt(id))
    const selectedDl = selectedJob.downloads.find(dl => dl.id === parseInt(dlId))

    return (
        <div className="showcard">
       <div className="form-page">
          <h2>Edit Download</h2>
          <Form onSubmit={async (event) => { 
            await store.jobStore.updateDl(event, selectedJob.id, parseInt(dlId))
            navigate(`/show/${selectedJob.id}`)
            }}
            method="post">
            <h4>Download Name</h4>
              <textarea typeof="input" name="dlName" defaultValue={selectedDl.dlName}/><br/> 
            <h4>Date Turned In</h4>
              <textarea typeof="input" name="dateTurnedIn" defaultValue={selectedDl.dateTurnedIn}/><br/>
            <h4>Date Due</h4>
              <textarea typeof="input" name="dateDue" defaultValue={selectedDl.dateDue}/><br/>
              <h4>Received By</h4>
              <textarea typeof="input" name="receivedBy" defaultValue={selectedDl.receivedBy}/><br/>
              <h4>Number of Fittings</h4>
              <textarea typeof="input" name="fittings" defaultValue={selectedDl.fittings}/><br/>
              <h4>Amount of Duct</h4>
              <textarea typeof="input" name="duct" defaultValue={selectedDl.duct}/><br/>
              <h4>Total Download Weight</h4>
              <textarea typeof="input" name="weight" defaultValue={selectedDl.weight}/><br/>
              <label>
                Active<input className='checkbox' type="checkbox" name="active" defaultChecked={selectedDl.active ? "checked" : null}/>
                Cut Out<input className='checkbox' type="checkbox" name="cutOut" defaultChecked={selectedDl.cutOut ? "checked" : null}/>
                Job Completed<input className='checkbox' type="checkbox" name="done" defaultChecked={selectedDl.done ? "checked" : null}/>
            </label><br/>

            <input type="submit" value={`Update Download to ${selectedJob.name} `} />
            </Form>
            </div>
      </div>
  )
}

export default observer(UpdateDl)