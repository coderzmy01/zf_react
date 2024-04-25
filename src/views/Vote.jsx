const Vote = function Vote(props) {
  let { title } = props;
  let supNum = 10,
    oppNum = 5;

  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">{title}</h2>
        <span>{supNum + oppNum}人</span>
      </div>
      <div className="main">
        <p>支持人数：{supNum}人</p>
        <p>反对人数：{oppNum}人</p>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            supNum++;
            console.log(supNum);
          }}
        >
          支持
        </button>

        <button
          onClick={() => {
            oppNum++;
            console.log(oppNum);
          }}
        >
          反对
        </button>
      </div>
    </div>
  );
};
export default Vote;
