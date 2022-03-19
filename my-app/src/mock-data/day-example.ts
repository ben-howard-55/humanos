let day = [
  {
    date: "20032022",
    schedule: [
      {
        type: "routine",
        id: 1,
        title: "Morning Routine",
        details: "Eat, pray, and skin care.",
        startTime: "6.30am",
        endTime: "7.00am",
      },
      {
        type: "deepwork",
        id: 1,
        title: "DeepWork A",
        details: "Learn and set up React Router.",
        startTime: "7.00am",
        endTime: "9.00am",
      },
    ],
  },
  {
    date: "21032022",
    schedule: [
      {
        type: "routine",
        id: 1,
        title: "Morning Routine",
        details: "Eat, pray, and skin care.",
        startTime: "6.30am",
        endTime: "7.00am",
      },
      {
        type: "deepwork",
        id: 1,
        title: "DeepWork B",
        details: "Learn and set up React Router.",
        startTime: "7.00am",
        endTime: "9.00am",
      },
    ],
  },
];

export function getDay(dateToMatch: string) {
  return day.find((dayDetails) => {
    return dayDetails.date === dateToMatch;
  });
}
