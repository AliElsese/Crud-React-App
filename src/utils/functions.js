export function textSlicer(text, max = 50) {
    if(text.length >= max) {
        return `${text.slice(0, max)}...`;
    }
    else {
        return text;
    }
}