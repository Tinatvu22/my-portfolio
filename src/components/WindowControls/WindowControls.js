import './WindowControls.css';

function WindowControls() {
  return (
    <div className="window-controls">
      <button className="control-btn minimize" title="Minimize">
        <img src="/minimize.png" alt="Minimize" />
      </button>
      <button className="control-btn maximize" title="Maximize">
        <img src="/maximize.png" alt="Maximize" />
      </button>
      <button className="control-btn close" title="Close">
        <img src="/close.png" alt="Close" />
      </button>
    </div>
  );
}

export default WindowControls;