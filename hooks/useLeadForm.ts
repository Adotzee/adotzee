import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useUiStore } from "../store/useUiStore";
import { apiClient } from "../lib/apiClient";
import { ENDPOINTS } from "../lib/endpoints";
import { toast } from "sonner";
import { COMPANY_INFO } from "../lib/constants";

const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  phone: z.string().min(10, "Valid phone number required").max(15).trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  interestedCourse: z.string().min(1, "Please select or type a course").trim(),
  preferredCity: z.string().min(1, "Preferred city is required").trim(),
  message: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const STEPS = [
  { id: 1, title: "Basic Info", fields: ["name", "phone", "email"] },
  { id: 2, title: "Preferences", fields: ["interestedCourse", "preferredCity"] },
  { id: 3, title: "Personalize", fields: ["message"] },
];

export function useLeadForm() {
  const { closeLeadModal, selectedCourseForLead, leadSource } = useUiStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      interestedCourse: "",
      preferredCity: "",
      message: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (selectedCourseForLead) {
      form.setValue("interestedCourse", selectedCourseForLead);
    }
  }, [selectedCourseForLead, form]);

  const onSubmit = async (data: LeadFormValues) => {
    setIsSubmitting(true);
    try {
      const leadPayload = {
        fullName: data.name,
        phoneNumber: data.phone,
        email: data.email,
        courseInterested: data.interestedCourse,
        preferredCity: data.preferredCity,
        source: 1,
        notes: JSON.stringify({
          message: data.message,
          page: window.location.pathname,
          device: /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
          triggerSource: leadSource || "direct_cta",
        })
      };

      await apiClient.post(ENDPOINTS.LEADS.CREATE, leadPayload);
      toast.success("Submitted successfully! Redirecting...");

      const text = `Hi Adotzee, I need admission guidance.\n\nName: ${data.name}\nCourse: ${data.interestedCourse}\nPreferred City: ${data.preferredCity}\nPage: ${window.location.href}`;
      const whatsappUrl = `${COMPANY_INFO.socials.whatsapp}?text=${encodeURIComponent(text)}`;

      closeLeadModal();
      form.reset();
      setCurrentStep(0);

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 180000);
    } catch (error) {
      console.error("Failed to submit lead", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fields = STEPS[currentStep].fields as Array<keyof LeadFormValues>;
    const isValid = await form.trigger(fields);
    if (isValid && currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return {
    form,
    currentStep,
    setCurrentStep,
    isSubmitting,
    onSubmit,
    nextStep,
    prevStep,
  };
}
