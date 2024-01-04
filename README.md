# DoubtShare - Real-Time Doubt Solving Platform

DoubtShare is an innovative real-time doubt solving platform crafted to cater to the academic needs of students. The platform facilitates seamless interaction between students and tutors, ensuring timely resolution of academic queries. Utilizing a tech stack comprising React for the front end, Node.js for the backend, and MongoDB for data storage, DoubtShare delivers an intuitive and efficient user experience.

## Features

### User Registration/Login Interface and API

#### Students
- **Name**
- **Email**
- **Password**
- **Class Grade**
- **Language**

#### Tutors
- **Name**
- **Email**
- **Password**
- **Language**
- **Doubt Subject Types**



### Student Dashboard Interface

- Intuitive dashboard design for students with easy navigation.
- Display number open doubts, accpeted doubts, and closed doubts.

### Tutor Dashboard Interface

- Display a list of notified doubts to tutors.
- Tutors can accept doubt requests, and accepted doubts will appear in the assigned doubt list.

### Doubt History Interface and API

- Section for students to view and manage their doubt history.
- APIs to retrieve and display doubt history with filtering options.


### Doubt Creation Interface and API

- Simple doubt creation form for students with options for doubt subject types.
- Clear and seamless doubt creation process.

  
**ALL APIs:**
- `POST /api/auth/register` - Signup API
- `POST /api/auth/login` - Login API.
- `POST /api/doubt/add` - Create Doubt  (Student).
- `GET /api/doubt/alldoubts` - Fetch All Doubts (Student).
- `GET /api/doubt/notified/:tutorId` - Fetch All notified Doubts of a particular tutor.
- `GET /api/doubt/:doubtId` -  Fetch details of a single doubt.
- `GET /api/doubt/assigned/:tutorId` -  Fetch All assigned Doubts of a particular tutor.
- `POST /api/doubt/accept/:doubtId` -  Accept Any notified Doubts of a particular tutor.

## Deployed Link:
  https://doubt-share-iota.vercel.app/
## Tech Stack

- **Frontend:** React
- **Backend:** Node.js
- **Database:** MongoDB

## Run Locally

Clone the project

```bash
  git clone https://github.com/MouS0926/DoubtShare.git
```

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install 

```

Start the frontend 

```bash
  npm run start
```


Thank You

