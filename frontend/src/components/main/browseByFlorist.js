import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";
import { ShoppingBag } from "@mui/icons-material";

const BrowseByFlorist = () => {
  const url = app_config.backend_url;

  const [floristData, setfloristData] = useState(null);
  const [flowerArray, setFlowerArray] = useState([]);
  const [fLoading, setFLoading] = useState(true);
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const fetchFlorist = () => {
    fetch(url + "/florist/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setfloristData(data);
        setLoading(false);
      });
  };

  const fetchFlowers = () => {
    fetch(url + "/flower/getbyflorist/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFlowerArray(data);
        setFLoading(false);
      });
  };

  useEffect(() => {
    fetchFlorist();
    fetchFlowers();
  }, []);

  const filterData = () => {};

  const displayData = () => {
    if (!loading) {
      return (
        <div className="card">
          {/* <img src={} alt="" className='card-img-top' /> */}
          <div className="card-body">
            <h1>{floristData.shopName}</h1>
            <div className="container">{displayFlowers()}</div>
          </div>
        </div>
      );
    }
  };

  const orderFlower = () => {};

  const displayFlowers = () => {
    if (!fLoading)
      return (
        <div className="row">
          {flowerArray.map(({ name, color, price_per_kg, image }) => (
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img
                  src={url + "/uploads/" + image}
                  className="w-100"
                  onClick={orderFlower}
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="d-flex justify-content-start align-items-start h-100">
                      <h5>
                        <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                          ₹{price_per_kg}
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      );
  };

  return <div>{displayData()}</div>;
};

export default BrowseByFlorist;
