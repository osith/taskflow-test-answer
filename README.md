
# 🚀 Task Management (MERN Stack test)  

## 🛠 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/baymaxfpo/taskflow-test.git 
cd taskflow
```

### 2️⃣ Install Dependencies  

#### 📌 Frontend  
```sh
npm install
```

#### 📌 Backend  
```sh
cd server
npm install
```

### 3️⃣ Setup Environment Variables  
Create a **.env** file inside the `/server` folder and add:  
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### 4️⃣ Start the Application  

#### 🚀 Start Backend Server  
```sh
for local environment
cd server
node src/index.js
backend deployed on render
```

#### 🚀 Start Frontend Development Server  
```sh
npm run dev
```
---

## Submission Instructions

1. **Fork this Repository**:
   - Click the "Fork" button at the top-right of this page to make a copy of this repository in your GitHub account.

2. **Clone the Repository Locally**:
   - After forking, clone the repository to your local machine:
     ```bash
     git clone https://github.com/YOUR_USERNAME/react-node-task-manager.git
     ```
3. **Complete the Task**:

  ## Test Problems (60 ~ 90mins)
  ## ⚡ Task 1 - Add Task List on the Nav bar
  - Display a list of tasks, showing task title, description, and status (e.g., "Incomplete" or "Complete").
  - Option to mark a task as complete or edit the task.

  ## ⚡ Task 2 - Display Login/Register page on before the landing page
  - Users are should to login first to access the full list of tabs.
    When they're logged out, only Dashboard panel should to be displayed.
  - Option to mark a task as complete or edit the task.

  ## ⚡ Task 3 - Task Filter
  - Allow users to filter tasks based on their completion status (e.g., show only completed or incomplete tasks).
  - Optional: Add a search feature to filter tasks by title.

  ## ⚡ Task 4 - Add User Log page on the Admin page
  - Display the user logs(login time, logout time, JWT token name, user name, role, ip address)
  - The user logs could be deleted by admin action - DELETE

4. **Commit Your Changes**:
   - Make sure you commit your changes regularly:
     ```bash
     git add .
     git commit -m "Task1 completed!"
     git push origin main
     ```

5. **Submit Your Repository Link**:
   - Once you’ve completed the task, send the link to your forked repository to bizownership018@gmail.com.
   - Please make sure that your repository is **public** or share access if it's private.