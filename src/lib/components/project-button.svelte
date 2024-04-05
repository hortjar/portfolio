<script lang="ts">
  import type { projects } from '$lib/db/schema';
  import type { InferSelectModel } from 'drizzle-orm';
  import BigButton from './big-button.svelte';
  import IconButton from './icon-button.svelte';
  import 'iconify-icon';
  import { tooltip } from '@svelte-plugins/tooltips';

  export let project: InferSelectModel<typeof projects>;
</script>

<div
  class="flex flex-row"
  use:tooltip={{
    content: project.public ? '' : 'Coming soon!',
    action: 'hover',
    animation: 'fade'
  }}
>
  <BigButton text={project.name} disabled={!project.public} className="rounded-r-none"></BigButton>
  <IconButton
    disabled={!project.public}
    className="flex items-center content-center rounded-l-none border-l-0"
  >
    <iconify-icon icon="mdi:github" class="text-2xl"></iconify-icon>
  </IconButton>
</div>
