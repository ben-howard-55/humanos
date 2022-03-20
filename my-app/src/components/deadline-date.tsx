import { deadline, deadlines } from "../types/deadline_types";

interface props {
  date: string;
  deadlines: deadlines;
}

export const DeadlineDate = ({ date, deadlines }: props) => {
  return (
    <div>
      <h1>{date}</h1>
      <ul>
        {deadlines.deadlines.map((dl) => (
          <li key={dl.id}>{dl.title}</li>
        ))}
      </ul>
    </div>
  );
};
