import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson } from '$lib/utils';

const newsQuery = gql`
{
    posts(sort: "publishedAt:desc", pagination: { limit: -1 })  {
      data {
        id
        attributes { 
          title
          slug
    
        }      
    }
  }
}
`

const pagesQuery = gql`
{
    pages(sort: "publishedAt:desc", pagination: { limit: -1 })  {
      data {
        id
        attributes { 
          title
          slug
    
        }      
    }
  }
}
`

const membersQuery = gql`
{
    members(sort: "publishedAt:desc", pagination: { limit: -1 })  {
      data {
        id
        attributes { 
          title
          slug
    
        }      
    }
  }
}
`

const bestPracticesQuery = gql`
{
    bestPractices(sort: "publishedAt:desc", pagination: { limit: -1 })  {
      data {
        id
        attributes { 
          title
          slug
    
        }      
    }
  }
}
`

const ArbeitsMaterialenQuery = gql`
{
    workMaterials(sort: "publishedAt:desc", pagination: { limit: -1 })  {
      data {
        id
        attributes { 
          title
          slug
    
        }      
    }
  }
}
`

export async function GET() {

	const website = 'https://www.netzwerkzwischennutzung.de'
	const news = await client.request(newsQuery);
	const pages = await client.request(pagesQuery);
	const members = await client.request(membersQuery);
	const practices = await client.request(bestPracticesQuery);
	const materials = await client.request(ArbeitsMaterialenQuery);
	const body = sitemap(website, flattenJson(news), flattenJson(pages), flattenJson(members), flattenJson(practices), flattenJson(materials))

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	  }
	  return new Response(
		body,
		{
			headers
		}
	  )
}

const sitemap = (
	website,
	newsData,
	pagesData,
	membersData,
	practicesData,
	materialsData
  ) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
  >
	<url>
	  <loc>${website}</loc>
	  <changefreq>monthly</changefreq>
	  <priority>0.7</priority>
	</url>
	${newsData.posts.map(
		news => `
	<url>
	  <loc>${website}/news/${news.slug}</loc>
	  <changefreq>monthly</changefreq>
	  <priority>0.7</priority>
	</url>
	`
	  )}

	  ${pagesData.pages.map(
		page => `
	<url>
	  <loc>${website}/${page.slug}</loc>
	  <changefreq>monthly</changefreq>
	  <priority>0.7</priority>
	</url>
	`
	  )}

	  ${membersData.members.map(
		member => `
	<url>
	  <loc>${website}/netzwerk/${member.slug}</loc>
	  <changefreq>monthly</changefreq>
	  <priority>0.7</priority>
	</url>
	`
	  )}
	  
	  ${practicesData.bestPractices.map(
		practice => `
	<url>
	  <loc>${website}/best-practice/${practice.slug}</loc>
	  <changefreq>monthly</changefreq>
	  <priority>0.7</priority>
	</url>
	`
	  )}

	  ${materialsData.workMaterials.map(
		material => `
	<url>
	  <loc>${website}/arbeitsmaterialen/${material.slug}</loc>
	  <changefreq>monthly</changefreq>
	  <priority>0.7</priority>
	</url>
	`
	  )}
  </urlset>`