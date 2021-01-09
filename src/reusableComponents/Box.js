const Box = ({ children, leftTitle, rightComponent }) => {
  return (
    <div class="box">
      <div class="title">
        <div class="left">{leftTitle}</div>
        {rightComponent && <div class="right">{rightComponent}</div>}
      </div>
      {children}
    </div>
  );
};

export default Box;