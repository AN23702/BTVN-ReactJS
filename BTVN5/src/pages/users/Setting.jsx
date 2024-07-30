import Header from "../../components/common/Header"
import SideBarMenu from "../../components/common/SideBarMenu"
import MainContentSetting from "../../components/setting/MainContentSetting"

const Setting = () => {
  return (
    <>

      <Header/>

      <div className="container-fluid">
        <div className="row">

          {/* SIDEBAR MENU  */}
          <SideBarMenu/>

          {/* MAIN CONTENT */}
          <MainContentSetting/>

        </div>
      </div>
      
    </>
  )
}

export default Setting