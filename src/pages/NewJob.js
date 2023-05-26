import {observer} from 'mobx-react'
import { store } from '../router';
import { Form, useNavigate } from "react-router-dom"

function NewJob() {
    let navigate = useNavigate()

    return (
        <div className="showcard">
       <div className="form-page">
          <h2>New Job</h2>
          <Form onSubmit={async (event) => { 
            await store.jobStore.createJob(event)
            navigate('/')
            }}
            method="post">
            <h4>Job Name</h4>
              <textarea typeof="input" name="name" placeholder='Name'/><br/>
            <h4>Job Number</h4>
              <textarea typeof="input" name="number" placeholder='Number'/><br/>
            <input type="submit" value='Add Job' />
            </Form>
            </div>
      </div>
  )
}

export default observer(NewJob)