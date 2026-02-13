import { a4 as head, $ as attr, _ as ensure_array_like, a0 as stringify, a5 as bind_props } from "../../../../chunks/index2.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  let data = $$props["data"];
  const { project } = data;
  head("gygcht", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(project.title)} - Don Wallet Concept</title>`);
    });
  });
  $$renderer.push(`<div class="pt-20"><div class="h-[70vh] overflow-hidden"><img${attr("src", project.hero)}${attr("alt", project.title)} class="w-full h-full object-cover"/></div></div> <div class="max-w-5xl mx-auto px-6 lg:px-12 py-24"><div class="mb-16"><h1 class="text-5xl md:text-6xl font-bold mb-8">${escape_html(project.title)}</h1> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"><div><p class="text-sm text-gray-accent mb-2">Location</p> <p class="font-medium">${escape_html(project.location)}</p></div> <div><p class="text-sm text-gray-accent mb-2">Year</p> <p class="font-medium">${escape_html(project.year)}</p></div> <div><p class="text-sm text-gray-accent mb-2">Category</p> <p class="font-medium">${escape_html(project.category)}</p></div> `);
  if (project.size) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div><p class="text-sm text-gray-accent mb-2">Size</p> <p class="font-medium">${escape_html(project.size)}</p></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div> <div class="prose prose-lg max-w-none"><p class="text-xl leading-relaxed text-gray-600">${escape_html(project.description)}</p></div></div> <div class="space-y-12"><!--[-->`);
  const each_array = ensure_array_like(project.images);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$renderer.push(`<div class="overflow-hidden"><img${attr("src", image)}${attr("alt", `${stringify(project.title)} detail`)} class="w-full"/></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="mt-24 pt-12 border-t"><a href="/projects" class="inline-flex items-center gap-2 text-gray-accent hover:text-charcoal transition-colors"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to Projects</a></div></div>`);
  bind_props($$props, { data });
}
export {
  _page as default
};
