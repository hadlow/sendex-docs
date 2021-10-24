---
sidebar_position: 4
---

# Executing a request

There are two ways to execute a request. You can either display the response in the terminal using the `peek` command, or save the response to a file using the `run` command.

## Peek

To display a response in the terminal, use the `peek` command.

```
sendex peek get posts/1
```

This will produce the following output:

```json
Status: 200 OK
Headers: {
    "date": "Sun, 10 Oct 2021 13:08:59 GMT",
    "content-type": "application/json; charset=utf-8",
    "content-length": "292",
    "connection": "close",
    "x-powered-by": "Express",
    "x-ratelimit-limit": "1000",
    "x-ratelimit-remaining": "999",
    "x-ratelimit-reset": "1631494143",
    "vary": "Origin, Accept-Encoding",
    "access-control-allow-credentials": "true",
    "cache-control": "max-age=43200",
    "pragma": "no-cache",
    "expires": "-1",
    "x-content-type-options": "nosniff",
    "etag": "W/\"124-yiKdLzqO5gfBrJFrcdJ8Yq0LGnU\"",
    "via": "1.1 vegur",
    "cf-cache-status": "HIT",
    "age": "15405",
    "accept-ranges": "bytes",
    "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
    "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=xrLE5GU0xSPSJWbhWl1PgZUjPUccdi7NJY0gVVqDaptziLhg5WKkhFrNw%2FdNSatdY73SsJmrbIabFPNxqFrqE9pZeJlBXeMsfaNKdyTUwBKlYHXzLjcKRfQt0%2F3UBt42T8EeOKJtXNLmYkRFcZyN\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
    "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
    "server": "cloudflare",
    "cf-ray": "69c0149ecefbe634-LHR",
    "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400, h3-28=\":443\"; ma=86400, h3-27=\":443\"; ma=86400"
}
Data: {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

:::danger Take care
This command outputs the entire response in the terminal. This maybe okay for many cases, however large return bodies can clutter your terminal. If you do have a large return body then you may want to save the output to a file to view instead. That's where the `run` command comes in.
:::

To save the response output to a file, use the `run` command.

## Run

