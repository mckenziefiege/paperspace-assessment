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

  function getDays() {
    let dateArr = arr[2].trim().split('/')
    let date = dateArr.map(val => parseInt(val, 10))
    let newDate = new Date(date[2], date[0] - 1, date[1])
    let todayDate = new Date()
    return Math.round((todayDate-newDate)/(1000*60*60*24));
  }

  let date = getDays();

  let obj = {}
  obj["title"] = arr[0]
  obj["type"] = arr[1].trim()
  obj["date"] = date
  obj["content"] = arr[3]

  return (
    <div className="alert">
      <div className="alert__date-container">
        <p className="alert__date">{obj.date} days ago</p>
      </div>
      <div className={props.border ? "alert__container alert__border" : "alert__container"}>
        <h1 className="alert__title">{obj.title}</h1>
        <p className={obj.type === "New" ? "alert__type alert__type--blue" : "alert__type alert__type--green"}>{obj.type}</p>
        <p className="alert__content">{obj.content}</p>
      </div>
    </div>
  )
}

export default Alert;
