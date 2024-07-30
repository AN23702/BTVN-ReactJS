import Header from "../../components/common/Header"
import SideBarMenu from "../../components/common/SideBarMenu"
import MainContentHelpCenter from "../../components/help-center/MainContentHelpCenter"

const HelpCenter = () => {
  return (
    <>

      <Header/>

      <div className="container-fluid">
        <div className="row">

          {/* SIDEBAR MENU  */}
          <SideBarMenu/>

          {/* MAIN CONTENT */}
          <MainContentHelpCenter/>

        </div>
      </div>
      
    </>
  )
}

export default HelpCenter