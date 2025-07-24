import { createClient } from "@/utils/supabase/server";

async function getDocuments() {
  const supabase = await createClient();

  const { data: documents, error } = await supabase
    .from("documents")
    .select("*, organisation_id(*)");

  if (error) {
    throw new Error(error.message);
  } else if (documents === null) {
    return [];
  } else {
    return documents;
  }
}

async function getOrgDocuments(id: string) {
  const supabase = await createClient();

  const { data: documents, error } = await supabase
    .from("documents")
    .select("*, organisation_id(*)")
    .eq("organisation_id", id);

  if (error) {
    throw new Error(error.message);
  } else if (documents === null) {
    return [];
  } else {
    return documents;
  }
}

export { getDocuments, getOrgDocuments };
