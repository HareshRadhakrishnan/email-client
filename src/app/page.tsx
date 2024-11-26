import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <h1>
      {" "}
      <Button>Hello World</Button>
    </h1>
  );
}
