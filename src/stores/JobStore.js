import { makeObservable, observable, action } from "mobx";
const url = "https://sheetmetalbackend-5kzb.onrender.com"

export default class JobStore{
    
    _jobs = []

    constructor(){
        this._jobs = []
        this.init()

        makeObservable(this, {
            _jobs: observable,
            fetchJobs: action,
            createJob: action,
            createDl: action,
        })
    }
    
    async init(){
        const jobs = await this.fetchJobs().then(jobList => {
            return jobList
        })
        this._jobs = jobs
        return jobs
    }

    getJobsList() {
        return this._jobs
    }

    async fetchJobs(){
        const response = await fetch(`${url}/job/`)
        const body = await response.json()
        return body
    }

    async createJob(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        const newJob = {
            name: formData.get("name"),
            number: formData.get("number"),
        }
        await fetch(`${url}/job/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        await this.init()
    }

    async createDl(e, jobId){
        e.preventDefault()
        const formData = new FormData(e.target)
        const newDl = {
            dlName: formData.get("dlName"),
            done: formData.get("done"),
            dateTurnedIn: formData.get("dateTurnedIn"),
            dateDue: formData.get("dateDue"),
            receivedBy: formData.get("receivedBy"),
            fittings: formData.get("fittings"),
            duct: formData.get("duct"),
            weight: formData.get("weight"),
            active: formData.get("active"),
            cutOut: formData.get("cutOut"),
            job: jobId,
        }
        console.log(`form submit${newDl}`)
        await fetch(`${url}/download/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDl)
        })
        await this.init()
    }
}
