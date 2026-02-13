import { Z as attr_class, _ as ensure_array_like, $ as attr, a0 as stringify, a1 as store_get, a2 as unsubscribe_stores, a3 as slot } from "../../chunks/index2.js";
import { g as getContext, e as escape_html } from "../../chunks/context.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const links = [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" }
    ];
    $$renderer2.push(`<nav${attr_class(`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${stringify("bg-transparent")}`)}><div class="max-w-7xl mx-auto px-6 lg:px-12"><div class="flex items-center justify-between h-20"><a href="/" class="text-2xl font-bold tracking-tight">Don Wallet Concept</a> <div class="hidden md:flex items-center gap-8"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`text-sm tracking-wide transition-colors hover:text-accent ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href ? "text-charcoal font-medium" : "text-gray-accent")}`)}>${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div> <button class="md:hidden" aria-label="Toggle menu"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
    }
    $$renderer2.push(`<!--]--></svg></button></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="bg-charcoal text-white py-12"><div class="max-w-7xl mx-auto px-6 lg:px-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div><h3 class="text-xl font-bold mb-4">Don Wallet Concept</h3> <p class="text-gray-accent text-sm">Designing Spaces With Precision</p></div> <div><h4 class="font-semibold mb-4">Quick Links</h4> <div class="space-y-2 text-sm"><a href="/projects" class="block hover:text-accent transition-colors">Projects</a> <a href="/about" class="block hover:text-accent transition-colors">About</a> <a href="/services" class="block hover:text-accent transition-colors">Services</a> <a href="/contact" class="block hover:text-accent transition-colors">Contact</a></div></div> <div><h4 class="font-semibold mb-4">Connect</h4> <div class="space-y-2 text-sm"><p>Email: <a href="mailto:info@donwallet.com" class="hover:text-accent transition-colors">info@donwallet.com</a></p> <p>Phone: <a href="tel:+1234567890" class="hover:text-accent transition-colors">+123 456 7890</a></p></div></div></div> <div class="mt-12 pt-8 border-t border-gray-accent/20 text-center text-sm text-gray-accent"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Don Wallet Concept. All rights reserved.</p></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="min-h-screen flex flex-col">`);
  Nav($$renderer);
  $$renderer.push(`<!----> <main class="flex-1"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
