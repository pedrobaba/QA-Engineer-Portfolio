# 📓 Day 39 — API Chaining & Dependent Requests

## 📅 Date

September 30, 2026

## 🎯 Today's Focus

API Chaining & Dependent Requests using Postman.

## 🧠 What I Learned

Today I learned how API requests can depend on data returned from previous requests.

I learned that API chaining allows me to create a workflow where the output of one request becomes the input for another request.

For example:

```text
Login
  ↓
Get authentication token
  ↓
Use token in another request
  ↓
Create resource
  ↓
Get resource ID
  ↓
Update resource
  ↓
Delete resource
```

I also learned that API testing is not always about testing individual endpoints. In real applications, multiple API requests often work together as a complete workflow.

### Key concepts learned

* API chaining
* Dependent requests
* Request and response data
* Variables in Postman
* Passing IDs between requests
* Passing authentication tokens between requests
* Testing API workflows
* Positive and negative workflow testing
* Validating that data is correctly transferred between requests

## 🧪 Practical Work

I practiced creating an API workflow where information returned from one request can be reused by subsequent requests.

The workflow followed this general structure:

```text
Create Resource
      ↓
Extract Resource ID
      ↓
Get Resource using ID
      ↓
Update Resource using ID
      ↓
Delete Resource using ID
      ↓
Verify deletion
```

I used Postman to understand how variables can be used to connect requests together.

## 🔍 QA Perspective

From a QA perspective, API chaining is useful because it allows me to test complete user workflows instead of isolated endpoints.

For example, if an API allows a user to create an account, retrieve the account, update the account, and finally delete it, I can test the entire sequence and verify that each step produces the data required by the next step.

I also learned that a successful status code alone does not always mean the workflow is working correctly.

I should verify:

* Status code
* Response body
* Returned IDs
* Required fields
* Data consistency
* Headers
* Authentication
* Relationship between requests
* Expected behavior after updates or deletion

## 💡 Key Takeaway

> API testing becomes more realistic when I test how multiple requests work together as a workflow.

A request can pass individually but still fail when used as part of a larger workflow.

## 🚧 Challenges

The main challenge was understanding how data from one API response can be captured and reused in another request.

I also had to pay attention to the difference between:

* Hardcoding a value
* Storing a value in a variable
* Extracting a value dynamically from a response

## 📈 Progress

**QA Skill:** API Testing
**Level:** Beginner → Intermediate
**Tool:** Postman
**Topic:** API Chaining & Dependent Requests

### Skills gained today

* [x] Understand API chaining
* [x] Understand dependent requests
* [x] Understand request workflows
* [x] Understand reusable API variables
* [x] Understand ID-based request dependencies
* [x] Understand workflow validation
* [x] Apply QA thinking to API workflows

## 🔗 Portfolio Value

This exercise contributes to my QA portfolio by demonstrating that I can test APIs beyond simple GET/POST requests.

It shows practical understanding of how APIs interact within a real application workflow and how QA testers can validate data flow between dependent requests.

## 📝 Reflection

Today helped me understand that API testing is not simply about sending requests and checking whether I receive a `200 OK` response.

A good QA tester needs to understand the relationship between requests and verify that data flows correctly throughout the entire workflow.

This is another step toward becoming a more technically skilled QA tester.

## 🚀 Next Step

Continue with **Day 40** of the 90-Day QA Engineering roadmap and build on the API testing skills learned so far.
