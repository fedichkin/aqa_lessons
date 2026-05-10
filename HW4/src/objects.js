const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    engine: {
        type: 'Petrol',
        horsepower: 203,
        volume: 2.5
    },
    features: ['Heated seats', 'Cruise control', 'Lane assist'],
    describe() {
        console.log(`${this.year} ${this.brand} ${this.model}`);
        console.log(`Engine: ${this.engine.type}, ${this.engine.volume}L, ${this.engine.horsepower}hp`);
        console.log('Features:');
        this.features.forEach((feature) => console.log(` - ${feature}`));
    }
};

car.describe();
