<script>
  import '../app.css';
  import Header from '../lib/components/header.svelte';
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div
  class="h-screen w-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black text-white font-medium font-mono flex flex-col"
>
  <Header />
  <div class="h-full w-full flex items-center justify-center">
    <slot />
  </div>
</div>
