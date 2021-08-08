import React, { useEffect } from "react";

const Br = ({ is }) => {
  console.log(is);
  return <span className={`br ${is || "all"}`} />;
};

export default Br;
