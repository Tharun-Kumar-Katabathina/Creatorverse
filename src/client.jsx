import { createClient } from '@supabase/supabase-js';

const URL = 'https://zjuukyebatoqliomtabp.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqdXVreWViYXRvcWxpb210YWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMDEyNzQsImV4cCI6MjAzOTc3NzI3NH0.4lX2BByZX2nwF2Uk5y9GZegwsnx2RkTQqfR1igAEm80';

export const supabase = createClient(URL, API_KEY);
