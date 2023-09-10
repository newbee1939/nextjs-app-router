import { Suspense } from "react";
import { ClientComponent } from "./components/ClientComponent";
import Loading from "./components/loading";
import { ServerComponent } from "./components/ServerComponent";

export default async function Home() {
  console.log("これはサーバー側で実行されます");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <ClientComponent />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
}
