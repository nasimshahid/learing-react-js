import axios from "axios";
import React, { useEffect, useState } from "react";

function Action(props) {
  const [count, setCount] = useState(0);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    console.log("Button Clicked");
  }, [count]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setListData(response.data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container py-5">
      {/* Header Card */}
      <div className="card shadow-lg border-0 text-center mb-5">
        <div className="card-body p-4">
          <h2 className="fw-bold text-dark">{props.data}</h2>
          <p className="fs-5 text-muted">Count: {count}</p>

          <button
            className="btn btn-dark btn-lg rounded-pill px-4"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </div>

      {/* User Cards */}
      <div className="row g-4">
        {listData.map((val, i) => (
          <div className="col-xl-3 col-lg-4 col-md-6" key={i}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-semibold mb-1">{val.username}</h5>
                <p className="text-muted mb-1 small">
                  {val.address.address}
                </p>
                <p className="text-muted small mb-3">
                  {val.address.city}
                </p>

                <span className="badge bg-dark rounded-pill px-3 py-2">
                  {val.age} yrs
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Action;
