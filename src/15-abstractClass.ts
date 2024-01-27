// Abstract Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
// This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

// Abstract classes cannot be directly instantiated, as they do not have all their members implemented.

abstract class Video {
  constructor(
    public cameraMode: string, public filter: string
    ) {}

  abstract getValue(): void;

  getVideoTime(): number {
    //some complex calculation
    return 21;
  }
}

// getReelTime member not implemented
class Instagram extends Video {
  constructor(
    public cameraMode: string,
    public filter: string,
    // Addition property playbackSpeed 
    public playbackSpeed: number
  ) {
    super(cameraMode, filter);
  }

  getValue(): void {
    console.log("getValue");
  }
}

const obj2 = new Instagram("test", "test", 1);

obj2.getVideoTime();;