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
      districts: {
        Row: {
          id: string
          created_at: string | null
          name: string | null
          slug: string | null
          province_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string | null
          slug?: string | null
          province_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string | null
          slug?: string | null
          province_id?: string | null
        }
      }
      organisations: {
        Row: {
          id: string
          created_at: string | null
          name: string | null
          facebook: string | null
          twitter: string | null
          website: string | null
          description: string | null
          district_id: string | null
          province_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string | null
          facebook?: string | null
          twitter?: string | null
          website?: string | null
          description?: string | null
          district_id?: string | null
          province_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string | null
          facebook?: string | null
          twitter?: string | null
          website?: string | null
          description?: string | null
          district_id?: string | null
          province_id?: string | null
        }
      }
      profiles: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
        }
        Insert: {
          id: string
          first_name?: string | null
          last_name?: string | null
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
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
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

