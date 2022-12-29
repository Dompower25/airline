import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import s from "./style.module.css";
import Checkbox from "@mui/material/Checkbox";

const ValuteButton = styled(ToggleButton)(({ theme }) => ({
  fontSize: "14px",
  boxSizing: "border-box",
  padding: "5px 19px",
}));

const LeftSideBar = ({ setStopsFilter, setValuteNames }) => {
  const [alignment, setAlignment] = useState("rub");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);

  const handleChange1 = (event) => {
    checked1 ? setChecked1(false) : setChecked1(true);
    setStopsFilter(null);
  };

  const handleChange2 = (event) => {
    checked2 ? setChecked2(false) : setChecked2(true);
    setStopsFilter(0);
  };

  const handleChange3 = (event) => {
    checked3 ? setChecked3(false) : setChecked3(true);
    setStopsFilter(1);
  };

  const handleChange4 = (event) => {
    checked4 ? setChecked4(false) : setChecked4(true);
    setStopsFilter(2);
  };

  const handleChange5 = (event) => {
    checked5 ? setChecked5(false) : setChecked5(true);
    setStopsFilter(3);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FormControlLabel
        label="Все"
        control={<Checkbox checked={checked1} onChange={handleChange1} />}
      />
      <FormControlLabel
        label="Без пересадок"
        control={<Checkbox checked={checked2} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="1 пересадка"
        control={<Checkbox checked={checked3} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="2 пересадки"
        control={<Checkbox checked={checked4} onChange={handleChange4} />}
      />
      <FormControlLabel
        control={<Checkbox checked={checked5} onChange={handleChange5} />}
        label="3 пересадки"
      />
    </Box>
  );

  return (
    <div className={s.LeftSideBar}>
      <div className={s.box}>
        <span className={s.valute}>ВАЛЮТА</span>
        <ToggleButtonGroup
          color="info"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{ marginTop: "10px" }}
        >
          <ValuteButton
            onClick={() => {
              setValuteNames("P");
            }}
            value="rub"
          >
            RUB
          </ValuteButton>
          <ValuteButton
            onClick={() => {
              setValuteNames("USD");
            }}
            value="usd"
          >
            USD
          </ValuteButton>
          <ValuteButton
            onClick={() => {
              setValuteNames("EUR");
            }}
            value="eur"
          >
            EUR
          </ValuteButton>
        </ToggleButtonGroup>
      </div>
      <div className={s.box}>
        <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {children}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default LeftSideBar;
