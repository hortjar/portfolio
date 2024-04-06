<script lang="ts">
  import type { InferSelectModel } from 'drizzle-orm';
  import BigButton from './big-button.svelte';
  import { projects } from '$lib/db/schema';

  export let project: InferSelectModel<typeof projects>;
</script>

<BigButton text={project.name} disabled={!project.public} className="h-full rounded-r-none"
></BigButton>
