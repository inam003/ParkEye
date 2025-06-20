export const getDashboardData = async () => {
  const response = await fetch(
    "https://api2.ngbs.co.uk/api/Transaction/GetDashboardData"
  );

  return response.json();
};
