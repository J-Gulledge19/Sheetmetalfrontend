import {observer} from 'mobx-react'
import { store } from '../router';
import { Link } from 'react-router-dom';


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
                {console.log(job)}
                <td></td>
                <td><Link className="link" to={`show/${job.id}`}>
                <p>{job.name}</p>
                </Link></td>
                <td>{job.downloads[0].dlName}</td>
                <td>{job.number}</td>
                <td></td>
            </tr>
            ))
            }   
        </table> 
        </div>
    )

}

export default observer(Index)