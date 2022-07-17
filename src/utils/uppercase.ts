export function toUpperCase(obj: any) {
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            obj[key] = obj[key].toUpperCase();
        }
    }
    return obj;
}
