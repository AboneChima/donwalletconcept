import { a4 as head, _ as ensure_array_like } from "../../../chunks/index2.js";
import { P as ProjectCard } from "../../../chunks/ProjectCard.js";
import { p as projects } from "../../../chunks/projects.js";
function _page($$renderer) {
  head("rqn88j", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Projects - Don Wallet Concept</title>`);
    });
  });
  $$renderer.push(`<div class="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto"><div class="mb-16"><h1 class="text-5xl md:text-6xl font-bold mb-6">Our Work</h1> <p class="text-xl text-gray-accent max-w-2xl">A collection of spaces designed with precision, purpose, and passion.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    ProjectCard($$renderer, { project });
  }
  $$renderer.push(`<!--]--></div></div>`);
}
export {
  _page as default
};
