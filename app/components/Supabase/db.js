
import postgres from "postgres";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const connectionString = 'https://xzkbiwpnkiahnebzgiay.supabase.co'
const sql = postgres(connectionString)

export default sql