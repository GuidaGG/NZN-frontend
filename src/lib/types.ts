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
    __typename: string;
    title: string;
    body: HTMLElement;
}
  
export type Select = { 
    name: string;
    value: string;
}

export type ImageSection = { 
    __typename: string;
    image: Image;
}
  
export type Slideshow = {
    __typename: string;
    images: Image[];
}

export type PageSection =
 | TextContent 
 | ImageSection
 | Slideshow


// PAGE TYPES

export type PageDetail =  {
    id: number;
    title: string;
    slug: string;
    content: PageSection[]
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
  
export type NewsItem = {
    id: number;
    title: string;
    slug: string;
    publishedAt: string;
    content: TextContent;
    image: Image;
}