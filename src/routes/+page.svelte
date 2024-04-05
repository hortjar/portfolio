<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="grid">
  This is the page with {data.projects.length} projects
</div>
