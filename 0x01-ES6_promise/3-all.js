import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([createUser(), uploadPhoto()])
    .then((res) => {
      const [userRes, photoRes] = res;
      console.log(photoRes.body, userRes.firstName, userRes.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
