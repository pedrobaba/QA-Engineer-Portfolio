# API Test Scenarios — JSONPlaceholder

## Overview

This document contains the high-level scenarios identified for testing the JSONPlaceholder API.

## Posts API Scenarios

| Scenario ID | Test Scenario | Method | Endpoint | Priority |
|---|---|---|---|---|
| API-TS-001 | Retrieve all posts | GET | `/posts` | High |
| API-TS-002 | Retrieve a single post | GET | `/posts/1` | High |
| API-TS-003 | Retrieve a nonexistent post | GET | `/posts/99999` | Medium |
| API-TS-004 | Create a post with valid data | POST | `/posts` | High |
| API-TS-005 | Update an existing post | PUT | `/posts/1` | Medium |
| API-TS-006 | Partially update an existing post | PATCH | `/posts/1` | Medium |
| API-TS-007 | Delete a post | DELETE | `/posts/1` | Medium |

## Users API Scenarios

| Scenario ID | Test Scenario | Method | Endpoint | Priority |
|---|---|---|---|---|
| API-TS-008 | Retrieve a user's details | GET | `/users/1` | Medium |

## Negative Testing Scenarios

| Scenario ID | Test Scenario | Method | Endpoint | Priority |
|---|---|---|---|---|
| API-TS-009 | Submit a request with an empty body | POST | `/posts` | Medium |
| API-TS-010 | Submit unexpected data types | POST | `/posts` | Medium |
| API-TS-011 | Request an invalid endpoint | GET | `/invalid-endpoint` | Medium |

## Validation Areas

The scenarios will cover:

- HTTP status codes
- Response body structure
- Required fields
- Data types
- Returned resource identifiers
- API response time
- Handling of invalid or unexpected requests

## Notes

JSONPlaceholder is a mock API. Its responses should be assessed against the service's actual documented behaviour, not assumptions about how every production API should behave.

All scenarios are identified for testing. Their execution status will be recorded separately.
