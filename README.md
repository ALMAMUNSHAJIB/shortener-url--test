# URL Shortener Service

A simple URL shortener service built with **Node.js**, **Express.js**, and **MongoDB**. This service allows users to shorten long URLs and redirect short URLs to their original destinations.

---

## Features

- **Generate Short URLs:** Convert long URLs into short and manageable URLs.
- **Redirect Short URLs:** Redirect users to the original URLs when short URLs are accessed.
- **Error Handling:** Validates input and handles errors gracefully.
- **Database Storage:** Stores mappings between original and short URLs using MongoDB.

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: [Download Node.js](https://nodejs.org/) (version 14 or higher recommended)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/) (Local or cloud MongoDB instance)

---

## Getting Started

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ALMAMUNSHAJIB/shortener-url--test.git

Running the Application

Start the MongoDB Server (if not already running):

mongod

Run the Application:

npm start

Run in Development Mode (with auto-reload using nodemon):

npm run dev

Access the API:

The server will start on http://localhost:3000.
