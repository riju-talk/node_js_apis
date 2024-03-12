# API Setup

This is a basic guide to set up and launch an API using Node.js and Express.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install all dependencies:

    ```bash
    npm install
    ```

## Launching the API

1. Start the API server:

    ```bash
    node index.js
    ```

    This will start the server and make it listen for incoming requests on port 3000 by default.

2. Open Postman:

    [Download Postman](https://www.postman.com/downloads/)

3. Configure the request in Postman:

    - Open Postman.
    - Set the request method to GET.
    - Enter the URL: `http://localhost:3000/users`.

4. Send the request:

    - Click the "Send" button in Postman to send the GET request to the API.

5. Verify the response:

    - You should receive a response containing data about users (if any) from the API.
    - If successful, you have set up and launched your API successfully.

## API Endpoints

### /users

- **GET**: Retrieve all users.
- **POST**: Create a new user.
- **PUT**: Update an existing user.
- **DELETE**: Delete a user.