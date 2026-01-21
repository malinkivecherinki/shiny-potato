// Utility functions for data manipulation
function formatData8(data) {
    if (typeof data === 'string') {
        return data.toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData8(item));
    }
    return data;
}

function validateInput(input) {
    if (!input || input.trim() === '') {
        throw new Error('Input cannot be empty');
    }
    return input.trim();
}

module.exports = { formatData8, validateInput };
