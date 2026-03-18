/**
 * PetsFlow: a reusable, debuggable flow for querying/filtering mock pets.
 *
 * Contract (Flow entrypoint): queryPets(request)
 * Inputs:
 * - request: {
 *     pets: Array<Pet>,
 *     filters: {
 *       q?: string,
 *       type?: string,      // "All" | "Dog" | "Cat" | "Rabbit" | "Bird"
 *       size?: string,      // "All" | "Small" | "Medium" | "Large"
 *       maxAge?: number,    // optional; inclusive
 *       goodWithKids?: boolean | "Any",
 *       vaccinated?: boolean | "Any",
 *       minEnergy?: number  // 1..5 optional; inclusive
 *     },
 *     sort?: string         // "name" | "age" | "energy"
 *   }
 *
 * Outputs:
 * - { items: Array<Pet>, stats: { total: number, matched: number, byType: Record<string, number> } }
 *
 * Errors:
 * - Throws Error only for programmer errors (missing pets array, invalid filter types).
 *
 * Side effects:
 * - None (pure computation).
 */

/** @typedef {{ id: string, name: string, type: string, breed: string, ageYears: number, size: string, energy: number, gender: string, location: string, goodWithKids: boolean, vaccinated: boolean, description: string, traits: string[], imageUrl: string }} Pet */

function normalizeString(value) {
  return String(value ?? "").trim().toLowerCase();
}

function includesCI(haystack, needle) {
  const h = normalizeString(haystack);
  const n = normalizeString(needle);
  if (!n) return true;
  return h.includes(n);
}

function assertNumberOrUndefined(value, name) {
  if (value === undefined || value === null || value === "") return;
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`PetsFlow: expected ${name} to be a number, got ${typeof value}`);
  }
}

function sortPets(items, sort) {
  if (sort === "age") return [...items].sort((a, b) => a.ageYears - b.ageYears);
  if (sort === "energy") return [...items].sort((a, b) => b.energy - a.energy);
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

// PUBLIC_INTERFACE
export function queryPets(request) {
  /**
   * Query/filter/sort pets.
   * See module docstring for contract.
   */
  const pets = request?.pets;
  if (!Array.isArray(pets)) {
    throw new Error("PetsFlow: request.pets must be an array");
  }

  const filters = request?.filters ?? {};
  const sort = request?.sort ?? "name";

  assertNumberOrUndefined(filters.maxAge, "filters.maxAge");
  assertNumberOrUndefined(filters.minEnergy, "filters.minEnergy");

  const total = pets.length;

  const matchedItems = pets.filter((pet) => {
    const q = filters.q ?? "";
    const type = filters.type ?? "All";
    const size = filters.size ?? "All";

    const maxAge = filters.maxAge;
    const minEnergy = filters.minEnergy;

    const goodWithKids = filters.goodWithKids ?? "Any";
    const vaccinated = filters.vaccinated ?? "Any";

    const matchesText =
      includesCI(pet.name, q) ||
      includesCI(pet.breed, q) ||
      includesCI(pet.location, q) ||
      includesCI(pet.description, q);

    const matchesType = type === "All" ? true : pet.type === type;
    const matchesSize = size === "All" ? true : pet.size === size;

    const matchesAge = maxAge === undefined || maxAge === null || maxAge === ""
      ? true
      : pet.ageYears <= maxAge;

    const matchesEnergy = minEnergy === undefined || minEnergy === null || minEnergy === ""
      ? true
      : pet.energy >= minEnergy;

    const matchesKids = goodWithKids === "Any" ? true : pet.goodWithKids === goodWithKids;
    const matchesVax = vaccinated === "Any" ? true : pet.vaccinated === vaccinated;

    return (
      matchesText &&
      matchesType &&
      matchesSize &&
      matchesAge &&
      matchesEnergy &&
      matchesKids &&
      matchesVax
    );
  });

  const byType = matchedItems.reduce((acc, pet) => {
    acc[pet.type] = (acc[pet.type] ?? 0) + 1;
    return acc;
  }, {});

  const items = sortPets(matchedItems, sort);

  return {
    items,
    stats: {
      total,
      matched: items.length,
      byType,
    },
  };
}

// PUBLIC_INTERFACE
export function getPetById(pets, petId) {
  /** Get a pet by id. Throws if pets is not an array. Returns null if not found. */
  if (!Array.isArray(pets)) {
    throw new Error("PetsFlow: pets must be an array");
  }
  const id = String(petId ?? "");
  return pets.find((p) => p.id === id) ?? null;
}
