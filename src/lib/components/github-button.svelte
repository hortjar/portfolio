<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import IconButton from './icon-button.svelte';
  import { projects } from '$lib/db/schema';
  import 'iconify-icon';

  export let project: InferSelectModel<typeof projects>;
</script>

<IconButton
  disabled={!project.public}
  className="flex items-center content-center h-full rounded-l-none border-l-0"
>
  <iconify-icon icon="mdi:github" observer="false" class="text-2xl"></iconify-icon>
</IconButton>
