import React, { useEffect, useRef, useState } from "react";
import "./todaysDeal.css";
import Dealcards from "../Dealcards/Dealcards";

const TodaysDeal = (props) => {
  const Ref = useRef(null);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    setSeconds(Math.floor((total / 1000) % 60));
    setMinutes(Math.floor((total / 1000 / 60) % 60));
    setHours(Math.floor((total / 1000 / 60 / 60) % 24));
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
  };

  const clearTimer = (e) => {
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const today = new Date();
    let deadline = new Date();
    deadline.setHours(deadline.getHours() + (23 - deadline.getHours()));
    deadline.setMinutes(deadline.getMinutes() + (60 - deadline.getMinutes()));
    deadline.setSeconds(deadline.getSeconds() + (60 - deadline.getSeconds()));

    return deadline;
  };

  useEffect(() => {
    onClickReset();
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <>
      <div className="title">
        <p className="todaysdeal">{props.title}</p>
        {props.isEnd ? (
          <p className="endsin">
            Ends in <span>{hours > 9 ? hours : "0" + hours}</span>
            <span>{minutes > 9 ? minutes : "0" + minutes}</span>
            <span>{seconds > 9 ? seconds : "0" + seconds}</span>
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="deal-cards">
        {props.deals?.map((deal) => (
          <Dealcards deall={deal} />
        ))}
      </div>
    </>
  );
};

export default TodaysDeal;
