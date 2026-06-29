import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

// Ensure we use the service role key on the server
const getSupabaseAdmin = () => {
  const url = process.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!url || !serviceKey) {
    throw new Error("Missing Supabase admin variables");
  }
  
  return createClient(url, serviceKey);
};

export const submitContactFn = createServerFn({ method: "POST" })
  .validator((d: {
    name: string;
    email: string;
    type: string;
    budget: string;
    message: string;
  }) => d)
  .handler(async ({ data }) => {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("contacts").insert([
      {
        name: data.name,
        email: data.email,
        type: data.type,
        budget: data.budget,
        message: data.message,
      }
    ]);
    
    if (error) {
      console.error("Supabase insert error:", error);
      throw new Error("Failed to submit contact form");
    }
    
    return { success: true };
  });

export const getContactsFn = createServerFn({ method: "POST" })
  .validator((d: string) => d)
  .handler(async ({ data: password }) => {
    if (password !== "pwd4LETXBEACOMPANYADMINPANEL@1729") {
      throw new Error("Unauthorized");
    }
    
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.from("contacts").select("*").order("created_at", { ascending: false });
    
    if (error) {
      console.error("Supabase select error:", error);
      throw new Error("Failed to fetch contacts");
    }
    
    return data;
  });
