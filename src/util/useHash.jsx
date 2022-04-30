import { sha256 } from "js-sha256"

function useHash(date) {
    const hashed = sha256(date);
    const hashedNumber = hashed.split('').filter(char => /[0-9]/.test(char)).join('');

    const length = parseInt(hashedNumber.length / 5);

    const colors = ["red", "green", "purple", "white", "brown"];
    let arr = [];
    const nums = hashedNumber.split('').map(item => parseInt(item));

    let index = 0;
    for(var i = 0; i < 5; i++) {
        let arr2 = []
        for(var j = 0; j < length; j++) {
            arr2.push(nums[index]);
            index++;
        }
        arr.push(arr2);
    }
    
    arr = arr.map((item) => {
        const num = Number(item.join(""));

        return colors[num % 5];
    });

    return arr;
}

export default useHash;