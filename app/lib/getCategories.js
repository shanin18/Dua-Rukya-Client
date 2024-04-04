const getCategories = async () => {
  try {
    const result = await fetch("https://concerned-crow-fedora.cyclic.app/categories", {
      next: { revalidate: 10 },
    });
    if (!result.ok) {
      throw new Error("Failed to fetch categories");
    }
    return result.json();
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return [];
  }
};

export default getCategories;
