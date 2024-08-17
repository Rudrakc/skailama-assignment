import React from "react";
import { useLocation } from "react-router";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();

  const pathLinks = location.pathname.split("/").filter((path) => path !== "");
  console.log("pathLinks ", pathLinks);

  const pathNames = [];
  for (let i = 0; i < pathLinks.length - 1; i++) {
    const nextValue = Number(pathLinks[i + 1]);
    // Check if it's a valid number
    if (!isNaN(nextValue)) {
      // Do API call to get the name
      pathNames.push("Sample Project");
      i++;
    } else pathNames.push(pathLinks[i]);
  }
  // Check if the last element is a number
  if (isNaN(Number(pathLinks[pathLinks.length - 1]))) {
    pathNames.push(pathLinks[pathLinks.length - 1]);
  }
  console.log("pathNames", pathNames);
  
  // Creating the breadcrumbs
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
      <Link to={currentLink}>
        <div className="flex items-center justify-center">
          <div className="text-xl font-bold text-gray-400 pl-2">/ {path}</div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <Link to={"/"}>
        <div className="flex items-center justify-center">
          <GoHome className="scale-150 text-gray-400 font-bold" />
          <div className="text-xl font-bold text-gray-400 pl-2">Home</div>
          {breadcrumbs}
        </div>
      </Link>
    </div>
  );
}

export default Breadcrumb;
