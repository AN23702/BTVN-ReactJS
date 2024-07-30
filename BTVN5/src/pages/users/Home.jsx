import Header from "../../components/common/Header"
import SideBarMenu from "../../components/common/SideBarMenu"
import MainContentHome from "../../components/home/MainContentHome"

const Home = () => {
  return (
    <>

      <Header/>

      <div className="container-fluid">
        <div className="row">

          {/* SIDEBAR MENU  */}
          <SideBarMenu/>

          {/* MAIN CONTENT */}
          <MainContentHome/>

        </div>
      </div>
      
    </>

  )
}

export default Home