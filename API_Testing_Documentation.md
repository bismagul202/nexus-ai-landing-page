
API TESTING DOCUMENTATION
Postman Test Report — Backend REST API
Base URL:  http://127.0.0.1:8000/api
Prepared as part of the Backend Development Assessment Task
July 2026

1. Overview
This document presents the results of manual API testing performed using Postman for the assessment task. Each resource in the system was tested end-to-end across the full CRUD lifecycle — Create, Read, Update, and Delete — to verify that the API behaves as expected, returns the correct HTTP status and JSON structure, and enforces the required access rules.
The API follows a consistent RESTful pattern across all resources: public endpoints are used for listing and retrieving records, while creating, updating, and deleting records is restricted to authenticated admin users. A summary of this pattern is provided below, followed by the detailed test results for each individual resource.
1.1 Base URL
http://127.0.0.1:8000/api
1.2 Standard Endpoint Pattern
The table below defines the general request pattern that each resource follows, where {resource} is replaced with the resource's plural name (e.g. services, team, faqs).
Method
Endpoint
Action
Access
GET
/api/{resource}
List all records
Public — no auth required
GET
/api/{resource}/{id}
Get a single record
Public — no auth required
POST
/api/{resource}
Create a new record
Protected (admin only)
PUT
/api/{resource}/{id}
Update a record
Protected (admin only)
DELETE
/api/{resource}/{id}
Delete a record
Protected (admin only)
POST
/api/contact
Submit contact form
Public — rate limited
GET
/api/contact
List all messages
Protected (admin only)

1.3 Resources Covered
    • About
    • Heroes
    • Portfolio
    • Team
    • Testimonials
    • Services
    • Features
    • FAQ
    • Contact Messages

2. Detailed Test Results
1. About
Manages the "About Us" content block (title, body, mission, vision, and image) displayed on the website.
 GET    http://127.0.0.1:8000/api/about   (Public)
{
  "data": [
    {
      "id": 3,
      "title": "Empowering Future with Intelligent AI Solutions",
      "body": "We bridge the gap between complex AI technology and everyday business needs. Our team specializes in developing scalable, efficient, and user-centric AI applications...",
      "image": "about/01KXHE56VJQ5Z3BXAHR7D1H3NT.jpg",
      "mission": "To democratize Artificial Intelligence by creating accessible, high-performance tools that empower businesses to automate, innovate, and grow without limits.",
      "vision": "To become the global leader in AI-driven digital transformation, setting new standards for efficiency and intelligent automation across diverse industries.",
      "created_at": "2026-07-14T23:04:03.000000Z",
      "updated_at": "2026-07-14T23:07:25.000000Z",
      "image_url": "http://127.0.0.1:8000/storage/about/01KXHE56VJQ5Z3BXAHR7D1H3NT.jpg"
    }
  ]
}
Result: 200 OK — record retrieved successfully.
 POST    http://127.0.0.1:8000/api/about   (Admin only)
{
  "message": "Created successfully",
  "data": {
    "image": "about/qQqXBUuwMyfxfeF6qjOYcbSl2lfSd0y12zU60vz5.png",
    "title": "Future with Innovation",
    "body": "We bridge the gap between complex AI and business efficiency.",
    "mission": "To democratize Artificial Intelligence for everyone.",
    "vision": "To become the global leader in AI solutions.",
    "updated_at": "2026-07-15T23:01:08.000000Z",
    "created_at": "2026-07-15T23:01:08.000000Z",
    "id": 6
  }
}
Result: 201 Created — new record created successfully.
 PUT    http://127.0.0.1:8000/api/about/6   (Admin only)
{
  "message": "Updated successfully",
  "data": {
    "id": 5,
    "title": "Future with Innovation",
    "body": "We bridge the gap between complex AI and business efficiency.",
    "image": "about/YJj7pkyuWcX0D7n0wNXUZSV2xksKsq5gb2sJwP4q.png",
    "mission": "To democratize Artificial Intelligence for everyone.",
    "vision": "To become the global leader in AI solutions.",
    "created_at": "2026-07-15T22:55:53.000000Z",
    "updated_at": "2026-07-15T22:58:49.000000Z"
  }
}
Result: 200 OK — record updated successfully.
 DELETE    http://127.0.0.1:8000/api/about/5   (Admin only)
{
  "message": "Deleted successfully"
}
Result: 200 OK — record deleted successfully.

