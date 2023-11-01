<script lang="ts">
  import type { NewsItem } from "$lib/types";

  export let newsItem: NewsItem;

  let shortDate = newsItem.publishedAt.split("T")[0];
  let dottedDate = shortDate.split("-").reverse().join(".");
</script>

<div class="text-base leading-tight">

  <h3 class="pt-2">{dottedDate}</h3>
  <h2 class="font-bold pb-4">{newsItem.content.title}</h2>
  <p class="pt-4 line-clamp-6"> { @html newsItem.content.body}</p>

</div>
