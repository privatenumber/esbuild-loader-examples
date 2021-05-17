console.log(1 ** 1);
(async () => {});
const y = {};
const {...z} = {...y};
try {
	throw new Error();
} catch {}
console.log(y?.d, y?.d ?? '');
