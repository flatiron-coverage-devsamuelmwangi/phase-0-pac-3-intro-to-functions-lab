// Receives a string argument and returns it in all caps
let shout = stringToConvertToUpperCase => {
	return stringToConvertToUpperCase.toUpperCase();
}

// Receives a string argument and returns it in all lowercase
let whisper = stringToConvertToLoverCase => {
	return stringToConvertToLoverCase.toLowerCase();
}

// Takes a string argument and logs it in all caps using console.log()
let logShout = stringToLog => {
	console.log(stringToLog.toUpperCase());
}

// Takes a string argument and logs it in all lowercase using console.log()
let logWhisper = stringToLog => {
	console.log(stringToLog.toLowerCase());
}

// Returns message according to hello message format
let sayHiToHeadphonedRoommate = helloMessageToRoommate => {
	return helloMessageToRoommate.toLowerCase() === helloMessageToRoommate ? "I can't hear you!"
         : helloMessageToRoommate.toUpperCase() === helloMessageToRoommate ? "YES INDEED!"
         : helloMessageToRoommate === "Let's have dinner together!" ? "I would love to!"
         : null ;
}
