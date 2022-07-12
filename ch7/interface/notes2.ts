interface Dog {
  run(): void;
  getStatus(): {
    runningSpeed: number;
  };
}

interface Bird {
  fly(): void;
  getStatus(): {
    flightSpeed: number;
  };
}

interface DogBird extends Dog, Bird {
  getStatus(): {
    runningSpeed: number;
    flightSpeed: number;
  };
}

class newAnimal implements DogBird {
  run(): void {}
  fly(): void {}

  getStatus(): { runningSpeed: number; flightSpeed: number } {
    return {
      runningSpeed: 10,
      flightSpeed: 20,
    };
  }
}
