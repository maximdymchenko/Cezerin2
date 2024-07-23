import parse from "html-react-parser"
import { sanitize } from "isomorphic-dompurify"
import Paper from "material-ui/Paper"
import React from "react"
import style from "./style.sass"

const AppDescription = ({
  key,
  name,
  description,
  coverUrl,
  developer,
  enabled,
}) => (
  <div style={{ maxWidth: 720, width: "100%" }}>
    <Paper className="paper-box" zDepth={1}>
      <div className={style.innerBox.toString()}>
        <div className="row">
          <div className="col-xs-4">
            <img src={coverUrl} alt={name} className={style.cover.toString()} />
          </div>
          <div className="col-xs-8">
            <h1 className={style.title.toString()}>{name}</h1>
            <div className={style.developer.toString()}>{developer}</div>
            {/* {!enabled &&
              <RaisedButton label={messages.enable} primary disabled={loadingEnableDisable} onClick={enableService} />
            }
            {enabled &&
              <RaisedButton label={messages.disable} disabled={loadingEnableDisable} onClick={disableService} />
            } */}
          </div>
        </div>
        <div className={style.description.toString()}>{parse(sanitize(description))}</div>
      </div>
    </Paper>
  </div>
)

export default AppDescription
