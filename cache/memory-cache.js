const data = {}

function read(key) {
    return data[key];
}

function readAll() {
    return data;
}

function write (key, value) {
    data[key] = value;
}

export const MemoryCache = {
    read: read,
    readAll: readAll,
    write: write
}