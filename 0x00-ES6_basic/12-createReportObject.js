export default function createReportObject(employeesList) {
  const newObject = {
    allEmployees: employeesList,
    getNumberOfDepartments(allEmployees) {
      return Object.keys(allEmployees).length;
    },
  };
  return newObject;
}
