import * as logBase from "std_log";

logBase.setup({
    handlers: {
        console: new logBase.handlers.ConsoleHandler("DEBUG"),
    },
    loggers: {
        "openprops-in-fresh": {
            level: "DEBUG",
            handlers: ["console"],
        },
    },
});

export const log = logBase; 