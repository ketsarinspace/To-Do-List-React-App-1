const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="row justify-content-end">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
            placeholder="What do you need to do? "
          />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
