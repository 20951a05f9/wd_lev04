const todoList = require("../todo");

const {
  all,
  add,
  markAsComplete,
  overdue,
  dueToday,
  dueLater,
  toDisplayableList,
} = todoList();

describe("Todo list test suite", () => {
  beforeAll(() => {
    add({
        title: "test 0",
        dueDate: new Date().toLocaleDateString("en-CA"),
        completed: false,
      });
      add({
        title: "test 1",
        dueDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        completed: false,
      });
      add({
        title: "test 2",
        dueDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        completed: false,
      });
      add({
        title: "test 3",
        dueDate: new Date().toLocaleDateString("en-CA"),
        completed: false,
      });
      add({
        title: "test 4",
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        completed: false,
      });
    
  });
  test("Should add new todo", () => {
    const length_before_adding = all.length;
    add({
      title: "test todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(length_before_adding + 1);
  });
  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test('should retrive overdue items', () => { 
    overdue().forEach((e)=>{
        expect(e.dueDate< new Date().toLocaleDateString('en-CA')).toBe(true)
    });
   });
  test('should retrive due today items', () => { 
    dueToday().forEach((e)=>{
        expect(e.dueDate === new Date().toLocaleDateString('en-CA')).toBe(true)
    });
   });
  test('should retrive due later items', () => { 
    dueLater().forEach((e)=>{
        expect(e.dueDate > new Date().toLocaleDateString('en-CA')).toBe(true)
    });
   });
   
});
