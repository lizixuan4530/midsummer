import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import intl from "react-intl-universal";
import classicCake from "./data/classicCake";
import littleCake from "./data/littleCake";
import springCake from "./data/springCake";
import Customized_o_1 from "./img/Customized_o_1.jpg";
import Customized_o_2 from "./img/Customized_o_2.jpg";
import Customized_o_3 from "./img/Customized_o_3.jpg";
import Customized_o_4 from "./img/Customized_o_4.jpg";
import Customized_o_5 from "./img/Customized_o_5.jpg";
import Customized_o_6 from "./img/Customized_o_6.jpg";
import Customized_o_7 from "./img/Customized_o_7.jpg";
import Customized_p_1 from "./img/Customized_p_1.jpg";
import Customized_p_10 from "./img/Customized_p_10.jpg";
import Customized_p_11 from "./img/Customized_p_11.jpg";
import Customized_p_12 from "./img/Customized_p_12.jpg";
import Customized_p_13 from "./img/Customized_p_13.jpg";
import Customized_p_14 from "./img/Customized_p_14.jpg";
import Customized_p_2 from "./img/Customized_p_2.jpg";
import Customized_p_3 from "./img/Customized_p_3.jpg";
import Customized_p_4 from "./img/Customized_p_4.jpg";
import Customized_p_5 from "./img/Customized_p_5.jpg";
import Customized_p_6 from "./img/Customized_p_6.jpg";
import Customized_p_7 from "./img/Customized_p_7.jpg";
import Customized_p_8 from "./img/Customized_p_8.jpg";
import Customized_p_9 from "./img/Customized_p_9.jpg";
import Pic from "./pics";

const CuzStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#274047",
  },
  custo: {
    flexGrow: 1,
    color: "#D2CDB7",
    fontSize: "12px",
    fontWeight: 500,
    fontFamily: "Arial",
    paddingLeft: "2px",
  },
}));

const Customized_p = [
  {
    id: 1,
    imgs: [
      Customized_p_1,
      Customized_p_2,
      Customized_p_3,
      Customized_p_4,
      Customized_p_5,
      Customized_p_6,
      Customized_p_7,
      Customized_p_8,
      Customized_p_9,
      Customized_p_10,
      Customized_p_11,
      Customized_p_12,
      Customized_p_13,
      Customized_p_14,
    ],
  },
];

const Customized_o = [
  {
    id: 1,
    imgs: [
      Customized_o_1,
      Customized_o_2,
      Customized_o_3,
      Customized_o_4,
      Customized_o_5,
      Customized_o_6,
      Customized_o_7,
    ],
  },
];

