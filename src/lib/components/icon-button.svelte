<script lang="ts">
  import { cn } from '$lib/utils';
  import type { ClassValue } from 'clsx';

  export let disabled: boolean;
  export let className: ClassValue = '';
</script>

<button
  {disabled}
  class={cn(
    `h-16 
    px-3     
    rounded-lg 
    flex
    justify-center
    items-center
    border-gradient 
    before:p-[2px]
    before:pl-0
    before:rounded-lg before:rounded-l-none
    duration-300
    ease-in-out
    bg-slate-800
    bg-opacity-15`,
    disabled
      ? 'button-border-disabled text-slate-400'
      : 'button-border text-slate-100 hover:text-slate-50',
    className
  )}
>
  <slot />
</button>
