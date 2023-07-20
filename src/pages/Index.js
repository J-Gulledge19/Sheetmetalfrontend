import {observer} from 'mobx-react'
import { store } from '../router';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';


const Index = () => {

    return (
        <div>
             <h2>All Jobs</h2>
        <table>
            <tr>
                
                <th>Job Name</th>
                <th>Job Number</th>
                <th>Total Weight</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        
            {store.jobStore._jobs.map(job => (
            <tr>
                <td><Link className="link" to={`show/${job.id}`}>
                <p>{job.name}</p>
                </Link></td>
                <td>{job.number}</td>
                <td></td>
                <Link className="link" to={`/editjob/${job.id}`}>
                        <td><div className='show-edit'><AiFillEdit/></div></td>
                    </Link>
                        <td className='deletebutton' onClick={async () => {
                            await store.jobStore.deleteAction(job.id)
                        }}>
                            <RiDeleteBin5Line className='deletebutton' />
                        </td> 
            </tr>
            ))
            }   
        </table> 
        </div>
    )

}

export default observer(Index)