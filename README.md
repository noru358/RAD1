export type Severity = "LOW" | "MEDIUM" | "HIGH";

export type SellerCategory =
  | "생활용품"
  | "주방용품"
  | "식품"
  | "패션"
  | "화장품"
  | "전자기기"
  | "기타";

export interface SellerProfile {
  storeCount: number;
  productCountRange: "UNDER_100" | "100_999" | "1000_4999" | "5000_PLUS";
  categories: SellerCategory[];
  usesAds: boolean;
  usesNDelivery: boolean;
  fulfillment: "SELF" | "THIRD_PARTY" | "MIXED";
}

export interface ActionCard {
  id: string;
  title: string;
  summary: string;
  severity: Severity;
  effectiveDate: string;
  deadline?: string;
  affectedCategories: SellerCategory[];
  minProductRange?: SellerProfile["productCountRange"];
  appliesWhen?: {
    usesAds?: boolean;
    usesNDelivery?: boolean;
    fulfillment?: SellerProfile["fulfillment"];
  };
  risks: string[];
  actions: string[];
  sourceLabel: string;
  sourceUrl: string;
  confidence: number;
}
