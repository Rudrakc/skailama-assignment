import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import axios from "axios";

function Breadcrumb() {
  const location = useLocation();
  const [names, setNames] = useState({});

  useEffect(() => {
    const fetchData = async (currentPath, nextValue) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/${currentPath}/${nextValue}`
        );
        setNames((prevNames) => ({
          ...prevNames,
          [nextValue]: response.data.name,
        }));
      } catch (error) {
        console.error("Error fetching name:", error);
      }
    };

    const pathLinks = location.pathname.split("/").filter((path) => path !== "");

    for (let i = 0; i < pathLinks.length - 1; i++) {
      const currentPath = pathLinks[i];
      const nextValue = pathLinks[i + 1];

      if (nextValue.length > 20 && !names[nextValue]) {
        fetchData(currentPath, nextValue);
        i++;
      }
    }
  }, [location.pathname]);

  const pathLinks = location.pathname.split("/").filter((path) => path !== "");
  const pathNames = [];

  for (let i = 0; i < pathLinks.length - 1; i++) {
    const currentPath = pathLinks[i];
    const nextValue = pathLinks[i + 1];

    if (nextValue.length > 20 && names[nextValue]) {
      console.log("Pushing name:", names);
      pathNames.push(names[nextValue]);
      i++;
    } else {
      pathNames.push(currentPath);
    }
  }

  if (pathLinks[pathLinks.length - 1].length < 20) {
    pathNames.push(pathLinks[pathLinks.length - 1]);
  }

  
  let pathLinkIndex = 0;
  let currentLink = "";
  const breadcrumbs = pathNames.map((path, index) => {
    currentLink += `/${pathLinks[pathLinkIndex]}`;
    if (pathNames[index] !== pathLinks[pathLinkIndex]) {
      currentLink += `/${pathLinks[pathLinkIndex + 1]}`;
      pathLinkIndex++;
    }
    pathLinkIndex++;
    return (
      <Link to={currentLink} key={index}>
        <div className="flex items-center justify-center">
          <div className="text-xl font-bold text-gray-400 pl-2">/ {path}</div>
        </div>
      </Link>
    );
  });

  return (
    <div className="flex">
      <Link to={"/"}>
        <div className="flex items-center justify-center">
          <GoHome className="scale-150 text-gray-400 font-bold" />
          <div className="text-xl font-bold text-gray-400 pl-2">Home</div>
        </div>
      </Link>
      {breadcrumbs}
    </div>
  );
}

export default Breadcrumb;
