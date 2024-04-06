<script>
  import '../app.css';
  import Header from '../lib/components/header.svelte';
</script>

<svelte:head>
  <title>Portfolio</title>
  <meta name="theme-color" content="#151c29" />
  <meta name="msapplication-navbutton-color" content="#151c29" />
  <meta content="yes" name="apple-mobile-web-app-capable" />
  <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
  <meta property="og:title" content="Jaroslav Hort - Portfolio" />
  <meta property="og:description" content="My portfolio and my projects" />
  <meta property="og:image" content="https://avatars.githubusercontent.com/u/1873269?v=4" />
  <meta property="og:image:width" content="128" />
  <meta property="og:image:height" content="128" />
  <meta property="og:image:alt" content="Jaroslav Hort's Photo" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:locale:alternate" content="cs_CZ" />
</svelte:head>

<div
  class="min-h-screen 2xl:h-screen w-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black text-white font-medium font-mono pb-10 lg:pb-2 flex flex-col"
>
  <Header />
  <div class="h-full w-full flex items-center justify-center py-5 px-2">
    <slot />
  </div>
</div>
