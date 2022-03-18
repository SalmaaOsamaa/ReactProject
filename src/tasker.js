import {Link} from 'react-router-dom'
function Tasker() {
  return (
    <>
      <div>
          <Link className='btn btn-primary' to="/tasker-slider">Home</Link>
          <Link className='btn btn-primary' to="/tasker-profile">View Tasker</Link>
      </div>
    </>
  )
}

export default Tasker
