<script lang="ts">
  import type { NewsItem } from "$lib/types";

  export let newsItem: NewsItem;

  let shortDate = newsItem.publishedAt.split("T")[0];
  let dottedDate = shortDate.split("-").reverse().join(".");
</script>

<a href="/news/{newsItem.slug}" class="block text-base leading-tight p-7 hover:bg-lime-dk border-b border-black" >
  <h3 class="pt-2">{dottedDate}</h3>
  <h2 class="font-nznBold pb-4">{newsItem.content.title}</h2>
  <p class="pt-4 line-clamp-6"> { @html newsItem.content.body}</p>
</a>
