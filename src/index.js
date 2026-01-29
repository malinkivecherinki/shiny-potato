// ConfigManager - Configuration management with environment support
class ConfigManager {
    constructor() {
        this.config = {};
        this.env = process.env.NODE_ENV || 'development';
    }
    
    load(config) {
        this.config = { ...this.config, ...config };
    }
    
    get(key, defaultValue = null) {
        const envKey = key.toUpperCase().replace(/\./g, '_');
        if (process.env[envKey]) {
            return process.env[envKey];
        }
        
        const keys = key.split('.');
        let value = this.config;
        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) return defaultValue;
        }
        return value;
    }
    
    set(key, value) {
        const keys = key.split('.');
        let obj = this.config;
        for (let i = 0; i < keys.length - 1; i++) {
            if (!obj[keys[i]]) obj[keys[i]] = {};
            obj = obj[keys[i]];
        }
        obj[keys[keys.length - 1]] = value;
    }
}

module.exports = ConfigManager;
