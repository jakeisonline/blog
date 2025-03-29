import React from "react"

export const Index: Record<string, any> = {
  "pending-state-no-feedback": {
    name: "pending-state-no-feedback",
    component: React.lazy(
      () => import("@/content/examples/pending-state/no-feedback"),
    ),
  },
  "pending-state-with-feedback": {
    name: "pending-state-with-feedback",
    component: React.lazy(
      () => import("@/content/examples/pending-state/with-feedback"),
    ),
  },
  "pending-state-with-context": {
    name: "pending-state-with-context",
    component: React.lazy(
      () => import("@/content/examples/pending-state/with-context"),
    ),
  },
  "pending-state-apply-filters": {
    name: "pending-state-apply-filters",
    component: React.lazy(
      () => import("@/content/examples/pending-state/apply-filters"),
    ),
  },
  "pending-state-navigation": {
    name: "pending-state-navigation",
    component: React.lazy(
      () => import("@/content/examples/pending-state/navigation"),
    ),
  },
  "visual-language-food-icons": {
    name: "visual-language-food-icons",
    component: React.lazy(
      () => import("@/content/examples/visual-language/food-icons"),
    ),
  },
}
