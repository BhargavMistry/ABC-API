
import logo from "../../assets/images/logo.svg";

import { useEffect, useState } from "react";

const Menubar = () => {
    const list = [{}, {}];

    return (<>
        {/* <!--  Sidebar Start --> */}
        <aside>
            <div className="navbar-brand">
                {/* <!-- Logo--> */}
                <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src={logo} alt="" height="30" />
                    </span>
                </a>
            </div>
            <section className="sidebar-section">
                <div className="main-container">
                    <div className="sidebar">
                        <div className="sidebar-tab">
                            <div className="heading active">Main Feature
                            </div>
                            <div className="contents" >
                                <ul>
                                    <li><a href="#">Sub Feature 01</a></li>
                                    <li><a href="#">Sub Feature 02</a></li>
                                    <li><a href="#">Sub Feature 03</a></li>
                                    <li><a href="#">Sub Feature 04</a></li>
                                    <li><a href="#">Sub Feature 05</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="sidebar-tab">
                            <div className="heading">Main Feature
                            </div>
                            <div className="contents">
                                <ul>
                                    <li><a href="#">Sub Feature 01</a></li>
                                    <li><a href="#">Sub Feature 02</a></li>
                                    <li><a href="#">Sub Feature 03</a></li>
                                    <li><a href="#">Sub Feature 04</a></li>
                                    <li><a href="#">Sub Feature 05</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="sidebar-tab">
                            <div className="heading">Main Feature
                            </div>
                            <div className="contents">
                                <ul>
                                    <li><a href="#">Sub Feature 01</a></li>
                                    <li><a href="#">Sub Feature 02</a></li>
                                    <li><a href="#">Sub Feature 03</a></li>
                                    <li><a href="#">Sub Feature 04</a></li>
                                    <li><a href="#">Sub Feature 05</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="sidebar-tab">
                            <div className="heading">Main Feature
                            </div>
                            <div className="contents">
                                <ul>
                                    <li><a href="#">Sub Feature 01</a></li>
                                    <li><a href="#">Sub Feature 02</a></li>
                                    <li><a href="#">Sub Feature 03</a></li>
                                    <li><a href="#">Sub Feature 04</a></li>
                                    <li><a href="#">Sub Feature 05</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="sidebar-tab">
                            <div className="heading">Main Feature
                            </div>
                            <div className="contents">
                                <ul>
                                    <li><a href="#">Sub Feature 01</a></li>
                                    <li><a href="#">Sub Feature 02</a></li>
                                    <li><a href="#">Sub Feature 03</a></li>
                                    <li><a href="#">Sub Feature 04</a></li>
                                    <li><a href="#">Sub Feature 05</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-tab">
                            <div className="heading">Main Feature
                            </div>
                            <div className="contents">
                                <ul>
                                    <li><a href="#">Sub Feature 01</a></li>
                                    <li><a href="#">Sub Feature 02</a></li>
                                    <li><a href="#">Sub Feature 03</a></li>
                                    <li><a href="#">Sub Feature 04</a></li>
                                    <li><a href="#">Sub Feature 05</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-tab">
                            <div className="heading">Main Feature
                            </div>
                            <div className="contents">
                                <ul>
                                    <li><a href="#">Sub Feature 01</a></li>
                                    <li><a href="#">Sub Feature 02</a></li>
                                    <li><a href="#">Sub Feature 03</a></li>
                                    <li><a href="#">Sub Feature 04</a></li>
                                    <li><a href="#">Sub Feature 05</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </aside>
        {/* <!--  Sidebar End --> */}
    </>);
}
export default Menubar;
