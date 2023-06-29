import {observer} from 'mobx-react'
import { Link, useParams } from 'react-router-dom'
import { store } from '../router'


const Show = () => {
    const { id } = useParams()
    const selectedJob = store.jobStore._jobs.find(job => job.id === parseInt(id))
    console.log(selectedJob.downloads)
    return (
            <>
                    <h1 class="secondh1"> {selectedJob.name} </h1>
                <div class="button">
                    <Link className='link' to={`/newdl/${selectedJob.id}`}>New Download</Link>
                </div>
                {selectedJob.downloads.map(dl => (
                    <>
                        <h2>{dl.dlName}</h2>
                        <div class="button">
                            <Link className='link' to={`/job/dl/${selectedJob.id}/${dl._id}/edit`}>Edit</Link>
                            <form class="delete" action={`/job/dl/${selectedJob.id}/${dl._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="Delete" />
                            </form>
                        </div>
                    <table>

                        <tr>
                            <th>Active</th>
                            <th>Job Number</th>
                            <th>Date Turned In</th>
                            <th>Date Due</th>
                        </tr>
                        <tr>
                            <td>{dl.active ? "Active" : "Not Active"}</td>
                            <td> {selectedJob.number} </td>
                            <td> {dl.dateTurnedIn} </td>
                            <td> {dl.dateDue}</td>
                        </tr>
                    </table>
                    <h2>Weight</h2>
                    <table class="tabletwo">
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
                        </table></>
                ))
                }     
            </>
    )

}

export default observer(Show)