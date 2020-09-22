const env = process.env

const nodeEnv = env.NODE.ENV || 'development'

const serverURL = {
  port: env.PORT || 7321,
  host: env.HOST || '127.0.0.1',
  get serverUrl() {
    return `http://${this.host}:${this.port}`
  }
}

module.exports = serverURL
