import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
	const revalidationData = await req.json();

	console.log(revalidationData);

	revalidatePath("/");

	return NextResponse.json({ message: "Revalidated" });
}
