/*
  # Create Carts Table

  1. New Tables
    - `carts`
      - `id` (uuid, primary key)
      - `session_id` (text, unique)
      - `items` (jsonb)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `carts` table
    - Add policy for public access by session_id
*/

CREATE TABLE IF NOT EXISTS carts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  items jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE carts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow access by session_id"
  ON carts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow insert"
  ON carts
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow update"
  ON carts
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);
