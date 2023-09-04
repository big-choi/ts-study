"use strict";
// app.ts
// 할 일 목록
var tasks = [];
// HTML 요소 가져오기
var taskInput = document.getElementById('taskInput');
var addTaskButton = document.getElementById('addTask');
var taskList = document.getElementById('taskList');
// 할 일 추가 함수
function addTask() {
    var text = taskInput.value.trim();
    if (!text)
        return;
    var newTask = {
        id: tasks.length + 1,
        text: text,
        completed: false,
    };
    tasks.push(newTask);
    taskInput.value = '';
    renderTask(newTask);
}
// 할 일 렌더링 함수
function renderTask(task) {
    var taskItem = document.createElement('li');
    taskItem.innerHTML = "\n        <input type=\"checkbox\" id=\"task-".concat(task.id, "\" ").concat(task.completed ? 'checked' : '', ">\n        <label for=\"task-").concat(task.id, "\">").concat(task.text, "</label>\n    ");
    taskList.appendChild(taskItem);
}
// 할 일 추가 버튼 클릭 이벤트 처리
addTaskButton.addEventListener('click', addTask);
