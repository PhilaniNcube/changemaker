export const range = (start: number, end?: number): number[] => {
	const output: number[] = [];
	let actualStart = start;
	let actualEnd = end;

	if (typeof actualEnd === "undefined") {
		actualEnd = start;
		actualStart = 0;
	}

	for (let i = actualStart; i < actualEnd; i += 1) {
		output.push(i);
	}

	return output;
};
