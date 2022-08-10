const Toggle = (props) => {
  const { className, label, noText } = props;
  let switchClass = className;
  // let id = label.toCamelCase();

  return (
    <div aria-label={label} className={switchClass}>
      <label className="switch__label" htmlFor={label}>
        <input
          role="switch"
          type="checkbox"
          className="switch__input"
          id={label}
        />
        <span className="switch__text" data-on="ON" data-off="OFF"></span>
        <span className="switch__handle"></span>
      </label>
    </div>
  );
};

export default Toggle;
