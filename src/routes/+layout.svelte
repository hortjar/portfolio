<script>
  import { page } from '$app/stores';
  import "../app.css";
  import Header from '../lib/components/header.svelte'
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div class="h-screen w-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black text-white font-medium">
  <Header/>
  <slot />
</div>
