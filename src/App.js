import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ChartDonut } from "@patternfly/react-charts";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    position: "absolute",
    left: "11.57%",
    right: "60.61%",
    top: "5.08%",
    bottom: "70.18%",
    minWidth: 1000,
    minHeight: 500,
    backgroundColor: "#F6F6F6",
    borderRadius: "11px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Attendance = () => (
  <div style={{ height: "250px", width: "250px" }}>
    <ChartDonut
      innerRadius={40}
      ariaDesc="Attendance"
      ariaTitle="Donut Chart"
      constrainToVisibleArea={true}
      data={[
        { x: "Attendance", y: 90 },
        { x: "Not-Attended", y: 10 },
      ]}
      height={150}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      title="90%"
      animate="true"
    />
  </div>
);

const Tests = () => (
  <div style={{ height: "150px", width: "150px" }}>
    <ChartDonut
      innerRadius={60}
      ariaDesc="Attendance"
      ariaTitle="Donut Chart"
      constrainToVisibleArea={true}
      data={[
        { x: "Score", y: 90 },
        { x: "Total", y: 10 },
      ]}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      title="90%"
      animate="true"
    />
  </div>
);

function App() {
  const classes = useStyles();
  const value = 4.1;

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className="App">
          <Grid container spacing={10}>
            <Grid item xs={4}>
              <Typography style={{ paddingBottom: "0px" }}>
                Attendance
              </Typography>
              <Attendance />
            </Grid>
            <Grid item xs={4}>
              <div style={{}}>
                <Typography style={{ paddingBottom: "0px" }}> 
                Tests 
                </Typography>
                <Tests />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{}}>
                <Typography style={{ paddingBottom: "0px" }}>
                  HW Rating
                </Typography>
                <Rating name="read-only" value={value} readOnly />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ background: "black" }}>
                Hooray something is here!
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{}}> Hooray something is too! </div>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
}

export default App;
