import { about as fallbackAbout, type AboutData } from '~/data/about'
import type { Project } from '~/data/projects'
import { projects as fallbackProjects } from '~/data/projects'
import type { Post } from '~/data/posts'
import { skills as fallbackSkills, type Skill } from '~/data/skills'
import { wishlist as fallbackWishlist, type WishlistCategory } from '~/data/wishlist'
import type { Photo, Album } from '~/data/photography'

export const useApi = () => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.apiBaseUrl
  const fetchJson = async <T>(path: string, fallback: T | null = null): Promise<T | null> => {
    try {
      const res = await fetch(`${baseUrl}${path}`)
      if (!res.ok) return fallback
      return await res.json()
    } catch {
      return fallback
    }
  }

  const getAbout = (options: { fallback?: boolean } = {}) => fetchJson<AboutData>('/about', options.fallback === false ? null : fallbackAbout)
  const getProjects = () => fetchJson<Project[]>('/projects', fallbackProjects)
  const getProject = (slug: string) => fetchJson<Project>(`/projects/${slug}`, fallbackProjects.find(project => project.slug === slug) ?? null)
  const getPosts = () => fetchJson<Post[]>('/posts', [])
  const getPost = (slug: string) => fetchJson<Post>(`/posts/${slug}`)
  const getSkills = () => fetchJson<Skill[]>('/skills', fallbackSkills)
  const getWishlist = () => fetchJson<WishlistCategory[]>('/wishlist', fallbackWishlist)
  const getAlbums = () => fetchJson<Album[]>('/albums')
  const getAlbum = (id: string) => fetchJson<Album>(`/albums/${id}`)
  const getPhotos = () => fetchJson<Photo[]>('/photos')
  const getPhoto = (id: string) => fetchJson<Photo>(`/photos/${id}`)

  return {
    getAbout, getProjects, getProject,
    getPosts, getPost,
    getSkills,
    getWishlist,
    getAlbums, getAlbum,
    getPhotos, getPhoto,
  }
}
