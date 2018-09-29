export function changeValue(e) {
    console.log(`worked`)
    return {
        type: `VALUE_CHANGED`,
        payload: e.target.value
    }
}