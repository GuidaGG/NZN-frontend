// GENERAL TYPES 
export type Image = {
    id: number;
    name: string;
    alternativeText: string
    url: string;
    formats: {
        thumbnail: {
            url: string;
        }
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

export type PDF = {
    id: number;
    name: string;
    alternativeText: string;
    url: string;
}

export type Select = { 
    name: string;
    value: string;
}

export type SelectID = { 
    id: number;
    attributes: {
        name: string;
        value: string;      
    }
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

export type PageContents=  {
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
    description: string;
    states: Select[];
    work_areas: Select[];
}

export type PracticePreview = {
    id: number;
    title: string;
    slug: string;
    header: string;
    upper_content: string;
    main_content: string;
    sidebar: string;
    gallery: Image[];
}

export type MaterialPreview = {
    title: string;
    category: Select;
    description: string;
    file: PDF;
    slug: string;
    author: string;
}
  
export type NewsItem = {
    id: number;
    title: string;
    slug: string;
    publishedAt: string;
    content: TextContent;
    image: Image;
}