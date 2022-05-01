const findFrequency = (arr = []) => {
    const map = {};
    for (let i = 0; i < arr.length; i++){
        const el = arr[i];
        if(map.hasOwnProperty(el)){
            map[el]++;
        } else {
            map[el] = 1;
        };
    };
   return map;
};

function useMatch(turd, guess) {
    let arr = [0, 0, 0, 0, 0];
    const turdFreq = findFrequency(turd);
    const guessFreq = findFrequency(guess);


    for(let i = 0; i < turd.length; i++) {
        let el = turd[i];
        if(el == guess[i]) {
            arr[i] = 2;
            turdFreq[el] -= 1;
            guessFreq[guess[i]] -= 1;
        } else if(guess.includes(el)) {
            arr[i] = 1;
            turdFreq[el] -= 1;
            guessFreq[guess[guess.indexOf(el)]] -= 1;
        } else {
            arr[i] = 0;
        }
    }

    return arr;
}

export default useMatch