import supabase from "@/utils/supabase";

export async function getPrograms() {
  const { data, error } = await supabase.from("gym_programs").select("*");
  if (error) {
    throw error;
  }
  return data;
}

export async function getProgramById(id: string) {
  const { data, error } = await supabase
    .from("gym_programs")
    .select("*")
    .eq("id", id);
  if (error) {
    throw error;
  }
  return data[0];
}
