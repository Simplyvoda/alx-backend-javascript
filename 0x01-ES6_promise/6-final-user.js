import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const result = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);

  return result.map((promiseResult) => ({
    status: promiseResult.status,
    value: promiseResult.status === 'fulfilled' ? promiseResult.value : promiseResult.reason,
  }));
}

export default handleProfileSignup;
