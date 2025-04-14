import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요."),
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
  subject: z.string().min(1, "제목을 입력해주세요."),
  message: z.string().min(1, "내용을 입력해주세요."),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;
