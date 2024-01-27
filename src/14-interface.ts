// Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members.
// Interface is like a blueprint of a entity

// Derived class define the members. It often helps in providing a standard structure that the deriving classes would follow.

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

// Derived class implements above interface
// Derived classes can contains more properties than defined in interface but cannot have less properties or go against type set by interface
class Youtube implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createYtShort(): void {
        console.log("YT Short was created");

    }
}
