import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

function Header(props) {
  
  return (
    <>
      <nav className="nav">
          <h1>Job Tracker</h1>
          <Link to='/'>Home</Link>
          <Link to='/create'> Add Job </Link>
      </nav>

    </>

  )
}

export default observer(Header)