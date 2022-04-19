import React from "react";
import Box from "@mui/material/Box";
import TextItem from "../components/TextItem";
import LeftPointer from "../img/leftPointer.png";
import { useNavigate } from "react-router-dom";

const SectionBar = ({ title }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          height: "60px",
          backgroundColor: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title !== "People of Star Wars" ? (
          <Box
            component="img"
            sx={{
              height: "30px",
              width: "30px",
              position: "absolute",
              left: "1rem",
            }}
            alt="rightPointer"
            src={LeftPointer}
            onClick={() => navigate("/")}
          />
        ) : null}
        <Box>
          <TextItem text={title} color="#fff" />
        </Box>
      </Box>
    </>
  );
};

export default SectionBar;
