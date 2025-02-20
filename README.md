# Wonderlust

## Overview
Wonderlust is a modern web application designed to help users plan and manage their trips seamlessly. Users can discover destinations, create itineraries, and find local attractions.


### Features
- User Authentication - Secure login and registration system.
- Itinerary Planner: Create and manage travel plans.

### Tech Stack
- Frontend: React.js, Next.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose ORM)
- Authentication: Passport.js (JWT), NextAuth
- Hosting: Vercel, Netlify

### Installation and Setup

##### Prerequisites
- Node.js(v16 or later)
- MongoDB( local or Atlas instance)
- Environmental variables

### Clone the Repository

``` javascript
git clone https://github.com/chingu-voyages/V53-tier3-team-31
cd wonderlust
```

```javascript
npm install
```
### Setup Environment Variables

Create a .env file in the root directory and configure the necessary environment variable
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the Development Server

```
npm run dev
```
The application will be available at http://localhost:3005

### API Routes

##### Authentication 
- ```POST /api/auth/signup``` - Register a new user
- ```POST /api/auth/signin``` - User login

##### Travel Trips
- ```GET /api/trips``` - Fetch list of trips
- ```GET /api/trips/tripId``` - Get details of a trip

### Deployment

- Deployed on Vercel (https://wander-lusttravel.vercel.app/ )

## Team Documents

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

## Our Team


- Suhani Shaikh #1: [GitHub](https://github.com/Suhanii-13) 
- Ademola Kujore #2: [GitHub](https://github.com/Dhemmyhardy) / [LinkedIn](https://www.linkedin.com/in/tundeademolakujore)
- Umesh Sharma #3: [GitHub](https://github.com/Omeshcoding) / [LinkedIn](https://www.linkedin.com/in/umesh-sharma-aa6674131/)
- Arshpreet Singh #4: [GitHub](https://github.com/goldgroove06)
- Teammate name #n: [GitHub](https://github.com/ghaccountname) / [LinkedIn](https://linkedin.com/in/liaccountname)
