import React from 'react';

function Alert (props) {

  let newArr = []
  for (let i = 0; i < props.alert.length; i++) {
    newArr.push(props.alert[i].split('#'))
  }

  let arr = []
  for (let i = 0; i < newArr.length; i++) {
    arr.push(newArr[i][0])
  }

  let obj = {}

  obj["title"] = arr[0]
  obj["type"] = arr[1].trim()
  obj["date"] = arr[2]
  obj["content"] = arr[3]


  return (
    <div className="alert">
      <div>
        <p>{obj.date}</p>
      </div>
      <div>
        <h1>{obj.title}</h1>
        <p className={obj.type === "New" ? "alert__type alert__type--blue" : "alert__type alert__type--green"}>{obj.type}</p>
        <p>{obj.content}</p>
      </div>
    </div>
  )
}

export default Alert;
