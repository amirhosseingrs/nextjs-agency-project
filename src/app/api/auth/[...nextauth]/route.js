import User from "@/models/User";
import { connect } from "mongoose";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialProvider({
      id: "Credential",
      name: "Credential",
      async authorize(credential) {
        await connect();
        try {
          const user = await User.findOne({ email: credential.email });
          if (!user) return new Error(`User ${credential.email} not found`);
          const isPassOk = await bcrypt.compare(
            user.password,
            credential.password
          );
          if (!isPassOk) return new Error("Wrong Credentials");
          return user;
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
