export const getTextMultiplier = (textRef, wholeOutputRef) => {
  if (
    textRef.current &&
    wholeOutputRef.current &&
    textRef.current.offsetWidth !== 0 &&
    wholeOutputRef.current.offsetWidth !== 0
  ) {
    if (wholeOutputRef.current.offsetWidth <= textRef.current.offsetWidth)
      return 0;
    return Math.round(
      wholeOutputRef.current.offsetWidth / textRef.current.offsetWidth - 1
    );
  }
};
