# Comparative Analysis: RESTful API vs GraphQL API

## 📌 Overview
This document compares **RESTful API** and **GraphQL API** approaches for working with the same dataset.  
For this comparison, we consider a **Books** dataset with the following structure:

- **Book**: title, author, published year, genre, reviews
- **Author**: name, bio
- **Review**: reviewer, rating, comment

---

## 1️⃣ Data Fetching

| Aspect | RESTful API | GraphQL API |
|--------|-------------|-------------|
| **Request Structure** | Multiple endpoints (e.g., `/books`, `/books/:id`, `/books/:id/reviews`) | Single endpoint (`/graphql`) |
| **Over-fetching** | May return extra fields not needed | Returns only requested fields |
| **Under-fetching** | May require multiple requests to fetch related data | Fetch related data in one request |

---

## 2️⃣ Flexibility

| Aspect | RESTful API | GraphQL API |
|--------|-------------|-------------|
| **Response Control** | Fixed by server | Defined by client |
| **Field Selection** | Not built-in; needs query params | Built-in using query syntax |
| **Versioning** | Often requires `/v1`, `/v2` endpoints | No versioning needed — schema evolves without breaking clients |

---

## 3️⃣ Performance

| Aspect | RESTful API | GraphQL API |
|--------|-------------|-------------|
| **Network Requests** | Multiple endpoints → multiple requests | One endpoint → single request for multiple resources |
| **Payload Size** | Larger due to unused fields | Optimized — only needed fields |
| **Caching** | Easy via HTTP headers | More complex; requires libraries like Apollo Client |

---

## 4️⃣ Error Handling

| Aspect | RESTful API | GraphQL API |
|--------|-------------|-------------|
| **Error Structure** | HTTP status codes + JSON messages | Always returns `200 OK` with `errors` array alongside data |
| **Granularity** | Entire response fails if error occurs | Partial data + field-level errors possible |

---

## 5️⃣ Tooling & Ecosystem

| Aspect | RESTful API | GraphQL API |
|--------|-------------|-------------|
| **Learning Curve** | Easier; well-established | Steeper learning curve |
| **Documentation** | Swagger, Postman | Self-documenting via introspection (GraphiQL, Apollo Sandbox) |
| **Adoption** | Industry standard for years | Growing adoption, great for modern apps |

---

