export default function Layout({ children }) {
  return (
    <div>

      <div className="top-container">
        <div style={{ color: '#0000ff', fontSize: 30, textAlign: "center"}}>
          JB WEBSITE
        </div>
      </div>

      <div style={{ textAlign: "center"}}>{children}</div>
      <div style={{ textAlign: "center"}}>{children}</div>
      <div style={{ textAlign: "center"}}>{children}</div>
      <div style={{ textAlign: "center"}}>{children}</div>
      <div style={{ textAlign: "center"}}>{children}</div>
      <div style={{ textAlign: "center"}}>{children}</div>
      <div style={{ textAlign: "center"}}>{children}</div>
      <div style={{ textAlign: "center"}}>{children}</div>

      <div className="bottom-container">
        <div className="info">
          <span style={{ display: "block"}} >(주)세림E&C</span>
          <span style={{ display: "block"}}>전화번호: 010-xxxx-xxxx</span>
          <span style={{ display: "block"}}>Email: wnsqja8888@naver.com</span>
        </div>
      </div>

    </div>
  )
}