2. Heroes
Manages the homepage hero/banner section (title, subtitle, and background image).
 GET    http://127.0.0.1:8000/api/heroes   (Public)
{
  "data": [
    {
      "id": 1,
      "title": "Transform Your Business with Nexus AI Solutions",
      "subtitle": "Automate workflows, boost productivity, and scale your operations with our cutting-edge Artificial Intelligence platform.",
      "image_url": "http://127.0.0.1:8000/storage/heroes/01KXH41BE1Q7G2FJ86ZNTZ8WC3.jpg",
      "is_active": true
    }
  ]
}
Result: 200 OK — record retrieved successfully.
 POST    http://127.0.0.1:8000/api/heroes   (Admin only)
{
  "data": {
    "id": 2,
    "title": "Future with Innovation",
    "subtitle": "We bridge the gap between complex AI and business efficiency.",
    "image_url": "http://127.0.0.1:8000/storage/heroes/iv2r044U4zw6IvHDgyg6VpNnPtDtf3VN9wd1aoFX.png",
    "is_active": true
  }
}
Result: 201 Created — new record created successfully.
 PUT    http://127.0.0.1:8000/api/heroes/2   (Admin only)
{
  "data": {
    "id": 2,
    "title": "with Innovation",
    "subtitle": "We bridge the gap between complex AI and business efficiency.",
    "image_url": "http://127.0.0.1:8000/storage/heroes/2ScOO2dGlGt36zAKFjszA9q9FdTqai9OsAhuJxCn.png",
    "is_active": true
  }
}
Result: 200 OK — record updated successfully.
 DELETE    http://127.0.0.1:8000/api/heroes/2   (Admin only)
{
  "message": "Deleted successfully"
}
Result: 200 OK — record deleted successfully.

3. Portfolio
Manages portfolio/project entries (title, category, image, project URL, and display order).
 GET    http://127.0.0.1:8000/api/portfolios   (Public)
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Nexus AI Dashboard",
      "category": "AI Solutions",
      "image": "portfolio/01KXJKP8YRVQZ5NC17FES5YYEZ.webp",
      "project_url": "https://mynexusai.com/",
      "sort_order": 1,
      "is_active": 1,
      "created_at": "2026-07-15T09:57:51.000000Z",
      "updated_at": "2026-07-15T10:03:22.000000Z"
    },
    {
      "id": 2,
      "title": "BSF Leather CRM",
      "category": "Business Tools",
      "image": "portfolio/01KXJKNHFWF2TJWGFX0A22B7WM.avif",
      "project_url": "http://www.bsfleathers.com/",
      "sort_order": 2,
      "is_active": 1
    }
    // ... additional records omitted for brevity
  ]
}
Result: 200 OK — list retrieved successfully (4 records).
 POST    http://127.0.0.1:8000/api/portfolios   (Admin only)
{
  "success": true,
  "message": "Portfolio created successfully",
  "data": {
    "title": "E-commerce App",
    "category": "Development",
    "image": "portfolios/BtdpMsUqDg9nQAQ2C71q6Vg0HSmJreDn0ND8edGI.png",
    "project_url": "https://example.com",
    "sort_order": "1",
    "is_active": "1",
    "updated_at": "2026-07-15T23:17:40.000000Z",
    "created_at": "2026-07-15T23:17:40.000000Z",
    "id": 5
  }
}
Result: 201 Created — new record created successfully.
 PUT    http://127.0.0.1:8000/api/portfolios/5   (Admin only)
{
  "success": true,
  "message": "Portfolio updated",
  "data": {
    "id": 5,
    "title": "commerce App",
    "category": "Development",
    "image": "portfolios/Mrf7N5fpVAJsUQeEoB7dKfAFOvBejQG445oVScRR.png",
    "project_url": "https://example.com",
    "sort_order": "1",
    "is_active": "1",
    "created_at": "2026-07-15T23:17:40.000000Z",
    "updated_at": "2026-07-15T23:18:34.000000Z"
  }
}
Result: 200 OK — record updated successfully.
 DELETE    http://127.0.0.1:8000/api/portfolios/5   (Admin only)
{
  "success": true,
  "message": "Portfolio deleted"
}
Result: 200 OK — record deleted successfully.

