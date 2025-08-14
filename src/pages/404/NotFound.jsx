import { Link } from "react-router";
import "../404/404.css";
export default function NotFound() {
  return (
    <>
      <div className="bg-purple">
        <div className="stars">
          <div className="central-body">
            <img
              className="image-404"
              src={`${import.meta.env.BASE_URL}/404/404.svg`}
              alt="404 Error"
              width="300px"
            />
            <Link className="btn-go-home" to="/">
              GO BACK HOME
            </Link>
          </div>

          <div className="objects">
            <img
              className="object_rocket"
              src={`${import.meta.env.BASE_URL}/404/rocket.svg`}
              alt="Rocket"
              width="40px"
            />
            <div className="earth-moon">
              <img
                className="object_earth"
                src={`${import.meta.env.BASE_URL}/404/earth.svg`}
                alt="Earth"
                width="100px"
              />
              <img
                className="object_moon"
                src={`${import.meta.env.BASE_URL}/404/moon.svg`}
                alt="Moon"
                width="80px"
              />
            </div>
            <div className="box_astronaut">
              <img
                className="object_astronaut"
                src={`${import.meta.env.BASE_URL}/404/astronaut.svg`}
                alt="Astronaut"
                width="140px"
              />
            </div>
          </div>

          <div className="glowing_stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
      </div>
    </>
  );
}
