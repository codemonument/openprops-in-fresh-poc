import * as logBase from "@std/log";

logBase.setup({
  handlers: {
    console: new logBase.ConsoleHandler("DEBUG"),
  },
  loggers: {
    "openprops-in-fresh": {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

export const log = logBase;
