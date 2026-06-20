const { createClient } = require('@supabase/supabase-js');
const path = require('path');

// Carga el .env desde la carpeta backend (donde está el archivo)
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

console.log('🔍 Buscando .env en:', path.join(__dirname, '..', '.env'));
console.log('📡 SUPABASE_URL:', supabaseUrl ? '✅ Cargada' : '❌ No cargada');
console.log('🔑 SUPABASE_SERVICE_KEY:', supabaseKey ? '✅ Cargada' : '❌ No cargada');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Variables de entorno no encontradas');
  throw new Error('Faltan SUPABASE_URL o SUPABASE_SERVICE_KEY en el archivo .env');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;