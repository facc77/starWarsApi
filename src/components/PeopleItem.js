import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RigthPointer from "../img/rightPointer.png";
import { setActivePerson } from "../redux/reducers/peopleReducer";
import { useNavigate } from "react-router-dom";
import { getUrlId } from "../services/app.service";

const PeopleItem = ({ person }) => {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const speciesId = person.species[0] ? getUrlId(person.species[0]) - 1 : 0;
  const planetId = getUrlId(person.homeworld);
  const vehiclesId = person.vehicles.map((vehicle) => getUrlId(vehicle));

  const personSpecies = useSelector((state) =>
    state.species.speciesList[speciesId]
      ? state.species.speciesList[speciesId].name
      : "specie not available"
  );

  const personPlanet = useSelector((state) =>
    state.planets.planetasList[planetId]
      ? state.planets.planetasList[planetId].name
      : "planet not available"
  );

  const vehiclesList = useSelector((state) => state.vehicles.vehiclesList);
  const personVehicles = vehiclesId.map((vehicle) =>
    vehiclesList[vehicle] ? vehiclesList[vehicle].name : "vehicle not available"
  );

  let personData = JSON.parse(JSON.stringify(person));
  personData.personVehicles = personVehicles;

  const handleClick = () => {
    localStorage.setItem("selectedPerson", JSON.stringify(personData));
    dispatch(setActivePerson(person));
    navigate("/personDetail");
  };

  return (
    <Box sx={{ heigth: "68px" }}>
      <Box
        sx={{
          margin: "16px",
          padding: "8px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            fontFamily="Roboto"
            color="#000000"
            fontWeight="700"
            fontSize="17px"
          >
            {person.name}
          </Typography>
          <Typography
            fontFamily="Roboto"
            color="#828282"
            fontWeight="400"
            fontSize="14px"
          >
            {personSpecies} from {personPlanet}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            sx={{ height: "15px", width: "15px" }}
            alt="rightPointer"
            src={RigthPointer}
            onClick={() => handleClick()}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PeopleItem;
