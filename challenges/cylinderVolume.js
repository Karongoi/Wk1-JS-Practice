class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

// Example usage
const cylinder = new Cylinder(3, 5);
console.log(`Cylinder Volume: ${cylinder.getVolume()}`);
