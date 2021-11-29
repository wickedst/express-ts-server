var ping = require("ping");

var hosts = ["192.168.0.1", "192.168.1.2", "192.168.2.3"];

var frequency = 60000 * 1; // 1 min *

export const uptimeMonitor = () => {
  hosts.forEach(function (host) {
    setInterval(function () {
      ping.sys.probe(host, function (active: boolean) {
        var info = active
          ? "IP " + host + " = Active"
          : "IP " + host + " = Non-Active";
        console.log(info);
      });
    }, frequency);
  });
};
