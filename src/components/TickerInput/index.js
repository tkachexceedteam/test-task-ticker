import "./style.scss";

const TickerInput = ({ onInputChange, inputValues }) => {
  const {
    text,
    width,
    height,
    animationDuration,
    animationTimingFunction,
    revers,
    verticalOrientation,
    fulfill,
    wrap,
  } = inputValues;

  const inputChangeHandler = (e) => {
    e.stopPropagation();
    onInputChange({ ...inputValues, [e.target.name]: e.target.value });
  };

  const booleanChangeHandler = (e) => {
    onInputChange({
      ...inputValues,
      [e.target.name]: !inputValues[e.target.name],
    });
  };

  return (
    <div className="ticker-input">
      <div>
        <div>
          <label htmlFor="text">Text</label>
          <input
            onChange={inputChangeHandler}
            placeholder="Please enter the text"
            type="text"
            id="text"
            name="text"
            value={text}
          />
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={inputChangeHandler}
            placeholder="Use css metrics"
            type="text"
            id="width"
            name="width"
            value={width}
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={inputChangeHandler}
            placeholder="Use css metrics"
            type="text"
            id="height"
            name="height"
            value={height}
          />
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="animationDuration">Animation duration (ms)</label>
          <input
            onChange={inputChangeHandler}
            placeholder="milliseconds"
            type="number"
            step={1000}
            id="animationDuration"
            name="animationDuration"
            value={animationDuration}
          />
        </div>
      </div>

      <div>
        <div>
          <label className="button">
            <input
              type="checkbox"
              name="revers"
              onChange={booleanChangeHandler}
              checked={revers}
            />
            <span>Reverse direction</span>
          </label>
          {/*<button name="verticalOrientation" onClick={booleanChangeHandler}>*/}
          {/*  Toggle move orientation*/}
          {/*  <input*/}
          {/*    type="checkbox"*/}
          {/*    name="verticalOrientation"*/}
          {/*    onClick={inputChangeHandler}*/}
          {/*value={verticalOrientation}*/}
          {/*  />*/}
          {/*</button>*/}
          <label className="button">
            <input
              type="checkbox"
              name="fulfill"
              onChange={booleanChangeHandler}
              checked={fulfill}
            />
            Fulfill
          </label>
          {/*<label className="button">*/}
          {/*  <input*/}
          {/*    type="checkbox"*/}
          {/*    checked={wrap}*/}
          {/*    name="wrap"*/}
          {/*    onChange={booleanChangeHandler}*/}
          {/*  />*/}
          {/*  Wrapping*/}
          {/*</label>*/}
        </div>
      </div>
    </div>
  );
};

export default TickerInput;
