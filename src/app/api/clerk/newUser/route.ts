import { db } from "@/server/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();
  const email = data.email_addresses[0].email_address;
  const firstName = data.first_name;
  const id = data.id;
  const lastName = data.last_name;
  const imageUrl = data.profile_image_url;
  const createdAt = new Date(data.created_at);
  console.log("CLerk User Data: ", data);
  await db.user.create({
    data: {
      email: email,
      firstName: firstName,
      id: id,
      lastName: lastName,
      imageUrl: imageUrl,
      createdAt: createdAt,
    },
  });
  return new Response("user created successfully", { status: 200 });
};
