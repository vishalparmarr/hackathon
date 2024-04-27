import React from "react";
// internal
import ContactForm from "@components/forms/contact-form";

const FormArea = () => {
  return (
    <section
      className={`contact__form-area pt-90`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="contact__form-2">
              <h3 className="contact__form-2-title">Send a message</h3>
              {/* form start */}
              <ContactForm/>
              {/* form end */}
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormArea;
