export async function logMissingThankYouSlug(slug: string): Promise<void> {
  // TODO: Replace with real logging pipeline (e.g., Supabase, Axiom, Sentry).
  console.warn(`[thanks] Missing thank-you slug: ${slug}`);
}
