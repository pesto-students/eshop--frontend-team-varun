import React, { useEffect, useRef, useState } from "react";
import "./todaysDeal.css";
import Dealcards from "../Dealcards/Dealcards";
<<<<<<< HEAD
// import { products, Products } from "../../localFiles/ProductsFile";
=======
import SectionHeader from "../SectionHeader/SectionHeader";
import { products } from "../../localFiles/ProductsFile";
>>>>>>> 4d61efe2e173e39aa1eef724b9d7cec74cffaf2f

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
    getTimeRemaining(e);
  };

  const clearTimer = (e) => {
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
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
    <div className="todays-deal">
      <div className="todays-deal-header d-flex align-items-center justify-content-between mt-5 mb-4">
        <SectionHeader title={props.title}/>
        {props.isEnd ? (          
          <p className="todays-deal-endsin">
            Ends in <span>{hours > 9 ? hours : "0" + hours}</span> :
            <span>{minutes > 9 ? minutes : "0" + minutes}</span> :
            <span>{seconds > 9 ? seconds : "0" + seconds}</span>
          </p>                  
        ) : (
          <></>
        )}
      </div>
      <div className="deal-cards px-5">
        {products.map((deal) => (
          <Dealcards deall={deal} />
        ))}
      </div>
    </div>
  );
};

export default TodaysDeal;
