---
sidebar_position: 2
---

# Initializing Sendex

You can now navigate to the root directory of your API and run:

```bash
$ sendex init
```

This will create the sendex configuration files and directories.

## The `_sendex` directory

This contains three sub-directories:

### requests
This directory contains a configuration file for each request you create. The files are YAML based and contain all of the request data such as headers, body, method etc.

### responses
This directory houses all of the individual responses. Responses are generated when a request is run by Sendex. The output of the response is saved here as JSON.

### tests
Keep all your test files in this directory. All tests are written in JS and are ran using the Sendex CLI.

## The `.sendex.yml` file

The `.sendex.yml` file contains the project configuration variables. For now, we can add the following baseUrl to the config: `https://jsonplaceholder.typicode.com`. This is a simple test API that will be used for the remainder of these guides. For actual use, you would add your own base URL here.

Now that Sendex is configured, you can move on to creating and running your first request.