export default function getStudentsByLocation(studentparam, cityparam) {
  if (!Array.isArray(studentparam) || typeof cityparam !== 'string') {
    return [];
  }
  return studentparam.filter((each) => each.location === cityparam);
}
