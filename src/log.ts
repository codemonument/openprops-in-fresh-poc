import * as logBase from "std_log";

logBase.setup({
    handlers: {
        console: new logBase.handlers.ConsoleHandler("DEBUG"),
    },
    loggers: {
        "vserv.fun-dashboard": {
            level: "DEBUG",
            handlers: ["console"],
        },
    },
});

export const log = logBase; 