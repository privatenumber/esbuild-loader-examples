const fs = require('fs');
const path = require('path');
const commentMark = require('comment-mark');

const examplesDirPath = path.resolve('./examples');
const examples = fs.readdirSync(examplesDirPath)
	.filter(directoryName => !directoryName.startsWith('.'))
	.map(directoryName => {
		const directoryPath = path.join(examplesDirPath, directoryName);
		return {
			directoryPath,
			pkgJson: require(path.join(directoryPath, 'package.json')),
		};
	});


function updateExamplesIndex() {
	let mdStr = fs.readFileSync('./README.md');

	mdStr = commentMark(mdStr, {
		examples: examples
			.map(({ pkgJson }) => `- [**${pkgJson.name}**](./examples/${pkgJson.name}) ${pkgJson.description}`)
			.join('\n'),
	});

	fs.writeFileSync('./README.md', mdStr);
}


function updateExampleReadmes() {
	for (const { directoryPath, pkgJson } of examples) {
		const readmePath = path.join(directoryPath, 'README.md');

		let mdStr = fs.readFileSync(readmePath);

		mdStr = commentMark(mdStr, {
			name: pkgJson.name,
			description: pkgJson.description,
			commands: Object.keys(pkgJson.scripts).map((key) => `- \`npm run ${key}\``).sort().join('\n'),
		});

		fs.writeFileSync(readmePath, mdStr);
	}
}

updateExamplesIndex();
updateExampleReadmes();
