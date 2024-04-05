<script lang="ts">
  import type { projects } from '$lib/db/schema';
  import type { InferSelectModel } from 'drizzle-orm';
  import ProjectButton from './project-button.svelte';

  export let project: InferSelectModel<typeof projects>;
</script>

{#if project.public}
  <a href={project.url}>
    <ProjectButton {project}></ProjectButton>
  </a>
{:else}
  <div>
    <ProjectButton {project}></ProjectButton>
  </div>
{/if}
