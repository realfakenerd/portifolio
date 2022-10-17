export interface Articles {
    slug:      string;
    url:       string;
    image:     Image;
    title:     string;
    tags:      string[];
    published: Date;
    summary:   string;
}

export interface Image {
    url: null | string;
    alt: string;
}

export interface Article {
    published:    Date;
    updated:      Date;
    title:        string;
    body:         string;
    tags:         string[];
    categorias:   string[];
    image:        Image;
    seo:          SEO;
    nextPost:     NextPost | null;
    previousPost: PreviousPost | null;
}

export interface Image {
    url: string;
    alt: string;
}

export interface NextPost {
    slug:  string;
    image: string;
    title: string;
}

export interface PreviousPost {
    slug:  string;
    image: string;
    title: string;
}

export interface SEO {
    meta_description: string;
    seo_title:        string;
}

export interface Author {
    first_name:     string;
    last_name:      string;
    email:          string;
    bio:            string;
    title:          string;
    linkedin_url:   string;
    twitter_handle: string;
    profile_image:  string;
}
