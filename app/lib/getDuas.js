const getDuas = async () => {
  try {
    const result = await fetch("https://concerned-crow-fedora.cyclic.app/duas", {
      next: { revalidate: 10 },
    });
    if (!result.ok) {
      throw new Error("Failed to fetch duas");
    }
    return result.json();
  } catch (error) {
    console.error("Error fetching duas:", error.message);
    return [];
  }
};

export default getDuas;
