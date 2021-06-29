import React, { useContext } from "react";
import CardInfo from "./CardInfo";
import CardPhoto from "./CardPhoto";
import GlobalStateContext from "../global/GlobalStateContext";

const MainContainer = () => {
  const { states } = useContext(GlobalStateContext);

  return (
    <div
      className="card-group"
      style={{ textAlign: "center", minHeight: "85vh" }}
    >
      <CardPhoto />

      <CardInfo
        title="Repositories"
        data={states.data}
        text="Theres's no 🗃 here yet"
      />

      <CardInfo
        title="Starred"
        data={states.starred}
        text="There's no 🌟 here yet"
      />
    </div>
  );
};

export default MainContainer;
