// GENERAL TYPES 
export type Image = {
    id: number;
    name: string;
    alternativeText: string
    url: string;
}
  
export type TextContent = { 
    title: string;
    body: HTMLElement;
}
  
export type Select = { 
    name: string;
    value: string;
}
  

// PAGE TYPES

export type Netzwerk = {
    id: number;
    title: string;
    slug: string;
    content: TextContent;
}
  
// CONTENT TYPES

export type MemberPreview = {
    id: number
    title: string;
    slug: string;
    image: Image;
    agreement: boolean;
    content: TextContent;
    states: Select[];
    work_areas: Select[];
  }
  
  