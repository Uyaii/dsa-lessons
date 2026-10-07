# RoadMap

## Phase 1

- [x] Build app skeleton
- [x] Create tenants table and api keys table
- [x] post(register route) to create tenants and issue them api keys. Login route also
- [ ]

### Phase 1 Breakdown

**Tenants Table**: id, org-name, email, API-key (id in API keys table), created-at

**API Keys**: id, tenant-id,tenant-key, is-active, created-at

interface Tenant {
id: uuid,
org-name: string,
email: string,
api-key: string
created-at: timestamp
}

interface API-Keys{
id: uuid
tenant-id: uuid
tenant-key: string
is-active:boolean
created-at: timestamp
}

# Learnings

1. `tsx` is the one to install not `ts-node` because ts-node is incompatible with your current TypeScript version and ESM setup ("module": "nodenext").
2. i had an issue with the tables, i wanted to store the tenant's api keys in the main tenants table which wouldnt make sense because a tenant could have more than 1 key and to store than in the tenant table is weird, instead its better to store them in the api-keys table and just used the `tenant-id` to show who owns each key.
3. `await` fixed a type problem in bcrypt:
   What Happened Without await (Image 1)

   bcrypt.hash(password, saltRounds) returned a pending `Promise<string>`.

   You assigned that Promise directly to hashedPassword.

   You then passed hashedPassword into newTenant under the password property.

   Your Tenants interface expects password: string.

   TypeScript threw an error because a `Promise<string>` (a pending JavaScript object) is not the actual hashed string itself.

Why await Fixed It (Image 2)

Adding await tells JavaScript to pause execution at that line until the hashing process finishes, unwrap the Promise, and extract the resolved value.

    Without await: hashedPassword = Promise { <pending> } (Type: Promise<string>)

    With await: hashedPassword = "$2b$10$e8..." (Type: string)

Because hashedPassword became a pure string, it matched the password: string property in your Tenants interface perfectly.

To generate jwt secret:
`node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

## Short Javascript Classes Lesson

- Constructor functions are javascript's way of creating blueprints for objects
- The `new` keyword is what turns an ordinary javascript function into a constructor

```js
const personConstructor = (name, age) => {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello I am ${this.name} and I am ${this.age} years old`);
  };
};

const newPerson = new personConstructor("uyai", 24);
console.log(newPerson);
```

- The `personConstructor` function alone doesn't constitute a constructor but the last line creating a new person now makes it a constructor because it is being used as a blueprint to create a new person object.
- The `this` keyword is the object's way of refering to itself

```js
class Time {
  // Create a regular method:
  hourNow = function () {
    return new Date().getHours();
  };
  // Create a shorthand method:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Create a new object instance:
const currentTime = new Time();

// Check currentTime's content:
console.log(currentTime);
```

- Basically the regular function declaration attaches that method to every new instance created and in this case the `currentTime` instance but the shorthand declaration doesn't attach the `minutesNow` method to the `currentTime` instance instead it attaches it to the class's `prototype` property.
- To access the `minutesNow` method you go like this:

```js
// Check Time's prototype content:
console.log(Time.prototype);

// The invocation above will return:
{...}:
  constructor: class Time {}
  minutesNow: function minutesNow()
  [[Prototype]]: Object {...}

```

- So basically like I was reading from the old article, i think the shorthand is to reduce memory usage, because if you use the regular expression, that method will be appended to every instance and you might not even use all so it's pointless. But the shorthand allows you to create instances without attaching the method immediately but you can still access it

```js
class Time {
  minutesNow() {
    return new Date().getMinutes();
  }
  hoursNow = function () {
    return new Date().getHours();
  };
}

const currentTime = new Time();

console.log(currentTime); //result ==> empty object
console.log(currentTime.minutesNow());
console.log(currentTime.hoursNow());
```

### The Constructor Method in JS Classes

They're the default method that comes with every JS class. And they're also used to pass any parameters that will be needed in the class

```js
class Worker {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

const developer = new Worker("Anne", "backend engineer");
```

```js
class CarColor {
  constructor(color: string) {
    this.color = color;
  }
  revealColor() {
    console.log(`car color is ${this.color}`);
  }
}
const newCar = new CarColor("pink");
newCar.revealColor();

```

- A class can only have 1 `constructor` and it can inly be defined using the shorthand method `constructor(){}`

- **3 types of class fields:**
  - Public
  - Private
  - Static
- A **Public Class Field** is a property an object instance has access to

```js
class Name {
  myName = "Uyai"; // public class field

  updateName(name) {
    console.log(`my name is now ${name}`);
  }
}

const author = new Name();

console.log(author.myName);
```

- A **Private Class Field** is a property that can only be accessed and modified in the class body. You can just assign the private class value to a public class field to access it outside the class
- A private class field is denoted like this `#age` 

```js
class Parent{
  #age = 50

  publicAge = #age

  showAge (){
  console.log(`age is ${50}`)
  }

}

const dad = new Parent()
console.log(dad.showAge())
```
- Please note that private class fields cannot be redeclared in the same class body
- A **Static Class Field** is a property you can only access and modify directly from the class itself
```js
class Person {
  static myName = "Uyai";
}

const newPerson = new Person();
console.log(newPerson.myName); //this wont work because myName isnt accessible to the instance
console.log(Person.myName);
```

- **3 types of javascript classes:**
  - Class declaration
  - Class expression
  - Derived class
- **Class Declaration**: `class Name{}`
- **Class Expression**: `const classExpression = class Name{}`
- **Derived Class**: This is a class that extends the existing public and static features of an existing class `class Worker extends Person{}`. A derived class cannot inherit the private features of it's parent class

```js
class Worker extends Person {}
console.log(Worker.myName);
```

-The **Super** keyword searches a parent class for a specified static and prototypal property

```js
class Artist {
  constructor(name: string) {
    this.name = name;
  }
}

class Kpop extends Artist {
  constructor(firstName: string) {
    super(firstName);
  }
}

const bts = new Kpop("Namjoon");
console.log(bts);


```