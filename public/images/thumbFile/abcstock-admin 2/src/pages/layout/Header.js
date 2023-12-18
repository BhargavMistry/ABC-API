
// import { useNavigate } from "react-router";
import avatar from "../../assets/images/avatar.jpg"


const Header = () => {
    // let navigate = useNavigate();

    // const onHome = () => {
    //     navigate(`/`);
    // }
    return (<>
        {/* <!--  Header Start --> */}
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">

                </div>
                <div className="d-flex align-items-center">
                    <div className="header-item topbar-user">
                        <span className="d-flex align-items-center">
                            <img className="rounded-circle header-profile-user" src={avatar} alt="Header Avatar" />
                            <span className="text-start ms-xl-2">
                                <span className="user-name-text d-inline-flex w-100">User Name</span>
                                <span className="user-name-sub-text d-inline-flex w-100">User Designations</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </header>
        {/* <!--  Header End --> */}
    </>);
}
export default Header;
