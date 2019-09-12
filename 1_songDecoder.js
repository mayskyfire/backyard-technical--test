function stringDecoder(song){
    return song.replace(/WUB/g, " ").replace(/\s{2,}/g, " ").trim()
}

console.log(stringDecoder("AWUBBWUBC"))
console.log(stringDecoder("AWUBWUBWUBBWUBWUBWUBC"))
console.log(stringDecoder("WUBAWUBBWUBCWUB"))