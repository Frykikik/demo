//components/accordionExpandIcon.js
import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import OxGame from "./oxGame.js";
import ShowProduct from "./product.js";
import TaskApp from "./TaskApp.js";
import Clock from "./Clock.js";

function Bar({ id, title, children }) {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={id}
          id={id}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{children} </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default function AccordionExpandIcon() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <>
        <Clock />
        <Bar id={"panel1-header"} title={"井字遊戲"}>
          <OxGame />
        </Bar>
        <Bar id={"panel2-header"} title={"購物清單"}>
          <ShowProduct />
        </Bar>
        <Bar id={"panel3-header"} title={"Todo列表"}>
          <TaskApp />
        </Bar>
      </>
    )
  );
}
