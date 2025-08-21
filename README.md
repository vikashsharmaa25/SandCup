# Event Submission Module

A full-stack web application that allows users to submit event details through a responsive form, stores the data in a backend database, and provides an option to export all events in CSV format.

# Features

Responsive Event Form React with:

Event Title

Description

Event Date & Time

Location

Organizer Email (with validation)

Organizer Contact Number (10-digit validation)

Event Type (Conference, Workshop, Meetup, Webinar)

Upload Banner (optional)

Client-side form validations

Success/Error messages on form submission

Submit button disabled until form is valid

Backend API to store event data (Node.js/Express with MongoDB/PostgreSQL)

Fetch all stored events

Export event data as downloadable CSV

# Tech Stack

Frontend: React (with form validation & responsive UI)

Backend: Node.js + Express

Database: MongoDB

CSV Export: json-2-csv

# Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/vikashsharmaa25/SandCup.git
cd SandCup
```
###  Setup Backend
```bash
cd server
npm install
```
3. Create a .env file in the backend folder with:
```bash
PORT=4000
MONGO_URL=your_mongodb_url
```
4. Run the server:
```bash
npm run dev
```
### Setup Frontend
```bash
cd client
npm install
npm run dev
```
### Access the App

`Frontend runs on: https://sand-cup-client.vercel.app/`

`Backend API runs on: https://sand-cup-server.vercel.app/`

📸 Demo

`live - https://sand-cup-client.vercel.app/`

👨‍💻 Author

Name: Vikash Sharma 

Email: vikash9422@gmail.com
