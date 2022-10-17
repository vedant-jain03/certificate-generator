const Popup = (props) => {
  const { trigger, setPop } = props;
  return trigger ? (
    <div className="popup">
      <div className="popup-box">
        <button onClick={() => setPop(false)}>Close</button>
        <h1>Rules for Setup Printing Page</h1>
        <div className="content">
          <li>Destination: Save as PDF</li>
          <li>Pages: All</li>
          <li>Layout: Landscape</li>
          <h2>More Settings</h2>
          <li>Paper Size: A4</li>
          <li>Paper per Sheet:1</li>
          <li>Margins: none</li>
          <li>Scale: Custom 200</li>
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
