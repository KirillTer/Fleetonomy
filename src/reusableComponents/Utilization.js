import Box from "./Box";
import CarIcon from "../CarIcon";

const UtilizationChart = ({ title, color, amount, percentage }) => {
  return (
    <div class="utilization-stat">
      <div class="title">{title}</div>
      <div class="inner-items">
        <div class="icon-wrapper">
          <CarIcon color={color} />
        </div>
        <div class="progress-background">
          <div
            class="progress-actual"
            style={{ width: `${percentage * 100}%`, backgroundColor: color }}
          />
        </div>
        <div class="amount">{amount}</div>
      </div>
    </div>
  );
};

const Utilization = ({ available, regularRides, carpool }) => {
  const total = available + regularRides + carpool;
  return (
    <Box leftTitle={`UTILIZATION (${total})`}>
      <UtilizationChart
        title="Available"
        color="#5eebc8"
        amount={available}
        percentage={available / total}
      />
      <UtilizationChart
        title="Regular Rides"
        color="#0cadfe"
        amount={regularRides}
        percentage={regularRides / total}
      />
      <UtilizationChart
        title="Carpool"
        color="#b27cf9"
        amount={carpool}
        percentage={carpool / total}
      />
    </Box>
  );
};

export default Utilization;