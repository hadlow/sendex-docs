---
sidebar_position: 3
---

# Creating your first request

To create your first request, run:

```
sendex new get /posts/1
```

To break this command down, the first parameter, _new_, tells the CLI to create a new command configuration file. The second parameter, _GET_, is the HTTP method that we wish to use for this particular command (a full list of supported HTTP methods can be viewed [here](https://docs.sendexapi.com/new-request)). The third parameter, _/posts_, is the endpoint that we are sending requests to. The leading slash for the endpoint is optional.

This will create a configuration file at `_sendex/requests/GET-posts-1.yml`.

The next step is to execute a request.