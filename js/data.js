const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      console.log(startTime);
      console.log("идет время");
    }, 1000);
  },
};

timer.start();
