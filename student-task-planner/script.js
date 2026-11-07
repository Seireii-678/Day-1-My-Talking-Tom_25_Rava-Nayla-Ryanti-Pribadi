// Helper: make a date string (YYYY-MM-DD) that is `days` from today.
function dateFromToday(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

// Sample assignments. Dates are relative to today so the demo always looks fresh.
const assignments = [
  { id: 1, title: "Intro to Programming: Lab 3",  due: dateFromToday(-1), completed: false },
  { id: 2, title: "Statistics problem set",       due: dateFromToday(2),  completed: false },
  { id: 3, title: "Writing 101: Reflection essay", due: dateFromToday(5),  completed: false },
  { id: 4, title: "Design Basics: Moodboard",     due: dateFromToday(-4), completed: true  },
  { id: 5, title: "Physics quiz prep",            due: dateFromToday(8),  completed: false },
];

let currentFilter = "all";

const listEl = document.getElementById("list");
const emptyEl = document.getElementById("empty");
const summaryEl = document.getElementById("summary");
const filterButtons = document.querySelectorAll(".filter");

function daysUntil(dateStr) {
  const today = new Date(dateFromToday(0));
  return Math.round((new Date(dateStr) - today) / 86400000);
}

function dueLabel(task) {
  const diff = daysUntil(task.due);
  if (task.completed) return "Done";
  if (diff < 0) return `${Math.abs(diff)} day${diff === -1 ? "" : "s"} overdue`;
  if (diff === 0) return "Due today";
  return `${diff} day${diff === 1 ? "" : "s"} left`;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric", timeZone: "UTC",
  });
}

function visibleTasks() {
  if (currentFilter === "pending") return assignments.filter(t => !t.completed);
  if (currentFilter === "completed") return assignments.filter(t => t.completed);
  return assignments;
}

function render() {
  const tasks = visibleTasks();
  listEl.innerHTML = "";

  tasks.forEach(task => {
    const late = !task.completed && daysUntil(task.due) < 0;
    const li = document.createElement("li");
    li.className = "item" + (task.completed ? " is-done" : "") + (late ? " is-late" : "");
    li.innerHTML = `
      <input type="checkbox" id="task-${task.id}" ${task.completed ? "checked" : ""}
             aria-label="Mark ${task.title} as completed">
      <div class="item__body">
        <p class="item__title">${task.title}</p>
        <p class="item__meta">Due ${formatDate(task.due)}</p>
      </div>
      <span class="badge">${dueLabel(task)}</span>`;
    li.querySelector("input").addEventListener("change", () => toggle(task.id));
    listEl.appendChild(li);
  });

  emptyEl.hidden = tasks.length > 0;

  const pending = assignments.filter(t => !t.completed).length;
  summaryEl.textContent = `${pending} pending, ${assignments.length - pending} completed`;
}

function toggle(id) {
  const task = assignments.find(t => t.id === id);
  task.completed = !task.completed;
  render();
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    filterButtons.forEach(b => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active);
    });
    render();
  });
});

render();
