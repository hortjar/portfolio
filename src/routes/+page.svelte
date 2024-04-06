<script lang="ts">
  import InfoCard from '$lib/components/info-card.svelte';
  import ProjectLink from '$lib/components/project-link.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex flex-col gap-3 w-full lg:w-1/2 xl:w-1/3 md:px-2">
  <InfoCard></InfoCard>
  <div class="flex flex-col xl:flex-row gap-3 flex-wrap">
    {#each data.projects as project}
      <ProjectLink {project}></ProjectLink>
    {/each}
  </div>
</div>
