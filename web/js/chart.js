/**
 * Zero-Dependency SVG Standardized T-Score Profile Generator.
 * Conforms to requirement.md v2.0.0.
 * Dual-environment support: Browser & Node.js.
 */

(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.CAARS_CHART = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const SCALES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  /**
   * Generates a complete standalone SVG element string representing the CAARS T-score profile.
   * @param {Array} scores - Array of 8 subscale score objects { scale_code, t_score, percentile, classification, scale_name }
   * @param {Object} options - { isDark: boolean, title: string }
   * @returns {string} - SVG markup
   */
  function generateProfileSVG(scores, options = {}) {
    const isDark = Boolean(options.isDark);

    // Color tokens (Black, Charcoal, Grey, Cyan Glow, White)
    const colors = isDark ? {
      bg: '#14171a',
      textMain: '#ffffff',
      textMuted: '#7c7a7a',
      grid: '#2a2e33',
      border: '#494949',
      line: '#5cfff7',
      pointFill: '#000000',
      pointStroke: '#5cfff7',
      bandVeryElevated: 'rgba(244, 63, 94, 0.16)',
      bandElevated: 'rgba(245, 158, 11, 0.14)',
      lineMean: '#5cfff7',
      line70: '#f43f5e',
      line65: '#f59e0b'
    } : {
      bg: '#ffffff',
      textMain: '#000000',
      textMuted: '#7c7a7a',
      grid: '#e5e7eb',
      border: '#d4d7dc',
      line: '#008f88',
      pointFill: '#ffffff',
      pointStroke: '#008f88',
      bandVeryElevated: 'rgba(254, 226, 226, 0.65)',
      bandElevated: 'rgba(254, 243, 199, 0.60)',
      lineMean: '#008f88',
      line70: '#dc2626',
      line65: '#d97706'
    };

    // Canvas coordinate geometry
    const width = 840;
    const height = 400;
    const margin = { top: 40, right: 140, bottom: 55, left: 60 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;

    // Y mapping: T-score 30 (bottom) to 90 (top)
    const minT = 30;
    const maxT = 90;
    function getY(t) {
      const clamped = Math.max(minT, Math.min(maxT, t));
      return margin.top + plotHeight - ((clamped - minT) / (maxT - minT)) * plotHeight;
    }

    // X mapping: 8 scales spaced evenly
    function getX(index) {
      return margin.left + (index / (SCALES.length - 1)) * plotWidth;
    }

    // Map score data
    const scoreMap = {};
    if (Array.isArray(scores)) {
      for (const s of scores) {
        scoreMap[s.scale_code] = s;
      }
    }

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="caars-svg-chart" role="img" aria-label="CAARS Standardized T-Score Profile Curve">`;

    // 1. Background surface
    svg += `<rect width="${width}" height="${height}" fill="${colors.bg}" rx="8" />`;

    // 2. Shaded clinical zones
    const y90 = getY(90);
    const y70 = getY(70);
    const y65 = getY(65);

    // Zone: Very Elevated (T >= 70)
    svg += `<rect x="${margin.left}" y="${y90}" width="${plotWidth}" height="${y70 - y90}" fill="${colors.bandVeryElevated}" />`;
    // Zone: Elevated (T 65-69)
    svg += `<rect x="${margin.left}" y="${y70}" width="${plotWidth}" height="${y65 - y70}" fill="${colors.bandElevated}" />`;

    // 3. Gridlines and Y-axis ticks (T = 30, 40, 50, 60, 65, 70, 80, 90)
    const yTicks = [30, 40, 50, 60, 65, 70, 80, 90];
    for (const t of yTicks) {
      const y = getY(t);
      const isMean = t === 50;
      const isCutoff70 = t === 70;
      const isCutoff65 = t === 65;

      let strokeColor = colors.grid;
      let strokeDash = '4,4';
      let strokeWidth = 1;

      if (isMean) {
        strokeColor = colors.lineMean;
        strokeDash = '2,3';
        strokeWidth = 1.2;
      } else if (isCutoff70) {
        strokeColor = colors.line70;
        strokeDash = '5,3';
        strokeWidth = 1.2;
      } else if (isCutoff65) {
        strokeColor = colors.line65;
        strokeDash = '5,3';
        strokeWidth = 1.2;
      }

      svg += `<line x1="${margin.left}" y1="${y}" x2="${margin.left + plotWidth}" y2="${y}" stroke="${strokeColor}" stroke-dasharray="${strokeDash}" stroke-width="${strokeWidth}" />`;
      // Y-axis label
      svg += `<text x="${margin.left - 10}" y="${y + 4}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="${(isMean || isCutoff70 || isCutoff65) ? 'bold' : 'normal'}" fill="${(isCutoff70 ? colors.line70 : (isCutoff65 ? colors.line65 : colors.textMuted))}" text-anchor="end">${t}</text>`;
    }

    // Zone labels on right margin
    svg += `<text x="${margin.left + plotWidth + 8}" y="${getY(77)}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10" font-weight="bold" fill="${colors.line70}">Very Elevated (T ≥ 70)</text>`;
    svg += `<text x="${margin.left + plotWidth + 8}" y="${getY(67.5)}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10" font-weight="bold" fill="${colors.line65}">Elevated (T 65–69)</text>`;
    svg += `<text x="${margin.left + plotWidth + 8}" y="${getY(50) + 3}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10" fill="${colors.lineMean}">Normative Mean (T = 50)</text>`;

    // 4. X-axis vertical guides and scale labels
    const points = [];
    SCALES.forEach((code, idx) => {
      const x = getX(idx);
      svg += `<line x1="${x}" y1="${margin.top}" x2="${x}" y2="${margin.top + plotHeight}" stroke="${colors.grid}" stroke-width="1" stroke-opacity="0.6" />`;

      const scoreObj = scoreMap[code] || { t_score: 50 };
      const y = getY(scoreObj.t_score);
      points.push({ x, y, code, scoreObj });

      // Scale Code label
      svg += `<text x="${x}" y="${margin.top + plotHeight + 22}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="bold" fill="${colors.textMain}" text-anchor="middle">${code}</text>`;
    });

    // 5. Plot connected data polyline
    if (points.length > 0) {
      const pathD = points.map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`).join(' ');
      svg += `<path d="${pathD}" fill="none" stroke="${colors.line}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`;

      // 6. Data markers and score annotations
      points.forEach(pt => {
        const tVal = pt.scoreObj.t_score;
        const scaleName = pt.scoreObj.scale_name || `Scale ${pt.code}`;
        const pct = pt.scoreObj.percentile !== undefined ? `${pt.scoreObj.percentile}%` : '';
        const tier = pt.scoreObj.classification || '';

        // Tooltip accessible group
        svg += `<g role="graphics-symbol" aria-label="Scale ${pt.code}: T-score ${tVal}, ${tier}">`;
        svg += `<title>Scale ${pt.code} (${scaleName}): Standard T = ${tVal} (${tier}${pct ? `, ${pct} percentile` : ''})</title>`;

        // Outer glow on hover
        svg += `<circle cx="${pt.x}" cy="${pt.y}" r="6" fill="${colors.pointFill}" stroke="${colors.pointStroke}" stroke-width="2.5" class="chart-point" />`;

        // Exact T-Score label above point
        const labelY = pt.y - 10;
        svg += `<text x="${pt.x}" y="${labelY}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="bold" fill="${colors.textMain}" text-anchor="middle">${tVal}</text>`;
        svg += `</g>`;
      });
    }

    // Border surrounding the plot
    svg += `<rect x="${margin.left}" y="${margin.top}" width="${plotWidth}" height="${plotHeight}" fill="none" stroke="${colors.border}" stroke-width="1" />`;

    // Title / Axis captions
    svg += `<text x="${margin.left}" y="${margin.top - 14}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="bold" fill="${colors.textMain}">Standardized T-Score Profile (M=50, SD=10)</text>`;
    svg += `<text x="${margin.left + plotWidth / 2}" y="${margin.top + plotHeight + 42}" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" fill="${colors.textMuted}" text-anchor="middle">CAARS Clinical Subscales (A through H)</text>`;

    svg += `</svg>`;
    return svg;
  }

  return {
    generateProfileSVG
  };
});
