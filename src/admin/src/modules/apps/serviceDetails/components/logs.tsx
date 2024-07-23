import messages from "lib/text"
import Paper from "material-ui/Paper"
import moment from "moment"
import React from "react"
import style from "./style.sass"

const ServiceLogs = ({ logs }) => {
  const list = logs.map((action, index) => {
    const date = moment(action.date)
    const dateFormated = date.fromNow()
    return (
      <div className={style.logsItem.toString()} key={index}>
        <div className={style.logMessage.toString()}>{action.message}</div>
        <div className={style.logDate.toString()}>{dateFormated}</div>
      </div>
    )
  })

  return (
    <div style={{ maxWidth: 720, width: "100%" }}>
      <div className="gray-title" style={{ margin: "0px 0px 0px 20px" }}>
        {messages.serviceLogs}
      </div>
      <Paper className="paper-box" zDepth={1}>
        <div className={style.logsBox.toString()}>{list}</div>
      </Paper>
    </div>
  )
}

export default ServiceLogs
