export default class Form {

    static setFields(fields) {
        const form = new FormData();

        Object.keys(fields).forEach(function (key) {
            form.append(key, fields[key]);
        });

        return form;
    }
}