
import './Profile.css';


import { FaLocationDot } from "react-icons/fa6";

function Profile1() {
  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="content">
        <h1>Are You a Supplier?</h1>
        <h2>Explore Matching Opportunities. </h2>
        <div className="search-bar"> 
         
          <input className="search-bar1" type="text" placeholder=" Search your required service here" />
          
          <input className="search-bar2"type="text"  placeholder="Search your desired location here" />
          <FaLocationDot  className="search-icon" />
          <button>Search</button>
        </div>
        <div className="buyer-link">
          <a className="buyer1"href="#">Are you a buyer?</a> <span>Click here if you are looking to post a requirements</span>
        </div>
      </div>
    </div>
  )
}

export default Profile1