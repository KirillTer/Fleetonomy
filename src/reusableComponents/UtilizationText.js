import Box from "./Box";

const UtilizationText = ({ available, regularRides, carpool }) => {
  return (
    <Box leftTitle="UTILIZATION TEXT">
      <div>Available: {available}</div>
      <div>Regular Rides: {regularRides}</div>
      <div>Carpool: {carpool}</div>
    </Box>
  );
};

export default UtilizationText;