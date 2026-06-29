"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

const inputClass =
  "h-12 w-full rounded-xl border border-border/60 bg-background/80 px-4 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"

export function ContactForm() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" })

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const phone = form.phone.trim()

    if (name.length < 2) return toast.error("Please enter your name.")
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      return toast.error("Please enter a valid email address.")
    if (!/^[+]?[\d\s().-]{7,}$/.test(phone))
      return toast.error("Please enter a valid phone number.")
    if (form.message.trim().length < 5)
      return toast.error("Please add a short message.")

    toast.success(`Thanks, ${name}! We'll get back to you within one business day.`)
    setForm({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="Phone number"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@yourvenue.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your venue and how we can help…"
          className="w-full resize-none rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="shine group h-12 w-full rounded-xl bg-linear-to-r from-brand-violet via-brand-indigo to-brand-fuchsia text-white shadow-lg shadow-primary/30 transition-opacity hover:opacity-95"
      >
        Send message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </form>
  )
}
