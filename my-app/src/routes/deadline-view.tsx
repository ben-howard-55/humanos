import { DeadlineDate } from "../components/deadline-date";
import { deadline, deadlines } from "../types/deadline_types";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

var dayjs = require("dayjs");
var advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

export const DeadlineView = () => {
  let currentMonth = dayjs().format("MMMM");
  let currentDate: string = dayjs().format("dddd Do");

  let ds1: deadline = { id: 1, title: "370 tutorial 1" };
  let ds2: deadline = { id: 2, title: "watch HPC lecture" };

  const deadlines: deadlines = { deadlines: [ds1, ds2] };

  return (
    <Box>
      <Typography variant="h3">{currentMonth}</Typography>
      <DeadlineDate date={currentDate} deadlines={deadlines} />
    </Box>
  );
};
