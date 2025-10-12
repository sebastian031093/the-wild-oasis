import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ewbzafbxyiyubwqemsoc.supabase.co';
//const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3YnphZmJ4eWl5dWJ3cWVtc29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMzcyODEsImV4cCI6MjA3NTgxMzI4MX0.6W24ldJP4HrrH1dHJ3Ac6c39OmpzssQ_Nib80BkKMxE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
