function createMap(str) {
    let map = {};

    for (let char of str) {
        if (map.hasOwnProperty(char)) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }

    return map;
}

function isAnagram(str1, str2) {
    if (str1.length === str2.length) {
        let str1Map = createMap(str1);
        let str2Map = createMap(str2);
        for (let char in str1Map) {
            if (str1Map[char] !== str2Map[char]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram("graa", "aagr"));