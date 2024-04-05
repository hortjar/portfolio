<script lang="ts">
  import { cn } from '$lib/utils';
  import type { ClassValue } from 'clsx';

  export let text: string;
  export let disabled: boolean;
  export let className: ClassValue = '';
</script>

<button
  {disabled}
  class={cn(
    'px-5 rounded-lg border-2',
    disabled ? 'border-gray-700' : 'border-gray-400 hover:border-gray-300 duration-150',
    className
  )}>{text}</button
>
