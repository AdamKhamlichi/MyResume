import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var country = this.props.data.address.country;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <div className="contact-details">
              <h4>Contact Information</h4>
              <p className="address">
                {name}<br />
                {city} <br />
                {state}, {country}<br />
              </p>
              <div className="contact-methods">
                <p>
                  <i className="fa fa-phone"></i>
                  <span><a href={`tel:${phone}`}>{phone}</a></span>
                </p>
                <p>
                  <i className="fa fa-envelope"></i>
                  <span><a href={`mailto:${email}`}>{email}</a></span>
                </p>
              </div>
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Connect With Me</h4>
              <div className="social">
                {/* Add any social media links you want to include */}
                <a href="https://www.linkedin.com/in/adam-khamlichi-11754a252/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/AdamKhamlichi" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;