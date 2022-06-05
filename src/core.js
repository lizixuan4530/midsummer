import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import intl from "react-intl-universal";
import { presentCakesList } from "./data/present-cakes-list";
import Pic from "./pics";
import { LIGHT_YELLOW } from "./colors/color";

const CuzStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#fff2dcs",
  },
  custo: {
    flexGrow: 1,
    color: LIGHT_YELLOW,
    fontSize: "12px",
    fontWeight: 500,
    fontFamily: "Arial",
    paddingLeft: "2px",
  },
}));

export default function ButtonAppBar() {
  const classes = CuzStyles();

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
        }}
        direction="row"
        justify="flex-start"
        alignItems="center"
      ></Grid>

      <Grid
        container
        style={{ paddingLeft: "1%", paddingTop: "2%" }}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {presentCakesList.map((item) => (
          <Grid item xs={12} sm={12} key={item.id}>
            <Pic myArrayItem={item} key={item.id}></Pic>
          </Grid>
        ))}
      </Grid>

      {/* <Grid
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
      </Grid> */}
    </Grid>
  );
}
