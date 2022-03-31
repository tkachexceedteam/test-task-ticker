import { useEffect, useRef, useState } from "react";
import { getTextMultiplier } from "../../helpers";
import Keyframes from "../Keyframes";
import "./style.scss";

const TickerOutput = (props) => {
  const {
    text = "Example text.",
    width = "100%",
    height = "2em",
    animationDuration = 10000,
    animationTimingFunction = "linear",
    revers = false,
    verticalOrientation = false,
    fulfill = false,
    wrap = false,
  } = props;
  const textRef = useRef(null);
  const wholeOutputRef = useRef(null);
  const stringRef = useRef(null);

  const [arrayOfText, setArrayOfText] = useState([text]);
  const [textWidth, setTextWidth] = useState(0);
  const [stringWidth, setStringWidth] = useState(0);
  const [wholeOutputWidth, setWholeOutputWidth] = useState(0);

  useEffect(() => {
    if (fulfill)
      setArrayOfText(
        new Array(getTextMultiplier(textRef, wholeOutputRef)).fill(text)
      );
  }, [text, width, fulfill]);

  useEffect(() => {
    if (textRef?.current?.offsetWidth > 0)
      setTextWidth(textRef.current.offsetWidth);
    if (stringRef?.current?.offsetWidth > 0)
      setStringWidth(stringRef.current.offsetWidth);
    if (wholeOutputRef?.current?.offsetWidth > 0)
      setWholeOutputWidth(wholeOutputRef.current.offsetWidth);
    console.log({
      T: textRef?.current?.offsetWidth,
      S: stringRef?.current?.offsetWidth,
      W: wholeOutputRef?.current?.offsetWidth,
    });
  }, [props, arrayOfText]);

  const textExpander = () => {
    return (
      arrayOfText.length &&
      arrayOfText.map((text, index) => {
        return <span key={index}>{text.trim() + " "}</span>;
      })
    );
  };

  const getAnimationStart = () => {
    return revers ? -stringWidth : wholeOutputWidth;
  };

  const getAnimationEnd = () => {
    if (fulfill || stringWidth > wholeOutputWidth) {
      return revers ? stringWidth : -(2 * stringWidth - wholeOutputWidth);
    }
    return revers ? 2 * wholeOutputWidth - stringWidth : -wholeOutputWidth;
  };

  const getStringStyle = (isOriginal) => {
    const style = {};
    style.position = isOriginal ? "relative" : "absolute";
    style.whiteSpace = wrap ? "normal" : "pre";
    style.animationTimingFunction = animationTimingFunction;
    style.animationDuration = `${animationDuration}ms`;
    if (!isOriginal) style.animationDelay = `${animationDuration / 2}ms`;

    return style;
  };

  return (
    <div
      style={{ width, height }}
      ref={wholeOutputRef}
      className="ticker-output"
    >
      <Keyframes
        name="ticker"
        from={{ left: `${getAnimationStart()}px` }}
        to={{ left: `${getAnimationEnd()}px` }}
      />

      <div
        ref={stringRef}
        style={getStringStyle(false)}
        className="ticker-string"
      >
        <span ref={textRef}>{text.trim() + " "}</span>
        {fulfill && arrayOfText.length > 0 && textExpander()}
      </div>

      <div style={getStringStyle(true)} className="ticker-string">
        <span>{text.trim() + " "}</span>
        {fulfill && arrayOfText.length > 0 && textExpander()}
      </div>
    </div>
  );
};

export default TickerOutput;
