import React from "react";
import css from "./YTSearch.module.css";

const YTSearch = () => {
  return (
    <div className={css.YTSearch}>
      <input type="text" placeholder="Search" />
      <button>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.935 17.23L12.345 11.64C13.415 10.41 14.065 8.81 14.065 7.06C14.065 3.19 10.935 0.0599976 7.065 0.0599976C3.195 0.0599976 0.0650024 3.19 0.0650024 7.06C0.0650024 10.93 3.195 14.06 7.065 14.06C8.815 14.06 10.415 13.41 11.645 12.35L17.235 17.94L17.935 17.23ZM7.065 13.06C3.755 13.06 1.065 10.37 1.065 7.06C1.065 3.75 3.755 1.06 7.065 1.06C10.375 1.06 13.065 3.75 13.065 7.06C13.065 10.37 10.375 13.06 7.065 13.06Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default YTSearch;