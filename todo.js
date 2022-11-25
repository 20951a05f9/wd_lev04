const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
   
    return all.filter((item) => item.dueDate < new Date().toLocaleDateString("en-CA"));
    }
  
    const dueToday = () => {
        return all.filter((item) => item.dueDate === new Date().toLocaleDateString("en-CA"));

    }
  
    const dueLater = () => {
        return all.filter((item) => item.dueDate > new Date().toLocaleDateString("en-CA"));

    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list her
      return list.map(item => `${item.completed ? '[x]' : '[ ]'} ${item.title} ${item.dueDate === new Date().toLocaleDateString("en-CA") ? '' : item.dueDate}`).join("\n")
      
      
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
module.exports = todoList;