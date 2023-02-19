import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-62b2e90d><div class="about-me-section" data-v-62b2e90d><div class="intro" data-v-62b2e90d><h2 class="text-5xl mb-2" data-v-62b2e90d>Hi, I&#39;m Joven</h2><h3 class="text-2xl text-neutral-400 mb-5" data-v-62b2e90d>Frontend Developer</h3><p class="max-w-md" data-v-62b2e90d>I am a self-taught web developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience.</p></div><div class="image" data-v-62b2e90d></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62b2e90d"]]);

export { index as default };
//# sourceMappingURL=index-8c9eeee4.mjs.map
