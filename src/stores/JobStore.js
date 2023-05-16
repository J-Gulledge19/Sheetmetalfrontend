import { makeObservable, observable, action } from "mobx";
const url = "https://sheetmetalbackend.onrender.com"

export default class JobStore{
    
    _jobs = []

    constructor(){
        this._jobs = []
        this.init()

        makeObservable(this, {
            _jobs: observable,
            fetchJobs: action,
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
}
