//object using object literal
const person1 = { 
    name: 'Ram',
    age: 22,
    subject: ['math', 'science', 'english'],
    message: function() {
        console.log('meow meow.');
    },
    address: {
        city: 'lalitpur',
        street: 'sanepa',
        housenumber: 12343
    }
};

// object using instance of an object directly
const person2 = new Object ( { 
    name: 'Shyam',
    age: 20,
    subjects: ['math', 'science', 'english'],
    message: function() {
        console.log('woof woof.');
    },
    address: {
        city: 'Kathmandu',
        street: 'baneswor',
        housenumber: 34565
    }
} 
);

// program to create JavaScript object using Constructor Function

function Person3() {
    this.name = 'Hari',
    this.age = 20,
    this.subject = ['math', 'science', 'english'],
    this.message = function() {
        console.log('oink oink.');
    },
    this.address = {
        city: 'Kathmandu',
        street: 'baneswor',
        housenumber: 34565
    }

}

const person = new Person3();
