import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehfwpmkxwbwbssykjkpl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoZndwbWt4d2J3YnNzeWtqa3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MTk0NTMsImV4cCI6MjAzODA5NTQ1M30.wYAYknS2Jm8OqF9OZpCaeheixWSAy-l95dE4cI6HIlw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
