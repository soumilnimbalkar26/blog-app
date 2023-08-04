import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        {/* <span className="headerTitleLg">GAMING BLOG</span> */}
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1601153211050-ae2e1fa428d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&w=1000&q=80"
        alt=""
      />
    </div>
  );
}
