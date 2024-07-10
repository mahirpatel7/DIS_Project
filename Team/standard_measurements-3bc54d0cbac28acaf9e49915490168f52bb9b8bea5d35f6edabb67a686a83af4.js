!(function () {
  const e = $("*[data-analytics-page-id]").data("analyticsPageId"),
    a = (a, n) => {
      const t = $(a).closest("[data-analytics-element-id]"),
        o = t.data("analyticsElementId"),
        i = t.data("analyticsElementLabel"),
        d = $(t.parents("[data-analytics-section-id]")).data(
          "analyticsSectionId"
        ),
        s = t.prop("nodeName") && t.prop("nodeName").toLowerCase();
      return Object.assign(
        { sectionId: d, elementId: o, elementLabel: i, tagName: s, pageId: e },
        n
      );
    },
    n = (e, n) => {
      const {
        elementId: t,
        elementLabel: o,
        elementPosition: i,
        eventType: d,
        pageId: s,
        sectionId: l,
        sectionLabel: c,
        sectionPosition: m,
        tagName: r,
      } = a(e, n);
      if (s && l && t && d && window.ga && window._envGaTrackerNames)
        for (const e of window._envGaTrackerNames)
          ga(`${e}.send`, {
            hitType: "event",
            eventCategory: [l, c].filter(Boolean).join(";"),
            eventAction: [d, r].filter(Boolean).join(";"),
            eventLabel: [t, o].filter(Boolean).join(";"),
            eventValue: i,
            dimension15: m,
            dimension20: s,
          });
    };
  window.sendStandardEvent = n;
})();
