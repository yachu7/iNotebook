import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {a.state.name} and {a.state.class}{" "}
    </div>
  );
}

export default About;
