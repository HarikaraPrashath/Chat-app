export  function extractTime(dataString){
    const data = new Date(dataString);
    const hours = padZero(data.getHours());
    const minutes = padZero(data.getMinutes());
    return `${hours}:${minutes}`
}

//helper function to pad single-digit numbers with a leading zero

function padZero(numbers){
    return numbers.toString().padStart(2,"0");
}