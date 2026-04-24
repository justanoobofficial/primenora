export function EmptyProducts() {
  return (
    <div className="premium-shadow mt-10 rounded-[32px] border border-dashed border-[var(--border)] bg-white px-6 py-16 text-center">
      <h3 className="font-[var(--font-heading)] text-2xl font-semibold">
        No products are available right now
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--muted-foreground)]">
        Add product documents to the Firestore <code>products</code> collection and this section
        will populate automatically.
      </p>
    </div>
  );
}
