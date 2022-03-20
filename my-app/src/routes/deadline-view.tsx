import { DeadlineDate } from "../mock-data/components/deadline-date";
import { deadline, deadlines } from "../types/deadline_types";

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
    <div>
      <h1>{currentMonth}</h1>
      <DeadlineDate date={currentDate} deadlines={deadlines} />
    </div>
  );
};
