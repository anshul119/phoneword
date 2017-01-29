let keyMap = [
	[''],
	[''],
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
	['m', 'n', 'o'],
	['p', 'q', 'r', 's'],
	['t', 'u', 'v'],
	['w', 'x', 'y', 'z']
]

export function getMatches(number, dictionary) {
	if(dictionary === true) {
		return dictionaryMatches(number)
	} else {
		return getAllMatches(number)
	}
}

export function getAllMatches(number) {
	let letters = [],
		numberArray = number.toString().split(''),
		cursor = 0,
		currentWord = '',
		limit = numberArray.length,
		result = []

	numberArray.map(number => {
		letters.push(keyMap[number])
	})

	return makeWords(letters, cursor, currentWord, limit, result)
}

function makeWords(letters, cursor, currentWord, limit, result) {
	if (cursor === limit) {
		result.push(currentWord)
	}
	else {
		letters[cursor].map(letter => {
			let nextWord = currentWord + letter
			makeWords(letters, cursor + 1, nextWord, limit, result)
		})
	}

	return result
}

function dictionaryMatches(number) {
	let allMatches = getAllMatches(number);
	//logic for getting all meaningful matches
	return allMatches
}