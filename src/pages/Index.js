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
                <td>{job.downloads.reduce(function (accumulator, item) { return accumulator + item.weight;}, 0)}lb</td>
                    <td className='show-edit'>
                        <Link to={`/editjob/${job.id}`}>
                                <AiFillEdit/>
                        </Link>
                    </td>
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