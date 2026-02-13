import { $ as attr, a0 as stringify, a5 as bind_props } from "./index2.js";
import { e as escape_html } from "./context.js";
function ProjectCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let project = $$props["project"];
    $$renderer2.push(`<a${attr("href", `/projects/${stringify(project.slug)}`)} class="group block overflow-hidden bg-off-white transition-transform duration-500 hover:scale-[1.02]"><div class="aspect-[4/3] overflow-hidden"><img${attr("src", project.thumbnail)}${attr("alt", project.title)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/></div> <div class="p-6"><h3 class="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">${escape_html(project.title)}</h3> <div class="flex items-center gap-4 text-sm text-gray-accent"><span>${escape_html(project.location)}</span> <span>•</span> <span>${escape_html(project.year)}</span></div></div></a>`);
    bind_props($$props, { project });
  });
}
export {
  ProjectCard as P
};
