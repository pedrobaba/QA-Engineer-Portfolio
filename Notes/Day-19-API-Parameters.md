# Day 19 — API Parameters

## Query Parameters

Query parameters are values added to a URL to filter,
search, sort, or control the returned data.

Example:

GET /products?category=shoes

## Path Parameters

Path parameters are values included in the URL path
to identify a specific resource.

Example:

GET /users/25

## Request Body

The request body contains data sent to an API,
commonly with POST, PUT, and PATCH requests.

Example:

{
  "title": "QA Journey",
  "userId": 1
}

## Key Difference

Path parameter:
Identifies a specific resource.

Query parameter:
Usually filters, searches, or modifies how resources
are returned.
