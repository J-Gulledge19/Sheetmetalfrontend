import {observer} from 'mobx-react'
import { store } from '../router';


const Index = () => {

    return (
        <div>
             <h2>Active Jobs</h2>
        <table class="activetable">
            <tr>
                <th>Active</th>
                <th>Job Name</th>
                <th>Download</th>
                <th>Job Number</th>
                <th>Total Weight</th>
            </tr>
        
            {store.jobStore._jobs.map(job => (
            <tr>
                <td>{job.name}</td>
                <td>{job.number}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            ))}   
        </table> 
        </div>
    )

}

export default observer(Index)