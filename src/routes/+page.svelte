<script lang="ts">
  import ProjectLink from '$lib/components/project-link.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="grid">
  This is the page with {data.projects.length} projects

  <div class="flex flex-row gap-3">
    {#each data.projects as project}
      <ProjectLink {project}></ProjectLink>
    {/each}
  </div>
</div>
