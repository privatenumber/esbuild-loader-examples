// Exponentiation operator
console.log(10 ** 2);

// Async functions
(async () => {
	console.log('async function');
});

// Spread properties
const y = {
	a: 1,
	b: 2,
	c: 3,
};

const x = {
	...y,
};

// Rest properties
const { ...z } = y;

// Optional catch binding
try {
	throw new Error();
} catch {}

// Optional chaining
console.log(y?.d);

// Nullish coalescing
console.log(y?.d ?? 'e');

// import.meta
console.log(import.meta);

// Class instance fields
class ClassA {
	x = 1;
}

// Static class fields
class ClassB {
	static x = 1;
}

// Private instance methods
class ClassC {
	#x() {}
}

// Private instance fields
class ClassD {
	#x = 1;
}

// Private static methods
class ClassE {
	static #x() {}
}

// Private static fields
class ClassF {
	static #x = 1;
}

// Logical assignment operators
let a;
a ??= 1;
