"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";

import { Input } from "@/components/form/input";
import { SubscribeButton } from "@/components/subscribe-button";

const subscribeFormSchema = z.object({
  email: z.string().email({
    message: "E-mail mal formatado.",
  }),
});

type SubscribeFormData = z.infer<typeof subscribeFormSchema>;

export function SubscribeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeFormSchema),
  });

  const router = useRouter();

  async function onSubscribe(_: SubscribeFormData) {
    try {
      router.push("/confirm");
    } catch (e: any) {
      console.warn(e.message);
    }
  }

  return (
    <form
      className="flex flex-col gap-4 mt-4 transition-all"
      onSubmit={handleSubmit(onSubscribe)}
    >
      <div className="flex flex-col gap-2">
        <Input.Root>
          <Input.Prefix>
            <Mail className="text-black w-5 h-5" />
          </Input.Prefix>
          <Input.Control
            {...register("email")}
            placeholder="Seu email principal"
            className="font-medium placeholder:font-normal"
          />
        </Input.Root>

        {!!errors?.email && (
          <span className="text-sm text-rose-500">{errors.email.message}</span>
        )}
      </div>

      <SubscribeButton
        loading={isSubmitting}
        data-loading={isSubmitting}
        disabled={isSubmitting}
        type="submit"
      />
    </form>
  );
}
