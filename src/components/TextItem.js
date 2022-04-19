import React from "react";
import Typography from "@mui/material/Typography";

const TextItem = ({ text, color, padding }) => {
  return (
    <Typography
      fontFamily="Roboto"
      fontWeight="700"
      fontSize="17px"
      padding={padding}
      color={color}
    >
      {text}
    </Typography>
  );
};

export default TextItem;
