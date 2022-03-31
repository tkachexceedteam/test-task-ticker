import { useState } from "react";
import "./style.scss";
import TickerInput from "../../components/TickerInput";
import TickerOutput from "../../components/TickerOutput";

const Ticker = () => {
  const initValues = {
    text: "Extra looooooooooooooooooooooooooooooooooooooooooooooooooong text.",
    width: "50%",
    height: "",
    animationDuration: 10000,
    animationTimingFunction: "linear",
    revers: false,
    verticalOrientation: false,
    fulfill: false,
    wrap: false,
  };
  const [inputValues, setInputValues] = useState(initValues);
  const {
    text,
    height,
    width,
    animationDuration,
    animationTimingFunction,
    revers,
    fulfill,
    wrap,
    verticalOrientation,
  } = inputValues;

  const inputChangeHandler = (values) => {
    setInputValues(values);
  };

  return (
    <div className="ticker-container">
      <TickerOutput
        text={text}
        width={width}
        height={height}
        animationDuration={animationDuration}
        animationTimingFunction={animationTimingFunction}
        revers={revers}
        fulfill={fulfill}
        wrap={wrap}
        verticalOrientation={verticalOrientation}
      />
      <TickerInput inputValues={inputValues} onInputChange={inputChangeHandler} />
    </div>
  );
};

export default Ticker;
