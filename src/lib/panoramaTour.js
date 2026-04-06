import fallbackPanoramaImage from "@/images/360/360-Duplex-Deluxe.jpg";

function toNonEmptyString(value) {
  return typeof value === "string" && value.trim() ? value : "";
}

function pickFirst(...candidates) {
  return candidates.map(toNonEmptyString).find(Boolean) || "";
}

export function resolvePropertyPanoramaSources(property = {}) {
  const galleryImages = Array.isArray(property.gallery_images) ? property.gallery_images : [];

  const exteriorPrimary = pickFirst(
    property.panorama_exterior_image,
    property.panoramaExteriorImage,
    property.panorama_image,
    property.panoramaImage,
  );

  const exteriorFallback = pickFirst(
    property.main_image,
    ...galleryImages,
    fallbackPanoramaImage,
  );

  const exterior = exteriorPrimary || exteriorFallback;
  const interiorPrimary = pickFirst(
    property.panorama_interior_image,
    property.panoramaInteriorImage,
  );
  const interior = interiorPrimary || exterior;

  return {
    exterior,
    interior,
    hasAny: Boolean(exterior || interior),
    isInteriorFallback: !interiorPrimary,
  };
}
