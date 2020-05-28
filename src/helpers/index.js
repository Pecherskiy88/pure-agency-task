export const makeTotalAmount = (
  employmentValue,
  multiplier,
  filingStatusData,
) => {
  const checkedStatusCount = Object.values(filingStatusData).filter(
    (el) => el === true,
  ).length;

  let singleStatusValue = 0;

  if (checkedStatusCount === 1) {
    singleStatusValue = 10;
  } else if (checkedStatusCount > 1) {
    singleStatusValue = 5;
  } else if (checkedStatusCount < 1) {
    singleStatusValue = 0;
  }

  let totalAmountOfCheckedStatuses = 0;

  if (singleStatusValue !== 0) {
    totalAmountOfCheckedStatuses = singleStatusValue * checkedStatusCount;
  }

  const totalAmount =
    multiplier !== 0 && employmentValue === 30
      ? (employmentValue + totalAmountOfCheckedStatuses) * multiplier
      : employmentValue + totalAmountOfCheckedStatuses;

  return totalAmount;
};
