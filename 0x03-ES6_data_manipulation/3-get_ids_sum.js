export default function getStudentIdsSum(param) {
  if (!Array.isArray(param)) {
    return [];
  }
  return param.reduce((prev, current) => prev + current.id, 0);
}
