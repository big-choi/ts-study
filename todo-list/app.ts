// app.ts

// Task 타입 정의
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

// 할 일 목록
const tasks: Task[] = [];

// HTML 요소 가져오기
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addTaskButton = document.getElementById('addTask') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

// 할 일 추가 함수
function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    const newTask: Task = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    tasks.push(newTask);
    taskInput.value = '';
    renderTask(newTask);
  }
}

// 할 일 렌더링 함수
function renderTask(task: Task) {
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
        <input type="checkbox" id="task-${task.id}" ${task.completed ? 'checked' : ''}>
        <label for="task-${task.id}">${task.text}</label>
    `;
  taskList.appendChild(taskItem);
}

// 할 일 추가 버튼 클릭 이벤트 처리
addTaskButton.addEventListener('click', addTask);
