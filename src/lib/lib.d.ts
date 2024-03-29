interface SinglePost {
	content: string;
	fm: Fm;
}

/**
 * The `interface Post` is defining the structure of an object that represents a blog post.
 * It has the following properties
 */
interface Post {
	/** blog post title */
	title: string;
	/** blog post description */
	description: string;
	/** blog post slug for using on `<a/>` */
	slug: string;
	/** blog post publish date */
	published: string;
	/** blog post categories */
	category: string | string[];
	/** series of posts */
	series?: string;
	/** is published or not */
	draft?: string;
}

interface GitUser {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string;
	company: string;
	blog: string;
	location: string;
	email: null;
	hireable: boolean;
	bio: string;
	twitter_username: null;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: Date;
	updated_at: Date;
}

interface Repo {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: Owner;
	html_url: string;
	description: null | string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: Date;
	updated_at: Date;
	pushed_at: Date;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: null | string;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: Language | null;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	has_discussions: boolean;
	forks_count: number;
	mirror_url: null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: License | null;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: string[];
	visibility: Visibility;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: DefaultBranch;
}

enum DefaultBranch {
	Develop = 'develop',
	Main = 'main',
	Master = 'master'
}

enum Language {
	JavaScript = 'JavaScript',
	Shell = 'Shell',
	Svelte = 'Svelte',
	TypeScript = 'TypeScript'
}

interface License {
	key: string;
	name: string;
	spdx_id: string;
	url: string;
	node_id: string;
}

interface Owner {
	login: Login;
	id: number;
	node_id: NodeID;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: FollowingURL;
	gists_url: GistsURL;
	starred_url: StarredURL;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: EventsURL;
	received_events_url: string;
	type: Type;
	site_admin: boolean;
}

enum EventsURL {
	HTTPSAPIGithubCOMUsersRealfakenerdEventsPrivacy = 'https://api.github.com/users/realfakenerd/events{/privacy}'
}

enum FollowingURL {
	HTTPSAPIGithubCOMUsersRealfakenerdFollowingOtherUser = 'https://api.github.com/users/realfakenerd/following{/other_user}'
}

enum GistsURL {
	HTTPSAPIGithubCOMUsersRealfakenerdGistsGistID = 'https://api.github.com/users/realfakenerd/gists{/gist_id}'
}

enum Login {
	Realfakenerd = 'realfakenerd'
}

enum NodeID {
	MDQ6VXNlcjE2NjY4MTA5 = 'MDQ6VXNlcjE2NjY4MTA5'
}

enum StarredURL {
	HTTPSAPIGithubCOMUsersRealfakenerdStarredOwnerRepo = 'https://api.github.com/users/realfakenerd/starred{/owner}{/repo}'
}

enum Type {
	User = 'User'
}

enum Visibility {
	Public = 'public'
}
