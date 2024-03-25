export const getStatusColor = (
  outstandingBalance: number,
  rent_amount: number
) => {
  let statusColor = "";

  const percentageOutstanding = (outstandingBalance / rent_amount) * 100;

  if (percentageOutstanding > 100) {
    statusColor = "red";
  } else if (percentageOutstanding >= 75) {
    statusColor = "darkred";
  } else if (percentageOutstanding >= 50) {
    statusColor = "darkorange";
  } else if (percentageOutstanding >= 25) {
    statusColor = "orange";
  } else if (percentageOutstanding > 0) {
    statusColor = "goldenrod";
  } else if (percentageOutstanding === 0) {
    statusColor = "green";
  } else {
    statusColor = "purple";
  }

  return statusColor;
};

export const getCurrentStatusColor = (paid: number, rent_amount: number) => {
  let statusColor = "";

  const percentagePaid = (paid / rent_amount) * 100;

  if (paid === 0) {
    statusColor = "gray";
  } else if (percentagePaid > 0 && percentagePaid < 25) {
    statusColor = "red";
  } else if (percentagePaid >= 25 && percentagePaid < 50) {
    statusColor = "darkorange";
  } else if (percentagePaid >= 50 && percentagePaid < 75) {
    statusColor = "goldenrod";
  } else if (percentagePaid >= 75 && percentagePaid < 100) {
    statusColor = "yellowgreen";
  } else if (percentagePaid === 100) {
    statusColor = "green";
  } else if (percentagePaid > 100) {
    statusColor = "purple";
  }
  return statusColor;
};
