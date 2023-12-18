
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import arrowDark from "../../assets/images/arrow-dark.svg";

const ImgGrid = () => {

    return (<>
        {/* <!--  Card Start --> */}

        <div className="card">
            <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Default table with the images</h4>
                <div className="flex-shrink-0">

                </div>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="cardtableCheck" />
                                        <label className="form-check-label" htmlFor="cardtableCheck"></label>
                                    </div>
                                </th>
                                <th scope="col">Images</th>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Total</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="cardtableCheck01" />
                                        <label className="form-check-label" htmlFor="cardtableCheck01"></label>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-img">
                                        <img src={img1} className="" />
                                    </div>
                                </td>
                                <td><a href="#" className="fw-semibold">#VL2110</a></td>
                                <td>William Elmore</td>
                                <td>07 Oct, 2021</td>
                                <td>$24.05</td>
                                <td><span className="badge bg-pending">Pending</span></td>
                                <td>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="cardtableCheck02" />
                                        <label className="form-check-label" htmlFor="cardtableCheck02"></label>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-img">
                                        <img src={img2} className="" />
                                    </div>
                                </td>
                                <td><a href="#" className="fw-semibold">#VL2109</a></td>
                                <td>Georgie Winters</td>
                                <td>07 Oct, 2021</td>
                                <td>$26.15</td>
                                <td><span className="badge bg-inprogress">In Progress</span></td>
                                <td>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="cardtableCheck03" />
                                        <label className="form-check-label" htmlFor="cardtableCheck03"></label>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-img">
                                        <img src={img3} className="" />
                                    </div>
                                </td>
                                <td><a href="#" className="fw-semibold">#VL2108</a></td>
                                <td>Whitney Meier</td>
                                <td>06 Oct, 2021</td>
                                <td>$21.25</td>
                                <td><span className="badge bg-done">Done</span></td>
                                <td>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="cardtableCheck04" />
                                        <label className="form-check-label" htmlFor="cardtableCheck04"></label>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-img">
                                        <img src={img4} className="" />
                                    </div>
                                </td>
                                <td><a href="#" className="fw-semibold">#VL2107</a></td>
                                <td>Justin Maier</td>
                                <td>05 Oct, 2021</td>
                                <td>$25.03</td>
                                <td><span className="badge bg-archive">Archive</span></td>
                                <td>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="pagination d-flex align-items-end  mb-4">
                    <ul className="list-pagination">
                        <li className="first-link">
                            <a href="#"><img src={arrowDark} alt="" /></a>
                        </li>
                        <li>
                            <a href="#" className="active">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">...</a>
                        </li>
                        <li>
                            <a href="#">16</a>
                        </li>
                        <li>
                            <a href="#"><img src={arrowDark} alt="" /></a>
                        </li>
                        <li className="list-link">
                            <a href="#">Last</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* <!--  Card End --> */}
    </>);
}
export default ImgGrid;
