# OpenProps in Deno Fresh 

This is a PoC for testing how to best integrate [OpenProps](https://open-props.style/) into Deno Fresh Framework. 

## Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Integration strategies 

1. With npm package: https://www.npmjs.com/package/open-props 
   1. Good: easier auto-update 
   2. Bad: files probably need to be transformed before usable as plain css 
   3. Would be nice: To be able to use the postcss variant of this for extended features! 
   4. May be possible with the npm cache folder being placed directly inside this repo by deno 

2. Directly from unpkg: https://unpkg.com/browse/open-props@latest/ 
   1. Good: Very easy integration into a html file 
   2. Bad: When unpkg is down, all websites using this import look horrible 
   3. Bad: Performance hit when loading styles from a third-party origin 

3. Downloading unpkg and serve via Fresh: 
   1. Good: Outages from unpkg don't affect my deployments 
   2. Bad: Updating is harder (probably would write a script, which downloads the static sources for me, if this is the only vieable solution)

## Useful Stuff

- [OpenProps Source of normalize.css](https://github.com/argyleink/open-props/blob/main/src/extra/normalize.src.css)


