const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Database connected successfully");
      resolve(); // Resolves the promise after 1 second
    }, 1000);
  });
};

export default connectToDatabase;
