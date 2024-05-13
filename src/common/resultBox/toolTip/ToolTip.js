import "./ToolTip.css";

export default function ToolTip() {
  return (
    <div className="ui-tooltip">
      <button className="button-ico button-set" data-tooltip-id="help" />
      <div data-tooltip-id="help">
        <span></span>
      </div>
    </div>
  );
}
