# Day 19 — Test Data Parameterization

## What is Parameterization?

Parameterization is the practice of using variables
or different data values so the same test can be
executed with multiple inputs.

## Example

Instead of:

GET /posts/1

Use:

GET {{baseUrl}}/posts/{{postId}}

Variables:

baseUrl = https://jsonplaceholder.typicode.com
postId = 1

The same request can then be tested with:

postId = 2
postId = 5
postId = 10

## Benefits

- Reduces hardcoded data
- Makes tests reusable
- Makes test maintenance easier
- Allows multiple test data combinations
- Makes API testing more scalable
