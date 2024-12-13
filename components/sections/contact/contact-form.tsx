"use client";

import { Form } from "@/components/ui/form";
import { FormFields } from "./form-fields";
import { SubmitButton } from "./submit-button";
import { useContactForm } from "@/lib/hooks/use-contact-form";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const { form, isSubmitting, onSubmit } = useContactForm({
    onSuccess: () => {
      onSuccess?.();
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        <FormFields form={form} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
}