import {observer} from 'mobx-react'
import { store } from '../router';
import { Form, useNavigate } from "react-router-dom"

function NewDl() {
    return (<h1>newdl form</h1>)
}

export default observer(NewDl)