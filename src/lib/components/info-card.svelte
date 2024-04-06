<script lang="ts">
  import 'iconify-icon';
</script>

<div
  class="border-gradient card-border before:p-[2px] before:rounded-lg py-6 px-5 w-full bg-slate-900 bg-opacity-15 flex flex-col xl:flex-row gap-5"
>
  <div class="flex justify-center items-start">
    <img
      src="https://avatars.githubusercontent.com/u/1873269?v=4"
      alt="My Photo"
      class="rounded-full max-w-52"
    />
  </div>
  <div class="flex flex-col gap-2">
    <div class="flex flex-row gap-2 items-center text-2xl">
      <h1>Hello!</h1>
      <iconify-icon icon="noto:waving-hand" class="text-3xl"></iconify-icon>
    </div>
    <p>
      My name is <b>Jaroslav Hort</b>, I am a software dveloper from
      <span class="czech-text">Czech Republic</span>
    </p>
    <p>
      I have a masters degree in software engineering from Masaryk University, experience with
      full-stack development in <b>C#</b> and <b>Next.js</b> with <b>TypeScript</b>.
    </p>
    <p>
      You can view my full resume over on my <a
        href="https://www.linkedin.com/in/jaroslav-hort-4a9b01206/"><b>LinkedIn</b></a
      > page and my personal projects and their source codes below this card.
    </p>
    <p>
      I speak <span class="czech-text">Czech</span>, <span class="english-text">English</span> and
      learning
      <span class="japan-text">Japanese</span> I am very interested in all things tech, video games,
      and currently learning photography.
    </p>
    <div class="flex flex-row gap-4 text-3xl mt-1">
      <a href="https://github.com/hortjar">
        <iconify-icon icon="mdi:github" class="mt-1"></iconify-icon>
      </a>
      <a href="https://www.linkedin.com/in/jaroslav-hort-4a9b01206/">
        <iconify-icon icon="mdi:linkedin" class="text-4xl"></iconify-icon>
      </a>
    </div>
  </div>
</div>
