# Ecoryx-gun
Disclosure conversion driven by AI



**Structure** :

1. User flow (what they experience)
2. Data mapping example (quantitative)
3. Conversion logic example (totals → % etc.)
4. Narrative/text mapping example (qualitative)
5. Final UX expectation (what “good” looks like)



## User flow (what they experience)

**Scenario:**
A sustainability manager at a manufacturing company has already completed a **GRI-based ESG report** in your system and now wants to generate a **SASB report** for investors.

**Step 1 – Select Source Disclosure**

User clicks:

> “Create New Disclosure → Use Existing Disclosure → Select: *GRI 2024 Report*”

System response:

- Shows a preview summary:
  - Company name
  - Reporting period
  - Industry sector (e.g., Industrial Machinery)
  - Completed indicators: 82%
- Asks:
  - “Target Framework?” → SASB
  - “Target Industry?” → Industrial Machinery
  - “Allow auto-fill + AI narrative reuse?” → ✅ Yes



---



## Quantitative Data Mapping Example

(GRI → SASB field-level auto-fill)

Example: Energy Data

**From GRI disclosure (already completed):**

| GRI Field                          | Value        |
| ---------------------------------- | ------------ |
| GRI 302-1 Total Energy Consumption | 1,200,000 GJ |
| GRI 302-1 Renewable Energy         | 360,000 GJ   |
| GRI 302-1 Non-renewable Energy     | 840,000 GJ   |

**Target SASB Field:**

| SASB Metric                               | Expected Auto-Fill |
| ----------------------------------------- | ------------------ |
| Energy Management – Total Energy Consumed | 1,200,000 GJ       |
| % Grid Electricity                        | 70% *(derived)*    |
| % Renewable Energy                        | 30% *(derived)*    |

**System behavior:**

- Maps GRI 302-1 → SASB Energy Consumption

- Automatically calculates:

  - % Renewable = 360,000 / 1,200,000 = **30%**
  - % Non-renewable = **70%**

- Fills all 3 SASB fields

- Shows conversion note:

  > “Derived from GRI 302-1: Renewable Energy ÷ Total Energy”



---



## Data Conversion Example

*(Totals → Percentages / Ratios / Intensities)*

### Example: Water Usage

**From GRI:**

| GRI Field                            | Value        |
| ------------------------------------ | ------------ |
| GRI 303-5 Total Water Withdrawn      | 2,000,000 m³ |
| GRI 303-5 Water in High-Stress Areas | 500,000 m³   |
| Total Revenue (from financials)      | $250M        |

Target SASB Fields:

| SASB Metric                       | Expected Auto-Fill |
| --------------------------------- | ------------------ |
| Total Water Withdrawn             | 2,000,000 m³       |
| % in High-Stress Areas            | 25%                |
| Water Intensity (m³ / $M revenue) | 8,000              |

**System behavior:**

- % High-Stress = 500,000 ÷ 2,000,000 = **25%**

- Water Intensity = 2,000,000 ÷ 250 = **8,000 m³/$M**

- Flags formula source:

  > “Calculated per SASB Water Intensity Guidance”





---



## Narrative / Text Mapping Example

*(This is where your AI layer shines)*

### Example: Climate Strategy Narrative

**From GRI 305 (Emissions) – User’s original text:**

> “The company is committed to reducing Scope 1 and Scope 2 greenhouse gas emissions by 42% by 2030 from a 2020 baseline. This will be achieved through on-site solar installation, energy efficiency retrofits, and electrification of logistics fleets. Internal carbon pricing has been introduced at $50/ton to guide capital allocation decisions.”

------

**Target SASB Narrative Field:**

> *SASB: Description of long-term and short-term strategy or plan to manage Scope 1 and Scope 2 emissions, emissions reduction targets, and an analysis of performance against those targets.*

------

**System behavior:**

The system auto-generates a **draft SASB-compliant narrative**:

> “The company has established a long-term strategy to manage Scope 1 and Scope 2 emissions, with a reduction target of 42% by 2030 from a 2020 baseline. Key initiatives include on-site solar energy deployment, energy efficiency retrofits, and fleet electrification. To support capital allocation decisions, the company has implemented an internal carbon price of $50 per metric ton of CO₂e. Performance against targets is tracked annually and disclosed through enterprise-wide emissions accounting systems.”

**User experience:**

- The SASB text box is pre-filled

- A label appears:

  > “Generated from GRI 305 narrative – 87% semantic match”

- User can:

  - Accept
  - Edit
  - Regenerate
  - Add SASB-specific detail



## Another Narrative Example (Governance)

**From GRI 102-18 (Governance Structure):**

> “Sustainability oversight is led by the Board Risk Committee, supported by a cross-functional ESG working group. Executive remuneration is partially linked to energy efficiency and safety performance.”

**Target SASB Field:**

> *Board oversight of environmental and social issues*

**System output:**

> “The Board Risk Committee provides oversight of environmental and social performance, supported by a cross-functional ESG working group. Executive compensation structures incorporate ESG performance indicators, including energy efficiency and workplace safety metrics.”



---



## Data Gaps & User Prompts (Important UX Detail)

Not everything will map perfectly.

### Example: SASB-Specific Field Missing in GRI

| SASB Metric                              | Status             |
| ---------------------------------------- | ------------------ |
| Number of regulatory environmental fines | ❌ Not found in GRI |
| Description of supply chain labor audits | ❌ Not found        |

**System behavior:**

- Shows:

  > “2 SASB metrics could not be auto-filled”

- Highlights fields in yellow

- Provides smart suggestions:

  - “Do you want AI to draft a response based on your HR & compliance policy documents?”

- Allows manual entry



---



## Final UX Expectation: What “Good” Looks Like

From a user’s perspective, success means:

### A. Time Compression

What used to take:

- 3–6 weeks of consultant work
- $10k–$50k in fees

Now takes:

- 15–45 minutes
- Mostly review + light edits

------

### B. Trust Signals Built into the Product

Each auto-filled SASB field shows:

- Source: “Derived from GRI 302-1”
- Formula: “Renewable ÷ Total Energy”
- Confidence score: “High (0.93)”
- Last updated date
- Audit trail ID

------

### C. One-Click Export

User clicks:

> “Export SASB Disclosure”

System outputs:

- SASB-formatted PDF
- Excel data annex
- XBRL/JSON for regulators
- Investor-ready summary



## One-Paragraph Expectation Summary (Product/Investor-Ready)

In the GRI-to-SASB conversion workflow, users expect to select an existing GRI disclosure as a reference, after which the system automatically maps overlapping metrics, pre-fills quantitative data, and performs necessary unit, percentage, and intensity conversions. Qualitative narratives are semantically re-used and rewritten to align with SASB’s disclosure language, producing draft investor-ready text with clear traceability to original GRI sources. Any unmapped fields are flagged with AI-assisted drafting options. The final result is a near-complete SASB disclosure generated in minutes rather than weeks, with full audit trails, confidence scoring, and one-click export into regulatory and investor formats.
