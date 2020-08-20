import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function Infobox({ title, cases, total, active, isRed, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`InfoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        {/* title */}
        <Typography className="InfoBox__title" color="textSecondary">
          {title}
        </Typography>

        {/* no:of cases */}
        <h2 className={`InfoBox__cases ${!isRed && "InfoBox__cases--green"}`}>
          {cases}
        </h2>

        {/* total cases */}
        <Typography className="InfoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
