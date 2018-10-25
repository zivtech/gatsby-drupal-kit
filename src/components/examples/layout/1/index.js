import React from "react"

export default ({ children }) => 
  <div className="wrapper">
    <div class="header">
      <h1>The BEST site</h1>
    </div>
    <div className="content">{children}</div>
    <div className="footer">
      Fake. copyright Me. All this content is awesome and mine.
    </div>
  </div>