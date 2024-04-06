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
    `px-5 
    rounded-lg 
    border-gradient 
    before:p-[2px]
    before:rounded-lg before:rounded-r-none
    duration-200
    ease-in-out`,
    disabled
      ? 'button-border-disabled text-slate-400'
      : 'button-border text-slate-100 hover:text-slate-50',
    className
  )}>{text}</button
>
