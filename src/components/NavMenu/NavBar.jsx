import Profile from "../../assets/images/profile.jpeg";
import { useSelector } from "react-redux";
function NavBar() {
  const name = useSelector((state) => state.chatingUser?.fullname);
  const names = JSON.parse(localStorage.getItem("chatingUser"));
  console.log("full names", names);
  return (
    <div className="navigation">
      <div className="n1">
        <div>
          <i className="bx bx-menu" id="menu-btn"></i>
        </div>
      </div>
      <div className="profile">
        <div className="search">
          <i className="bx bx-search"></i>
        </div>
        <div className="notificatiom">
          <i className="bx bx-bell"></i>
        </div>
        <div className="vl"></div>
        <img src={Profile} alt="" />
        <div className="name">
          <h3 id="currentLogin">{names.fullname}</h3>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
