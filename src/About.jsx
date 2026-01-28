import React from "react";

function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">About Us</h1>
          <p className="lead mt-3">
            Crafting premium digital experiences with passion & precision
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                alt="About Company"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-md-6">
              <h2 className="fw-bold mb-3">
                Who We Are
              </h2>
              <p className="text-muted">
                We are a team of creative developers and designers focused on
                delivering luxury-grade digital solutions. Our goal is to help
                brands stand out with elegant design and powerful technology.
              </p>
              <p className="text-muted">
                From startups to enterprises, we build scalable, secure, and
                visually stunning products tailored to your business needs.
              </p>
              <button className="btn btn-warning btn-lg mt-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold text-warning">10+</h2>
              <p className="text-muted">Years Experience</p>
            </div>
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold text-warning">150+</h2>
              <p className="text-muted">Projects Completed</p>
            </div>
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold text-warning">50+</h2>
              <p className="text-muted">Happy Clients</p>
            </div>
            <div className="col-md-3 mb-4">
              <h2 className="fw-bold text-warning">24/7</h2>
              <p className="text-muted">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Our Core Values
          </h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center p-4">
                <div className="fs-1 mb-3 text-warning">✨</div>
                <h5 className="fw-bold">Quality</h5>
                <p className="text-muted">
                  We deliver nothing but the best, every single time.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center p-4">
                <div className="fs-1 mb-3 text-warning">🤝</div>
                <h5 className="fw-bold">Trust</h5>
                <p className="text-muted">
                  Long-term relationships built on honesty and transparency.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center p-4">
                <div className="fs-1 mb-3 text-warning">🚀</div>
                <h5 className="fw-bold">Innovation</h5>
                <p className="text-muted">
                  Always pushing boundaries with modern technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
