"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Define school schema for validation
const SchoolSchema = z.object({
  name: z.string().min(1, "School name is required"),
});

// Define types
type SchoolInput = z.infer<typeof SchoolSchema>;

export async function addSchool(formData: FormData) {
  const supabase = await createClient();

  try {
    // Validate input data
    const validatedData = SchoolSchema.safeParse({
      name: formData.get("name") as string,
    });

    if (!validatedData.success) {
      return { success: false, error: "School name is required" };
    }

    // Insert school into database
    const { data: school, error } = await supabase
      .from("schools")
      .insert([
        {
          name: validatedData.data.name,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error adding school:", error);
      return { success: false, error: error.message };
    }

    // Revalidate the paths where schools are displayed
    revalidatePath("/schools");
    revalidatePath("/dashboard/schools");

    return {
      success: true,
      data: school,
      message: "School added successfully",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation failed",
        validationErrors: error.errors,
      };
    }

    console.error("Unexpected error adding school:", error);
    return {
      success: false,
      error: "Failed to add school. Please try again.",
    };
  }
}

export async function deleteSchool(id: number) {
  const supabase = await createClient();

  try {
    // Validate that id exists
    if (!id) {
      return { success: false, error: "School ID is required" };
    }

    // Delete school from database
    const { error } = await supabase.from("schools").delete().eq("id", id);

    if (error) {
      console.error("Error deleting school:", error);
      return { success: false, error: error.message };
    }

    // Revalidate the paths where schools are displayed
    revalidatePath("/schools");
    revalidatePath("/dashboard/schools");

    return {
      success: true,
      message: "School deleted successfully",
    };
  } catch (error) {
    console.error("Unexpected error deleting school:", error);
    return {
      success: false,
      error: "Failed to delete school. Please try again.",
    };
  }
}
