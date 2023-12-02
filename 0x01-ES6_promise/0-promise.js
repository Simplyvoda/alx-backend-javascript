function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        const data = { message: "This is the response" };
        resolve(data);
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 2000);
  });
}

export default getResponseFromAPI;
