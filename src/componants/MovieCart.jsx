import { FaArrowRight } from "react-icons/fa6";

export default function MovieCart() {
  return (
    <div className="MovieCart">
      <img src="./Container.jpg" alt="" />
      <div className="inner">
        <p>Action</p>
        <FaArrowRight fill="white" />
      </div>
    </div>
  );
}
