function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const data = {
        status: 200,
        body: "Success",
      };
      resolve(data);
    } else if (success === false) {
      reject(new Error("The fake API is not working currently"));
    }
  }, 5000);
}

export default getFullResponseFromAPI;
