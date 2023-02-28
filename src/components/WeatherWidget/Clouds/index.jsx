import "./Clouds.css";
import cloudSVG from "../../../assets/clouds.svg";

const Clouds = ({ cloudState }) => {
  return (
    <div className={`cloud ${cloudState ? "show" : ""}`}>
      <div className="cloud-two">
        <img className="cloudsvg" width="100%" height="100%" src={cloudSVG} />
      </div>
    </div>
  );
};

export default Clouds;
