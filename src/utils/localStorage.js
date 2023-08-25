export function setValue(key, value){
    return localStorage.setItem(key, value);
}

export function getValue(key){
    return localStorage.getItem(key);
}

export function removeValue(key){
    return localStorage.removeItem(key);
}