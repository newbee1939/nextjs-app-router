const sleep = async (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
};

export async function ServerComponent() {
  console.log("ServerComponentメソッドを実行しています。Sleepの前");
  await sleep(3000);

  const boxStyle = {
    width: "400px",
    height: "300px",
    backgroundColor: "#006400",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = { color: "white", footSize: "larger", fontWeight: "bold" };

  console.log("ServerComponentメソッドを実行しています。Sleepの後");
  return (
    <div style={boxStyle}>
      <p style={textStyle}>Server Component</p>
    </div>
  );
}
