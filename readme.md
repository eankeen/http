# http

Get access to all the HTTP status codes. Port of npm's `http-status-codes` package.

## Usage

```ts
import * as httpCode from "https://raw.githubusercontent.com/eankeen/http/dev/mod.ts"

httpCode.ACCEPTED //  => 202
httpCode.getStatusText(202) // => "Accepted"
httpCode.getStatusCode("Accepted") // => 202
```
