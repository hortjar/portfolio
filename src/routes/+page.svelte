<script lang="ts">
	import type { projects } from "$lib/db/schema";
	import type { InferSelectModel } from "drizzle-orm";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="grid">
  This is the page with {data.projects.length} projects
</div>
