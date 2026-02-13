import { a4 as head, Z as attr_class, _ as ensure_array_like, a0 as stringify } from "../../chunks/index2.js";
import { P as ProjectCard } from "../../chunks/ProjectCard.js";
import { p as projects } from "../../chunks/projects.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const featuredProjects = projects.slice(0, 3);
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Don Wallet Concept - Designing Spaces With Precision</title>`);
      });
    });
    $$renderer2.push(`<section class="relative h-screen flex items-center justify-center bg-charcoal text-white overflow-hidden"><div class="absolute inset-0 bg-cover bg-center opacity-40" style="background-image: url('/images/hero-bg.jpg')"></div> <div${attr_class(`relative z-10 text-center px-6 transition-all duration-1000 ${stringify("opacity-0 translate-y-8")}`)}><h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Designing Spaces<br/>With Precision</h1> <p class="text-xl md:text-2xl text-gray-accent mb-12 max-w-2xl mx-auto">Where architecture meets intention. Creating timeless spaces that inspire.</p> <a href="/projects" class="inline-block px-8 py-4 bg-white text-charcoal font-medium tracking-wide hover:bg-accent hover:text-white transition-all duration-300">View Projects</a></div></section> <section class="py-24 px-6 lg:px-12 max-w-7xl mx-auto"><div class="mb-16"><h2 class="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2> <p class="text-gray-accent text-lg">Selected projects that define our approach</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
    const each_array = ensure_array_like(featuredProjects);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let project = each_array[$$index];
      ProjectCard($$renderer2, { project });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="py-24 px-6 lg:px-12 bg-off-white"><div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div><img src="/images/architect-portrait.jpg" alt="Architect" class="w-full aspect-square object-cover"/></div> <div><h2 class="text-4xl font-bold mb-6">Design Philosophy</h2> <p class="text-lg text-gray-600 mb-6 leading-relaxed">Every project begins with understanding the space, the context, and the people who will
				inhabit it. We believe in architecture that speaks through silence, where every line has
				purpose.</p> <a href="/about" class="inline-block px-6 py-3 border-2 border-charcoal text-charcoal font-medium hover:bg-charcoal hover:text-white transition-all duration-300">Learn More</a></div></div></section> <section class="py-32 px-6 text-center"><h2 class="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Exceptional</h2> <p class="text-xl text-gray-accent mb-12 max-w-2xl mx-auto">Ready to bring your vision to life? Let's discuss your project.</p> <a href="/contact" class="inline-block px-8 py-4 bg-charcoal text-white font-medium tracking-wide hover:bg-accent transition-all duration-300">Get In Touch</a></section>`);
  });
}
export {
  _page as default
};
