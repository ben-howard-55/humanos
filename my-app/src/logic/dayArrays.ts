let dayjs = require("dayjs");
let isLeapYear = require("dayjs/plugin/isLeapYear");
dayjs.extend(isLeapYear);

export const initUserCalendar = () => {
  let todays_date = dayjs();
  const days_of_year = dayjs(todays_date).isLeapYear ? 366 : 365;

  let past_humanosDays: humanosDay[] = [];
  let future_humanosDays: humanosDay[] = [];

  future_humanosDays = [...Array(days_of_year)].map((day, index) => {
    return {
      date: dayjs().add(index, "day").format("YYYYMMDD"),
      calendarItems: [],
    };
  });
  console.log(future_humanosDays);

  past_humanosDays = [...Array(days_of_year)].map((day, index) => {
    return {
      date: dayjs()
        .subtract(days_of_year, "day")
        .add(index, "day")
        .format("YYYYMMDD"),
      calendarItems: [],
    };
  });
  console.log(past_humanosDays);
};

export interface humanosDay {
  date: string;
  calendarItems: calendarItem[];
}

interface calendarItem {
  type: string; // routine, deadline, event, meeting, deepwork, lightwork
  id: number;
}

interface routine {
  id: number;
  title: string;
  details: string;
  scheduling_function: string;
  habits: habit[];
}

interface habit {
  id: number;
  title: string;
}
