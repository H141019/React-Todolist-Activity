import React, { useState } from "react";
import "../Component/Todo.css";

function Todo(props) {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    // setListData([...listData,activity])
    // console.log(listData)

    setListData((listData) => {
      const updateList = [...listData, activity];
      setActivity("");
      console.log(updateList);
      return updateList;
    });
  }

  function removeActivity(i) {
    const updateListData = listData.filter((element, id) => {
      return i !== id;
    });
    setListData(updateListData);
  }

  return (
    <>
      <div className="container">
        <div className="header">Todo List</div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button onClick={addActivity}> Add Task</button>
        <p className="List-Heading">Here is Your List</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      removeActivity(i);
                    }}
                  >
                    Remove(-)
                  </button>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Todo;
