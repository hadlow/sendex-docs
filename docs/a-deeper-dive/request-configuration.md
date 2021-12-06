---
sidebar_position: 1
---

# Request configuration

## Available configuration options

- `method`: HTTP method for the request
- `endpoint`: The path without the domain, for example `/posts`
- `body`: The request payload
- `headers`: Request headers, formatted as a YAML object
- `params`: Parameters for the request

## HTTP methods

The following HTTP methods are currently available:
- GET
- POST
- PUT
- PATCH
- DELETE

## Using environment variables

Environment variables can be used in request configuration files. Anything in your local `.env` file is accessible in require YAML by using the following syntax:
`${YOUR_ENV_VAR}`
Where YOUR_ENV_VAR matches the name of the environment variable in `.env`.

This can be useful for secrets such as bearer tokens or passwords.
