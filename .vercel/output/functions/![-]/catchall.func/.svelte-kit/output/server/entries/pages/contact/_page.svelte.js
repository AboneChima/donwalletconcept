import { a4 as head, $ as attr } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  let formData = { name: "", email: "", message: "" };
  head("1bv7ezn", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Contact - Don Wallet Concept</title>`);
    });
  });
  $$renderer.push(`<div class="pt-32 pb-24 px-6 lg:px-12"><div class="max-w-5xl mx-auto mb-24"><h1 class="text-5xl md:text-6xl font-bold mb-8">Get In Touch</h1> <p class="text-2xl text-gray-accent leading-relaxed">Let's discuss your project and explore how we can create something exceptional together.</p></div> <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"><div><form class="space-y-6"><div><label for="name" class="block text-sm font-medium mb-2">Name</label> <input type="text" id="name"${attr("value", formData.name)} required="" class="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors"/></div> <div><label for="email" class="block text-sm font-medium mb-2">Email</label> <input type="email" id="email"${attr("value", formData.email)} required="" class="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors"/></div> <div><label for="message" class="block text-sm font-medium mb-2">Message</label> <textarea id="message" required="" rows="6" class="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors resize-none">`);
  const $$body = escape_html(formData.message);
  if ($$body) {
    $$renderer.push(`${$$body}`);
  }
  $$renderer.push(`</textarea></div> <button type="submit" class="w-full px-8 py-4 bg-charcoal text-white font-medium tracking-wide hover:bg-accent transition-all duration-300">Send Message</button> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></form></div> <div class="space-y-12"><div><h2 class="text-2xl font-bold mb-6">Contact Information</h2> <div class="space-y-4"><div><p class="text-sm text-gray-accent mb-1">Email</p> <a href="mailto:info@donwallet.com" class="text-lg hover:text-accent transition-colors">info@donwallet.com</a></div> <div><p class="text-sm text-gray-accent mb-1">Phone</p> <a href="tel:+1234567890" class="text-lg hover:text-accent transition-colors">+123 456 7890</a></div> <div><p class="text-sm text-gray-accent mb-1">WhatsApp</p> <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" class="text-lg hover:text-accent transition-colors">+123 456 7890</a></div></div></div> <div><h2 class="text-2xl font-bold mb-6">Office Hours</h2> <div class="space-y-2 text-gray-600"><p>Monday - Friday: 9:00 AM - 6:00 PM</p> <p>Saturday: 10:00 AM - 2:00 PM</p> <p>Sunday: Closed</p></div></div> <div><h2 class="text-2xl font-bold mb-6">Location</h2> <p class="text-gray-600 mb-4">123 Architecture Lane<br/> Design District<br/> New York, NY 10001</p> <div class="w-full h-64 bg-off-white flex items-center justify-center text-gray-accent">[Map Placeholder]</div></div></div></div></div>`);
}
export {
  _page as default
};
