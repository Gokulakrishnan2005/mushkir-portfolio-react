import { Link } from "react-router-dom";

const TheFootNote = () => {
  return (
    <div className=" bg-primary-blue p-4 text-center">
      <div>
        <span className="text-lg text-main-heading-color ">
          Copyright© - 2024 | Designed and Developed by:{" "}
          <Link
            to={"https://github.com/Mushkir/mushkir-portfolio-react"}
            target="_blank"
            className="font-normal hover:underline hover:font-semibold"
          >
            M.A. Mohamed Mushkir
          </Link>{" "}
          ❤️
        </span>
      </div>

      <div></div>
    </div>
  );
};

export default TheFootNote;
