---
sidebar_position: 1
---

# Installing Sendex

Sendex is installed using NodeJS & npm, so make sure you have that installed. You can find the installation for Node [here](https://nodejs.org/en/). Once Node is installed, run the install command for Sendex.

```
$ npm i -g sendex
```


This will install the Sendex CLI tool globally. To test the installation, run:

```
$ sendex
```

If installed successfully, you should see the following output:


```
Usage: index [options] [command]

Options:
  -h, --help                display help for command

Commands:
  init                      Setup an sendex project
  new [method] [endpoint]   Create a new request
  run [method] [endpoint]   Execute a request and save the response to a file
  peek [method] [endpoint]  Execute a request and view the response in the terminal
  clean                     Delete all saved responses
  test [endpoint]           Test an API endpoint
  help [command]            display help for command
```