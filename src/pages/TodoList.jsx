import { use, useState } from "react";

function TodoList() {
    const [task, setTask] = useState("");
    const [list, setList] = useState(["Mango", "Apple", "Banana"])
    const [toggle, setToggle] = useState(true)
    const [id, setId] = useState(null)


    function handleAddTask() {
        console.log(task);
        setList([task, ...list])
        setTask("")
    }
    function handleDelete(index) {
        console.log("user click", index);
        let newList = list.filter((val, i) => {
            console.log("list", i)
            return i !== index


        })
        console.log("new list", newList);
        setList(newList)
    }


    function handleEdit(index) {
        console.log("user click", index);
        setId(index)
        setToggle(false)
        let newListData = list.filter((val, i) => {
            console.log("list", i)
            return i == index


        })
        console.log(newListData);
        setTask(newListData[0])



    }


    function handleFinalEditTask() {
        console.log(id);

        let edit = list.map((val, i) => {
            console.log(val, i)

            if (id == i) {
                val = task
            }
            return val
        })
        console.log(edit);
        setList(edit)
        setToggle(true)
        setTask("")
        setId(null)
    }
    return (
        <>
            {/* INPUT CARD */}
            <div className="container mb-3 mt-3 d-flex justify-content-center align-items-center">
                <div className="card bg-black text-light shadow-lg rounded-4 p-4 w-100" style={{ maxWidth: "420px" }}>
                    <h5 className="text-center mb-4 fw-semibold text-uppercase">
                        Your Tasks
                    </h5>

                    <div className="row g-2">
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control form-control-lg bg-dark text-light border-secondary rounded-3"
                                placeholder="Add something important..."
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </div>

                        <div className="col-4 d-grid">

                            {
                                toggle ?
                                    <button
                                        className="btn btn-warning btn-lg fw-semibold rounded-3"
                                        onClick={handleAddTask}
                                    >
                                        Add
                                    </button> :
                                    <button
                                        className="btn btn-warning btn-lg fw-semibold rounded-3"
                                        onClick={handleFinalEditTask}
                                    >
                                        Edit
                                    </button>
                            }

                        </div>
                    </div>
                </div>
            </div>

            {/* TABLE */}
            <div className="container pb">
                <div className="card bg-black text-light shadow-lg rounded-4 p-3">
                    <div className="table-responsive">
                        <table className="table table-dark table-hover align-middle mb-0">
                            <thead className="text-uppercase text-secondary">
                                <tr>
                                    <th>#</th>
                                    <th>Task</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>





                            <tbody>
                                {list.length > 0 ? (
                                    list.map((value, i) => (
                                        <tr key={i}>
                                            <td className="fw-semibold">{i + 1}</td>
                                            <td>{value}</td>
                                            <td className="text-end">
                                                <button className="btn btn-sm btn-outline-warning me-2" onClick={() => handleEdit(i)}>
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDelete(i)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center text-secondary py-4">
                                            No Task Found
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoList;
