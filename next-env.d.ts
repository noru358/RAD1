import { sampleActionCards } from "@/data/sample-cards";
import { isCardRelevant } from "@/lib/relevance";
import type { ActionCard, SellerProfile } from "@/types/radar";

export interface RadarService {
  getRelevantCards(profile: SellerProfile): Promise<ActionCard[]>;
}

export class MockRadarService implements RadarService {
  async getRelevantCards(profile: SellerProfile): Promise<ActionCard[]> {
    return sampleActionCards.filter((card) => isCardRelevant(card, profile));
  }
}

/**
 * Phase 2 implementation target:
 *
 * export class SupabaseRadarService implements RadarService {
 *   - read normalized Action Cards from Supabase
 *   - apply deterministic relevance filters first
 *   - use LLM only for ambiguous impact judgments
 * }
 */
