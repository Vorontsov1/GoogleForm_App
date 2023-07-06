import { z } from "zod";


export const PersonalInfoSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is invalid" }),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