4. Team
Manages team member profiles (name, designation, image, LinkedIn URL, and display order).
 GET    http://127.0.0.1:8000/api/team   (Public)
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Bisma Gul",
      "designation": "Full-Stack Developer",
      "image": "team/01KXJP8FAYQZA9WGAVH5EZXMPT.jpg",
      "linkedin_url": "https://linkedin.com/in/bismagul",
      "sort_order": 1,
      "is_active": 1,
      "image_url": "http://127.0.0.1:8000/storage/team/01KXJP8FAYQZA9WGAVH5EZXMPT.jpg"
    },
    {
      "id": 2,
      "name": "Ahmed Raza",
      "designation": "Senior UI/UX Designer",
      "sort_order": 2,
      "is_active": 1
    }
    // ... additional records omitted for brevity
  ]
}
Result: 200 OK — list retrieved successfully (3 records).
 POST    http://127.0.0.1:8000/api/team   (Admin only)
{
  "success": true,
  "data": {
    "name": "commerce App",
    "designation": "Development",
    "image": "team/j4Asid51gHKIhzgBo6n3dWuwypvUt9a2dmBN1k8L.png",
    "linkedin_url": "https://example.com",
    "sort_order": "1",
    "is_active": "1",
    "updated_at": "2026-07-15T23:25:34.000000Z",
    "created_at": "2026-07-15T23:25:34.000000Z",
    "id": 4
  }
}
Result: 201 Created — new record created successfully.
 PUT    http://127.0.0.1:8000/api/team/4   (Admin only)
{
  "success": true,
  "data": {
    "id": 4,
    "name": "App",
    "designation": "Development",
    "image": "team/tPfGBA0Ca4R8stXNgP0bbCBKrJAs5tDeGmFDrSg9.png",
    "linkedin_url": "https://example.com",
    "sort_order": "1",
    "is_active": "1",
    "created_at": "2026-07-15T23:25:34.000000Z",
    "updated_at": "2026-07-15T23:26:24.000000Z"
  }
}
Result: 200 OK — record updated successfully.
 DELETE    http://127.0.0.1:8000/api/team/4   (Admin only)
{
  "success": true,
  "message": "Team member deleted"
}
Result: 200 OK — record deleted successfully.

5. Testimonials
Manages client testimonials (client name, designation, company, avatar, review text, and rating).
 GET    http://127.0.0.1:8000/api/testimonials   (Public)
{
  "success": true,
  "data": [
    {
      "id": 4,
      "client_name": "Merry",
      "client_designation": "CTO",
      "client_company": "DataSync Labs",
      "client_avatar": "http://127.0.0.1:8000/api/files/testimonials/01KXJMX474SET4MXYCKQ6A5HW8.jpg",
      "review": "Exceptional backend expertise. They built a scalable system that handled our user growth perfectly",
      "rating": 4,
      "is_active": 1
    }
    // ... 3 additional records omitted for brevity
  ]
}
Result: 200 OK — list retrieved successfully (4 records).
 POST    http://127.0.0.1:8000/api/testimonials   (Admin only)
{
  "success": true,
  "data": {
    "client_name": "App",
    "client_designation": "Development",
    "client_company": "https://example.com",
    "client_avatar": "testimonials/1KG1SqhC8ykpsDVdh7wRhGKZGOKUfa58SlcjIHoV.png",
    "review": "Sample test review text",
    "rating": "5",
    "is_active": "1",
    "updated_at": "2026-07-15T23:31:00.000000Z",
    "created_at": "2026-07-15T23:31:00.000000Z",
    "id": 5
  }
}
Result: 201 Created — new record created successfully.
 PUT    http://127.0.0.1:8000/api/testimonials/5   (Admin only)
{
  "success": true,
  "data": {
    "id": 5,
    "client_name": "UPDATE",
    "client_designation": "Development",
    "client_company": "https://example.com",
    "client_avatar": "testimonials/3Gf8EDodG73S53K5hxjNSwsc8IWU8rFjBcCK87ll.png",
    "review": "UPDATE",
    "rating": "5",
    "is_active": "1",
    "created_at": "2026-07-15T23:31:00.000000Z",
    "updated_at": "2026-07-15T23:31:47.000000Z"
  }
}
Result: 200 OK — record updated successfully.
 DELETE    http://127.0.0.1:8000/api/testimonials/5   (Admin only)
{
  "success": true,
  "message": "Testimonial deleted"
}
Result: 200 OK — record deleted successfully.

