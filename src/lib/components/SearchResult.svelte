<script lang="ts">

export let type: string
export let hit: any

let path: string = ""
let text =  ""

const getTypeContent = (type, hit) => {
    switch(type){
      case "post":
          path = "news",
          text = hit.content.body
          break;
      case "member":
            path = "netzwerk",
            text = hit.description
            break;
      case "work-material":
            path = "arbeitmaterialen",
            text = hit.description
            break;
      case "page": 
            path =  "",
            text = ""
            break;
      case "best-practice":
            path =  "best-practice",
            text = hit.upper_content
            break;
    }
  }

$: getTypeContent(type, hit)

</script>

<li class="w-full md:w-[calc(33%-8px)] rounded-md border hover:border-black p-2 ">
    <a href="{path}/{hit.slug}">
        <h3>{hit.title}</h3>
        <div class="pt-1 line-clamp-4 text-xs"> { @html text }</div>
    </a>
</li>