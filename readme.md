# http

Get access to all the HTTP status codes. Port of npm's `http-status-codes` package.

## Usage

```ts
import * as http from "https://raw.githubusercontent.com/eankeen/http/dev/mod.ts"

http.ACCEPTED //  => 202
http.getStatusText(202) // => "Accepted"
http.getStatusCode("Accepted") // => 202
```
