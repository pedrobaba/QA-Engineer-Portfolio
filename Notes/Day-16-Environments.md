# Day 16 - Postman Environments

## What is an Environment?

An Environment is a collection of variables used for a particular deployment stage such as Development, QA, or Production.

Instead of editing URLs manually, QA engineers switch between environments.

Example:

Development

baseUrl = https://dev.example.com

QA

baseUrl = https://qa.example.com

Production

baseUrl = https://api.example.com

## Advantages

- Easy switching between servers
- Prevents editing every request
- Reduces configuration errors
- Makes API testing more efficient

## Practical Example

Request:

{{baseUrl}}/posts/1

When the Development environment is selected, Postman automatically replaces {{baseUrl}} with the Development URL.
