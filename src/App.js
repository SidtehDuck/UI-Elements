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
import Rating from "@material-ui/lab/Rating";

import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EditIcon from "@material-ui/icons/Edit";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Divider from "@material-ui/core/Divider";
import randomColor from "randomcolor";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F6F6F6",
    borderRadius: "11px",
    maxHeight: "250px",
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

  avatar: {
    position: "",
    left: "100%",
    width: 28,
    height: 28,
    backgroundColor: "#515151",
  },
  header: {
    position: "relative",
    left: "10%",
    top: "7.5%",
    marginBottom: "10px",
    marginTop: "10px",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#2E2E2E",
  },
  subheader: {
    position: "relative",
    left: "10%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#515151",
  },
  icon: {
    position: "relative",
    width: 28,
    height: 28,
    color: "#2E2E2E",
  },
  activity: {
    position: "relative",
    left: "5%",
    marginBottom: "10px",
    marginTop: "10px",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "20px",
    lineHeight: "19px",
    color: "#2E2E2E",
  },
});

const Attendance = () => (
  <div style={{ height: "150px", width: "150px" }}>
    <ChartDonut
      innerRadius={60}
      padding="100px"
      ariaDesc="Attendance"
      ariaTitle="Donut Chart"
      constrainToVisibleArea={true}
      data={[
        { x: "Attended", y: 90 },
        { x: "Unattended", y: 10 },
      ]}
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
      ariaDesc="Tests"
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
    <div>
      <Grid container justify='center' spacing={4}>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Typography className={classes.header}>
                  Batch Name | PHY_B1
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  style={{ top: "25%", right: "0%" }}
                  aria-label="settings"
                  className={classes.icon}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
            <CardHeader
              avatar={
                <Avatar aria-label="avatar" className={classes.avatar}></Avatar>
              }
              action={
                <IconButton
                  style={{ top: "25%", right: "50%" }}
                  aria-label="settings"
                  className={classes.icon}
                >
                  <PersonAddIcon />
                </IconButton>
              }
              title={
                <Typography className={classes.subheader}>
                  Marvin McKinney
                </Typography>
              }
            />
            <CardHeader
              avatar={
                <Avatar
                  aria-label="settings"
                  className={classes.avatar}
                ></Avatar>
              }
              title={
                <Typography className={classes.subheader}>
                  125 Students
                </Typography>
              }
            />
            <CardHeader
              avatar={
                <Avatar aria-label="settings" className={classes.avatar}>
                  <ScheduleIcon />
                </Avatar>
              }
              action={
                <Button
                  style={{ top: "50%" }}
                  variant="outlined"
                  color="primary"
                >
                  View
                </Button>
              }
              title={
                <Typography className={classes.subheader}>
                  <div style={{ fontWeight: 400, padding: "1px" }}>
                    Upcoming Activity
                  </div>
                  <div style={{ fontWeight: 400, padding: "1px" }}>
                    Thu, 25th May{" "}
                  </div>
                  <div
                    style={{ fontWeight: 800, color: "black", padding: "2px" }}
                  >
                    12:00 PM - 12:00 PM
                  </div>
                </Typography>
              }
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <div className="App">
                <Grid container spacing={10}>
                  <Grid
                    item
                    xs={4}
                    container
                    alignItems="center"
                    justify="center"
                  >
                    <div>
                      <Typography style={{ paddingBottom: "0px" }}>
                        Attendance
                      </Typography>
                      <div>
                        <Attendance />
                      </div>
                      <Typography display="block" style={{ color: "#515151" }}>
                        <div>Last Absence</div>
                        <div>12th May, 12:00 PM</div>
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    container
                    alignItems="center"
                    justify="center"
                  >
                    <div>
                      <Typography style={{ paddingBottom: "0px" }}>
                        Tests
                      </Typography>
                      <div>
                        <Tests />
                      </div>
                      <Typography display="block" style={{ color: "#515151" }}>
                        <div>Last Test</div>
                        <div>100%</div>
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div style={{}}>
                      <Typography style={{ paddingBottom: "50px" }}>
                        HW Rating
                      </Typography>
                      <Rating name="read-only" value={value} readOnly />
                      <Typography style={{ paddingBottom: "10px" }}>
                        ({value})
                      </Typography>
                      <Typography display="block" style={{ color: "#515151" }}>
                        <div>Last Homework</div>
                        <div>4.5</div>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <div style={{}}>
              <Typography className={classes.activity}>
                Activities | 26th Apr, 2020
              </Typography>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div style={{ top: "50%", transform: "translate(0px, 20px  )" }}>
              <Divider />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div style={{}}>
              <Button variant="contained" color="primary">
                + Schedule Activity
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container justify= 'center' spacing={2}>
          <Grid item xs={1}>
            <div style={{ backgroundColor: randomColor() }}>
              <Typography> MON </Typography>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div style={{ backgroundColor: randomColor() }}>
              <Typography> TUE </Typography>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div style={{ backgroundColor: randomColor() }}>
              <Typography> WED </Typography>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div style={{ backgroundColor: randomColor() }}>
              <Typography> THU </Typography>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div style={{ backgroundColor: randomColor() }}>
              <Typography> FRI </Typography>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div style={{ backgroundColor: randomColor() }}>
              <Typography> SAT </Typography>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div style={{ backgroundColor: randomColor() }}>
              <Typography> SUN </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
