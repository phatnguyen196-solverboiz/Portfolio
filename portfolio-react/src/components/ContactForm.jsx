import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(e) {
    const { name, value } = e.target;
    setForm((old) => ({ ...old, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) {
      next.name = 'Chưa nhập họ tên';
    }
    if (!form.email.includes('@')) {
      next.email = 'Email chưa hợp lệ';
    }
    if (!form.message || form.message.trim().length < 10) {
      next.message = 'Tin nhắn phải có tối thiểu 10 ký tự';
    }
    setErrors(next);
    const isValid = Object.keys(next).length === 0;
    setSent(isValid);
  }

  return (
    <form className="max-w-xl mx-auto space-y-4" onSubmit={submit} noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Họ tên
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={update}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors"
          placeholder="Nhập họ và tên..."
        />
        {errors.name && <p className="text-sm text-red-500 font-medium">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors"
          placeholder="name@example.com"
        />
        {errors.email && <p className="text-sm text-red-500 font-medium">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Tin nhắn
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={update}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors"
          placeholder="Nhập nội dung tin nhắn..."
        />
        {errors.message && <p className="text-sm text-red-500 font-medium">{errors.message}</p>}
      </div>

      <button
        className="px-6 py-2.5 rounded-lg bg-teal-700 text-white font-medium hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 transition-colors cursor-pointer shadow-sm"
        type="submit"
      >
        Gửi tin nhắn
      </button>
      {sent && (
        <p className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-medium text-sm border border-emerald-200 dark:border-emerald-800">
          Đã gửi. Cảm ơn bạn!
        </p>
      )}
    </form>
  );
}
