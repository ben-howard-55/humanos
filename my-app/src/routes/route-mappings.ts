var dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const routeNavMappings = {
  routes: [
    {
      name: "Today",
      path: `dailyoverview/${dayjs().format("YYYYMMDD")}`,
    },
    {
      name: "Deadlines",
      path: "deadlineview",
    },
    {
      name: "Routines",
      path: "routines",
    },
    {
      name: "Habits",
      path: "habits",
    },
  ],
};

export default routeNavMappings;
