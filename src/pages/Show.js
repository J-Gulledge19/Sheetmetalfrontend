import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
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
                    <>
                        {/*
                        <div class="button">
                        <Link className='link' to={`/job/dl/${selectedJob.id}/${dl._id}/edit`}>Edit</Link>
                        <form class="delete" action={`/job/dl/${selectedJob.id}/${dl._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                        </form>
                    </div> */}
                    <table>

                        <tr>
                            <th>Active</th>
                            <th>Area</th>
                            <th>Job Number</th>
                            <th>Received By</th>
                            <th>Date Turned In</th>
                            <th>Date Due</th>
                            <th>Cut Out</th>
                            <th>Number of Fittings</th>
                            <th>Amount of Duct</th>
                            <th>Weight</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    {selectedJob.downloads.map(dl => (
                        <tr>
                            <td>{dl.active ? "Active" : "Not Active"}</td>
                            <td> {dl.dlName} </td>
                            <td> {selectedJob.number} </td>
                            <td> {dl.receivedBy} </td>
                            <td> {dl.dateTurnedIn} </td>
                            <td> {dl.dateDue}</td>
                            <td>{dl.cutOut ? "Yes" : "No"}</td>
                            <td>{dl.fittings}</td>
                            <td>{dl.duct}</td>
                            <td>{dl.weight}</td>
                            <Link className="link" to={`/edit/${selectedJob.id}/${dl.id}`}>
                            <td className='show-edit'><AiFillEdit/></td>
                        </Link>
                            <td className='deletebutton' onClick={async () => {
                                await store.jobStore.deletedlAction(dl.id)
                            }}>
                                <RiDeleteBin5Line className='deletebutton' />
                            </td> 
                        </tr>
                ))
                }     
                    </table></>
            </>
    )

}

export default observer(Show)