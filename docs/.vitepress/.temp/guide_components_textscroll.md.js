import { defineComponent, ref, reactive, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"文字滚动 TextScroll","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components/textscroll.md","filePath":"guide/components/textscroll.md","lastUpdated":1733449290000}');
const __default__ = { name: "guide/components/textscroll.md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  setup(__props) {
    const scrollItems = ref([
      {
        title: "美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说",
        href: "https://blog.csdn.net/Dandrose?type=blog"
      },
      {
        title: "《麦田里的守望者》首次出版于1951年",
        href: "https://blog.csdn.net/Dandrose?type=blog"
      },
      {
        title: "塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内"
      },
      {
        title: "并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界",
        href: "https://blog.csdn.net/Dandrose?type=blog"
      },
      {
        title: "愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣",
        href: "https://blog.csdn.net/Dandrose?type=blog"
      }
    ]);
    const singleItem = {
      title: "请用一只玫瑰纪念我 🌹",
      href: "https://blog.csdn.net/Dandrose?type=blog"
    };
    const textScroll = ref();
    const disabled = ref(true);
    const vertical = ref(false);
    function onClick(item) {
      console.log("item", item);
    }
    function handleStart() {
      textScroll.value.start();
      disabled.value = true;
    }
    function handleStop() {
      textScroll.value.stop();
      disabled.value = false;
    }
    function handleReset() {
      textScroll.value.reset();
      disabled.value = false;
    }
    const state = reactive({
      single: false,
      height: 60,
      fontSize: 18,
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.88)",
      backgroundColor: "#FFF",
      amount: 4,
      gap: 20,
      speed: 48,
      vertical: false,
      verticalInterval: 3e3
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GlobalElement = resolveComponent("GlobalElement");
      const _component_TextScroll = resolveComponent("TextScroll");
      const _component_Flex = resolveComponent("Flex");
      const _component_Space = resolveComponent("Space");
      const _component_Switch = resolveComponent("Switch");
      const _component_Button = resolveComponent("Button");
      const _component_Row = resolveComponent("Row");
      const _component_Col = resolveComponent("Col");
      const _component_Slider = resolveComponent("Slider");
      const _component_InputNumber = resolveComponent("InputNumber");
      const _component_Input = resolveComponent("Input");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-67d2dd96><h1 id="文字滚动-textscroll" tabindex="-1" data-v-67d2dd96>文字滚动 TextScroll <a class="header-anchor" href="#文字滚动-textscroll" aria-label="Permalink to &quot;文字滚动 TextScroll&quot;" data-v-67d2dd96>​</a></h1>`);
      _push(ssrRenderComponent(_component_GlobalElement, null, null, _parent));
      _push(`<p data-v-67d2dd96><em data-v-67d2dd96>文字滚动</em></p><h2 id="何时使用" tabindex="-1" data-v-67d2dd96>何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;" data-v-67d2dd96>​</a></h2><ul data-v-67d2dd96><li data-v-67d2dd96>当需要公告消息水平或垂直滚动展示时</li></ul><h2 id="水平文字滚动" tabindex="-1" data-v-67d2dd96>水平文字滚动 <a class="header-anchor" href="#水平文字滚动" aria-label="Permalink to &quot;水平文字滚动&quot;" data-v-67d2dd96>​</a></h2>`);
      _push(ssrRenderComponent(_component_TextScroll, {
        items: scrollItems.value,
        onClick
      }, null, _parent));
      _push(`<details class="details custom-block" data-v-67d2dd96><summary data-v-67d2dd96>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-67d2dd96><button title="Copy Code" class="copy" data-v-67d2dd96></button><span class="lang" data-v-67d2dd96>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-67d2dd96><code data-v-67d2dd96><span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96> &#39;vue&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>[]&gt;([</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;首次出版于1951年&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  }</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>])</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}" data-v-67d2dd96>item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>) {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}" data-v-67d2dd96>  // 获取点击的 item</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  console.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;item&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, item)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>TextScroll</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>items</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span></code></pre></div></details><h2 id="单条文字滚动" tabindex="-1" data-v-67d2dd96>单条文字滚动 <a class="header-anchor" href="#单条文字滚动" aria-label="Permalink to &quot;单条文字滚动&quot;" data-v-67d2dd96>​</a></h2>`);
      _push(ssrRenderComponent(_component_TextScroll, {
        items: singleItem,
        single: "",
        width: 280,
        "item-style": { fontSize: "24px", fontWeight: 600, color: "darkred" },
        onClick
      }, null, _parent));
      _push(`<details class="details custom-block" data-v-67d2dd96><summary data-v-67d2dd96>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-67d2dd96><button title="Copy Code" class="copy" data-v-67d2dd96></button><span class="lang" data-v-67d2dd96>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-67d2dd96><code data-v-67d2dd96><span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96> &#39;vue&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> singleItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;请用一只玫瑰纪念我 🌹&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}" data-v-67d2dd96>item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>) {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}" data-v-67d2dd96>  // 获取点击的 item</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  console.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;item&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, item)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>TextScroll</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>items</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>singleItem</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>    single</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>width</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>280</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>item-style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>{ fontSize: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;24px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, fontWeight: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>600</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, color: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;darkred&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> }</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span></code></pre></div></details><h2 id="垂直文字滚动" tabindex="-1" data-v-67d2dd96>垂直文字滚动 <a class="header-anchor" href="#垂直文字滚动" aria-label="Permalink to &quot;垂直文字滚动&quot;" data-v-67d2dd96>​</a></h2>`);
      _push(ssrRenderComponent(_component_TextScroll, {
        style: { "background-color": "#e6f4ff" },
        items: scrollItems.value,
        "item-style": { fontSize: "20px" },
        vertical: "",
        onClick
      }, null, _parent));
      _push(`<details class="details custom-block" data-v-67d2dd96><summary data-v-67d2dd96>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-67d2dd96><button title="Copy Code" class="copy" data-v-67d2dd96></button><span class="lang" data-v-67d2dd96>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-67d2dd96><code data-v-67d2dd96><span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96> &#39;vue&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>[]&gt;([</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;首次出版于1951年&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  }</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>])</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}" data-v-67d2dd96>item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>) {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}" data-v-67d2dd96>  // 获取点击的 item</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  console.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;item&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, item)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>TextScroll</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>    style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>background-color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>#e6f4ff</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>items</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>item-style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>{ fontSize: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;20px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> }</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>    vertical</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span></code></pre></div></details><h2 id="自定义链接悬浮样式" tabindex="-1" data-v-67d2dd96>自定义链接悬浮样式 <a class="header-anchor" href="#自定义链接悬浮样式" aria-label="Permalink to &quot;自定义链接悬浮样式&quot;" data-v-67d2dd96>​</a></h2>`);
      _push(ssrRenderComponent(_component_TextScroll, {
        items: scrollItems.value,
        "href-hover-color": "#ff6900",
        onClick
      }, null, _parent));
      _push(`<details class="details custom-block" data-v-67d2dd96><summary data-v-67d2dd96>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-67d2dd96><button title="Copy Code" class="copy" data-v-67d2dd96></button><span class="lang" data-v-67d2dd96>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-67d2dd96><code data-v-67d2dd96><span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96> &#39;vue&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>[]&gt;([</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;首次出版于1951年&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  }</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>])</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}" data-v-67d2dd96>item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>) {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}" data-v-67d2dd96>  // 获取点击的 item</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  console.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;item&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, item)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>TextScroll</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>items</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> href-hover-color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;#ff6900&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span></code></pre></div></details><h2 id="自定义样式" tabindex="-1" data-v-67d2dd96>自定义样式 <a class="header-anchor" href="#自定义样式" aria-label="Permalink to &quot;自定义样式&quot;" data-v-67d2dd96>​</a></h2>`);
      _push(ssrRenderComponent(_component_TextScroll, {
        style: { "background-color": "#e6f4ff", "border-radius": "12px" },
        items: scrollItems.value,
        "item-style": { fontSize: "28px", color: "#FF9800" },
        amount: 3,
        height: 60,
        onClick
      }, null, _parent));
      _push(`<details class="details custom-block" data-v-67d2dd96><summary data-v-67d2dd96>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-67d2dd96><button title="Copy Code" class="copy" data-v-67d2dd96></button><span class="lang" data-v-67d2dd96>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-67d2dd96><code data-v-67d2dd96><span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96> &#39;vue&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>[]&gt;([</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;首次出版于1951年&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  }</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>])</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}" data-v-67d2dd96>item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>) {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}" data-v-67d2dd96>  // 获取点击的 item</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  console.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;item&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, item)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>TextScroll</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>    style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>background-color</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>#e6f4ff</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>; </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>border-radius</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>12</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>px</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>items</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>item-style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>{ fontSize: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;28px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, color: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;#FF9800&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> }</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>amount</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>3</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>height</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>60</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span></code></pre></div></details><h2 id="使用-methods" tabindex="-1" data-v-67d2dd96>使用 Methods <a class="header-anchor" href="#使用-methods" aria-label="Permalink to &quot;使用 Methods&quot;" data-v-67d2dd96>​</a></h2>`);
      _push(ssrRenderComponent(_component_Flex, { vertical: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Space, { vertical: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Space, { align: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` vertical: `);
                        _push4(ssrRenderComponent(_component_Switch, {
                          modelValue: vertical.value,
                          "onUpdate:modelValue": ($event) => vertical.value = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" vertical: "),
                          createVNode(_component_Switch, {
                            modelValue: vertical.value,
                            "onUpdate:modelValue": ($event) => vertical.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Space, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Button, {
                          type: "primary",
                          disabled: disabled.value,
                          onClick: handleStart
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`开始`);
                            } else {
                              return [
                                createTextVNode("开始")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { onClick: handleStop }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`暂停`);
                            } else {
                              return [
                                createTextVNode("暂停")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          type: "primary",
                          ghost: "",
                          onClick: handleReset
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`重置`);
                            } else {
                              return [
                                createTextVNode("重置")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Button, {
                            type: "primary",
                            disabled: disabled.value,
                            onClick: handleStart
                          }, {
                            default: withCtx(() => [
                              createTextVNode("开始")
                            ]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(_component_Button, { onClick: handleStop }, {
                            default: withCtx(() => [
                              createTextVNode("暂停")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, {
                            type: "primary",
                            ghost: "",
                            onClick: handleReset
                          }, {
                            default: withCtx(() => [
                              createTextVNode("重置")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Space, { align: "center" }, {
                      default: withCtx(() => [
                        createTextVNode(" vertical: "),
                        createVNode(_component_Switch, {
                          modelValue: vertical.value,
                          "onUpdate:modelValue": ($event) => vertical.value = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Space, null, {
                      default: withCtx(() => [
                        createVNode(_component_Button, {
                          type: "primary",
                          disabled: disabled.value,
                          onClick: handleStart
                        }, {
                          default: withCtx(() => [
                            createTextVNode("开始")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(_component_Button, { onClick: handleStop }, {
                          default: withCtx(() => [
                            createTextVNode("暂停")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, {
                          type: "primary",
                          ghost: "",
                          onClick: handleReset
                        }, {
                          default: withCtx(() => [
                            createTextVNode("重置")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TextScroll, {
              ref_key: "textScroll",
              ref: textScroll,
              vertical: vertical.value,
              items: scrollItems.value,
              onClick
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Space, { vertical: "" }, {
                default: withCtx(() => [
                  createVNode(_component_Space, { align: "center" }, {
                    default: withCtx(() => [
                      createTextVNode(" vertical: "),
                      createVNode(_component_Switch, {
                        modelValue: vertical.value,
                        "onUpdate:modelValue": ($event) => vertical.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Space, null, {
                    default: withCtx(() => [
                      createVNode(_component_Button, {
                        type: "primary",
                        disabled: disabled.value,
                        onClick: handleStart
                      }, {
                        default: withCtx(() => [
                          createTextVNode("开始")
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(_component_Button, { onClick: handleStop }, {
                        default: withCtx(() => [
                          createTextVNode("暂停")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Button, {
                        type: "primary",
                        ghost: "",
                        onClick: handleReset
                      }, {
                        default: withCtx(() => [
                          createTextVNode("重置")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TextScroll, {
                ref_key: "textScroll",
                ref: textScroll,
                vertical: vertical.value,
                items: scrollItems.value,
                onClick
              }, null, 8, ["vertical", "items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<details class="details custom-block" data-v-67d2dd96><summary data-v-67d2dd96>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-67d2dd96><button title="Copy Code" class="copy" data-v-67d2dd96></button><span class="lang" data-v-67d2dd96>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-67d2dd96><code data-v-67d2dd96><span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96> &#39;vue&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>[]&gt;([</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;首次出版于1951年&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  }</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>])</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> textScroll</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>()</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>true</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>false</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> handleStart</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>() {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  textScroll.value.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>start</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>()</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  disabled.value </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> true</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> handleStop</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>() {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  textScroll.value.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>stop</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>()</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  disabled.value </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> false</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> handleReset</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>() {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  textScroll.value.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>reset</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>()</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  disabled.value </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> false</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}" data-v-67d2dd96>item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>) {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}" data-v-67d2dd96>  // 获取点击的 item</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  console.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;item&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, item)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#B31D28", "--shiki-light-font-style": "italic", "--shiki-dark": "#FDAEB7", "--shiki-dark-font-style": "italic" })}" data-v-67d2dd96> align</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;center&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        vertical:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Switch</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> type</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>disabled</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>handleStart</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;开始&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>handleStop</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;暂停&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Button</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> type</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ghost</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>handleReset</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;重置&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Button</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>TextScroll</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;textScroll&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>items</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span></code></pre></div></details><h2 id="自定义滚动速度" tabindex="-1" data-v-67d2dd96>自定义滚动速度 <a class="header-anchor" href="#自定义滚动速度" aria-label="Permalink to &quot;自定义滚动速度&quot;" data-v-67d2dd96>​</a></h2>`);
      _push(ssrRenderComponent(_component_TextScroll, {
        items: scrollItems.value,
        speed: 72,
        onClick
      }, null, _parent));
      _push(`<details class="details custom-block" data-v-67d2dd96><summary data-v-67d2dd96>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-67d2dd96><button title="Copy Code" class="copy" data-v-67d2dd96></button><span class="lang" data-v-67d2dd96>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-67d2dd96><code data-v-67d2dd96><span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96> &#39;vue&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>[]&gt;([</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;首次出版于1951年&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  }</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>])</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}" data-v-67d2dd96>item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>) {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}" data-v-67d2dd96>  // 获取点击的 item</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  console.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;item&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, item)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>TextScroll</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>items</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>speed</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>72</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span></code></pre></div></details><h2 id="文字滚动配置器" tabindex="-1" data-v-67d2dd96>文字滚动配置器 <a class="header-anchor" href="#文字滚动配置器" aria-label="Permalink to &quot;文字滚动配置器&quot;" data-v-67d2dd96>​</a></h2>`);
      _push(ssrRenderComponent(_component_Row, { gutter: [24, 12] }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` height: `);
                        _push4(ssrRenderComponent(_component_Slider, {
                          value: state.height,
                          "onUpdate:value": ($event) => state.height = $event,
                          min: 6,
                          max: 180
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" height: "),
                          createVNode(_component_Slider, {
                            value: state.height,
                            "onUpdate:value": ($event) => state.height = $event,
                            min: 6,
                            max: 180
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Flex, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" height: "),
                        createVNode(_component_Slider, {
                          value: state.height,
                          "onUpdate:value": ($event) => state.height = $event,
                          min: 6,
                          max: 180
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` fontSize: `);
                        _push4(ssrRenderComponent(_component_Slider, {
                          value: state.fontSize,
                          "onUpdate:value": ($event) => state.fontSize = $event,
                          min: 6,
                          max: 180
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" fontSize: "),
                          createVNode(_component_Slider, {
                            value: state.fontSize,
                            "onUpdate:value": ($event) => state.fontSize = $event,
                            min: 6,
                            max: 180
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Flex, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" fontSize: "),
                        createVNode(_component_Slider, {
                          value: state.fontSize,
                          "onUpdate:value": ($event) => state.fontSize = $event,
                          min: 6,
                          max: 180
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` fontWeight: `);
                        _push4(ssrRenderComponent(_component_InputNumber, {
                          value: state.fontWeight,
                          "onUpdate:value": ($event) => state.fontWeight = $event,
                          step: 100,
                          min: 100,
                          max: 1e3
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" fontWeight: "),
                          createVNode(_component_InputNumber, {
                            value: state.fontWeight,
                            "onUpdate:value": ($event) => state.fontWeight = $event,
                            step: 100,
                            min: 100,
                            max: 1e3
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Flex, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" fontWeight: "),
                        createVNode(_component_InputNumber, {
                          value: state.fontWeight,
                          "onUpdate:value": ($event) => state.fontWeight = $event,
                          step: 100,
                          min: 100,
                          max: 1e3
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Space, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` color: `);
                        _push4(ssrRenderComponent(_component_Input, {
                          value: state.color,
                          "onUpdate:value": ($event) => state.color = $event,
                          placeholder: "color"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" color: "),
                          createVNode(_component_Input, {
                            value: state.color,
                            "onUpdate:value": ($event) => state.color = $event,
                            placeholder: "color"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Space, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" color: "),
                        createVNode(_component_Input, {
                          value: state.color,
                          "onUpdate:value": ($event) => state.color = $event,
                          placeholder: "color"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` backgroundColor: `);
                        _push4(ssrRenderComponent(_component_Input, {
                          value: state.backgroundColor,
                          "onUpdate:value": ($event) => state.backgroundColor = $event,
                          placeholder: "backgroundColor"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" backgroundColor: "),
                          createVNode(_component_Input, {
                            value: state.backgroundColor,
                            "onUpdate:value": ($event) => state.backgroundColor = $event,
                            placeholder: "backgroundColor"
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Flex, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" backgroundColor: "),
                        createVNode(_component_Input, {
                          value: state.backgroundColor,
                          "onUpdate:value": ($event) => state.backgroundColor = $event,
                          placeholder: "backgroundColor"
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` amount: `);
                        _push4(ssrRenderComponent(_component_Slider, {
                          value: state.amount,
                          "onUpdate:value": ($event) => state.amount = $event,
                          min: 1,
                          max: scrollItems.value.length
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" amount: "),
                          createVNode(_component_Slider, {
                            value: state.amount,
                            "onUpdate:value": ($event) => state.amount = $event,
                            min: 1,
                            max: scrollItems.value.length
                          }, null, 8, ["value", "onUpdate:value", "max"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Flex, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" amount: "),
                        createVNode(_component_Slider, {
                          value: state.amount,
                          "onUpdate:value": ($event) => state.amount = $event,
                          min: 1,
                          max: scrollItems.value.length
                        }, null, 8, ["value", "onUpdate:value", "max"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` gap: `);
                        _push4(ssrRenderComponent(_component_Slider, {
                          value: state.gap,
                          "onUpdate:value": ($event) => state.gap = $event,
                          min: 10,
                          max: 100
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" gap: "),
                          createVNode(_component_Slider, {
                            value: state.gap,
                            "onUpdate:value": ($event) => state.gap = $event,
                            min: 10,
                            max: 100
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Flex, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" gap: "),
                        createVNode(_component_Slider, {
                          value: state.gap,
                          "onUpdate:value": ($event) => state.gap = $event,
                          min: 10,
                          max: 100
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` speed: `);
                        _push4(ssrRenderComponent(_component_Slider, {
                          value: state.speed,
                          "onUpdate:value": ($event) => state.speed = $event,
                          min: 10,
                          max: 100
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" speed: "),
                          createVNode(_component_Slider, {
                            value: state.speed,
                            "onUpdate:value": ($event) => state.speed = $event,
                            min: 10,
                            max: 100
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Flex, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" speed: "),
                        createVNode(_component_Slider, {
                          value: state.speed,
                          "onUpdate:value": ($event) => state.speed = $event,
                          min: 10,
                          max: 100
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Space, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` vertical: `);
                        _push4(ssrRenderComponent(_component_Switch, {
                          modelValue: state.vertical,
                          "onUpdate:modelValue": ($event) => state.vertical = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" vertical: "),
                          createVNode(_component_Switch, {
                            modelValue: state.vertical,
                            "onUpdate:modelValue": ($event) => state.vertical = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Space, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" vertical: "),
                        createVNode(_component_Switch, {
                          modelValue: state.vertical,
                          "onUpdate:modelValue": ($event) => state.vertical = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Col, { span: 6 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` verticalInterval: `);
                        _push4(ssrRenderComponent(_component_Slider, {
                          value: state.verticalInterval,
                          "onUpdate:value": ($event) => state.verticalInterval = $event,
                          min: 1e3,
                          step: 100,
                          max: 1e4
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" verticalInterval: "),
                          createVNode(_component_Slider, {
                            value: state.verticalInterval,
                            "onUpdate:value": ($event) => state.verticalInterval = $event,
                            min: 1e3,
                            step: 100,
                            max: 1e4
                          }, null, 8, ["value", "onUpdate:value"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Flex, {
                      gap: "small",
                      vertical: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" verticalInterval: "),
                        createVNode(_component_Slider, {
                          value: state.verticalInterval,
                          "onUpdate:value": ($event) => state.verticalInterval = $event,
                          min: 1e3,
                          step: 100,
                          max: 1e4
                        }, null, 8, ["value", "onUpdate:value"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" height: "),
                      createVNode(_component_Slider, {
                        value: state.height,
                        "onUpdate:value": ($event) => state.height = $event,
                        min: 6,
                        max: 180
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" fontSize: "),
                      createVNode(_component_Slider, {
                        value: state.fontSize,
                        "onUpdate:value": ($event) => state.fontSize = $event,
                        min: 6,
                        max: 180
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" fontWeight: "),
                      createVNode(_component_InputNumber, {
                        value: state.fontWeight,
                        "onUpdate:value": ($event) => state.fontWeight = $event,
                        step: 100,
                        min: 100,
                        max: 1e3
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Space, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" color: "),
                      createVNode(_component_Input, {
                        value: state.color,
                        "onUpdate:value": ($event) => state.color = $event,
                        placeholder: "color"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" backgroundColor: "),
                      createVNode(_component_Input, {
                        value: state.backgroundColor,
                        "onUpdate:value": ($event) => state.backgroundColor = $event,
                        placeholder: "backgroundColor"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" amount: "),
                      createVNode(_component_Slider, {
                        value: state.amount,
                        "onUpdate:value": ($event) => state.amount = $event,
                        min: 1,
                        max: scrollItems.value.length
                      }, null, 8, ["value", "onUpdate:value", "max"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" gap: "),
                      createVNode(_component_Slider, {
                        value: state.gap,
                        "onUpdate:value": ($event) => state.gap = $event,
                        min: 10,
                        max: 100
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" speed: "),
                      createVNode(_component_Slider, {
                        value: state.speed,
                        "onUpdate:value": ($event) => state.speed = $event,
                        min: 10,
                        max: 100
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Space, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" vertical: "),
                      createVNode(_component_Switch, {
                        modelValue: state.vertical,
                        "onUpdate:modelValue": ($event) => state.vertical = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Col, { span: 6 }, {
                default: withCtx(() => [
                  createVNode(_component_Flex, {
                    gap: "small",
                    vertical: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" verticalInterval: "),
                      createVNode(_component_Slider, {
                        value: state.verticalInterval,
                        "onUpdate:value": ($event) => state.verticalInterval = $event,
                        min: 1e3,
                        step: 100,
                        max: 1e4
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TextScroll, {
        class: "mt30",
        items: scrollItems.value,
        single: state.single,
        height: state.height,
        style: `background-color: ${state.backgroundColor}`,
        "item-style": {
          fontSize: state.fontSize + "px",
          fontWeight: state.fontWeight,
          color: state.color
        },
        amount: state.amount,
        gap: state.gap,
        speed: state.speed,
        vertical: state.vertical,
        "vertical-interval": state.verticalInterval,
        onClick
      }, null, _parent));
      _push(`<details class="details custom-block" data-v-67d2dd96><summary data-v-67d2dd96>Show Code</summary><div class="language-vue vp-adaptive-theme" data-v-67d2dd96><button title="Copy Code" class="copy" data-v-67d2dd96></button><span class="lang" data-v-67d2dd96>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-67d2dd96><code data-v-67d2dd96><span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;ts&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> { ref, reactive } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96> &#39;vue&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>[]&gt;([</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;首次出版于1951年&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  },</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    title: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    href: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;https://blog.csdn.net/Dandrose?type=blog&#39;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  }</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>])</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>function</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}" data-v-67d2dd96>item</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> any</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>) {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}" data-v-67d2dd96>  // 获取点击的 item</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  costringle.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>log</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;item&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, item)</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96> state</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> reactive</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>({</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  single: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>false</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  height: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>60</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  fontSize: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>18</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  fontWeight: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>400</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  color: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;rgba(0, 0, 0, 0.88)&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  backgroundColor: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&#39;#FFF&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  amount: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>4</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  gap: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>20</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  speed: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>48</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  vertical: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>false</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  verticalInterval: </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>3000</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>})</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Row</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>gutter</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>[</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>24</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>12</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>]</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        height:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Slider</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.height</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>min</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>max</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>180</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        fontSize:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Slider</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.fontSize</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>min</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>max</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>180</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        fontWeight:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>InputNumber</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.fontWeight</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>step</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>100</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>min</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>100</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>max</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>1000</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        color:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Input</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.color</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> placeholder</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;color&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        backgroundColor:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Input</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.backgroundColor</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> placeholder</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;backgroundColor&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        amount:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Slider</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.amount</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>min</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>1</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>max</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>scrollItems.</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>length</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        gap:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Slider</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>min</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>10</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>max</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>100</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        speed:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Slider</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.speed</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>min</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>10</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>max</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>100</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        vertical:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Switch</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Space</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>6</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;small&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        verticalInterval:</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>        &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Slider</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>:</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>value</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.verticalInterval</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>min</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>1000</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>step</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>100</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>max</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}" data-v-67d2dd96>10000</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96> /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Flex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Col</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>Row</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>TextScroll</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>    class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;mt30&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>items</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>scrollItems</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>single</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.single</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>height</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.height</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;\`background-color: \${</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>.</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>backgroundColor</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>}\`&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>item-style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>{</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      fontSize: state.fontSize </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}" data-v-67d2dd96>+</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96> &#39;px&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      fontWeight: state.fontWeight,</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>      color: state.color</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    }</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>amount</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.amount</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.gap</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>speed</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.speed</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.vertical</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>vertical-interval</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>state.verticalInterval</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>    @</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96>click</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>onClick</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  /&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>style</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}" data-v-67d2dd96>&quot;less&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}" data-v-67d2dd96> scoped</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>.mt30 {</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>  margin-top: 30px;</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>}</span></span>
<span class="line" data-v-67d2dd96><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}" data-v-67d2dd96>style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}" data-v-67d2dd96>&gt;</span></span></code></pre></div></details><h2 id="apis" tabindex="-1" data-v-67d2dd96>APIs <a class="header-anchor" href="#apis" aria-label="Permalink to &quot;APIs&quot;" data-v-67d2dd96>​</a></h2><h3 id="textscroll" tabindex="-1" data-v-67d2dd96>TextScroll <a class="header-anchor" href="#textscroll" aria-label="Permalink to &quot;TextScroll&quot;" data-v-67d2dd96>​</a></h3><table tabindex="0" data-v-67d2dd96><thead data-v-67d2dd96><tr data-v-67d2dd96><th data-v-67d2dd96>参数</th><th data-v-67d2dd96>说明</th><th data-v-67d2dd96>类型</th><th data-v-67d2dd96>默认值</th></tr></thead><tbody data-v-67d2dd96><tr data-v-67d2dd96><td data-v-67d2dd96>items</td><td data-v-67d2dd96>滚动文字数组，<code data-v-67d2dd96>single: true</code> 时，类型为 <code data-v-67d2dd96>Text</code>；多条文字滚动时，数组长度必须大于等于 <code data-v-67d2dd96>amount</code> 才能滚动</td><td data-v-67d2dd96><a href="#item-type" data-v-67d2dd96>Item</a>[] | <a href="#item-type" data-v-67d2dd96>Item</a></td><td data-v-67d2dd96>[]</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>single</td><td data-v-67d2dd96>是否启用单条文字滚动效果，只支持水平文字滚动，为 <code data-v-67d2dd96>true</code> <code data-v-67d2dd96>时，amount</code> 自动设为 <code data-v-67d2dd96>1</code></td><td data-v-67d2dd96>boolean</td><td data-v-67d2dd96>false</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>width</td><td data-v-67d2dd96>滚动区域宽度，单位 <code data-v-67d2dd96>px</code></td><td data-v-67d2dd96>number | string</td><td data-v-67d2dd96>&#39;100%&#39;</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>height</td><td data-v-67d2dd96>滚动区域高度，单位 <code data-v-67d2dd96>px</code></td><td data-v-67d2dd96>number</td><td data-v-67d2dd96>50</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>itemStyle</td><td data-v-67d2dd96>滚动文字样式</td><td data-v-67d2dd96><a href="https://cn.vuejs.org/api/utility-types.html#cssproperties" target="_blank" rel="noreferrer" data-v-67d2dd96>CSSProperties</a></td><td data-v-67d2dd96>{}</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>hrefHoverColor</td><td data-v-67d2dd96>链接文字鼠标悬浮颜色；仅当 <code data-v-67d2dd96>href</code> 存在时生效</td><td data-v-67d2dd96>string</td><td data-v-67d2dd96>&#39;#1677ff&#39;</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>amount</td><td data-v-67d2dd96>滚动区域展示条数，水平滚动时生效</td><td data-v-67d2dd96>number</td><td data-v-67d2dd96>4</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>gap</td><td data-v-67d2dd96>水平滚动文字各列间距或垂直滚动文字两边的边距，单位 <code data-v-67d2dd96>px</code></td><td data-v-67d2dd96>number</td><td data-v-67d2dd96>20</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>speed</td><td data-v-67d2dd96>水平滚动时移动的速度，单位是像素每秒，水平滚动时生效</td><td data-v-67d2dd96>number</td><td data-v-67d2dd96>48</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>vertical</td><td data-v-67d2dd96>是否垂直滚动</td><td data-v-67d2dd96>boolean</td><td data-v-67d2dd96>false</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>verticalInterval</td><td data-v-67d2dd96>垂直文字滚动时间间隔，单位 <code data-v-67d2dd96>ms</code>，垂直滚动时生效</td><td data-v-67d2dd96>number</td><td data-v-67d2dd96>3000</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>pauseOnMouseEnter</td><td data-v-67d2dd96>鼠标移入是否暂停滚动</td><td data-v-67d2dd96>boolean</td><td data-v-67d2dd96>true</td></tr></tbody></table><h3 id="item-type" tabindex="-1" data-v-67d2dd96>Item Type <a class="header-anchor" href="#item-type" aria-label="Permalink to &quot;Item Type&quot;" data-v-67d2dd96>​</a></h3><table tabindex="0" data-v-67d2dd96><thead data-v-67d2dd96><tr data-v-67d2dd96><th data-v-67d2dd96>名称</th><th data-v-67d2dd96>说明</th><th data-v-67d2dd96>类型</th><th data-v-67d2dd96>默认</th></tr></thead><tbody data-v-67d2dd96><tr data-v-67d2dd96><td data-v-67d2dd96>title</td><td data-v-67d2dd96>文字标题</td><td data-v-67d2dd96>string</td><td data-v-67d2dd96>undefined</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>href?</td><td data-v-67d2dd96>跳转链接</td><td data-v-67d2dd96>string</td><td data-v-67d2dd96>undefined</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>target?</td><td data-v-67d2dd96>跳转链接打开方式，<code data-v-67d2dd96>href</code> 存在时生效</td><td data-v-67d2dd96>&#39;_self&#39; | &#39;_blank&#39;</td><td data-v-67d2dd96>undefined</td></tr></tbody></table><h2 id="methods" tabindex="-1" data-v-67d2dd96>Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;" data-v-67d2dd96>​</a></h2><table tabindex="0" data-v-67d2dd96><thead data-v-67d2dd96><tr data-v-67d2dd96><th data-v-67d2dd96>名称</th><th data-v-67d2dd96>说明</th><th data-v-67d2dd96>类型</th></tr></thead><tbody data-v-67d2dd96><tr data-v-67d2dd96><td data-v-67d2dd96>start</td><td data-v-67d2dd96>开始滚动</td><td data-v-67d2dd96>() =&gt; void</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>stop</td><td data-v-67d2dd96>暂停滚动</td><td data-v-67d2dd96>() =&gt; void</td></tr><tr data-v-67d2dd96><td data-v-67d2dd96>reset</td><td data-v-67d2dd96>重置滚动</td><td data-v-67d2dd96>() =&gt; void</td></tr></tbody></table><h2 id="events" tabindex="-1" data-v-67d2dd96>Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;" data-v-67d2dd96>​</a></h2><table tabindex="0" data-v-67d2dd96><thead data-v-67d2dd96><tr data-v-67d2dd96><th data-v-67d2dd96>名称</th><th data-v-67d2dd96>说明</th><th data-v-67d2dd96>类型</th></tr></thead><tbody data-v-67d2dd96><tr data-v-67d2dd96><td data-v-67d2dd96>click</td><td data-v-67d2dd96>点击标题时的回调</td><td data-v-67d2dd96>(item: <a href="#item-type" data-v-67d2dd96>Item</a>) =&gt; void</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/components/textscroll.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const textscroll = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67d2dd96"]]);
export {
  __pageData,
  textscroll as default
};
