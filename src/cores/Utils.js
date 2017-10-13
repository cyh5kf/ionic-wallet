//bitcoin 2 satoshi
function B2S(value) {
    return parseInt((value * 100000000).toFixed(0));
}
//satoshi 2 bitcoin
function S2B(value) {
    return (value / 100000000).toFixed(8);
}
export default {
    formate: {
        B2S: B2S,
        S2B: S2B
    }
}