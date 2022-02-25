
import "./Contact.scss";
const Contact = () => {
  return (
    <>
      <div className="container-fluid bgped">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 bgimgc" id="formfir">
              <div className="setelement">
                <div className="psetcol">
                  <p>Phone Number</p>
                  <span>+961 81 492 154</span>
                  <br />
                  <span>+961 81 492 156</span>
                </div>
              </div>
              <div className="setelement">
                <div className="psetcol">
                  <p>Support email</p>
                  <span>support@wasilonline.com</span>
                </div>
              </div>
              <div className="setelement">
                <div className="psetcol">
                  <p>Office Address</p>
                  <span>
                    Unit 35- 1828 Blue Heron Drive, London, ON N6H 0B7
                  </span>
                </div>
              </div>
              
            </div>

            <div className="col-lg-8 col-md-6 bgsett" id="formSec">
              <p className="Contact_pstyle">Drop us a Line</p>
              <p className="pcontac">Get in touch with us</p>
              <div className="">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control inputst"
                      placeholder="Your Name"
                      name="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control inputst"
                      placeholder="Your Email"
                      name="email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control inputst1"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control inputst1"
                      placeholder="Company"
                    />
                  </div>
                  
                  <div className="col-md-12">
                    <textarea
                      type="text"
                      className="form-control inputst2"
                      rows="7"
                      placeholder="Your Message"
                      name="message"
                    />
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-danger btn12">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
