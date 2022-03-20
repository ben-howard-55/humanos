import { Navigate, useParams } from "react-router-dom";
import { getDay } from "../mock-data/day-example";

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
    <>
      <div>
        {day.schedule.map((task) => (
          <div key={task.title}>
            <h1>{task.title}</h1>
            <h2>{task.details}</h2>
            <p>{task.type}</p>
            <p>{task.startTime}</p>
            <p>{task.endTime}</p>
          </div>
        ))}
      </div>
    </>
  );
}
