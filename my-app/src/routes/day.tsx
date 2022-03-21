import {
  Divider,
  Grid,
  Accordion,
  Stepper,
  AccordionSummary,
  Typography,
  AccordionDetails,
  StepLabel,
  Step,
  Card,
  CardContent,
} from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { getDay } from "../mock-data/day-example";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { margin } from "@mui/system";
import { blue } from "@mui/material/colors";

export default function Day() {
  let params = useParams();
  if (!params.date) {
    console.error("no param passed!");
    return <Navigate to={"/dailyoverview"} />;
  }

  let day = getDay(params.date);
  if (!day) {
    console.log("date not found!");
    return <Navigate to={"/dailyoverview"} />;
  }

  return (
    <Grid container display={"flex"}>
      <Grid sx={{ margin: "0 auto", padding: "12px 0", width: "80%" }}>
        <Divider>Wake up at 6am</Divider>
      </Grid>
      <Grid container display="flex">
        <Grid>
          <Typography variant="body1" paddingLeft={"12px"}>
            6:00am
          </Typography>
        </Grid>
        <Grid container xs={12} display="flex" justifyContent="space-between">
          <Grid item xs={1} justifyContent={"center"}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{
              backgroundColor: "#3C2E48",
              marginRight: "1.5rem",
              borderRadius: "10px",
            }}
          >
            <Typography>Routine</Typography>
            <Typography>Morning Routine</Typography>
            <Typography variant="body1">
              Coffee, breakfast, skin care.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
