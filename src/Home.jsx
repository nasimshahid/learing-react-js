import React from "react";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-light py-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                Build <span className="text-warning">Luxury</span> Digital Experiences
              </h1>
              <p className="lead mt-3">
                We create premium websites, scalable applications, and modern
                digital solutions for your business growth.
              </p>
              <div className="mt-4">
                <button className="btn btn-warning btn-lg me-3">
                  Get Started
                </button>
                <button className="btn btn-outline-light btn-lg">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Luxury"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Premium Services</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center p-4">
                <div className="fs-1 mb-3 text-warning">💎</div>
                <h5 className="fw-bold">Luxury UI Design</h5>
                <p className="text-muted">
                  High-end modern UI designs that give your brand a premium look.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center p-4">
                <div className="fs-1 mb-3 text-warning">⚙️</div>
                <h5 className="fw-bold">Scalable Development</h5>
                <p className="text-muted">
                  Fast, secure, and scalable applications using modern tech.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow border-0 text-center p-4">
                <div className="fs-1 mb-3 text-warning">🚀</div>
                <h5 className="fw-bold">Business Growth</h5>
                <p className="text-muted">
                  Digital solutions that help you grow faster and smarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-warning text-dark py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Ready to Start Your Project?</h2>
          <p className="lead mt-3">
            Let’s build something premium together.
          </p>
          <button className="btn btn-dark btn-lg mt-3">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