6. Services
Manages the services offered (title, description, icon, and display order).
 GET    http://127.0.0.1:8000/api/services   (Public)
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "AI Workflow Automation",
      "description": "Streamline your business processes with custom AI agents designed to handle repetitive tasks efficiently.",
      "icon": "BrainCircuit",
      "sort_order": 1,
      "is_active": 1,
      "icon_url": "http://127.0.0.1:8000/storage/BrainCircuit"
    }
    // ... 3 additional records omitted for brevity
  ]
}
Result: 200 OK — list retrieved successfully (4 records).
 POST    http://127.0.0.1:8000/api/services   (Admin only)
{
  "success": true,
  "data": {
    "title": "UPDATE",
    "description": "Development",
    "icon": "services/Js6IGyUGjsnx7r22mIwL5VSAAxDO6d05GINEhia3.png",
    "sort_order": "1",
    "is_active": "1",
    "updated_at": "2026-07-15T23:35:16.000000Z",
    "created_at": "2026-07-15T23:35:16.000000Z",
    "id": 5
  }
}
Result: 201 Created — new record created successfully.
 PUT    http://127.0.0.1:8000/api/services/5   (Admin only)
{
  "success": true,
  "data": {
    "id": 5,
    "title": "TESTING",
    "description": "Development",
    "icon": "services/VK0G4No4y1MveBBAeNAuCty9AXwTAiVZql8Mh3km.png",
    "sort_order": "1",
    "is_active": "1",
    "created_at": "2026-07-15T23:35:16.000000Z",
    "updated_at": "2026-07-15T23:36:03.000000Z"
  }
}
Result: 200 OK — record updated successfully.
 DELETE    http://127.0.0.1:8000/api/services/5   (Admin only)
{
  "success": true,
  "message": "Service deleted"
}
Result: 200 OK — record deleted successfully.

7. Features
Manages the key features/highlights section (title, description, icon, and display order).
 GET    http://127.0.0.1:8000/api/features   (Public)
{
  "success": true,
  "data": [
    {
      "id": 6,
      "title": "Scalable Custom Software",
      "description": "Build high-performance web applications using Laravel and React that scale seamlessly with your growing business needs.",
      "icon": "Code",
      "sort_order": 1,
      "is_active": 1,
      "icon_url": "http://127.0.0.1:8000/storage/Code"
    }
    // ... 3 additional records omitted for brevity
  ]
}
Result: 200 OK — list retrieved successfully (4 records).
 POST    http://127.0.0.1:8000/api/features   (Admin only)
{
  "success": true,
  "data": {
    "title": "TESTING",
    "description": "Development",
    "icon": "features/xzoI2NwRO3BN7j6jVGxqJDqGxLjeGwG8krgNyE6A.png",
    "sort_order": "1",
    "is_active": "1",
    "updated_at": "2026-07-15T23:38:43.000000Z",
    "created_at": "2026-07-15T23:38:43.000000Z",
    "id": 9
  }
}
Result: 201 Created — new record created successfully.
 PUT    http://127.0.0.1:8000/api/features/9   (Admin only)
{
  "success": true,
  "data": {
    "id": 9,
    "title": "UPDATE",
    "description": "Development",
    "icon": "features/gcexUVGgW5II3kg3luxQS0ktw1hOphZGcB0I8mxP.png",
    "sort_order": "1",
    "is_active": "1",
    "created_at": "2026-07-15T23:38:43.000000Z",
    "updated_at": "2026-07-15T23:39:10.000000Z"
  }
}
Result: 200 OK — record updated successfully.
 DELETE    http://127.0.0.1:8000/api/features/9   (Admin only)
{
  "success": true,
  "message": "Feature deleted"
}
Result: 200 OK — record deleted successfully.

