import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingCell from "../components/LoadingCell";
import Box from "@mui/material/Box";
import PeopleItem from "../components/PeopleItem";
import TextItem from "../components/TextItem";
import SectionBar from "../components/SectionBar";
import { getPersonas } from "../redux/reducers/peopleReducer";

const Home = () => {
  const {
    peopleList,
    error: error1,
    firstLoad,
    currentPage,
    nextPage,
  } = useSelector((state) => state.people);

  const { loading: load1, error: error2 } = useSelector(
    (state) => state.species
  );
  const { loading: load2, error: error3 } = useSelector(
    (state) => state.planets
  );
  const { loading: load3, error: error4 } = useSelector(
    (state) => state.vehicles
  );

  let infoLoading = load1 || load2 || load3;
  let errorData = error1 || error2 || error3 || error4;

  let dispatch = useDispatch();
  const currentPageRef = React.useRef(currentPage);
  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          dispatch(getPersonas(currentPageRef.current));
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  const [element, setElement] = useState(null);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element, currentPage]);

  if (infoLoading || firstLoad) {
    return (
      <>
        <SectionBar title="People of Star Wars" />
        <LoadingCell />
      </>
    );
  }

  return (
    <>
      <SectionBar title="People of Star Wars" />
      {errorData ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
        >
          <TextItem text={"Failed to load Data"} color="#EC5757" />
        </Box>
      ) : (
        <>
          {peopleList.map((person) => (
            <PeopleItem key={person.name} person={person} />
          ))}
          {nextPage && (
            <>
              <LoadingCell /> <Box ref={setElement} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
