export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admins: {
        Row: {
          id: string
          created_at: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          user_id?: string | null
        }
      }
      districts: {
        Row: {
          id: string
          created_at: string | null
          name: string
          slug: string
          province_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string
          slug?: string
          province_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string
          slug?: string
          province_id?: string | null
        }
      }
      organisations: {
        Row: {
          id: string
          created_at: string | null
          name: string
          facebook: string | null
          twitter: string | null
          website: string | null
          description: string | null
          district_id: string | null
          email: string | null
          tel: string | null
          slug: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string
          facebook?: string | null
          twitter?: string | null
          website?: string | null
          description?: string | null
          district_id?: string | null
          email?: string | null
          tel?: string | null
          slug?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string
          facebook?: string | null
          twitter?: string | null
          website?: string | null
          description?: string | null
          district_id?: string | null
          email?: string | null
          tel?: string | null
          slug?: string | null
        }
      }
      profiles: {
        Row: {
          id: string
          first_name: string
          last_name: string
        }
        Insert: {
          id: string
          first_name?: string
          last_name?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
        }
      }
      provinces: {
        Row: {
          id: string
          created_at: string | null
          name: string | null
          slug: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string | null
          slug?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string | null
          slug?: string | null
        }
      }
      workshops: {
        Row: {
          id: string
          created_at: string | null
          name: string | null
          slug: string | null
          organisation_id: string | null
          date: string | null
          time: string | null
          description: string | null
          image: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string | null
          slug?: string | null
          organisation_id?: string | null
          date?: string | null
          time?: string | null
          description?: string | null
          image?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string | null
          slug?: string | null
          organisation_id?: string | null
          date?: string | null
          time?: string | null
          description?: string | null
          image?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

