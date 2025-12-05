# Enhanced Todo List (localStorage + Search)

This project is an Enhanced Todo List Application built using HTML, CSS, and JavaScript.  
It supports adding tasks, marking tasks as completed, deleting tasks, real-time searching, and storing all tasks persistently using localStorage.

---

##  Features

### 1. Add Tasks  
Users can type a task and add it to the list.

### 2. Mark Tasks as Completed  
Clicking on a task toggles its completed state (shown with a line-through).

### 3. Delete Tasks  
Each task has a delete button to remove it from the list.

### 4. Real-Time Search  
Users can filter tasks instantly using the search bar.

### 5. Persistent Storage  
All tasks are stored in localStorage as a JSON array.

Each task object includes:
- `id`: Unique ID
- `text`: Task description
- `completed`: Boolean completion status

---

##  Example LocalStorage Data

```json
[
  {
    "id": 1736081062345,
    "text": "Complete JS Assignment",
    "completed": false
  },
  {
    "id": 1736081066789,
    "text": "Study for GATE",
    "completed": true
  }
]
