"use client";

import { FormEvent, useMemo, useState } from "react";
import { sampleActionCards } from "@/data/sample-cards";
import { isCardRelevant } from "@/lib/relevance";
import type {
  ActionCard,
  SellerCategory,
  SellerProfile,
  Severity,
} from "@/types/radar";

const categories: SellerCategory[] = [
  "생활용품",
  "주방용품",
  "식품",
  "패션",
  "화장품",
  "전자기기",
  "기타",
];

const initialProfile: SellerProfile = {
  storeCount: 1,
  productCountRange: "100_999",
  categories: ["생활용품"],
  usesAds: false,
  usesNDelivery: false,
  fulfillment: "SELF",
};

const severityLabel: Record<Severity, string> = {
  HIGH: "긴급 확인",
  MEDIUM: "검토 필요",
  LOW: "참고",
};

export function RadarApp() {
  const [profile, setProfile] = useState<SellerProfile>(initialProfile);
  const [submittedProfile, setSubmittedProfile] =
    useState<SellerProfile | null>(null);

  const relevantCards = useMemo(() => {
    if (!submittedProfile) return [];
    return sampleActionCards.filter((card) =>
      isCardRelevant(card, submittedProfile),
    );
  }, [submittedProfile]);

  function toggleCategory(category: SellerCategory) {
    setProfile((current) => {
      const exists = current.categories.includes(category);
      const nextCategories = exists
        ? current.categories.filter((item) => item !== category)
        : [...current.categories, category];

      return {
        ...current,
        categories: nextCategories.length ? nextCategories : [category],
      };
    });
  }

  function submitProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem("seller-radar-profile", JSON.stringify(profile));
    setSubmittedProfile(profile);
    document
      .getElementById("results")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <header className="shell topbar">
        <div className="brand">
          <div className="logo">S</div>
          셀러가드
        </div>
        <div className="pill">검증용 MVP · 실제 정책 자문 아님</div>
      </header>

      <main>
        <section className="shell hero">
          <div>
            <div className="eyebrow">판매자 정책 변화 레이더</div>
            <h1>
              공지사항을
              <br />
              실행할 일로 바꿉니다.
            </h1>
            <p>
              스마트스토어 정책·제재·운영 변경을 계속 찾아다니지 마세요.
              내 스토어에 적용되는 변화만 골라 위험, 기한, 필요한 조치로
              정리합니다.
            </p>
            <div className="ctaRow">
              <a href="#demo" className="primaryButton">
                내 영향 확인하기
              </a>
              <a href="#how" className="secondaryButton">
                작동 방식
              </a>
            </div>
          </div>

          <aside className="heroPanel">
            <div className="heroPanelHeader">
              <div>
                <div className="miniLabel">이번 주 영향 브리핑</div>
                <h3>생활용품 · 상품 1,000개 이상</h3>
              </div>
              <span className="badge high">2건 긴급</span>
            </div>
            <div className="changeItem">
              <strong>상품 등록 한도 기준 변경</strong>
              <p>시행 전 저성과·중복 상품을 먼저 정리할 필요가 있습니다.</p>
            </div>
            <div className="changeItem">
              <strong>배송 품질 지표 변경</strong>
              <p>발송 지연 주문과 상품별 출고일 설정을 점검하세요.</p>
            </div>
            <div className="changeItem">
              <strong>광고 소재 검수 항목 추가</strong>
              <p>효능·비교 표현이 들어간 소재를 우선 검토하세요.</p>
            </div>
          </aside>
        </section>

        <section id="how" className="shell section">
          <div className="sectionTitle">
            <h2>뉴스 요약이 아니라 영향 판정</h2>
            <p>
              정보를 긁어오는 데서 끝내지 않고, 판매자 프로필과 연결해
              적용 여부와 다음 행동까지 내려주는 구조를 검증합니다.
            </p>
          </div>
          <div className="grid3">
            <article className="featureCard">
              <span>1</span>
              <h3>변화 감지</h3>
              <p>공식 공지·정책 페이지의 변경 전후를 비교하고 중복을 제거합니다.</p>
            </article>
            <article className="featureCard">
              <span>2</span>
              <h3>스토어 영향 판정</h3>
              <p>상품 수, 카테고리, 배송·광고 설정과 연결해 관련성을 판단합니다.</p>
            </article>
            <article className="featureCard">
              <span>3</span>
              <h3>행동 카드</h3>
              <p>위험, 적용일, 마감, 준비할 일을 출처와 함께 정리합니다.</p>
            </article>
          </div>
        </section>

        <section id="demo" className="shell section">
          <div className="workspace">
            <div className="workspaceHeader">
              <div>
                <h2>샘플 영향 분석</h2>
                <p>현재는 고정된 샘플 데이터로 제품 흐름을 검증합니다.</p>
              </div>
              <span className="pill">API·DB 연결 전</span>
            </div>

            <div className="formGrid">
              <form className="profileForm" onSubmit={submitProfile}>
                <div className="field">
                  <label htmlFor="storeCount">운영 스토어 수</label>
                  <input
                    id="storeCount"
                    type="number"
                    min={1}
                    max={100}
                    value={profile.storeCount}
                    onChange={(event) =>
                      setProfile({
                        ...profile,
                        storeCount: Number(event.target.value),
                      })
                    }
                  />
                </div>

                <div className="field">
                  <label htmlFor="productCount">등록 상품 수</label>
                  <select
                    id="productCount"
                    value={profile.productCountRange}
                    onChange={(event) =>
                      setProfile({
                        ...profile,
                        productCountRange: event.target
                          .value as SellerProfile["productCountRange"],
                      })
                    }
                  >
                    <option value="UNDER_100">100개 미만</option>
                    <option value="100_999">100~999개</option>
                    <option value="1000_4999">1,000~4,999개</option>
                    <option value="5000_PLUS">5,000개 이상</option>
                  </select>
                </div>

                <div className="field">
                  <label>주요 카테고리</label>
                  <div className="checkboxGrid">
                    {categories.map((category) => (
                      <label className="checkbox" key={category}>
                        <input
                          type="checkbox"
                          checked={profile.categories.includes(category)}
                          onChange={() => toggleCategory(category)}
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="fulfillment">배송 방식</label>
                  <select
                    id="fulfillment"
                    value={profile.fulfillment}
                    onChange={(event) =>
                      setProfile({
                        ...profile,
                        fulfillment: event.target
                          .value as SellerProfile["fulfillment"],
                      })
                    }
                  >
                    <option value="SELF">자체배송</option>
                    <option value="THIRD_PARTY">외부 풀필먼트</option>
                    <option value="MIXED">혼합</option>
                  </select>
                </div>

                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={profile.usesAds}
                    onChange={(event) =>
                      setProfile({ ...profile, usesAds: event.target.checked })
                    }
                  />
                  네이버 쇼핑광고 사용
                </label>

                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={profile.usesNDelivery}
                    onChange={(event) =>
                      setProfile({
                        ...profile,
                        usesNDelivery: event.target.checked,
                      })
                    }
                  />
                  N배송 사용
                </label>

                <button className="primaryButton" type="submit">
                  샘플 영향 카드 보기
                </button>
                <div className="note">
                  입력값은 브라우저에만 저장되며 서버로 전송되지 않습니다.
                </div>
              </form>

              <div id="results" className="cards">
                {!submittedProfile ? (
                  <div className="empty">
                    왼쪽에서 스토어 정보를 입력하면 관련 샘플 카드가 표시됩니다.
                  </div>
                ) : relevantCards.length ? (
                  relevantCards.map((card) => (
                    <ActionCardView card={card} key={card.id} />
                  ))
                ) : (
                  <div className="empty">
                    현재 샘플 데이터 중 일치하는 카드가 없습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        셀러가드 MVP · 현재 화면의 정책 내용과 날짜는 제품 검증용 샘플입니다.
      </footer>
    </>
  );
}

function ActionCardView({ card }: { card: ActionCard }) {
  const severityClass = card.severity.toLowerCase();

  return (
    <article className={`actionCard ${severityClass}`}>
      <div className="cardTop">
        <span className={`badge ${severityClass}`}>
          {severityLabel[card.severity]}
        </span>
        <strong>{Math.round(card.confidence * 100)}% 관련성</strong>
      </div>

      <h3>{card.title}</h3>
      <p className="cardDescription">{card.summary}</p>

      <div className="meta">
        <div>
          <span>적용 예정일</span>
          <strong>{card.effectiveDate}</strong>
        </div>
        <div>
          <span>권장 확인 기한</span>
          <strong>{card.deadline ?? "별도 기한 없음"}</strong>
        </div>
      </div>

      <strong>예상 위험</strong>
      <ul className="actions">
        {card.risks.map((risk) => (
          <li key={risk}>{risk}</li>
        ))}
      </ul>

      <strong>권장 행동</strong>
      <ol className="actions">
        {card.actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ol>

      <a className="source" href={card.sourceUrl}>
        {card.sourceLabel} ↗
      </a>
    </article>
  );
}
