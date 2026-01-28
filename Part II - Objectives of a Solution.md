# Ecoryx-gun
Disclosure conversion driven by AI



## **Task: ESG Framework Mapping Feature**

### Goal

Build a feature using Node.js (backend) and React (frontend) that allows a user to reuse ESG disclosures across different frameworks using AI.

### Example Scenario

A user has already created an ESG disclosure using GRI and wants to create another disclosure using SASB. The system should:

- Allow the user to reference the existing GRI disclosure
- Automatically map and pre-fill similar data into SASB fields
- Handle data conversions where needed (for example: total values to percentages)
- Handle text/commentary/narrative sections by converting and reusing qualitative disclosures from GRI into relevant SASB narrative requirements (text-based mapping, similar to data conversion)



---



## Main References

- A Practical Guide to Sustainability Reporting Using GRI and SASB Standards by IFRS - [Link](https://sasb.ifrs.org/wp-content/uploads/2021/04/GRI-SASB-V4-040721.pdf)
- An Example SASB Reports : TotalEnergies Company - [Link](https://totalenergies.com/sites/g/files/nytnzq121/files/documents/2023-03/SASB-Reporting-VEN.pdf)



---



## Taxonomy Analysis

### GRI Series

**GRI 100 Series (Universal Standards)**

- GRI 101: Foundation
- GRI 102: General Disclosures
- GRI 103: Management Approach

**GRI 200 Series (Economic Standards)**

- GRI 201: Economic Performance
- GRI 202: Market Presence
- GRI 203: Indirect Economic Impacts
- GRI 204: Procurement Practices
- GRI 205: Anti-corruption
- GRI 206: Anti-competitive Behavior
- GRI 207: Tax

**GRI 300 Series (Environmental Standards)**

- GRI 301: Materials
- GRI 302: Energy
- GRI 303: Water and Effluents
- GRI 304: Biodiversity
- GRI 305: Emissions
- GRI 306: Waste
- GRI 307: Environmental Compliance
- GRI 308: Supplier Environmental Assessment

**GRI 400 Series (Social Standards)**

- GRI 401: Employment
- GRI 402: Labor/Management Relations
- GRI 403: Occupational Health and Safety
- GRI 404: Training and Education
- GRI 405: Diversity and Equal Opportunity
- GRI 406: Non-discrimination
- GRI 407: Freedom of Association and Collective Bargaining
- GRI 408: Child Labor
- GRI 409: Forced or Compulsory Labor
- GRI 410: Security Practices
- GRI 411: Rights of Indigenous Peoples
- GRI 412: Human Rights Assessment
- GRI 413: Local Communities
- GRI 414: Supplier Social Assessment
- GRI 415: Public Policy
- GRI 416: Customer Health and Safety
- GRI 417: Marketing and Labeling
- GRI 418: Customer Privacy
- GRI 419: Socioeconomic Compliance

These standards provide a comprehensive framework for sustainability reporting across economic, environmental, and social dimensions.



---



### SASB Series

Structures :

- Sector
  - Industry



---

**SASB provides standards for 77 industries across 11 sectors.** 

Each standard identifies the subset of sustainability issues reasonably likely to impact financial performance and longterm enterprise value of the typical company in an industry. On average, each standard has six disclosure topics and 13 accounting metrics. Each standard also includes technical protocols for compiling data and activity metrics for normalization. **Approximately 75% of the accounting metrics in the SASB Standards are quantitative.** The SASB Standards are designed to ensure that providers of financial capital have access to comparable, consistent and reliable data to inform investment and stewardship decisions.

*Source : A Practical Guide to Sustainability Reporting Using GRI and SASB Standards by IFRS*

**SASB Structures :**

- [Consumer Goods](https://navigator.sasb.ifrs.org/sector/CG)
  - [Apparel, Accessories & Footwear](https://navigator.sasb.ifrs.org/sector/CG/industry/CG-AA)
  - [Appliance Manufacturing](https://navigator.sasb.ifrs.org/sector/CG/industry/CG-AM)
  - [Building Products & Furnishings](https://navigator.sasb.ifrs.org/sector/CG/industry/CG-BF)
  - [E-Commerce](https://navigator.sasb.ifrs.org/sector/CG/industry/CG-EC)
  - [Household & Personal Products](https://navigator.sasb.ifrs.org/sector/CG/industry/CG-HP)
  - [Multiline and Specialty Retailers & Distributors](https://navigator.sasb.ifrs.org/sector/CG/industry/CG-MR)
  - [Toys & Sporting Goods](https://navigator.sasb.ifrs.org/sector/CG/industry/CG-TS)

- [Extractives & Minerals Processing](https://navigator.sasb.ifrs.org/sector/EM)
  - [Coal Operations](https://navigator.sasb.ifrs.org/sector/EM/industry/EM-CO)
  - [Construction Materials](https://navigator.sasb.ifrs.org/sector/EM/industry/EM-CM)
  - [Iron & Steel Producers](https://navigator.sasb.ifrs.org/sector/EM/industry/EM-IS)
  - [Metals & Mining](https://navigator.sasb.ifrs.org/sector/EM/industry/EM-MM)
  - [Oil & Gas – Exploration & Production](https://navigator.sasb.ifrs.org/sector/EM/industry/EM-EP)
  - [Oil & Gas – Midstream](https://navigator.sasb.ifrs.org/sector/EM/industry/EM-MD)
  - [Oil & Gas – Refining & Marketing](https://navigator.sasb.ifrs.org/sector/EM/industry/EM-RM)
  - [Oil & Gas – Services](https://navigator.sasb.ifrs.org/sector/EM/industry/EM-SV)

- [Financials](https://navigator.sasb.ifrs.org/sector/FN)
  - [Asset Management & Custody Activities](https://navigator.sasb.ifrs.org/sector/FN/industry/FN-AC)
  - [Commercial Banks](https://navigator.sasb.ifrs.org/sector/FN/industry/FN-CB)
  - [Consumer Finance](https://navigator.sasb.ifrs.org/sector/FN/industry/FN-CF)
  - [Insurance](https://navigator.sasb.ifrs.org/sector/FN/industry/FN-IN)
  - [Investment Banking & Brokerage](https://navigator.sasb.ifrs.org/sector/FN/industry/FN-IB)
  - [Mortgage Finance](https://navigator.sasb.ifrs.org/sector/FN/industry/FN-MF)
  - [Security & Commodity Exchanges](https://navigator.sasb.ifrs.org/sector/FN/industry/FN-EX)

- [Food & Beverage](https://navigator.sasb.ifrs.org/sector/FB)
  - [Agricultural Products](https://navigator.sasb.ifrs.org/sector/FB/industry/FB-AG)
  - [Alcoholic Beverages](https://navigator.sasb.ifrs.org/sector/FB/industry/FB-AB)
  - [Food Retailers & Distributors](https://navigator.sasb.ifrs.org/sector/FB/industry/FB-FR)
  - [Meat, Poultry & Dairy](https://navigator.sasb.ifrs.org/sector/FB/industry/FB-MP)
  - [Non-Alcoholic Beverages](https://navigator.sasb.ifrs.org/sector/FB/industry/FB-NB)
  - [Processed Foods](https://navigator.sasb.ifrs.org/sector/FB/industry/FB-PF)
  - [Restaurants](https://navigator.sasb.ifrs.org/sector/FB/industry/FB-RN)
  - [Tobacco](https://navigator.sasb.ifrs.org/sector/FB/industry/FB-TB)

- [Health Care](https://navigator.sasb.ifrs.org/sector/HC)
  - [Biotechnology & Pharmaceuticals](https://navigator.sasb.ifrs.org/sector/HC/industry/HC-BP)
  - [Drug Retailers](https://navigator.sasb.ifrs.org/sector/HC/industry/HC-DR)
  - [Health Care Delivery](https://navigator.sasb.ifrs.org/sector/HC/industry/HC-DY)
  - [Health Care Distributors](https://navigator.sasb.ifrs.org/sector/HC/industry/HC-DI)
  - [Managed Care](https://navigator.sasb.ifrs.org/sector/HC/industry/HC-MC)
  - [Medical Equipment & Supplies](https://navigator.sasb.ifrs.org/sector/HC/industry/HC-MS)

- [Infrastructure](https://navigator.sasb.ifrs.org/sector/IF)
  - [Electric Utilities & Power Generators](https://navigator.sasb.ifrs.org/sector/IF/industry/IF-EU)
  - [Engineering & Construction Services](https://navigator.sasb.ifrs.org/sector/IF/industry/IF-EN)
  - [Gas Utilities & Distributors](https://navigator.sasb.ifrs.org/sector/IF/industry/IF-GU)
  - [Home Builders](https://navigator.sasb.ifrs.org/sector/IF/industry/IF-HB)
  - [Real Estate](https://navigator.sasb.ifrs.org/sector/IF/industry/IF-RE)
  - [Real Estate Services](https://navigator.sasb.ifrs.org/sector/IF/industry/IF-RS)
  - [Waste Management](https://navigator.sasb.ifrs.org/sector/IF/industry/IF-WM)
  - [Water Utilities & Services](https://navigator.sasb.ifrs.org/sector/IF/industry/IF-WU)

- [Renewable Resources & Alternative Energy](https://navigator.sasb.ifrs.org/sector/RR)
  - [Biofuels](https://navigator.sasb.ifrs.org/sector/RR/industry/RR-BI)
  - [Forestry Management](https://navigator.sasb.ifrs.org/sector/RR/industry/RR-FM)
  - [Fuel Cells & Industrial Batteries](https://navigator.sasb.ifrs.org/sector/RR/industry/RR-FC)
  - [Pulp & Paper Products](https://navigator.sasb.ifrs.org/sector/RR/industry/RR-PP)
  - [Solar Technology & Project Developers](https://navigator.sasb.ifrs.org/sector/RR/industry/RR-ST)
  - [Wind Technology & Project Developers](https://navigator.sasb.ifrs.org/sector/RR/industry/RR-WT)

- [Resource Transformation](https://navigator.sasb.ifrs.org/sector/RT)
  - [Aerospace & Defence](https://navigator.sasb.ifrs.org/sector/RT/industry/RT-AE)
  - [Chemicals](https://navigator.sasb.ifrs.org/sector/RT/industry/RT-CH)
  - [Containers & Packaging](https://navigator.sasb.ifrs.org/sector/RT/industry/RT-CP)
  - [Electrical & Electronic Equipment](https://navigator.sasb.ifrs.org/sector/RT/industry/RT-EE)
  - [Industrial Machinery & Goods](https://navigator.sasb.ifrs.org/sector/RT/industry/RT-IG)

- [Services](https://navigator.sasb.ifrs.org/sector/SV)
  - [Advertising & Marketing](https://navigator.sasb.ifrs.org/sector/SV/industry/SV-AD)
  - [Casinos & Gaming](https://navigator.sasb.ifrs.org/sector/SV/industry/SV-CA)
  - [Education](https://navigator.sasb.ifrs.org/sector/SV/industry/SV-ED)
  - [Hotels & Lodging](https://navigator.sasb.ifrs.org/sector/SV/industry/SV-HL)
  - [Leisure Facilities](https://navigator.sasb.ifrs.org/sector/SV/industry/SV-LF)
  - [Media & Entertainment](https://navigator.sasb.ifrs.org/sector/SV/industry/SV-ME)
  - [Professional & Commercial Services](https://navigator.sasb.ifrs.org/sector/SV/industry/SV-PS)

- [Technology & Communications](https://navigator.sasb.ifrs.org/sector/TC)
  - [Electronic Manufacturing Services & Original Design Manufacturing](https://navigator.sasb.ifrs.org/sector/TC/industry/TC-ES)
  - [Hardware](https://navigator.sasb.ifrs.org/sector/TC/industry/TC-HW)
  - [Internet Media & Services](https://navigator.sasb.ifrs.org/sector/TC/industry/TC-IM)
  - [Semiconductors](https://navigator.sasb.ifrs.org/sector/TC/industry/TC-SC)
  - [Software & IT Services](https://navigator.sasb.ifrs.org/sector/TC/industry/TC-SI)
  - [Telecommunication Services](https://navigator.sasb.ifrs.org/sector/TC/industry/TC-TL)

- [Transportation](https://navigator.sasb.ifrs.org/sector/TR)
  - [Air Freight & Logistics](https://navigator.sasb.ifrs.org/sector/TR/industry/TR-AF)
  - [Airlines](https://navigator.sasb.ifrs.org/sector/TR/industry/TR-AL)
  - [Auto Parts](https://navigator.sasb.ifrs.org/sector/TR/industry/TR-AP)
  - [Automobiles](https://navigator.sasb.ifrs.org/sector/TR/industry/TR-AU)
  - [Car Rental & Leasing](https://navigator.sasb.ifrs.org/sector/TR/industry/TR-CR)
  - [Cruise Lines](https://navigator.sasb.ifrs.org/sector/TR/industry/TR-CL)
  - [Marine Transportation](https://navigator.sasb.ifrs.org/sector/TR/industry/TR-MT)
  - [Rail Transportation](https://navigator.sasb.ifrs.org/sector/TR/industry/TR-RA)
  - [Road Transportation](https://navigator.sasb.ifrs.org/sector/TR/industry/TR-RO)
