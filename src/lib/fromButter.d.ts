export interface AllPosts {
    meta: Meta;
    data: Post;
}

export interface Post {
    status:             string;
    created:            Date;
    updated:            Date;
    published:          Date;
    title:              string;
    slug:               string;
    body:               string;
    summary:            string;
    seo_title:          string;
    meta_description:   string;
    featured_image_alt: string;
    url:                string;
    featured_image:     null | string;
    author:             Author;
    tags:               Category[];
    categories:         Category[];
}

export interface Author {
    bio:            string;
    slug:           string;
    email:          string;
    title:          string;
    last_name:      string;
    first_name:     string;
    facebook_url:   string;
    linkedin_url:   string;
    instagram_url:  string;
    pinterest_url:  string;
    profile_image:  string;
    twitter_handle: string;
}

export interface Category {
    name: string;
    slug: string;
}

export interface Meta {
    next_post: null | NextOrPreviousPage;
    previous_post: null | NextOrPreviousPage;
    count:         number;
}

export interface NextOrPreviousPage {
    slug: string;
    title: string;
    featured_image: string; 
}