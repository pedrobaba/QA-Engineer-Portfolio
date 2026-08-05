# Day 16 - Postman Variables

## What is a Variable?

A variable stores reusable values that can be referenced in API requests.

Example:

{{baseUrl}}

Instead of writing:

https://jsonplaceholder.typicode.com

you can store it as:

baseUrl = https://jsonplaceholder.typicode.com

## Types of Variables

### Global Variable
Available throughout the entire Postman workspace.

### Collection Variable
Available only within a specific collection.

### Environment Variable
Available only in the selected environment (Development, QA, Production).

### Local Variable
Exists only while a request is running.

## Benefits of Variables

- Reduce duplication
- Improve maintainability
- Make requests reusable
- Speed up testing
- Improve organization
