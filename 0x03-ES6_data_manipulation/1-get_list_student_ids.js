export default function getListStudentIds(param) {
  if (!Array.isArray(param)) {
    return [];
  }
  return param.map((each) => each.id);
}
