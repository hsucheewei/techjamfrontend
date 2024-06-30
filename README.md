# Tech Jam Project

This repository contains a Next.js project configured to run in a Docker container for seamless development and deployment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) are installed on your machine.
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is installed on your machine.

## Getting Started

Follow these steps to get your development environment up and running.

### Clone the Repository

1. Open your terminal.
2. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/your-username/tech-jam.git
    ```
3. Navigate to the project directory 
    ```bash
    cd techjamfrontend
    ```

### Configure Enviroment Variables

1. Create a '.env' file in the root directory
2. Add any neccesary env variables like
    ```env
    OPENAI_API_KEY=your_openai_api_key
    ```

### Build and Run the Docker Container

1. Build the docker container
    ```bash
    docker-compose build
    ```
2. Run the docker container
    ```bash
    docker-compose up
    ```

#### Access the Application

Once the container is running you can access it at: http://localhost:3000
