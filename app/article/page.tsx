"use client";

export default function Home() {
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifySelf: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontWeight: "800",
        }}
      >
        오늘의 질문
      </h1>
      <div
        style={{
          backgroundColor: "#b8b6b6",
          color: "#2A2A2A",
          fontWeight: "bold",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        임산부의 정확한 뜻을 알고 계시나요?
      </div>
    </div>
  );
}