8. FAQ
Manages frequently asked questions and their answers, with sort order for display sequence.
 GET    http://127.0.0.1:8000/api/faqs   (Public)
{
  "success": true,
  "data": [
    {
      "id": 1,
      "question": "What services do you offer?",
      "answer": "We offer full-stack web development, UI/UX design, and API integration services.",
      "sort_order": 1,
      "is_active": 1
    }
    // ... 2 additional records omitted for brevity
  ]
}
Result: 200 OK — list retrieved successfully (3 records).
 POST    http://127.0.0.1:8000/api/faqs   (Admin only)
{
  "success": true,
  "data": {
    "question": "How to scale my Laravel app",
    "answer": "Use Redis for caching and queue workers for background jobs.",
    "sort_order": "4",
    "updated_at": "2026-07-15T23:59:30.000000Z",
    "created_at": "2026-07-15T23:59:30.000000Z",
    "id": 4
  }
}
Result: 201 Created — new record created successfully.
 PUT    http://127.0.0.1:8000/api/faqs/4   (Admin only)
{
  "success": true,
  "data": {
    "id": 4,
    "question": "How to scale my Laravel app",
    "answer": "Redis for caching and queue workers for background jobs.",
    "sort_order": "4",
    "is_active": 1,
    "created_at": "2026-07-15T23:59:30.000000Z",
    "updated_at": "2026-07-16T00:00:05.000000Z"
  }
}
Result: 200 OK — record updated successfully.
 DELETE    http://127.0.0.1:8000/api/faqs/4   (Admin only)
{
  "success": true,
  "message": "FAQ deleted"
}
Result: 200 OK — record deleted successfully.

9. Contact Messages
Handles contact form submissions from the public site and provides admin access to view, update (mark as read), and delete messages.
 GET    http://127.0.0.1:8000/api/contact-messages   (Admin only)
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Ali Khan",
      "email": "ali@example.com",
      "phone": "03001234567",
      "subject": "Project Inquiry",
      "message": "I want to discuss a new Laravel project for my startup.",
      "is_read": 1,
      "deleted_at": null,
      "created_at": "2026-07-16T00:04:18.000000Z",
      "updated_at": "2026-07-16T00:04:18.000000Z"
    }
  ]
}
Result: 200 OK — list retrieved successfully.
 POST    http://127.0.0.1:8000/api/contact-messages   (Public, rate limited)
{
  "success": true,
  "data": {
    "name": "Bisma Gul",
    "email": "bismagul580@gmail.com",
    "phone": "03001234567",
    "subject": "Inquiry about Development",
    "message": "Testing the API integration for the contact form.",
    "updated_at": "2026-07-16T00:08:39.000000Z",
    "created_at": "2026-07-16T00:08:39.000000Z",
    "id": 2
  }
}
Result: 201 Created — message submitted successfully.
 PUT    http://127.0.0.1:8000/api/contact-messages/2   (Admin only)
{
  "success": true,
  "message": "Message updated successfully",
  "data": {
    "id": 2,
    "name": "Bisma Gul",
    "email": "bismagul580@gmail.com",
    "phone": "03001234567",
    "subject": "Inquiry about Development",
    "message": "Testing the API integration for the contact form.",
    "is_read": 1,
    "deleted_at": null,
    "created_at": "2026-07-16T00:08:39.000000Z",
    "updated_at": "2026-07-16T00:10:46.000000Z"
  }
}
Result: 200 OK — record updated successfully.
 DELETE    http://127.0.0.1:8000/api/contact-messages/2   (Admin only)
{
  "success": true,
  "message": "Message deleted successfully"
}
Result: 200 OK — record deleted successfully.

3. Conclusion
All nine resources — About, Heroes, Portfolio, Team, Testimonials, Services, Features, FAQ, and Contact Messages — were tested successfully using Postman across the full CRUD cycle. Each endpoint returned the expected HTTP status codes and JSON response structure:
    • GET requests (list & single record) returned 200 OK with the expected data payload, and were accessible without authentication.
    • POST requests returned 201 Created with the newly created record, and were restricted to admin access.
    • PUT requests returned 200 OK with the updated record reflecting the submitted changes.
    • DELETE requests returned 200 OK with a confirmation message, and the record was successfully removed.
    • The contact form (POST /api/contact-messages) was verified as publicly accessible, while message retrieval (GET /api/contact-messages) was correctly restricted to admin users.
Based on the above results, the API meets the functional requirements outlined in the assessment specification.