export default class LocalStorage {
    static setValue(key, value) {
        return localStorage.setItem(key, value);
    }

    static getValue(key) {
        return localStorage.getItem(key);
    }

    static removeValue(key) {
        return localStorage.removeItem(key);
    }
}