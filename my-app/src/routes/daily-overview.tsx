import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function DailyOverview() {
  const [date, setdate] = useState("20032022");

  // let navigate = useNavigate();
  // navigate(`/dailyoverview/${date}`);

    return (
      <>
        <div>
          <p>wake up at 6.30am</p>
          <Link to={`/dailyoverview/${date}`}>{date}</Link>
          <Outlet />
        </div>
      </>
    );
  }