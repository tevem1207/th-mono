"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  content: z.string().min(1, "내용을 입력해주세요."),
});

type FormValues = z.infer<typeof schema>;

export default function AdminResourcesPage() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/resource", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess(true);
      reset();
    } else {
      setSuccess(false);
      alert("등록 실패");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">리소스 등록</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">내용</label>
          <textarea
            {...register("content")}
            className="w-full border p-2 rounded"
            placeholder="리소스 내용을 입력하세요"
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          등록
        </button>
      </form>
      {success && <p className="text-green-600 mt-4">등록이 완료되었습니다!</p>}
    </div>
  );
}
