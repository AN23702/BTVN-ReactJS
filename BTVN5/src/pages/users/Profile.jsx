import Header from "../../components/common/Header"
import SideBarMenu from "../../components/common/SideBarMenu"
import MainContentProfile from "../../components/profile/MainContentProfile"

const Profile = () => {
  return (
    <>

      <Header/>

      <div className="container-fluid">
        <div className="row">

          {/* SIDEBAR MENU  */}
          <SideBarMenu/>

          {/* MAIN CONTENT */}
          <MainContentProfile/>

        </div>
      </div>
      
    </>
  )
}

export default Profile