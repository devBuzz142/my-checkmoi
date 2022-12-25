export const getElemLeftIntoInnerWindow = (
  elemLeft: number,
  elemWidth: number,
): number => {
  const innerLeft =
    elemLeft < 0
      ? 0
      : elemLeft + elemWidth <= window.innerWidth
      ? elemLeft
      : window.innerWidth - elemWidth;

  return innerLeft;
};

export const getElemTopIntoInnerWindow = (
  elemTop: number,
  elemHeight: number,
): number => {
  const innerTop =
    elemTop < 0
      ? 0
      : elemTop + elemHeight <= window.innerHeight
      ? elemTop
      : window.innerHeight - elemHeight;

  return innerTop;
};

export const getElemIntoInnerWindow = (
  elemLeft: number,
  elemWidth: number,
  elemTop: number,
  elemHeight: number,
): [number, number] => {
  const innerLeft = getElemLeftIntoInnerWindow(elemLeft, elemWidth);
  const innerTop = getElemTopIntoInnerWindow(elemTop, elemHeight);

  return [innerLeft, innerTop];
};
