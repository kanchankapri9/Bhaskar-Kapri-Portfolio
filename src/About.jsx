import profilePic from "../public/BhaskarKapri.jpeg";
import "./about.css";
import { useForm, ValidationError } from "@formspree/react";

function About() {
  const [state, handleSubmit] = useForm("mbdanqdq");

  return (
    <section className="information" id="about">
      <div className="about">
        <h2>About Me</h2>

        <div className="profile">
          <div className="imgCircle">
            <img src={profilePic} alt="Bhaskar Kapri" />
          </div>

          <div className="bio">
            <p>
              Hi I'm <strong>Bhaskar Kapri</strong>
            </p>
            <p>
              I specialize in Business Analytics and I enjoy turning raw data
              into measurable business outcomes. With a strong foundation in
              SQL, Python, and Power BI, I focus on uncovering insights that
              support strategic decisions and growth.
            </p>
          </div>

          <div className="status">
            <p>Commerce & Data Analytics Student</p>
            <p>Business Intelligence Enthusiast</p>
            <p>Financial & Market Data Explorer</p>
            <p>Lifelong Learner in Business Analytics</p>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <h2>Contact Me</h2>

        {state.succeeded ? (
          <p className="form-success">
            Thanks for your message. I will get back to you soon.
          </p>
        ) : (
          <form
            action="https://formspree.io/f/mbdanqdq"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="form-error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="form-error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Let's build something amazing together!"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="form-error"
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default About;
