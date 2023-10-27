// GENERAL TYPES 
export type Image = {
    id: number;
    name: string;
    alternativeText: string
    url: string;
    formats: {
        small: {
            url: string;
        },
        medium: {
            url: string;
        },
        large: {
            url: string;
        }
    }
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

export type Homepage = {
    id: number;
    title: string;
    slug: string;
    slideshow: Image[];
    content: TextContent;
}
  
// CONTENT TYPES

export type ProjectPreview = {
    id: number
    title: string;
    slug: string;
    image: Image;
    agreement: boolean;
    content: TextContent;
    state: Select;
    work_areas: Select[];
  }
  
