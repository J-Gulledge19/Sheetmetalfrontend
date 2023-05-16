import { makeObservable } from "mobx";
import JobStore from "./JobStore";

export class RootStore {
   jobStore = JobStore;
  
    constructor() {
      this.jobStore = new JobStore();

      makeObservable(this, {
        jobStore: true
      })
    }
}