# Club Collaboration - Backend

This repository contains the backend API for the Club Collaboration project, which supports the [Club Collaboration frontend](https://github.com/iiitv/club-collaboration-frontend) by providing data and services for clubs, events, announcements, and contact details. The backend is built using Node.js, Express.js, and MongoDB.

## Technology Used
- Node.js
- Express
- MongoDB

## Features

- **Clubs Overview**: Detailed information for all clubs, including members and descriptions.
- **Announcements & Events**: Manage and view club-specific announcements and events.
- **Image Galleries**: Upload and display event or club-related media.
- **Admin Panel**: Manage clubs, announcements, events, and images with admin access.
- **Search & Filter**: Easily find clubs, events, and announcements with search functionality.
- **User Authentication**: Secure login for users and admins.


## Setup Instructions

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/iiitv/club-collaboration-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd club-collaboration-backend
    ```

3. Install dependencies:
    ```bash
    yarn install
    ```

4. Set up environment variables by creating a `.env` file in the root directory:
    ```bash
    MONGODB_URI=<your_mongo_db_uri>
    SESSION_SECRET=<your_session_secret_key>
    EMAIL=<your_email>
    EMAIL_SECRET=<your_email_secret>
    JWT_SECRET=<your_jwt_secret_key>
    ```

### Running

```bash
yarn start
