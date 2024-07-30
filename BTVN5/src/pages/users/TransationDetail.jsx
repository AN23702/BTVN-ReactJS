import Header from "../../components/common/Header"
import SideBarMenu from "../../components/common/SideBarMenu"
import MainContentTransationDetail from "../../components/transation-detail/MainContentTransationDetail"

const TransationDetail = () => {
  return (
    <>

      <Header/>

      <div className="container-fluid">
        <div className="row">

          {/* SIDEBAR MENU  */}
          <SideBarMenu/>

          {/* MAIN CONTENT */}
          <MainContentTransationDetail/>

        </div>
      </div>
      
    </>
  )
}

export default TransationDetail