# 🌟 Superheroes App - Backend & Frontend

## ✨ Table of Contents
1. 📝 [About the Project](#-about-the-project)
2. 🔧 [Tech Stack](#-tech-stack)
3. ⚡ [Project setup](#-project-setup)
4. 📚 [Possible Improvements](#-possible-improvements)
---

## 💪 About the Project
The **Superheroes App** is a full-stack application featuring:
- 🔍 **Node.js backend** managing superheroes
- 🎨 **React frontend** for users to interact with the superhero database.

- The Server imports heroes at start-up from the following Public Heroes API: https://akabab.github.io/superhero-api/api/
- Users can **read superheroes** using the UI, which communicates with the backend via a REST API.
- Users can manually **add a superhero** using the BE Rest API: 
```bash
curl --location 'http://localhost:2000/superheroes' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Lich King",
    "superPower": "Immortality",
    "humilityScore": 10
}'
```

---

## ⚙️ Tech Stack
### Backend:
- 🌐 **Node.js** (Express.js)
- 🔍 **MongoDB-Memory-Server** (database)
- 🧰 **Mongoose** (ORM)
- ✅ **Jest** (testing)

### Frontend:
- 🛠️ **React** 

---

## 🛠️ Project Setup

1. Navigate to the root folder:
2. Install dependencies:
   ```bash
   npm install
   ```
   This will install `npm-run-all` utility which allows running multiple npm scripts in parallel
3. Install dependencies for the Server and the Client using:
   ```bash
    npm run install-all
   ```
4. Run unit tests using:
   ```bash
   npm test
   ```
5. Run the Application using:
   ```bash
   npm start
   ```
6. WebServer available at `http://localhost:2000/superheroes`
7. User Interface available at  `http://localhost:3000`

## 📚 Possible Improvements
1. Client was made using an older version of React using some Boilerplate Code, the project can be upgraded to a newer React Version.
2. Client lacks functionality besides displaying the Data. It would have been great to implement functionality for adding / editing / deleting heroes.
3. Server start-up is a bit dirty due to the way tests are run. There is probably a cleaner way to write it
4. Server could interact with a Real Database to provide data persistence, currently if the server is restarted any manual data created by the User is lost.
5. Overall requests logging and response format can be improved, especially for errors.
6. Add more API Unit Tests
_____________________
- 🎉 Happy Coding! 🌟

