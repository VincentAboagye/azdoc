import React, { useState, useEffect } from 'react';
import * as fe from 'react-feather';
import {Link} from 'react-router-dom';
import {db} from '../../Firebase';

const Visitor = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [visitorid, setVisitorid] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('contacts')
    .add({
      fname: fname,
      lname: lname,
      visitorid: visitorid,
      company: company,
      phone: phone,
      email: email,
      purpose: purpose
    })
    .then(() => {
      setLoader(false);
      alert('Details have been submitted')
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });

    // setFname = ('');
    // setLname = ('');
    // setVisitorid = ('');
    // setCompany = ('');
    // setPhone = ('');
    // setEmail = ('');
    // setPurpose = ('');
  };

    return(
        <div>
            <div className="container">
            <div className="mainform">
                <div>
                <Link to="/category">
                    <fe.XCircle className="mb-2" style={{float: "right"}}/>
                    </Link>
                </div>
                  <div>
                    <h3>
                      {props.name}
                    </h3>
                  </div>
                  <br />
                  <form onSubmit={handleSubmit}>
                  <div className="row">
                          <div className="col-md-6 mb-4">
                            <label>First Name</label><br/>
                            <input type="text" className="form-control nameinput"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            />
                          </div>

                          <div className="col-md-6">
                          <label>Last Name</label><br/>
                            <input type="text" className="form-control nameinput"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}/>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6 mb-4">
                            <label>VisitorId</label><br/>
                            <input type="text" className="form-control nameinput"
                            value={visitorid}
                            onChange={(e) => setVisitorid(e.target.value)}
                            />
                          </div>

                          <div className="col-md-6">
                          <label>Company</label><br/>
                            <input type="text" className="form-control nameinput"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            />
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-6 mb-4">
                            <label>Phone</label><br/>
                            <input type="number" placeholder="eg. 020 000 0000" className="form-control nameinput"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>

                          <div className="col-md-6 mb-4">
                            <label>Email</label><br/>
                            <input type="email" className="form-control nameinput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                            <label>Purpose</label><br/>
                            <textarea
                            rows="5"
                            type="text" className="form-control nameinput formtextarea"
                            value={purpose}
                            onChange={(e) => setPurpose(e.target.value)}
                            />
                        </div>
                      </div>
                      <div className="row justify-content-center mt-5">
                      <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>
                        Submit
                      </button>
                    <div class="btn-group col-12 col-sm-3 align-self-center" role="group" id="reserveButton"  >
                        <a href="/category" role="button" class="btn btn-danger btn-block btn-sm nav-link font-weight-bold ">
                        Cancel
                        </a>
                    </div>
                  </div>
                  </form>
            </div>
            </div>
      </div>      
    );
}

export default Visitor;