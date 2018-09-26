let path = require('path')

export default {
    filterSet(values) {
        if (values.has(undefined)) {
            values.delete(undefined);
        }
        if (values.has(null)) {
            values.delete(null);
        }
        if (values.has(NaN)) {
            values.delete(NaN);
        }
        return values;
    },

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    },

    renamePropertyByClone(target, oldName, newName) {
        // rename property
        // in order to keep the sequence of property, create clone object,
        // and then popup the event to parent to update the entire object
        let clone = {};
        for (let key in target) {
            if (key === oldName) clone[newName] = target[key];
            else clone[key] = target[key];
        }
        return clone;
    },

    renamePropertyByDelete(target, oldName, newName) {
        // rename property by deleting old name and copy it
        // to a new property. the property will be added
        // to the end of object
        target = target || {};
        if (target.hasOwnProperty(oldName)) {
            target[newName] = target[oldName];
            delete target[oldName];
        }
        return target;
    },

    empty(v) {
        let type = typeof v;
        if (type === 'undefined') {
            return true;
        }
        if (type === 'boolean') {
            return !v;
        }
        if (v === null) {
            return true;
        }
        if (v === undefined) {
            return true;
        }
        if (v instanceof Array) {
            if (v.length < 1) {
                return true;
            }
        }
        else if (type === 'string') {
            if (v.length < 1) {
                return true;
            }
        }
        else if (type === 'object') {
            if (Object.keys(v).length < 1) {
                return true;
            }
        }
        // else if(type === 'number') {
        //     if(v===0) {
        //         return true;
        //     }
        // }
        return false;
    },

    * idGenerator() {
        let index = 0;
        while (true) {
            yield index++;
        }
    },

    trim(value, c) {
        if (this.empty(value)) return value;
        if (c == null || c == "") {
            let str = value.replace(/(^\s*)|(\s*$)/g, '');
            let rg = /\/s/;
            let i = str.length;
            while (rg.test(str.charAt(--i)));
            return str.slice(0, i + 1);
        }
        else {
            let rg = new RegExp("^" + c + "*");
            let str = value.replace(rg, '');
            rg = new RegExp(c);
            let i = str.length;
            while (rg.test(str.charAt(--i)));
            return str.slice(0, i + 1);
        }
    },

    trimStart(value, c) {
        if (c == null || c == "") {
            let str = value.replace(/^\/s*/, '');
            return str;
        }
        else {
            let rg = new RegExp("^" + c + "*");
            let str = value.replace(rg, '');
            return str;
        }
    },

    trimEnd(value, c) {
        if (c == null || c == "") {
            let str = value;
            let rg = /\/s/;
            let i = str.length;
            while (rg.test(str.charAt(--i)));
            return str.slice(0, i + 1);
        }
        else {
            let str = value;
            let rg = new RegExp(c);
            let i = str.length;
            while (rg.test(str.charAt(--i)));
            return str.slice(0, i + 1);
        }
    },

    arrayRemove(value, item) {
        if (value == null) return false;
        var a = value.indexOf(item);
        if (a >= 0) {
            value.splice(a, 1);
            return true;
        }
        return false;
    },

    removeEmptyKey(obj) {
        for (let [key, value] of Object.entries(obj)) {
            if (this.empty(value)) {
                delete obj[key];
            }
        }
    },

    platforms: {
        unknown: 'unknown',
        win32: 'win32',
        osx: 'osx',
        linux: 'linux'
    },

    releaseModes: {
        dev: 'development',
        prod: 'production'
    },

    releaseMode() {
        var mode = this.releaseModes.dev;
        if (process.env.NODE_ENV === this.releaseModes.dev) {
            mode = this.releaseModes.dev;
        } else if (process.env.NODE_ENV === this.releaseModes.prod) {
            mode = this.releaseModes.prod;
        }
        return mode;
    },

    platform() {
        var platform = this.platforms.unknown;
        if (process.platform === 'win32')
            platform = this.platforms.win32;
        else if (process.platform === 'darwin')
            platform = this.platforms.osx;

        return platform;
    },

    appFolder() {
        if (this.releaseMode() === this.releaseModes.dev) {
            return path.join(__dirname, '../../');
        }

        var index = __dirname.lastIndexOf('.asar');
        if (index > 0) {
            return __dirname.substr(0, index + 5);
        }

        return path.join(__dirname, '../../');
    },

    rootFolder() {
        if (this.releaseMode() === this.releaseModes.dev) {
            return path.join(__dirname, '../../');
        }

        if (this.platform() === this.platforms.win32) {
            // rootFolder/resources/app.asar
            return path.join(this.appFolder(), '../');
        } else if (this.platform() === this.platforms.osx) {
            // rootFolder/Contents/Resources/app.asar
            return path.join(this.appFolder(), '../../');
        }

        return path.join(__dirname, '../../');
    },

    resFolder() {
        return path.join(this.appFolder(), './res');
    },

    generateName(base, duplicated, min = 1, max = 999) {
        var avaliable = false;
        for (var i = min; i <= max; i++) {
            var name = base + i;
            if (!!!duplicated(name))
                return name;
        }
        return base + new Number(Math.round(Math.random() * max));
    },

    toInt(v){
        if(this.empty(v))return 0;
        return parseInt(v);
    },

    getLocation(){
        return new Promise(function (resolve, reject) { 
            let myCity = new BMap.LocalCity() 
            myCity.get(function (result) { 
                resolve(result) 
            }) 
        }) 
    },
    getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var after = window.location.hash.split("?")[1];
        // var r = window.location.search.substr(1).match(reg);
        var r = after.match(reg);
        // if (r != null) return unescape(r[2]);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
}