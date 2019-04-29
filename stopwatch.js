function Stopwatch() {
  let startTime,
    endTime,
    running = false,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    },
    set: function(value) {
      duration = value;
    }
  });

  Object.defineProperty(this, "startTime", {
    get: function() {
      return startTime;
    },
    set: function(value) {
      startTime = value;
    }
  });

  Object.defineProperty(this, "endTime", {
    get: function() {
      return endTime;
    },
    set: function(value) {
      endTime = value;
    }
  });

  Object.defineProperty(this, "running", {
    get: function() {
      return running;
    },
    set: function(value) {
      running = value;
    }
  });
}

Stopwatch.prototype.start = function() {
  console.log("started");

  if (this.running) throw new Error("stopwatch is already running");

  this.running = true;
  this.startTime = new Date();
};
Stopwatch.prototype.stop = function() {
  if (!this.running) throw new Error("stopwatch is not started");

  this.running = false;

  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
  this.startTime = null;
  this.endTime = null;
  this.duration = 0;
  this.running = false;
};

const sw = new Stopwatch();

// Mosh 1
// function Stopwatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;

//   this.start = function() {
//     if (running) throw new Error("Stopwatch has already started.");

//     running = true;

//     startTime = new Date();
//   };

//   this.stop = function() {
//     if (!running) throw new Error("Stopwatch is not started.");

//     running = false;

//     endTime = new Date();

//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };

//   this.reset = function() {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };

//   Object.defineProperty(this, "duration", {
//     get: function() {
//       return duration;
//     }
//   });
// }
