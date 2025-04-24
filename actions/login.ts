"use server";

import { revalidate } from "@/app/layout";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

export const loginAction = async (prev: unknown, formData: FormData) => {
	const supabase = createClient();

	const validatedFields = loginSchema.safeParse({
		email: formData.get("email"),
		password: formData.get("password"),
	});

	if (!validatedFields.success) {
		return {
			status: 400,
			error: {
				message: "Invalid fields",
				data: validatedFields.error.flatten().fieldErrors,
			},
		};
	}

	const { data, error } = await supabase.auth.signInWithPassword({
		email: validatedFields.data.email,
		password: validatedFields.data.password
	})

	console.log({ data, error })

	if (error) {
		return {
			status: 500,
			error: {
				message: error.message,
				data: error.cause,
			},
		};
	}

	revalidatePath('/', "layout")

	redirect("/dashboard");
};

export async function forgotPasswordAction(
	prevState: unknown,
	formData: FormData,
) {
	const supabase = createClient();

	const email = formData.get("email") as string;

	if (typeof email !== "string" || !email) {
		return {
			status: 400,
			error: {
				message: "Invalid email",
			},
		};
	}

	const { data, error } = await supabase.auth.resetPasswordForEmail(email);

	console.log({ data, error })

	if (error) {
		return {
			status: 500,
			error: {
				message: error.message,
				data: error.cause,
			},
		};
	}

	revalidatePath('/', "layout")

	return {
		status: 200,
		message: "We sent a password reset link to your email address.",
	};
}

export async function updateUserAction(prevState: unknown, formData: FormData) {
	const supabase = createClient();

	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	if (
		typeof email !== "string" ||
		!email ||
		typeof password !== "string" ||
		!password
	) {
		return {
			status: 400,
			error: {
				message: "Invalid fields",
			},
		};
	}

	const { data, error } = await supabase.auth.updateUser({
		email,
		password,
	});

	if (error) {
		return {
			status: 500,
			error: {
				message: error.message,
				data: error.cause,
			},
		};
	}

	revalidatePath('/', "layout")
	redirect("/dashboard")

	return {
		status: 200,
		message: "Your password has been reset successfully",
	};
}
