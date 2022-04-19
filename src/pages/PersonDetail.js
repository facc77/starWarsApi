import React from "react";
import Box from "@mui/material/Box";
import SectionBar from "../components/SectionBar";
import TextItem from "../components/TextItem";

const PersonDetail = () => {
  let { name, eye_color, hair_color, skin_color, birth_year, personVehicles } =
    JSON.parse(localStorage.getItem("selectedPerson"));

  return (
    <>
      <SectionBar title={name} />
      <Box
        sx={{
          height: "60px",
        }}
      >
        <TextItem
          text={"General Information"}
          color="#333333"
          padding="30px 16px 8px"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <TextItem text="Eye Color" color="#828282" padding="16px" />
          <TextItem text={eye_color} color="#333333" padding="16px" />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <TextItem text="Hair Color" color="#828282" padding="16px" />
          <TextItem text={hair_color} color="#333333" padding="16px" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <TextItem text="Skin color" color="#828282" padding="16px" />
          <TextItem text={skin_color} color="#333333" padding="16px" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <TextItem text=" Birth Year" color="#828282" padding="16px" />
          <TextItem text={birth_year} color="#333333" padding="16px" />
        </Box>
        <TextItem text={"Vehicles"} color="#333333" padding="30px 16px 8px" />

        {personVehicles.length ? (
          personVehicles.map((vehicle) => (
            <Box sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.05)" }}>
              <TextItem
                key={vehicle}
                text={vehicle}
                color="#828282"
                padding="30px 16px 8px"
              />
            </Box>
          ))
        ) : (
          <TextItem text={"None"} color="#828282" padding="30px 16px 8px" />
        )}
      </Box>
    </>
  );
};

export default PersonDetail;
