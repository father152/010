import { Link } from "react-router-dom"


const House = () => {
    return (
        <div className='house'>
       
        <span>House</span>
        <p>wferfw fghfd ghfgwfe rfwefgh fdghfgh fdghfwe hfdghfwe</p>
        <div className="button">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
        </div>
    )
}


export {House}