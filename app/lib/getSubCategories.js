const getSubCategories = async () => {
  try {
    const result = await fetch("https://concerned-crow-fedora.cyclic.app/sub-categories", {
      next: { revalidate: 10 },
    });
    if (!result.ok) {
      throw new Error("Failed to fetch subCategories");
    }
    return result.json();
  } catch (error) {
    console.error("Error fetching subCategories:", error.message);
    return [];
  }
};

export default getSubCategories;
