<script lang="ts">
  import type { projects } from '$lib/db/schema';
  import type { InferSelectModel } from 'drizzle-orm';
  import { tooltip } from '@svelte-plugins/tooltips';
  import GithubButton from './github-button.svelte';
  import ProjectButton from './project-button.svelte';

  export let project: InferSelectModel<typeof projects>;
</script>

<div
  class="flex flex-row h-16 font-medium flex-grow"
  use:tooltip={{
    content: project.public ? '' : 'Coming soon!',
    action: 'hover',
    animation: 'fade'
  }}
>
  {#if project.public}
    <a href={project.url} target="_blank" class="w-full">
      <ProjectButton {project}></ProjectButton>
    </a>
    <a href={project.github_url} target="_blank">
      <GithubButton {project}></GithubButton>
    </a>
  {:else}
    <ProjectButton {project}></ProjectButton>
    <GithubButton {project}></GithubButton>
  {/if}
</div>
