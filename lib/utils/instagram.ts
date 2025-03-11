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
    throw new Error("Instagram access token is not configured");
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
      `https://graph.instagram.com/me/media?fields=${fields}&access_token=${process.env.INSTAGRAM_TOKEN}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram posts");
    }

    const data = await response.json();

    return data.data as InstagramPost[];
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    throw error;
  }
}
