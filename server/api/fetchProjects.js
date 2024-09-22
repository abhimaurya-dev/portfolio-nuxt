import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    return {
      statusCode: 500,
      body: { message: "Error fetching tasks", error },
    };
  }
  // console.log("new data", data);
  return {
    statusCode: 200,
    body: data,
  };
});
