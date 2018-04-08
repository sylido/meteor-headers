Package.describe({
  name    : "sylido:headers",
  summary : "Access HTTP headers on both server and client",
  version : "0.0.32",
  git     : "https://github.com/gadicc/meteor-headers.git"
});

Npm.depends({
  "connect" : "3.6.6"
});

Package.onUse(function(api) {
  api.versionsFrom("0.9.0");
  api.use(["webapp", "livedata", "deps", "check", "lodash"], ["client", "server"]);
  api.use("appcache", "server", { weak: true });
  api.use("meteorhacks:inject-initial@1.0.4", ["server", "client"]);

  api.addFiles("lib/headers-common.js", ["client", "server"]);
  api.addFiles("lib/headers-server.js", "server");
  api.addFiles("lib/headers-client.js", "client");

  api.export("headers", ["client", "server"]);
});

Package.onTest(function(api) {
  api.use(["tinytest", "sylido:headers"]);
  api.addFiles("tests/tests-client.js", "client");
  api.addFiles("tests/tests-server.js", "server");
});
