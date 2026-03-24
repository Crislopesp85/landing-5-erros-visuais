import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://vqdqyeybtvbokvilhndh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxZHF5ZXlidHZib2t2aWxobmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMjkwNzIsImV4cCI6MjA4OTgwNTA3Mn0.OEs4ghRqHVDd-pEPaQHJVRj7YJ9Vze2BQZ8rNrDMxi0"
);
