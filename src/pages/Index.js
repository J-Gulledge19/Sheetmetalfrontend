import {observer} from 'mobx-react'
import { store } from '../router';
import { Link } from 'react-router-dom';


const Index = () => {

    return (
        <div>
             <h2>All Jobs</h2>
        <table>
            <tr>
                
                <th>Job Name</th>
                <th>Job Number</th>
                <th>Total Weight</th>
            </tr>
        
            {store.jobStore._jobs.map(job => (
            <tr>
                <td><Link className="link" to={`show/${job.id}`}>
                <p>{job.name}</p>
                </Link></td>
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