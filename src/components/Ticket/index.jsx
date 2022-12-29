import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import s from "./style.module.css";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const BuyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(235, 136, 43)",
  fontSize: "14px",
  fontWeight: "bold",
  boxSizing: "border-box",
  padding: "5px 22px",
  lineHeight: "20px",
  textTransform: "unset",
  "&:hover": {
    backgroundColor: "rgb(190, 111, 37)",
    boxShadow: "none",
  },
}));

const AirplaneIcon = styled(AirplanemodeActiveIcon)(({ theme }) => ({
  transform: "rotate(90deg)",
  color: "rgba(0, 0, 0, 0.116)",
}));

const Ticket = ({
  valuteNames,
  price,
  stops,
  carrier,
  arrivalTime,
  arrivalDate,
  departureTime,
  departureDate,
  destinationName,
  destination,
  originName,
  origin,
}) => {
  const [newPrice, setNewPrice] = useState(price);

  const dateToDeparture = new Date(departureDate);
  const depDate = dateToDeparture.toDateString();
  const dateToArrivel = new Date(arrivalDate);
  const arrivDate = dateToArrivel.toDateString();

  useEffect(() => {
    const convetations = (valuteNames, price) => {
      if (valuteNames == "USD") {
        return setNewPrice((price / 71.15).toFixed(2));
      }
      if (valuteNames == "EUR") {
        return setNewPrice((price / 74.39).toFixed(2));
      }
      return price;
    };
    convetations(valuteNames, price);
  }, [valuteNames]);

  return (
    <div className={s.TicketCard}>
      <div className={s.LeftBox}>
        <BuyButton variant="contained">
          Купить за {newPrice}
          {valuteNames}
        </BuyButton>
      </div>
      <div className={s.RigthBox}>
        <div className={s.FlightTime}>
          <span className={s.Time}>{departureTime}</span>
          <span className={s.AirIcon}>
            <span className={s.Transfer}>{stops} пересадка</span>
            <div className={s.IconStyle}>
              <AirplaneIcon sx={{fontSize: "20px"}} />
            </div>
          </span>
          <span className={s.Time}>{arrivalTime}</span>
        </div>
        <div className={s.Airport}>
          <div className={s.AirportDate}>
            <span className={s.AirportName}>
              {origin}, {originName}
            </span>
            <span className={s.DateFrom}>{depDate}</span>
          </div>
          <div className={s.AirportDate}>
            <span className={s.AirportName}>
              {destinationName}, {destination}
            </span>
            <span className={s.DateFrom}>{arrivDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
