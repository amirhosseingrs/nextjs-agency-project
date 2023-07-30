import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();
  const hashedPass = await bcrypt.hash(password, 10);

  const newUser = new User({ name, email, password: hashedPass });
  try {
    await newUser.save();
    return new Response("User has been created successfully", { status: 201 });
  } catch (error) {
    return new Response(err.message, { status: 500 });
  }
};
