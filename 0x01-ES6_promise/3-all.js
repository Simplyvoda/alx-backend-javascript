import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((res) => {
      const [user, photo] = res;
      const newObj = {
        ...user,
        ...photo,
      };
      console.log(newObj.body, newObj.firstName, newObj.lastName);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
