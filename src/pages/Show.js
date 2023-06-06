import {observer} from 'mobx-react'
import { Link, useParams } from 'react-router-dom'
import { store } from '../router'


const Show = () => {
    const { id } = useParams()
    const selectedJob = store.jobStore._jobs.find(job => job.id === parseInt(id))
    console.log(selectedJob)
    return (
        <div>
            {/* <h1 class="secondh1"> {job.name} </h1>
        <div class="button">
            <Link className='link' to={`/job/${job.id}/newdownload`}>New Download</Link>
        </div>
        
        <table> 
                
                <h2>{dl.dlName}</h2>
                <div class="button">
                <Link className='link' to={`/job/dl/${job.id}/${dl._id}/edit`}>Edit</Link>
                <form class="delete" action={`/job/dl/${job.id}/${dl._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete"/>
                </form>
                </div>
            <tr>
                <th>Active</th>
                <th>Job Number</th>
                <th>Date Turned In</th>
                <th>Date Due</th>
            </tr>
            <tr>
              <td>dl.active ? "Active" : "Not Active"</td>
              <td> {job.number} </td>
              <td> {dl.dateTurnedIn} </td>
              <td> {dl.dateDue}</td>
            </tr>
        </table>

        <table class="tabletwo">
            <h3>{dl.dlName} Weights</h3>
            <tr>
                <th>Galvinized</th>
                <th>Stainless</th>
                <th>Black Iron</th>
                <th>Paint Lock</th>
                <th>Aluminum</th>
            </tr>
            
            <tr>
              <td> {dl.weight.galv} lbs</td>
              <td> {dl.weight.ss} lbs</td>
              <td> {dl.weight.blackIron} lbs </td>
              <td> {dl.weight.pl} lbs </td>
              <td> {dl.weight.alum} lbs</td>
            </tr>
        </table>      */}
        </div>
    )

}

export default observer(Show)