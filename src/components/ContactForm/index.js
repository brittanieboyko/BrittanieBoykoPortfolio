import React from "react";
import "./style.css";

function ContactForm(props) {
  return (
    <main className="container main-content">
      <header className="row">
        <div className="col-md-12">
          <div className="page-header">
            <h2>Contact</h2>
            <hr className="my-4" />
          </div>
        </div>
      </header>
      <form>
        <div className="row">
          <section className="col-md-12">
            <div className="form-group">
              <label htmlFor="exampleInputName">Name</label>
              <input
                value={props.name}
                name="name"
                onChange={props.onChange}
                type="text"
                placeholder="Name"
                className="form-control"
                id="exampleInputName"
              />
            </div>
          </section>
        </div>
        <div className="row">
          <section className="col-md-12">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                value={props.email}
                name="email"
                onChange={props.onChange}
                type="email"
                placeholder="Email Address"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
          </section>
        </div>
        <div className="row">
          <section className="col-md-12">
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                value={props.message}
                name="message"
                className="form-control"
                onChange={props.onChange}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </section>
        </div>
        <div className="row">
          <div className="col-md-1">
            <button
              onClick={props.onClick}
              className="btn btn-primary custom-button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
export default ContactForm;
