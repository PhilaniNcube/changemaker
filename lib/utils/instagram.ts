// ...existing code...

export interface InstagramPost {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

/**
 * Fetches Instagram posts from a business account
 * @param limit Number of posts to fetch (default: 20)
 * @returns {Promise<InstagramPost[]>}
 */
export async function getInstagramPosts(
  limit: number = 20
): Promise<InstagramPost[]> {
  if (!process.env.INSTAGRAM_TOKEN) {
    console.error("No Instagram token found");
    return [];
  }

  try {
    const fields = [
      "id",
      "caption",
      "media_type",
      "media_url",
      "thumbnail_url",
      "permalink",
      "timestamp",
    ].join(",");

    const response = await fetch(
      `https://graph.facebook.com/me/media?fields=${fields}&access_token=${process.env.INSTAGRAM_TOKEN}&limit=${limit}`
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return data.data as InstagramPost[];
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return [];
  }
}
