const path = require('path');

const pkg = localRequire('package');
const env = process.env.NODE_ENV || 'development';

exports.version = pkg.version;

exports.env = env;

exports.port = process.env.PORT || 5018;

exports.app = pkg.name;

exports.name = process.env.NAME || 'unknown';

// exports.domain = 'albi.io';

// http://user:pass@127.0.0.1:8086/mydatabase
exports.influx = process.env.INFLUX;

// app url prefix for all request
exports.appUrlPrefix = process.env.APP_URL_PREFIX || '';

exports.staticOptions = {
  urlPrefix: '/static',
  path: env === 'development' ? path.join(__dirname, 'public') : path.join(__dirname, 'assets'),
  maxAge: env === 'development' ? 0 : 365 * 24 * 3600,
  headers: {
    Vary: 'Accept-Encoding',
  },
  host: process.env.STATIC_HOST || '',
};

// view root path
exports.viewPath = path.join(__dirname, 'views');
// user track cookie
exports.trackCookie = '_jt';
/* eslint max-len:0 */
exports.httpLogFormat = ':user :request-id :method :url :status :length :response-time ms ":referrer"';
// http connection limit options
exports.connectLimitOptions = {
  mid: 100,
  high: 500,
  interval: 5000,
};
// cookie name
exports.session = {
  key: pkg.name,
  maxAge: 7 * 24 * 3600 * 1000,
};
exports.adminToken = process.env.ADMIN_TOKEN;
// etcd server address http://192.168.99.100:2379/v2
exports.etcd = process.env.ETCD;
// application binding ip address
exports.IP = process.env.IP;
// mongodb uri
// mongodb://user:pass@localhost:port,anotherhost:port,yetanother:port/mydatabase
exports.mongoUri = process.env.MONGO || 'mongodb://127.0.0.1/npmtrend';
// redis uri
// [redis:]//[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]
exports.redisUri = process.env.REDIS || 'redis://127.0.0.1/';

// logger setting "console", "udp://127.0.0.1:5001"
exports.logger = process.env.LOG;

exports.apiUrl = process.env.API_URL;

exports.httpLogEnabled = process.env.HTTP_LOG !== '0';

exports.githubAuth = process.env.GITHUB_AUTH;
