"use client";

export function ClientComponent() {
  const boxStyle = {
    width: "400px",
    height: "300px",
    backgroundColor: "yellow",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = { footSize: "larger", fontWeight: "bold", color: "black" };

  console.log("Client Componentを実行しています");

  return (
    <div style={boxStyle}>
      <p style={textStyle}>Client Component</p>
    </div>
  );
}
