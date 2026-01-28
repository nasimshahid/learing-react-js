import React from "react";

function Service() {

  const services = [
    {
      icon: "💎",
      title: "Luxury UI / UX Design",
      desc: "Elegant, high-end user interfaces designed to impress and convert."
    },
    {
      icon: "⚙️",
      title: "Web Development",
      desc: "Scalable, secure, and high-performance web applications."
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Premium Android & iOS apps with smooth user experience."
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      desc: "Secure cloud infrastructure and deployment automation."
    },
    {
      icon: "🛡️",
      title: "Cyber Security",
      desc: "Advanced security solutions to protect your digital assets."
    },
    {
      icon: "🚀",
      title: "Digital Growth",
      desc: "Marketing & analytics strategies to scale your business."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Our Services</h1>
          <p className="lead mt-3">
            Premium solutions crafted for modern businesses
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            {services.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="card service-card h-100 shadow border-0 text-center p-4">
                  <div className="fs-1 text-warning mb-3">
                    {service.icon}
                  </div>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-muted">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
