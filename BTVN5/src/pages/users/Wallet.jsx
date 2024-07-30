import Header from "../../components/common/Header"
import SideBarMenu from "../../components/common/SideBarMenu"
import MainContentWallet from "../../components/wallet/MainContentWallet"

const Wallet = () => {
  return (
    <>
        
        <Header/>

        <div className="container-fluid">
            <div className="row">

                {/* SIDEBAR MENU  */}
                <SideBarMenu/>

                {/* MAIN CONTENT */}
                <MainContentWallet/>

            </div>
        </div>

    </>
  )
}

export default Wallet