
const apiRequest = () => new Promise((resolve, reject) => {
  const data = {
    someData: [0, 1, 2, 3]
  };

  setTimeout(() => {
    resolve(data);
  }, 3000);
});

export {
  apiRequest
};