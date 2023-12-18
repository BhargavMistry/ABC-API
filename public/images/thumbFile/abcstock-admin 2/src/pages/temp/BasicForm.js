

const BasicForm = () => {

    return (<>
        {/* <!--  Card Start --> */}
        <div className="card">
            <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Basic Form</h4>
                <div className="flex-shrink-0">

                </div>
            </div>
            <div className="card-body">
                <div className="form-3column form-2column">
                    <div className="mb-3">
                        <label className="form-label">Text Field <span className="asterisk">*</span></label>
                        <input type="email" className="form-control" placeholder="Text Field Placeholder" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Text Field Disable <span className="asterisk">*</span></label>
                        <input type="email" className="form-control" placeholder="Text Field Placeholder"
                            disabled />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Form Select <span className="asterisk">*</span></label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected="">Select your Status </option>
                            <option value="1">Declined Payment</option>
                            <option value="2">Delivery Error</option>
                            <option value="3">Wrong Amount</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">File Input <span className="asterisk">*</span></label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Example Textarea</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="checkbox" id="formCheck1" />
                            <label className="form-check-label" htmlFor="formCheck1">
                                Default checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="formCheck2" checked="" />
                            <label className="form-check-label" htmlFor="formCheck2">
                                Checked checkbox
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2" checked="" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Default checked radio
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--  Card End --> */}
    </>);
}
export default BasicForm;
