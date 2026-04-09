import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Unfold Your Stories</span>
        <h1 className="headerTitleLg">The Modern Chronicle</h1>
      </div>
      <div className="headerImgOverlay"></div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
        alt="Hero Background"
      />
    </div>
  );
}
