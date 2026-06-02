import React from 'react'

const ContactForm = () => {
  return (
      <section className="contact" id="contact" data-screen-label="Contact">
        <div className="container">
          <div>
            <div className="eyebrow">05 · Contact</div>
            <h2 className="serif" style={{ marginTop: "20px" }}>
              Let's make
              <br />
              your default,
              <br />
              <em style={{ color: "var(--accent)" }}>remarkable.</em>
            </h2>
            <p className="lead">
              Tell us where you're going — a sentence or two is fine. A real
              human reads everything that comes in, and we aim to reply within
              two working days.
            </p>

            <div className="meta-list">
              <div className="row">
                <span className="k">Studio</span>
                <span>Brentford · London</span>
              </div>
              <div className="row">
                <span className="k">Email</span>
                <span>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="7e171018113e1a1b181f0b120a131b1a171f501d1113"
                  >
                    [email&#160;protected]
                  </a>
                </span>
              </div>
              <div className="row">
                <span className="k">Phone</span>
                <span>+44 7878 849 182</span>
              </div>
              <div className="row">
                <span className="k">Part of</span>
                <span>Default Media Group</span>
              </div>
            </div>
          </div>

          <form>
            <div className="form-grid">
              <div className="form-row">
                <label>Name</label>
                <input type="text" placeholder="First &amp; last" />
              </div>
              <div className="form-row">
                <label>Company</label>
                <input type="text" placeholder="Brand or org" />
              </div>
            </div>
            <div className="form-grid">
              <div className="form-row">
                <label>Work email</label>
                <input type="email" placeholder="you@company.com" />
              </div>
              <div className="form-row">
                <label>Type of enquiry</label>
                <select>
                  <option>New project</option>
                  <option>Retained partnership</option>
                  <option>Speaking &amp; press</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <label>What are you trying to make happen?</label>
              <textarea
                rows={5}
                placeholder="A few sentences is enough."
              ></textarea>
            </div>
            <button
              className="btn"
              type="submit"
              style={{ alignSelf: "flex-start" }}
            >
              <span>Send message</span> <span className="arr">→</span>
            </button>
          </form>
        </div>
      </section>
  )
}

export default ContactForm
