# Postman Environment Setup

## Objective

Learn how to organize API requests using Collections and Environment Variables.

## Collection Created

QA Learning Collection

## Environment Created

Learning Environment

## Variable

Name: baseUrl

Value:

https://jsonplaceholder.typicode.com

## API Request

GET

{{baseUrl}}/posts/1

## Results

Status Code: 200 OK

Response Time: 833 ms

Variable Worked: Yes

## Observation

The request successfully resolved the baseUrl variable and returned the expected JSON response. Using variables makes API requests reusable and easier to maintain across different environments.

## Conclusion

Collections and Environment Variables improve organization, reduce duplicate configurations, and allow QA engineers to test the same API across multiple environments with minimal changes.
