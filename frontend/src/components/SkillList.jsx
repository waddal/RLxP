import React from "react";
import { axiosWithAuth } from "../hooks/axiosWithAuth.js";

// get request to pull authenticated user data from server using auth token
// look into axios-retry
const pullData = () => {
  axiosWithAuth()
    .get("endpoint/path/here")
    .then((data) => data);
};

const SkillList = () => {
  return <div>SkillList</div>;
};

export default SkillList;
