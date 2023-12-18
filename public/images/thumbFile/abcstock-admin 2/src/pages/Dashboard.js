

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Menubar from "./layout/Menubar";
import BasicForm from "./temp/BasicForm";
import ImgGrid from "./temp/ImgGrid";
import DefaultBtn from "./temp/DefaultBtn";
import Grid from "./temp/Grid";

const Dashboard = () => {

    return (
        <>

            {/* <!-- Begin page --> */}
            <div id="layout-wrapper">

                <Header />

                <Menubar />
                {/* 
                        <!-- ============================================================== -->
                        <!-- Start right Content here -->
                        <!-- ============================================================== --> */}
                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            <div className="section-title">
                                Page Title
                            </div>

                            <BasicForm />

                            <Grid />

                            <ImgGrid />


                            <DefaultBtn />

                        </div>
                    </div>

                    <Footer />
                </div>

            </div>


        </>)
}
export default Dashboard;







