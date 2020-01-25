# @digibear/curl

### A super simple curl utility written in typescript.

This was originally written for a series of shell scripts I wrote using node.

### `curl(address, options)`

```JS
// ts-node
import {curl} from "curl";

// Node
const {curl} = require("curl/dist/");

(async () => {
  const results = await curl("http://www.example.com", {
    mode: "GET",
    header: {
      "api-key": "xxxxx-xxxxx-xxxxx",
    },
    flags: ["headers"]
  })
})().catch(err => {
  console.error(err);
  process.exit(1)
})
```

## Options

- `mode(string)`
- `headers(Object)`

  - `key: value`

- `user(Object)`

  - `user`

  - `password`

- `body(Object)`

  - `key: value`

- `flags(array)`
