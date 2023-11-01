import React from 'react'

const Progress = (props) => {
  return (
    <>
      <div style={{ paddingTop: 30, }}>
      {/* <hr style={{ border: "2px solid #ddd" }} /> */}
      <div style={{ marginTop: 30, display: "flex" ,columnGap:40,width:"80%",marginBottom:"2rem"}}>
        <div >{props.children}</div>
        <div>
          <h2 className="h5" >{props.label}</h2>
          <p >{props.description}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Progress