export default function ButtonAppBar() {
  const classes = CuzStyles();
  const [showLittleCake, setShowLittleCake] = useState(false);
  const [showClassicCake, setShowClassicCake] = useState(false);

  const [showSpringCake, setShowSpringCake] = useState(false);

  const [showCustoPaintCake, setShowCustoPaintCake] = useState(true);
  const [showObjectCake, setShowObjectCake] = useState(false);

  return (
    <Grid container>
      <Grid
        container
        item
        spacing={3}
        xs={12}
        style={{
          paddingLeft: "1%",
          padding: "2%",
          background:
            " linear-gradient(120deg, #de738d 0%, #bf9fc4 50%, #274047 90%)",
          marginBottom: "10px",
        }}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Typography>
          <Box
            textAlign="center"
            fontFamily='"Segoe UI"'
            style={{ color: "#182A28", fontWeight: 700 }}
            fontSize={16}
          >
            {intl.get("custo.made")}
          </Box>
        </Typography>
      </Grid>
      <Typography className={classes.custo}>
        <Box fontWeight="fontWeightBold" fontSize={13}>
          {" "}
          {intl.get("custo.detail")}
        </Box>
        <Box>{intl.get("custo.flavor")}</Box>
        <Box>{intl.get("custo.cream")}</Box>
      </Typography>

      <Grid
        item
        container
        spacing={3}
        xs={12}
        style={{
          paddingLeft: "1%",
          padding: "1%",
          background: "linear-gradient(105deg, #567077 0%, #274047 90%)",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        direction="row"
        justify="flex-start"
        alignItems="center"
        onClick={() => setShowCustoPaintCake(!showCustoPaintCake)}
      >
        <Typography>
          <Box
            pl={3}
            textAlign="center"
            fontFamily='"Segoe UI"'
            style={{ color: "#ECDEC4", display: "inline" }}
            fontWeight="fontWeightBold"
            fontSize={14}
          >
            ‍{intl.get("custo.paint")}
          </Box>
          <Box
            pl={3}
            textAlign="right"
            fontFamily='"Segoe UI"'
            style={{ color: "#ECDEC4", display: "inline" }}
            fontWeight="fontWeightBold"
            fontSize={16}
          >
            {showCustoPaintCake ? "▼" : "ᐅ"}
          </Box>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "1%", paddingTop: "2%" }}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {showCustoPaintCake &&
          Customized_p.map((item) => (
            <Grid item xs={12} sm={12} key={item.id}>
              <Pic myArrayItem={item} key={item.id}></Pic>
            </Grid>
          ))}
      </Grid>

      <Grid
        item
        container
        spacing={3}
        xs={12}
        style={{
          paddingLeft: "1%",
          padding: "1%",
          background: "linear-gradient(105deg, #567077 0%, #274047 90%)",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        direction="row"
        justify="flex-start"
        alignItems="center"
        onClick={() => setShowObjectCake(!showObjectCake)}
      >
        <Typography>
          <Box
            pl={3}
            textAlign="center"
            fontFamily='"Segoe UI"'
            style={{ color: "#ECDEC4", display: "inline" }}
            fontWeight="fontWeightBold"
            fontSize={14}
          >
            {intl.get("custo.object")}
          </Box>
          <Box
            pl={3}
            textAlign="right"
            fontFamily='"Segoe UI"'
            style={{ color: "#ECDEC4", display: "inline" }}
            fontWeight="fontWeightBold"
            fontSize={16}
          >
            {showObjectCake ? "▼" : "ᐅ"}
          </Box>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "1%", paddingTop: "2%" }}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {showObjectCake &&
          Customized_o.map((item) => (
            <Grid item xs={12} sm={12} key={item.id}>
              <Pic myArrayItem={item} key={item.id}></Pic>
            </Grid>
          ))}
      </Grid>

      <Grid
        item
        container
        spacing={3}
        xs={12}
        style={{
          paddingLeft: "1%",
          padding: "2%",
          background:
            "linear-gradient(105deg, #e183da 0%, #fddf8a 50%, #274047 90%)",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        direction="row"
        justify="flex-start"
        alignItems="center"
        onClick={() => setShowSpringCake(!showSpringCake)}
      >
        <Typography>
          <Box
            textAlign="center"
            fontFamily='"Segoe UI"'
            style={{ color: "#182A28", display: "inline" }}
            fontWeight="fontWeightBold"
            fontSize={16}
          >
            {intl.get("spring")}
          </Box>
          <Box
            pl={3}
            textAlign="right"
            fontFamily='"Segoe UI"'
            style={{ color: "#182A28", display: "inline" }}
            fontWeight="fontWeightBold"
            fontSize={20}
          >
            {showSpringCake ? "▼" : "ᐅ"}
          </Box>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "1%", paddingTop: "2%" }}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {showSpringCake &&
          springCake.map((item) => (
            <Grid item xs={6} sm={3} key={item.id}>
              <Pic myArrayItem={item} key={item.id}></Pic>
            </Grid>
          ))}
      </Grid>

      <Grid
        container
        item
        spacing={3}
        xs={12}
        style={{
          paddingLeft: "1%",
          padding: "2%",
          background:
            " linear-gradient(120deg, #FAACA8 0%, #dcb4ca 50%, #274047 90%)",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        onClick={() => setShowClassicCake(!showClassicCake)}
      >
        <Typography>
          <Box
            textAlign="center"
            fontFamily='"Segoe UI"'
            style={{ color: "#182A28", display: "inline", fontWeight: 700 }}
            fontSize={16}
          >
            {intl.get("classic")}
          </Box>
          <Box
            pl={3}
            textAlign="right"
            fontFamily='"Segoe UI"'
            style={{ color: "#182A28", display: "inline" }}
            fontWeight="fontWeightBold"
            fontSize={20}
          >
            {showClassicCake ? "▼" : "ᐅ"}
          </Box>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "1%", paddingTop: "2%" }}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {showClassicCake &&
          classicCake.map((item) => (
            <Grid item xs={6} sm={3} key={item.id}>
              <Pic myArrayItem={item} key={item.id}></Pic>
            </Grid>
          ))}
      </Grid>

      <Grid
        container
        item
        spacing={3}
        xs={12}
        style={{
          paddingLeft: "1%",
          padding: "2%",
          background:
            "linear-gradient(119deg, #FBAB7E 0%, #F7CE68 50%, #274047 90%)",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        direction="row"
        justify="flex-start"
        alignItems="center"
        onClick={() => setShowLittleCake(!showLittleCake)}
      >
        <Typography>
          <Box
            textAlign="center"
            fontFamily='"Segoe UI"'
            style={{ color: "#182A28", display: "inline" }}
            fontWeight="fontWeightBold"
            fontSize={16}
          >
            {intl.get("little")}
          </Box>
          <Box
            pl={3}
            textAlign="right"
            fontFamily='"Segoe UI"'
            style={{ color: "#182A28", display: "inline" }}
            fontWeight="fontWeightBold"
            fontSize={20}
          >
            {showLittleCake ? "▼" : "ᐅ"}
          </Box>
        </Typography>
      </Grid>
      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "1%", paddingTop: "2%" }}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {showLittleCake &&
          littleCake.map((item) => (
            <Grid item xs={6} sm={3} key={item.id}>
              <Pic myArrayItem={item} key={item.id}></Pic>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
