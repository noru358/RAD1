import type { ActionCard, SellerProfile } from "@/types/radar";

const productRank: Record<SellerProfile["productCountRange"], number> = {
  UNDER_100: 0,
  "100_999": 1,
  "1000_4999": 2,
  "5000_PLUS": 3,
};

export function isCardRelevant(
  card: ActionCard,
  profile: SellerProfile,
): boolean {
  const categoryMatch = card.affectedCategories.some((category) =>
    profile.categories.includes(category),
  );

  if (!categoryMatch) return false;

  if (
    card.minProductRange &&
    productRank[profile.productCountRange] <
      productRank[card.minProductRange]
  ) {
    return false;
  }

  if (
    card.appliesWhen?.usesAds !== undefined &&
    card.appliesWhen.usesAds !== profile.usesAds
  ) {
    return false;
  }

  if (
    card.appliesWhen?.usesNDelivery !== undefined &&
    card.appliesWhen.usesNDelivery !== profile.usesNDelivery
  ) {
    return false;
  }

  if (
    card.appliesWhen?.fulfillment &&
    card.appliesWhen.fulfillment !== profile.fulfillment &&
    profile.fulfillment !== "MIXED"
  ) {
    return false;
  }

  return true;
}
