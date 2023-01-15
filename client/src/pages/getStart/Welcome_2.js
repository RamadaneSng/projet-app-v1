import React from "react";
import { Link } from "react-router-dom";
import Welcome_centent from "../../components/Welcome_content";

const Welcome_2 = () => {
  return (
    <Welcome_centent
      content={
        "    PRAMSK, pour ne plus jamais chercher une place de parking"
      }
      link={"/2"}
    />
  );
};

export default Welcome_2;
