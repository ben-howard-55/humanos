import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DailyOverview() {
  const [date, setdate] = useState("20032022");

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
