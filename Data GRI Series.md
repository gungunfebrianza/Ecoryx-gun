# GRI Series

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



------



# GRI 101 Foundation

| Question                                                     | Question Type          | Input Type             | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | ---------------------- | ---------------- | ------------------------------------------------------------ |
| What is your organization's legal name?                      | Identification         | Text Input             | String           | "Acme Corporation Ltd."                                      |
| What is your organization's primary brand name (if different from legal name)? | Identification         | Text Input             | String           | "Acme Solutions"                                             |
| In which country is your organization headquartered?         | Location               | Dropdown/Text          | String           | "United States"                                              |
| What is your organization's primary business sector or industry? | Classification         | Dropdown/Text          | String           | "Manufacturing - Electronics"                                |
| What is your organization's stock exchange ticker symbol (if publicly traded)? | Identification         | Text Input             | String           | "ACME"                                                       |
| Is your organization publicly traded, privately held, or government-owned? | Classification         | Single Select          | Categorical      | "Publicly traded"                                            |
| What is the primary purpose of this sustainability report?   | Reporting Context      | Single Select          | Categorical      | "Annual sustainability disclosure"                           |
| Who is the primary intended audience for your sustainability report? | Reporting Context      | Multiple Select        | Array            | ["Investors", "Customers", "Regulators"]                     |
| What reporting period does this sustainability report cover? | Temporal               | Date Range             | Date Range       | "January 1, 2024 - December 31, 2024"                        |
| How frequently does your organization publish sustainability reports? | Frequency              | Single Select          | Categorical      | "Annually"                                                   |
| Which GRI Standards version are you following for this report? | Standards              | Single Select          | Categorical      | "GRI Standards 2021"                                         |
| Are you preparing a GRI comprehensive report or a GRI referenced report? | Reporting Type         | Single Select          | Categorical      | "GRI comprehensive report"                                   |
| Has your sustainability report been externally assured or verified? | Assurance              | Single Select          | Categorical      | "Yes, by third-party auditor"                                |
| Who provided external assurance for your sustainability report (if applicable)? | Assurance              | Text Input             | String           | "KPMG Sustainability Services"                               |
| What level of assurance was provided (limited or reasonable)? | Assurance              | Single Select          | Categorical      | "Limited assurance"                                          |
| Are there any significant changes in your organization's structure during the reporting period? | Organizational Changes | Yes/No + Text          | Boolean + String | "Yes - Acquired subsidiary in Q3 2024"                       |
| Are there any significant changes in your supply chain during the reporting period? | Supply Chain Changes   | Yes/No + Text          | Boolean + String | "No significant changes"                                     |
| What materiality assessment process did you use to identify key sustainability topics? | Materiality            | Text Area              | String           | "Stakeholder surveys, peer benchmarking, and expert interviews conducted by third-party consultant" |
| Who were the key stakeholder groups involved in your materiality assessment? | Stakeholder Engagement | Multiple Select        | Array            | ["Employees", "Customers", "Investors", "Local communities", "NGOs"] |
| How did you determine the boundary of your sustainability reporting? | Reporting Boundary     | Text Area              | String           | "Includes all wholly-owned subsidiaries and joint ventures where we have operational control" |
| Does your reporting boundary include your entire value chain? | Value Chain            | Single Select          | Categorical      | "Partial - direct operations and key suppliers only"         |
| What percentage of your total business operations is covered in this report? | Coverage               | Number Input           | Percentage       | "95%"                                                        |
| Are there any specific limitations or exclusions in your reporting scope? | Limitations            | Text Area              | String           | "Excludes recently acquired entities with less than 6 months ownership" |
| What is your organization's approach to identifying and managing sustainability risks? | Risk Management        | Text Area              | String           | "Integrated into enterprise risk management framework with quarterly board reviews" |
| Does your organization have a formal sustainability strategy or policy? | Strategy               | Yes/No + Upload        | Boolean + File   | "Yes - attached sustainability policy document"              |
| Who has executive responsibility for sustainability within your organization? | Governance             | Text Input             | String           | "Chief Sustainability Officer reporting to CEO"              |
| Does your board of directors have oversight of sustainability matters? | Governance             | Single Select          | Categorical      | "Yes, through dedicated sustainability committee"            |
| How often does your board review sustainability performance? | Governance             | Single Select          | Categorical      | "Quarterly"                                                  |
| Are sustainability metrics linked to executive compensation? | Incentives             | Yes/No + Text          | Boolean + String | "Yes - 20% of CEO bonus tied to sustainability KPIs"         |
| What sustainability-related memberships or initiatives does your organization participate in? | Commitments            | Multiple Select + Text | Array + String   | ["UN Global Compact", "Science Based Targets initiative", "RE100"] |
| Has your organization made any public sustainability commitments or targets? | Commitments            | Yes/No + Text          | Boolean + String | "Yes - Net zero by 2050, 50% renewable energy by 2030"       |
| What is your organization's approach to stakeholder engagement on sustainability matters? | Stakeholder Engagement | Text Area              | String           | "Annual stakeholder forum, quarterly investor calls, monthly employee surveys" |
| How do you collect and validate sustainability data across your organization? | Data Management        | Text Area              | String           | "Centralized data management system with monthly reporting from all business units" |
| What quality assurance processes do you have for sustainability data? | Data Quality           | Text Area              | String           | "Internal audit team reviews all data quarterly, external verification annually" |
| Are there any restatements of previously reported sustainability data? | Data Restatements      | Yes/No + Text          | Boolean + String | "Yes - restated 2023 Scope 2 emissions due to updated emission factors" |
| How does your organization define and measure its most significant sustainability impacts? | Impact Assessment      | Text Area              | String           | "Life cycle assessment for products, social impact assessment for community programs" |
| What is your organization's approach to sustainability innovation and R&D? | Innovation             | Text Area              | String           | "Dedicated sustainability innovation lab with 5% of R&D budget allocated to sustainable solutions" |
| How do you communicate sustainability performance to different stakeholder groups? | Communication          | Multiple Select        | Array            | ["Annual report", "Website", "Social media", "Stakeholder meetings", "Press releases"] |
| What challenges did your organization face in sustainability reporting this period? | Challenges             | Text Area              | String           | "Data collection from new acquisitions, alignment with emerging regulatory requirements" |
| What are your organization's key sustainability priorities for the next reporting period? | Future Priorities      | Text Area              | String           | "Scope 3 emissions reduction, circular economy implementation, biodiversity conservation" |

# GRI 102 General Disclosures

## Organizational Profile

| Question                                                     | Question Type    | Input Type   | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ---------------- | ------------ | ---------------- | ------------------------------------------------------------ |
| What is your organization's official legal name?             | Direct           | Text         | String           | Apple Inc.                                                   |
| What are your organization's primary activities, brands, products, and services? | Descriptive      | Text Area    | String           | Consumer electronics, software, and digital services including iPhone, iPad, Mac computers, and App Store |
| Where is your organization's headquarters located?           | Direct           | Text         | String           | Cupertino, California, United States                         |
| In which countries does your organization operate?           | Multiple Choice  | Multi-select | Array            | ["United States", "China", "Germany", "Japan", "United Kingdom"] |
| What is your organization's ownership structure and legal form? | Direct           | Text         | String           | Public corporation traded on NASDAQ                          |
| Which markets does your organization serve (geographic breakdown)? | Descriptive      | Text Area    | String           | Global markets with primary focus on North America (40%), Europe (25%), Greater China (20%), Japan (8%), Rest of Asia Pacific (7%) |
| What is your organization's scale in terms of total number of employees? | Numerical        | Number       | Integer          | 164000                                                       |
| What is your organization's scale in terms of total number of operations? | Numerical        | Number       | Integer          | 512                                                          |
| What is your organization's total capitalization (debt and equity)? | Numerical        | Number       | Float            | 195000000000                                                 |
| What is your organization's net revenues?                    | Numerical        | Number       | Float            | 394328000000                                                 |
| Does your organization provide products or services that are banned in certain markets? | Yes/No + Details | Radio + Text | Boolean + String | No                                                           |

## Strategy

| Question                                                     | Question Type | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ---------- | --------- | ------------------------------------------------------------ |
| Please provide a statement from your most senior decision-maker about sustainability relevance | Descriptive   | Text Area  | String    | As CEO, I believe environmental responsibility and social impact are core to our mission of creating technology that enriches lives while protecting our planet for future generations. |
| What are your organization's key impacts, risks, and opportunities related to sustainability? | Descriptive   | Text Area  | Array     | Climate change mitigation, supply chain labor practices, data privacy protection, circular economy transition, digital divide reduction |

## Ethics and Integrity

| Question                                                     | Question Type | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ---------- | --------- | ------------------------------------------------------------ |
| Please describe your organization's values, principles, standards and norms of behavior | Descriptive   | Text Area  | String    | We are committed to integrity, respect for human rights, environmental stewardship, supplier responsibility, and accessibility in all our operations |
| What internal and external mechanisms does your organization have for seeking advice on ethical and lawful behavior? | Descriptive   | Text Area  | String    | Ethics hotline, legal compliance team, external ethics advisory board, regular employee training programs |
| What internal and external mechanisms does your organization have for reporting concerns about unethical or unlawful behavior? | Descriptive   | Text Area  | String    | Anonymous whistleblower system, ombudsman office, direct reporting to audit committee, third-party ethics reporting platform |

## Governance

| Question                                                     | Question Type    | Input Type   | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ---------------- | ------------ | ---------------- | ------------------------------------------------------------ |
| What is your organization's governance structure?            | Descriptive      | Text Area    | String           | Board of Directors with 8 members, CEO and executive team, audit committee, compensation committee, nominating committee |
| Who has authority for economic, environmental, and social topics at board level? | Direct           | Text         | String           | Nominating, Corporate Governance and Public Policy Committee |
| Does the highest governance body consult stakeholders on economic, environmental and social topics? | Yes/No + Details | Radio + Text | Boolean + String | Yes - through annual shareholder meetings, investor calls, customer surveys, and community engagement programs |
| What is the composition of the highest governance body and its committees? | Structured       | Table        | Object           | {"total_members": 8, "independent_directors": 7, "gender_diversity": "25% women", "average_age": 62} |
| Does the Chair of the highest governance body also serve as an executive officer? | Yes/No           | Radio        | Boolean          | No                                                           |
| What is the nomination and selection process for the highest governance body? | Descriptive      | Text Area    | String           | Nominating committee identifies candidates based on skills matrix, diversity goals, and independence requirements, with shareholder approval |
| Are there conflicts of interest processes for the highest governance body? | Yes/No + Details | Radio + Text | Boolean + String | Yes - annual disclosure requirements, recusal policies, and independent director oversight |
| What is the role of the highest governance body in setting purpose, values and strategy? | Descriptive      | Text Area    | String           | Board approves corporate strategy, reviews ESG goals, oversees risk management, and ensures alignment with company values |
| What is the collective knowledge of the highest governance body on economic, environmental and social topics? | Descriptive      | Text Area    | String           | Members have expertise in technology, finance, environmental science, public policy, and international business |
| How does the highest governance body evaluate its performance on economic, environmental and social topics? | Descriptive      | Text Area    | String           | Annual board evaluation process, ESG performance metrics review, third-party assessment every three years |
| Does the highest governance body identify and manage economic, environmental and social impacts, risks, and opportunities? | Yes/No + Details | Radio + Text | Boolean + String | Yes - quarterly risk assessments, ESG committee oversight, integration into strategic planning |
| What is the role of the highest governance body in sustainability reporting? | Descriptive      | Text Area    | String           | Reviews and approves annual sustainability report, oversees ESG disclosures, ensures accuracy of reported data |

## Stakeholder Engagement

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Please list your organization's stakeholder groups           | Multiple Choice | Multi-select | Array     | ["Employees", "Customers", "Shareholders", "Suppliers", "Local communities", "NGOs", "Government agencies"] |
| What is your organization's approach to stakeholder engagement? | Descriptive     | Text Area    | String    | Regular surveys, focus groups, town halls, advisory panels, and digital platforms for continuous dialogue |
| What are the key topics and concerns raised by stakeholders? | Descriptive     | Text Area    | Array     | Data privacy, environmental impact, labor conditions, product accessibility, corporate tax practices |
| How does your organization respond to key topics and concerns raised by stakeholders? | Descriptive     | Text Area    | String    | Dedicated response teams, policy updates, transparency reports, direct communication, and action plan implementation |

## Reporting Practice

| Question                                                     | Question Type   | Input Type         | Data Type     | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------------ | ------------- | ------------------------------------------------------------ |
| Please list all entities included in your organization's consolidated financial statements | Descriptive     | Text Area          | Array         | Parent company and all majority-owned subsidiaries across 40 countries |
| How do you define report content and topic boundaries?       | Descriptive     | Text Area          | String        | Based on materiality assessment, stakeholder input, business impact analysis, and regulatory requirements |
| Please list any material topics from previous reports that have been omitted | Descriptive     | Text Area          | Array         | None - all previously reported material topics remain relevant |
| What significant changes have occurred since the previous report regarding size, structure, ownership, or supply chain? | Descriptive     | Text Area          | String        | Acquired two clean energy companies, expanded manufacturing in India, divested non-core business units |
| What is the reporting period for the information provided?   | Date Range      | Date Picker        | Date Range    | January 1, 2023 to December 31, 2023                         |
| When was your most recent previous report published?         | Date            | Date Picker        | Date          | March 15, 2023                                               |
| What is your reporting cycle?                                | Multiple Choice | Dropdown           | String        | Annual                                                       |
| Who should be contacted regarding questions about the report or its contents? | Contact Info    | Text               | Object        | {"name": "Jane Smith", "title": "Director of Sustainability", "email": "sustainability@company.com", "phone": "+1-555-0123"} |
| What 'in accordance' option has your organization chosen for this report? | Multiple Choice | Dropdown           | String        | Core                                                         |
| What is your organization's policy and current practice regarding external assurance for the report? | Descriptive     | Text Area + Upload | String + File | Third-party verification by independent auditors for environmental data and key performance indicators |

# GRI 103 Management Approach

## 103-1: Explanation of the Material Topic and its Boundary

| Question                                                     | Question Type   | Input Type    | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------- | --------- | ------------------------------------------------------------ |
| What is the specific material topic you are reporting on?    | Open-ended      | Text input    | String    | "Water consumption and management"                           |
| Why is this topic material to your organization?             | Open-ended      | Text area     | String    | "Water scarcity affects our manufacturing operations and increases operational costs by 15% annually" |
| Where does the impact of this topic occur within your organization? | Multiple choice | Checkboxes    | Array     | ["Operations", "Supply chain", "Products/Services"]          |
| Where does the impact occur outside your organization?       | Multiple choice | Checkboxes    | Array     | ["Suppliers", "Customers", "Local communities", "Environment"] |
| Which stakeholder groups are affected by this topic?         | Multiple choice | Checkboxes    | Array     | ["Employees", "Customers", "Investors", "Local communities", "Suppliers"] |
| What is the geographic scope of this topic's impact?         | Multiple choice | Radio buttons | String    | "Regional"                                                   |
| How significant is the impact of this topic?                 | Scale rating    | Slider (1-5)  | Integer   | 4                                                            |
| Is your organization involved in the impact through its activities or business relationships? | Multiple choice | Radio buttons | String    | "Activities"                                                 |

## 103-2: The Management Approach and its Components

| Question                                                     | Question Type | Input Type           | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | -------------------- | --------- | ------------------------------------------------------------ |
| What is the purpose of your management approach for this topic? | Open-ended    | Text area            | String    | "To reduce water consumption by 30% by 2025 while maintaining production quality" |
| What policies does your organization have related to this topic? | Open-ended    | Text area            | String    | "Environmental Management Policy, Water Conservation Policy, Sustainable Operations Framework" |
| What commitments has your organization made regarding this topic? | Open-ended    | Text area            | String    | "Zero water waste to landfill by 2026, 50% reduction in freshwater intake by 2030" |
| What are your specific goals and targets for this topic?     | Structured    | Multiple text inputs | Object    | {"target": "30% water reduction", "timeline": "2025", "baseline": "2020 levels"} |
| Who is responsible for managing this topic?                  | Open-ended    | Text input           | String    | "Chief Sustainability Officer and Environmental Management Team" |
| What resources are allocated to manage this topic?           | Open-ended    | Text area            | String    | "$2.5M annual budget, 8 FTE dedicated staff, quarterly board oversight" |
| What grievance mechanisms are available for this topic?      | Open-ended    | Text area            | String    | "Environmental hotline, community feedback portal, supplier grievance system" |
| What specific actions have you taken to manage this topic?   | Open-ended    | Text area            | String    | "Installed water recycling systems, implemented leak detection technology, trained 500+ employees" |

## 103-3: Evaluation of the Management Approach

| Question                                                     | Question Type   | Input Type           | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | -------------------- | --------- | ------------------------------------------------------------ |
| How do you evaluate the effectiveness of your management approach? | Open-ended      | Text area            | String    | "Monthly KPI tracking, quarterly stakeholder surveys, annual third-party audits" |
| What mechanisms do you use to evaluate the management approach? | Multiple choice | Checkboxes           | Array     | ["Internal audits", "External assessments", "Stakeholder feedback", "Performance metrics"] |
| What are your key performance indicators for this topic?     | Structured      | Multiple text inputs | Array     | ["Water consumption per unit", "Water recycling rate", "Compliance incidents"] |
| How often do you evaluate your management approach?          | Multiple choice | Dropdown             | String    | "Quarterly"                                                  |
| What results have you achieved from your management approach? | Open-ended      | Text area            | String    | "25% reduction in water usage, zero compliance violations, 90% stakeholder satisfaction" |
| What adjustments have you made to your management approach based on evaluation results? | Open-ended      | Text area            | String    | "Increased investment in recycling technology, expanded training programs, enhanced monitoring systems" |
| Who reviews the evaluation results?                          | Open-ended      | Text input           | String    | "Sustainability Committee, Board of Directors, External auditors" |
| How do you communicate evaluation results to stakeholders?   | Multiple choice | Checkboxes           | Array     | ["Annual sustainability report", "Website updates", "Stakeholder meetings", "Press releases"] |

## Supporting Context Questions

| Question                                                     | Question Type        | Input Type        | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | -------------------- | ----------------- | --------- | ------------------------------------------------------------ |
| What reporting period does this information cover?           | Date range           | Date picker       | Object    | {"start": "2024-01-01", "end": "2024-12-31"}                 |
| Has there been any restatement of information from previous reporting periods? | Yes/No + explanation | Radio + text area | Object    | {"restatement": "Yes", "explanation": "Updated calculation methodology for Scope 3 emissions"} |
| What changes have occurred in the list of material topics?   | Open-ended           | Text area         | String    | "Added cybersecurity as new material topic due to increased digital transformation" |
| Which GRI Standards were used for reporting on this topic?   | Multiple choice      | Checkboxes        | Array     | ["GRI 303: Water and Effluents", "GRI 306: Waste"]           |
| What assumptions and estimation methods were used?           | Open-ended           | Text area         | String    | "Linear interpolation for missing monthly data, industry-standard emission factors" |
| What is the source of your data?                             | Multiple choice      | Checkboxes        | Array     | ["Internal systems", "Third-party providers", "Estimates", "Calculations"] |
| What is the level of assurance for this information?         | Multiple choice      | Radio buttons     | String    | "Limited assurance by external auditor"                      |

## Additional Validation Questions

| Question                                                     | Question Type   | Input Type    | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------- | --------- | ------------------------------------------------------------ |
| On a scale of 1-10, how confident are you in the accuracy of this information? | Scale rating    | Slider (1-10) | Integer   | 8                                                            |
| Are there any limitations or challenges in your data collection for this topic? | Open-ended      | Text area     | String    | "Limited data availability from some suppliers, seasonal variations in measurement" |
| What documentation do you have to support this information?  | Multiple choice | Checkboxes    | Array     | ["Policies", "Procedures", "Audit reports", "Meeting minutes", "Performance data"] |
| Would you like to upload any supporting documents?           | File upload     | File input    | File      | "Water_Management_Policy_2024.pdf"                           |

# GRI 201 Economic Performance

## Direct Economic Value Generated and Distributed (201-1)

| Question                                                     | Question Type | Input Type   | Data Type      | Example Answer                               |
| ------------------------------------------------------------ | ------------- | ------------ | -------------- | -------------------------------------------- |
| What was your organization's total revenue for the reporting period? | Quantitative  | Number input | Currency (USD) | $50,000,000                                  |
| What were your total operating costs during the reporting period? | Quantitative  | Number input | Currency (USD) | $35,000,000                                  |
| What was the total amount paid in employee wages and benefits? | Quantitative  | Number input | Currency (USD) | $8,500,000                                   |
| How much did you pay to providers of capital (dividends, interest payments)? | Quantitative  | Number input | Currency (USD) | $2,300,000                                   |
| What was the total amount paid to government in taxes?       | Quantitative  | Number input | Currency (USD) | $1,800,000                                   |
| How much did you invest in community investments and donations? | Quantitative  | Number input | Currency (USD) | $250,000                                     |
| What currency should be used for reporting financial figures? | Categorical   | Dropdown     | Text           | USD                                          |
| What is your reporting period (start and end dates)?         | Categorical   | Date range   | Date           | January 1, 2024 - December 31, 2024          |
| Please provide a breakdown of revenue by business segment or geography if applicable | Qualitative   | Text area    | Text           | North America: $30M, Europe: $15M, Asia: $5M |

## Financial Implications of Climate Change (201-2)

| Question                                                     | Question Type   | Input Type   | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | -------------- | ------------------------------------------------------------ |
| Have you identified any financial risks related to climate change? | Binary          | Yes/No       | Boolean        | Yes                                                          |
| What are the potential financial costs of climate-related physical risks (extreme weather, sea level rise, etc.)? | Quantitative    | Number input | Currency (USD) | $1,200,000                                                   |
| What are the estimated costs related to transitional climate risks (carbon pricing, new regulations)? | Quantitative    | Number input | Currency (USD) | $800,000                                                     |
| Have you identified any financial opportunities from climate change adaptation/mitigation? | Binary          | Yes/No       | Boolean        | Yes                                                          |
| What is the estimated financial value of climate-related opportunities? | Quantitative    | Number input | Currency (USD) | $2,500,000                                                   |
| Describe your methodology for calculating climate-related financial implications | Qualitative     | Text area    | Text           | We used scenario analysis based on TCFD recommendations and internal risk assessment models |
| What time horizon do these climate financial assessments cover? | Categorical     | Dropdown     | Text           | 2030 (medium-term)                                           |
| Which climate scenarios did you use for your assessment?     | Multiple choice | Checkboxes   | Array          | RCP 2.6, RCP 4.5, RCP 8.5                                    |

## Defined Benefit Plan Obligations (201-3)

| Question                                                     | Question Type   | Input Type       | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ---------------- | -------------- | ------------------------------------------------------------ |
| Does your organization operate any defined benefit pension plans? | Binary          | Yes/No           | Boolean        | Yes                                                          |
| What is the present value of your defined benefit obligations? | Quantitative    | Number input     | Currency (USD) | $45,000,000                                                  |
| What is the fair value of plan assets?                       | Quantitative    | Number input     | Currency (USD) | $42,000,000                                                  |
| What is the funding status (surplus/deficit) of your pension plans? | Quantitative    | Number input     | Currency (USD) | -$3,000,000                                                  |
| What assumptions were used for the actuarial valuation (discount rate, salary growth, etc.)? | Qualitative     | Text area        | Text           | Discount rate: 4.2%, Salary growth: 3.5%, Mortality: SOA tables |
| Do you provide other post-employment benefits beyond pensions? | Binary          | Yes/No           | Boolean        | Yes                                                          |
| What is the value of other post-employment benefit obligations? | Quantitative    | Number input     | Currency (USD) | $5,500,000                                                   |
| In which countries/jurisdictions do you operate defined benefit plans? | Multiple choice | Multi-select     | Array          | United States, Canada, United Kingdom                        |
| What percentage of your workforce is covered by defined benefit plans? | Quantitative    | Percentage input | Percentage     | 65%                                                          |

## Financial Assistance from Government (201-4)

| Question                                                     | Question Type   | Input Type   | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | -------------- | ------------------------------------------------------------ |
| Did your organization receive any financial assistance from government during the reporting period? | Binary          | Yes/No       | Boolean        | Yes                                                          |
| What was the total monetary value of financial assistance received from government? | Quantitative    | Number input | Currency (USD) | $1,750,000                                                   |
| Did you receive any tax relief or tax credits?               | Binary          | Yes/No       | Boolean        | Yes                                                          |
| What was the value of tax relief and credits received?       | Quantitative    | Number input | Currency (USD) | $850,000                                                     |
| Did you receive any subsidies?                               | Binary          | Yes/No       | Boolean        | Yes                                                          |
| What was the total value of subsidies received?              | Quantitative    | Number input | Currency (USD) | $600,000                                                     |
| Did you receive any investment grants?                       | Binary          | Yes/No       | Boolean        | Yes                                                          |
| What was the value of investment grants received?            | Quantitative    | Number input | Currency (USD) | $300,000                                                     |
| List the countries/jurisdictions where you received government financial assistance | Multiple choice | Multi-select | Array          | United States, Canada                                        |
| Describe the purpose/conditions of the financial assistance received | Qualitative     | Text area    | Text           | R&D tax credits for clean technology development, export promotion grants |
| Were there any awards, prizes, or other benefits received from government? | Binary          | Yes/No       | Boolean        | No                                                           |

## General Context Questions

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | ------------------------------------------------------------ |
| What is your organization's primary industry sector?         | Categorical   | Dropdown     | Text      | Manufacturing - Technology Hardware                          |
| What is your organization's legal structure?                 | Categorical   | Dropdown     | Text      | Public Corporation                                           |
| In how many countries does your organization operate?        | Quantitative  | Number input | Integer   | 12                                                           |
| What is your fiscal year end date?                           | Categorical   | Date picker  | Date      | December 31                                                  |
| Are your financial statements audited by an external auditor? | Binary        | Yes/No       | Boolean   | Yes                                                          |
| What accounting standards do you follow for financial reporting? | Categorical   | Dropdown     | Text      | US GAAP                                                      |
| Do you have any significant non-controlling interests or joint ventures that affect economic performance reporting? | Binary        | Yes/No       | Boolean   | Yes                                                          |
| Please describe any significant economic performance impacts not captured in the above questions | Qualitative   | Text area    | Text      | Recently completed major acquisition that will impact next year's reporting |

## Data Quality and Verification

| Question                                                     | Question Type | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ---------- | --------- | ------------------------------------------------------------ |
| What is the source of the financial data provided?           | Categorical   | Dropdown   | Text      | Audited Financial Statements                                 |
| Has this data been verified by a third party?                | Binary        | Yes/No     | Boolean   | Yes                                                          |
| Are there any significant estimations or assumptions in the data provided? | Qualitative   | Text area  | Text      | Climate risk estimates based on internal modeling; pension obligations use standard actuarial assumptions |
| What is your confidence level in the accuracy of this data?  | Categorical   | Dropdown   | Text      | High (>95% confident)                                        |



# GRI 202 Market Presence

## Disclosure 202-1: Ratios of standard entry level wage by gender compared to local minimum wage

| Question                                                     | Question Type        | Input Type       | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | -------------------- | ---------------- | -------------- | ------------------------------------------------------------ |
| What is your organization's standard entry-level wage for male employees at each significant location? | Direct Data          | Currency Input   | Decimal        | $18.50 per hour                                              |
| What is your organization's standard entry-level wage for female employees at each significant location? | Direct Data          | Currency Input   | Decimal        | $18.50 per hour                                              |
| What is the local minimum wage at each of your significant locations of operation? | Reference Data       | Currency Input   | Decimal        | $15.00 per hour                                              |
| How do you define "entry-level" positions in your organization? | Definition           | Text Area        | Text           | Positions requiring no prior experience and basic qualifications |
| Which locations do you consider "significant" for reporting purposes? | Scope Definition     | Multi-select     | Array          | New York HQ, London Office, Singapore Branch                 |
| Do you have different entry-level wage structures for different job categories? | Clarification        | Yes/No + Details | Boolean + Text | Yes - Administrative ($16/hr) vs Technical ($20/hr)          |
| What currency should wages be reported in for each location? | Format Specification | Dropdown         | Text           | USD, GBP, SGD                                                |
| What is the reporting period for this wage data?             | Temporal Scope       | Date Range       | Date           | January 1, 2024 - December 31, 2024                          |

## Disclosure 202-2: Proportion of senior management hired from the local community

| Question                                                     | Question Type    | Input Type       | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | ---------------- | ---------------- | -------------- | ------------------------------------------------------------ |
| How does your organization define "senior management"?       | Definition       | Text Area        | Text           | C-suite executives, VPs, and directors reporting to executives |
| How do you define "local community" for each significant location? | Definition       | Text Area        | Text           | Within 50km radius of the operational facility               |
| What is the total number of senior management positions at each significant location? | Count Data       | Number Input     | Integer        | 25 senior management positions                               |
| How many senior management personnel were hired from the local community at each location? | Count Data       | Number Input     | Integer        | 18 local hires                                               |
| What is the total number of senior management hires during the reporting period at each location? | Count Data       | Number Input     | Integer        | 8 new senior management hires                                |
| Do you track the geographic origin of your senior management hires? | Process Question | Yes/No           | Boolean        | Yes, we maintain hiring location records                     |
| What criteria do you use to determine if someone is "from the local community"? | Methodology      | Multiple Choice  | Text           | Place of birth, Current residence, Previous work location    |
| Are there any locations where local hiring is challenging due to skill availability? | Context Question | Yes/No + Details | Boolean + Text | Yes - Singapore office requires specialized fintech expertise |

## Supporting Context and Methodology Questions

| Question                                                     | Question Type       | Input Type                | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | ------------------- | ------------------------- | -------------- | ------------------------------------------------------------ |
| What is your organization's policy on equal pay and local hiring? | Policy Context      | Text Area                 | Text           | We maintain pay equity and prioritize local talent development |
| How do you ensure wage data accuracy and consistency across locations? | Quality Assurance   | Text Area                 | Text           | Monthly HR audits and standardized reporting templates       |
| Are there any significant changes in wage structure during the reporting period? | Change Tracking     | Yes/No + Details          | Boolean + Text | No significant changes in base wage structure                |
| Do you provide additional benefits that should be considered alongside base wages? | Comprehensive Data  | Yes/No + Details          | Boolean + Text | Yes - health insurance, transport allowance valued at $200/month |
| How do you handle wage reporting for part-time vs full-time entry-level positions? | Methodology         | Multiple Choice + Details | Text + Text    | Convert part-time to full-time equivalent hourly rates       |
| Are there any legal or regulatory constraints affecting wage disclosure in any locations? | Compliance Context  | Yes/No + Details          | Boolean + Text | No legal restrictions in our operating jurisdictions         |
| What is your organization's approach to wage benchmarking against local markets? | Market Context      | Text Area                 | Text           | Annual market surveys through third-party compensation consultants |
| How do you account for seasonal or temporary workers in your calculations? | Scope Clarification | Multiple Choice           | Text           | Exclude temporary workers, include seasonal if >6 months     |

## Data Validation and Quality Questions

| Question                                                     | Question Type    | Input Type         | Data Type   | Example Answer                                     |
| ------------------------------------------------------------ | ---------------- | ------------------ | ----------- | -------------------------------------------------- |
| Who is responsible for providing and verifying this wage data? | Data Governance  | Text Input         | Text        | Regional HR Directors and Global Compensation Team |
| What systems or databases are used to track this information? | Data Source      | Text Area          | Text        | HRIS system (Workday) and local payroll systems    |
| How frequently is this data updated and reviewed?            | Data Maintenance | Dropdown           | Text        | Monthly updates, quarterly reviews                 |
| Are there any data limitations or assumptions that should be noted? | Data Quality     | Text Area          | Text        | Exchange rates calculated using year-end rates     |
| What documentation supports the accuracy of this data?       | Evidence         | File Upload + Text | File + Text | Payroll reports, HR policy documents, audit trails |

# GRI 203 Indirect Economic Impacts

## Disclosure 203-1: Infrastructure Investments and Services Supported

| Question                                                     | Question Type              | Input Type        | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | -------------------------- | ----------------- | ---------------- | ------------------------------------------------------------ |
| What infrastructure investments has your organization made in the reporting period? | Open-ended                 | Text area         | String           | "Built 3 new manufacturing facilities, upgraded IT infrastructure across 5 locations, invested in renewable energy systems" |
| In which geographic regions did you make infrastructure investments? | Multiple choice with other | Checkboxes + text | Array of strings | ["North America", "Europe", "Asia-Pacific", "Custom: Rural Kenya"] |
| What was the total monetary value of infrastructure investments? | Quantitative               | Number input      | Currency (Float) | 15750000.00                                                  |
| Which currency was used for the investment amount?           | Single choice              | Dropdown          | String           | "USD"                                                        |
| What types of services did your organization provide to communities? | Multiple choice with other | Checkboxes + text | Array of strings | ["Healthcare services", "Education programs", "Transportation", "Custom: Digital literacy training"] |
| Were these infrastructure investments and services provided for commercial purposes, in-kind, or pro bono? | Single choice              | Radio buttons     | String           | "Mixed - 60% commercial, 40% pro bono"                       |
| How many people were directly benefited by these infrastructure investments? | Quantitative               | Number input      | Integer          | 25000                                                        |
| How do you measure the impact of your infrastructure investments? | Open-ended                 | Text area         | String           | "Employment created, GDP contribution, community surveys, infrastructure usage metrics" |

## Disclosure 203-2: Significant Indirect Economic Impacts

| Question                                                     | Question Type              | Input Type        | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | -------------------------- | ----------------- | ---------------- | ------------------------------------------------------------ |
| What significant indirect economic impacts has your organization identified? | Open-ended                 | Text area         | String           | "Job creation in supply chain, local business development, skills transfer to communities, increased local purchasing power" |
| How do you identify and assess indirect economic impacts?    | Open-ended                 | Text area         | String           | "Economic impact studies, stakeholder consultations, third-party assessments, local government feedback" |
| Which stakeholder groups are most affected by your indirect economic impacts? | Multiple choice with other | Checkboxes + text | Array of strings | ["Local communities", "Suppliers", "Government", "Custom: Indigenous groups"] |
| Are the identified indirect economic impacts positive, negative, or mixed? | Single choice              | Radio buttons     | String           | "Predominantly positive with some negative externalities"    |
| Can you quantify any of the indirect economic impacts? If yes, provide details. | Conditional open-ended     | Text area         | String           | "Created approximately 500 indirect jobs, contributed $2.3M to local tax revenue, supported 150 local suppliers" |
| What is the geographic scope of these indirect economic impacts? | Multiple choice with other | Checkboxes + text | Array of strings | ["Local (same city/region)", "National", "International", "Custom: Cross-border regions"] |
| How do you monitor and measure these indirect impacts over time? | Open-ended                 | Text area         | String           | "Annual economic impact assessments, quarterly supplier surveys, community feedback sessions" |
| What evidence do you have to support your assessment of indirect economic impacts? | Open-ended                 | Text area         | String           | "Third-party economic studies, government statistics, academic research partnerships, internal tracking systems" |

## Management Approach and Context Questions

| Question                                                     | Question Type              | Input Type        | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | -------------------------- | ----------------- | ---------------- | ------------------------------------------------------------ |
| Why are indirect economic impacts material to your organization? | Open-ended                 | Text area         | String           | "Core to our social license to operate, affects long-term business sustainability, stakeholder expectations" |
| What is your organization's policy regarding indirect economic impacts? | Open-ended                 | Text area         | String           | "Committed to creating positive economic value in communities where we operate, outlined in our Community Investment Policy" |
| Who is responsible for managing indirect economic impacts in your organization? | Open-ended                 | Text input        | String           | "Chief Sustainability Officer, Community Relations Manager, Regional Operations Teams" |
| What are your organization's commitments related to indirect economic impacts? | Open-ended                 | Text area         | String           | "Achieve 15% local procurement by 2025, create 1000 indirect jobs, invest $5M annually in community infrastructure" |
| How do you engage with stakeholders regarding indirect economic impacts? | Multiple choice with other | Checkboxes + text | Array of strings | ["Community meetings", "Stakeholder surveys", "Advisory panels", "Custom: Digital feedback platforms"] |
| What challenges do you face in managing indirect economic impacts? | Open-ended                 | Text area         | String           | "Difficulty in measurement, attribution challenges, resource constraints, varying stakeholder expectations" |
| How do you integrate indirect economic impact considerations into business decisions? | Open-ended                 | Text area         | String           | "Impact assessments for major projects, supplier selection criteria, community benefit requirements in planning" |
| What reporting period does this data cover?                  | Date range                 | Date picker       | Date range       | "January 1, 2023 to December 31, 2023"                       |
| Have there been any significant changes in your approach to indirect economic impacts during the reporting period? | Yes/No with follow-up      | Radio + text area | Boolean + string | "Yes - Implemented new impact measurement framework and increased community investment budget by 40%" |

# GRI 204 Procurement Practices

## Core Disclosure Requirements

| Question                                                     | Question Type           | Input Type                | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | ----------------------- | ------------------------- | -------------- | ------------------------------------------------------------ |
| What is your organization's total procurement budget for the reporting period? | Quantitative            | Number input              | Currency (USD) | $2,500,000                                                   |
| How much did your organization spend on procurement from local suppliers? | Quantitative            | Number input              | Currency (USD) | $1,750,000                                                   |
| What percentage of your procurement budget was spent on local suppliers? | Calculated/Quantitative | Auto-calculated or Manual | Percentage     | 70%                                                          |
| How does your organization define "local suppliers"?         | Qualitative             | Multiple choice + Text    | Text           | Same country/region, within 100km radius, domestic suppliers |
| What are the main categories of goods/services you procure?  | Qualitative             | Multiple selection        | Categories     | Raw materials, IT services, Professional services, Office supplies |
| Does your organization have a formal local procurement policy? | Qualitative             | Yes/No + Follow-up        | Boolean + Text | Yes - Policy requires 60% local sourcing when feasible       |
| What criteria do you use to select suppliers?                | Qualitative             | Multiple selection + Text | Text array     | Price, Quality, Delivery time, Local presence, Sustainability practices |
| How many suppliers did you work with during the reporting period? | Quantitative            | Number input              | Integer        | 245                                                          |
| How many of these suppliers are considered "local"?          | Quantitative            | Number input              | Integer        | 172                                                          |
| What is your organization's primary business location/headquarters? | Contextual              | Text/Dropdown             | Text           | New York, USA                                                |

## Supplier Identification and Classification

| Question                                                     | Question Type | Input Type             | Data Type          | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ---------------------- | ------------------ | ------------------------------------------------------------ |
| Please provide the names and locations of your top 10 suppliers by spending | Qualitative   | Table/Form input       | Structured data    | ABC Corp - Chicago, XYZ Ltd - Toronto                        |
| Which of your suppliers are minority-owned businesses?       | Qualitative   | Multiple selection     | Text array         | DEF Industries, GHI Services                                 |
| Which suppliers are women-owned businesses?                  | Qualitative   | Multiple selection     | Text array         | JKL Consulting, MNO Manufacturing                            |
| Do you track spending with small and medium enterprises (SMEs)? | Qualitative   | Yes/No + Details       | Boolean + Currency | Yes - $890,000 spent with SMEs                               |
| What percentage of suppliers are SMEs?                       | Quantitative  | Number input           | Percentage         | 45%                                                          |
| Do you have suppliers from indigenous/aboriginal communities? | Qualitative   | Yes/No + Details       | Boolean + Text     | Yes - 3 suppliers representing $125,000 in spending          |
| How do you verify the local status of your suppliers?        | Qualitative   | Multiple choice + Text | Text               | Business registration, Physical address verification, Tax records |
| Do you maintain a preferred supplier list?                   | Qualitative   | Yes/No + Details       | Boolean + Text     | Yes - 89 preferred suppliers with priority status            |

## Procurement Processes and Policies

| Question                                                     | Question Type | Input Type                | Data Type            | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ------------------------- | -------------------- | ------------------------------------------------------------ |
| What procurement methods does your organization use?         | Qualitative   | Multiple selection        | Text array           | Open tender, Restricted tender, Direct negotiation, Framework agreements |
| Do you have minimum local content requirements for contracts? | Qualitative   | Yes/No + Details          | Boolean + Percentage | Yes - 30% minimum local content for construction projects    |
| How do you promote local supplier participation in procurement processes? | Qualitative   | Multiple selection + Text | Text array           | Local supplier databases, Capacity building programs, Simplified bidding |
| Do you provide training or capacity building for local suppliers? | Qualitative   | Yes/No + Details          | Boolean + Text       | Yes - Quarterly workshops on compliance and quality standards |
| What barriers prevent you from increasing local procurement? | Qualitative   | Multiple selection + Text | Text array           | Limited local capacity, Quality concerns, Higher costs, Delivery constraints |
| Do you have any procurement targets for local suppliers?     | Qualitative   | Yes/No + Details          | Boolean + Percentage | Yes - Target 75% local procurement by 2025                   |
| How do you measure and monitor local procurement performance? | Qualitative   | Multiple choice + Text    | Text                 | Monthly reports, KPI dashboards, Annual audits               |
| Do you conduct supplier assessments or audits?               | Qualitative   | Yes/No + Details          | Boolean + Text       | Yes - Annual assessments covering quality, delivery, and compliance |

## Geographic and Economic Impact

| Question                                                     | Question Type | Input Type           | Data Type          | Example Answer                                             |
| ------------------------------------------------------------ | ------------- | -------------------- | ------------------ | ---------------------------------------------------------- |
| In which countries/regions do you operate procurement activities? | Qualitative   | Multiple selection   | Text array         | USA, Canada, Mexico                                        |
| What is the economic impact of your local procurement in each region? | Quantitative  | Table input          | Currency by region | USA: $1.2M, Canada: $300K, Mexico: $250K                   |
| Do you track job creation through local procurement?         | Qualitative   | Yes/No + Details     | Boolean + Integer  | Yes - Estimated 150 jobs supported through local suppliers |
| How has your local procurement spending changed over the past 3 years? | Quantitative  | Year-over-year input | Percentage change  | 2022: +15%, 2023: +8%, 2024: +12%                          |
| What percentage of your local suppliers are in rural vs urban areas? | Quantitative  | Percentage split     | Percentage         | Rural: 25%, Urban: 75%                                     |
| Do you prioritize procurement from economically disadvantaged areas? | Qualitative   | Yes/No + Details     | Boolean + Text     | Yes - 20% spending target for disadvantaged communities    |

## Challenges and Opportunities

| Question                                                     | Question Type | Input Type                | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ------------------------- | -------------- | ------------------------------------------------------------ |
| What challenges do you face in local procurement?            | Qualitative   | Multiple selection + Text | Text array     | Limited supplier base, Quality variations, Longer lead times |
| What opportunities do you see for increasing local procurement? | Qualitative   | Text area                 | Text           | Supplier development programs, technology partnerships, regional hubs |
| How do you balance cost considerations with local procurement goals? | Qualitative   | Text area                 | Text           | Value-based assessment including total cost of ownership and community impact |
| Do you collaborate with other organizations on local procurement initiatives? | Qualitative   | Yes/No + Details          | Boolean + Text | Yes - Part of regional procurement consortium with 5 companies |
| What support do you provide to develop local supplier capabilities? | Qualitative   | Multiple selection + Text | Text array     | Technical training, Financial assistance, Mentoring programs |

## Reporting and Transparency

| Question                                                     | Question Type | Input Type         | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ------------------ | -------------- | ------------------------------------------------------------ |
| How do you publicly report on procurement practices?         | Qualitative   | Multiple selection | Text array     | Annual sustainability report, Website disclosure, Stakeholder meetings |
| Do you publish your supplier diversity statistics?           | Qualitative   | Yes/No + Details   | Boolean + Text | Yes - Annual diversity report with spending breakdowns       |
| How do stakeholders access information about your procurement practices? | Qualitative   | Multiple selection | Text array     | Public website, Annual reports, Upon request                 |
| Do you participate in any procurement transparency initiatives? | Qualitative   | Yes/No + Details   | Boolean + Text | Yes - Member of Global Procurement Standards Initiative      |
| What feedback mechanisms exist for suppliers?                | Qualitative   | Multiple selection | Text array     | Supplier surveys, Regular meetings, Online portal, Grievance system |

## Data Validation Questions

| Question                                                     | Question Type | Input Type         | Data Type      | Example Answer                                     |
| ------------------------------------------------------------ | ------------- | ------------------ | -------------- | -------------------------------------------------- |
| What is your reporting period for this data?                 | Contextual    | Date range         | Date           | January 1, 2024 - December 31, 2024                |
| Who is responsible for procurement data in your organization? | Contextual    | Text               | Text           | Chief Procurement Officer                          |
| How do you ensure data accuracy for procurement reporting?   | Qualitative   | Multiple selection | Text array     | Regular audits, System controls, Management review |
| What systems do you use to track procurement data?           | Qualitative   | Text               | Text           | SAP Ariba, Oracle Procurement Cloud                |
| Are there any significant limitations or exclusions in this data? | Qualitative   | Yes/No + Details   | Boolean + Text | Excludes emergency purchases under $5,000          |

# GRI 205 Anti-corruption

| Question                                                     | Question Type | Input Type              | Data Type  | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ----------------------- | ---------- | ------------------------------------------------------------ |
| **205-1: Operations assessed for risks related to corruption** |               |                         |            |                                                              |
| How many business units or operations has your organization assessed for corruption risks in the reporting period? | Quantitative  | Number input            | Integer    | 15                                                           |
| What percentage of your total operations were assessed for corruption risks? | Quantitative  | Percentage slider       | Decimal    | 85.5                                                         |
| Which specific business units were assessed for corruption risks? | Qualitative   | Multi-select checkboxes | Array      | ["Sales", "Procurement", "Government Relations", "Joint Ventures"] |
| What methodology did you use to assess corruption risks?     | Qualitative   | Text area               | String     | "Risk matrix assessment combining probability and impact scores, third-party due diligence reviews" |
| Were any significant corruption risks identified during these assessments? | Binary        | Yes/No radio buttons    | Boolean    | Yes                                                          |
| If yes, please describe the significant corruption risks identified | Qualitative   | Text area               | String     | "High-risk jurisdictions with weak regulatory oversight, complex third-party relationships in emerging markets" |
| **205-2: Communication and training about anti-corruption policies and procedures** |               |                         |            |                                                              |
| How many governance body members received anti-corruption training? | Quantitative  | Number input            | Integer    | 12                                                           |
| What percentage of governance body members received anti-corruption training? | Quantitative  | Percentage slider       | Decimal    | 100.0                                                        |
| How many employees received anti-corruption communication or training? | Quantitative  | Number input            | Integer    | 2847                                                         |
| What percentage of total employees received anti-corruption communication or training? | Quantitative  | Percentage slider       | Decimal    | 92.3                                                         |
| How many business partners received anti-corruption communication? | Quantitative  | Number input            | Integer    | 156                                                          |
| What percentage of business partners received anti-corruption communication? | Quantitative  | Percentage slider       | Decimal    | 78.2                                                         |
| Which employee categories received anti-corruption training? | Qualitative   | Multi-select checkboxes | Array      | ["Senior Management", "Sales Staff", "Procurement Team", "All Employees"] |
| What topics were covered in your anti-corruption training programs? | Qualitative   | Multi-select checkboxes | Array      | ["Gift and entertainment policies", "Conflict of interest", "Whistleblower procedures", "Third-party due diligence"] |
| How frequently is anti-corruption training provided?         | Qualitative   | Dropdown                | String     | "Annually for all employees, bi-annually for high-risk roles" |
| **205-3: Confirmed incidents of corruption and actions taken** |               |                         |            |                                                              |
| How many confirmed incidents of corruption occurred during the reporting period? | Quantitative  | Number input            | Integer    | 2                                                            |
| How many corruption incidents resulted in employee dismissal or disciplinary action? | Quantitative  | Number input            | Integer    | 3                                                            |
| How many corruption incidents resulted in contract cancellation with business partners? | Quantitative  | Number input            | Integer    | 1                                                            |
| Were any legal proceedings initiated against the organization for corruption during the reporting period? | Binary        | Yes/No radio buttons    | Boolean    | No                                                           |
| If yes, how many legal proceedings were initiated?           | Quantitative  | Number input            | Integer    | 0                                                            |
| What was the total monetary value of fines or penalties paid for corruption-related incidents? | Quantitative  | Currency input          | Decimal    | 0.00                                                         |
| Please describe the nature of confirmed corruption incidents (without identifying individuals) | Qualitative   | Text area               | String     | "Inappropriate gifts accepted by procurement staff from suppliers, kickback scheme in regional office" |
| What corrective actions were taken in response to corruption incidents? | Qualitative   | Text area               | String     | "Enhanced due diligence procedures, mandatory ethics refresher training, strengthened internal controls" |
| **Additional Context and Policy Questions**                  |               |                         |            |                                                              |
| Does your organization have a written anti-corruption policy? | Binary        | Yes/No radio buttons    | Boolean    | Yes                                                          |
| Is your anti-corruption policy publicly available?           | Binary        | Yes/No radio buttons    | Boolean    | Yes                                                          |
| Does your policy cover conflicts of interest?                | Binary        | Yes/No radio buttons    | Boolean    | Yes                                                          |
| Does your policy address gifts and entertainment?            | Binary        | Yes/No radio buttons    | Boolean    | Yes                                                          |
| Do you have a whistleblower mechanism for reporting corruption? | Binary        | Yes/No radio buttons    | Boolean    | Yes                                                          |
| Is your whistleblower mechanism available to external parties? | Binary        | Yes/No radio buttons    | Boolean    | Yes                                                          |
| Which regions or countries do your assessed operations cover? | Qualitative   | Multi-select checkboxes | Array      | ["North America", "Europe", "Asia-Pacific", "Latin America"] |
| What is the reporting period for this data?                  | Date Range    | Date picker             | Date Range | "January 1, 2024 - December 31, 2024"                        |
| Who is the primary contact responsible for anti-corruption compliance? | Qualitative   | Text input              | String     | "Chief Compliance Officer"                                   |
| Has your organization adopted any international anti-corruption frameworks? | Qualitative   | Multi-select checkboxes | Array      | ["UN Global Compact", "OECD Guidelines", "ISO 37001"]        |

# GRI 206 Anti-competitive Behavior

| Question                                                     | Question Type | Input Type            | Data Type    | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | --------------------- | ------------ | ------------------------------------------------------------ |
| During the reporting period, were there any legal actions pending or completed regarding anti-competitive behavior and violations of anti-trust and monopoly legislation in which your organization has been identified as a participant? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| How many legal actions for anti-competitive behavior were pending at the start of the reporting period? | Quantitative  | Number Input          | Integer      | 2                                                            |
| How many new legal actions for anti-competitive behavior were initiated during the reporting period? | Quantitative  | Number Input          | Integer      | 1                                                            |
| How many legal actions for anti-competitive behavior were completed during the reporting period? | Quantitative  | Number Input          | Integer      | 3                                                            |
| How many legal actions for anti-competitive behavior remain pending at the end of the reporting period? | Quantitative  | Number Input          | Integer      | 0                                                            |
| What is the main type of anti-competitive behavior alleged in these legal actions? | Categorical   | Dropdown/Multi-select | String Array | ["Price fixing", "Market allocation", "Abuse of dominant position"] |
| In which geographic regions or countries did these legal actions occur? | Geographic    | Multi-select          | String Array | ["United States", "European Union", "Canada"]                |
| What was the total amount of monetary sanctions imposed during the reporting period? | Quantitative  | Number Input          | Currency     | 5000000                                                      |
| What currency were the monetary sanctions paid in?           | Categorical   | Dropdown              | String       | USD                                                          |
| Were any non-monetary sanctions imposed (e.g., operational restrictions, compliance orders)? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| Please describe the nature of any non-monetary sanctions imposed | Descriptive   | Text Area             | String       | "Mandatory compliance training for all sales staff and implementation of new pricing oversight procedures" |
| Which business units or subsidiaries were involved in these legal actions? | Categorical   | Multi-select          | String Array | ["Sales Division", "Marketing Department", "Regional Office - Europe"] |
| What was the outcome of completed legal actions?             | Categorical   | Multi-select          | String Array | ["Settlement", "Guilty verdict", "Case dismissed"]           |
| Did your organization admit guilt or liability in any of these cases? | Yes/No        | Radio Button          | Boolean      | No                                                           |
| Were any senior executives or board members personally named in these legal actions? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| How many senior executives were involved in legal actions?   | Quantitative  | Number Input          | Integer      | 2                                                            |
| What compliance measures has your organization implemented in response to these legal actions? | Descriptive   | Text Area             | String       | "Enhanced antitrust training programs, revised pricing policies, appointment of Chief Compliance Officer" |
| Has your organization engaged external legal counsel specializing in competition law? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| What was the total legal cost incurred for defending these anti-competitive behavior cases? | Quantitative  | Number Input          | Currency     | 2500000                                                      |
| Did any of these legal actions result in criminal charges against the organization? | Yes/No        | Radio Button          | Boolean      | No                                                           |
| Did any of these legal actions result in criminal charges against individual employees? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| How many employees faced criminal charges?                   | Quantitative  | Number Input          | Integer      | 1                                                            |
| Were there any plea agreements or settlements reached during the reporting period? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| What was the total settlement amount paid during the reporting period? | Quantitative  | Number Input          | Currency     | 3000000                                                      |
| Are there any ongoing investigations by competition authorities that have not yet resulted in formal legal actions? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| Please describe the subject matter of ongoing investigations | Descriptive   | Text Area             | String       | "Investigation into alleged bid-rigging practices in government contracts for IT services" |
| Which competition authorities are conducting these investigations? | Categorical   | Multi-select          | String Array | ["US Department of Justice", "European Commission", "Competition Bureau Canada"] |
| Has your organization received any dawn raids or unannounced inspections from competition authorities? | Yes/No        | Radio Button          | Boolean      | No                                                           |
| Did your organization voluntarily report any anti-competitive behavior to authorities (leniency applications)? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| What type of anti-competitive behavior was self-reported?    | Categorical   | Multi-select          | String Array | ["Price fixing", "Market sharing agreement"]                 |
| Were there any private litigation cases (class actions, competitor lawsuits) related to anti-competitive behavior? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| How many private litigation cases were filed during the reporting period? | Quantitative  | Number Input          | Integer      | 4                                                            |
| What was the total amount paid in private litigation settlements? | Quantitative  | Number Input          | Currency     | 1500000                                                      |
| Has your organization implemented a competition law compliance program? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| When was your competition law compliance program last updated? | Date          | Date Picker           | Date         | 2024-03-15                                                   |
| How frequently does your organization conduct competition law training for employees? | Categorical   | Dropdown              | String       | "Annually"                                                   |
| What percentage of relevant employees received competition law training during the reporting period? | Quantitative  | Number Input          | Percentage   | 95                                                           |
| Does your organization have a designated competition law compliance officer? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| Are there any ongoing monitoring or compliance obligations resulting from previous legal actions? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| Please describe the ongoing compliance obligations           | Descriptive   | Text Area             | String       | "Quarterly reporting to DOJ on pricing practices, annual third-party compliance audit" |
| What is the expected duration of these compliance obligations? | Quantitative  | Number Input          | Integer      | 3                                                            |
| What is the time unit for the compliance obligation duration? | Categorical   | Dropdown              | String       | "Years"                                                      |
| Has your organization made any public statements or disclosures about these anti-competitive behavior issues? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| Where were these public disclosures made?                    | Categorical   | Multi-select          | String Array | ["SEC filings", "Annual report", "Press releases"]           |
| Were there any reputational impacts from these legal actions that affected business operations? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| Please describe the business impact of reputational damage   | Descriptive   | Text Area             | String       | "Loss of two major clients, delayed contract negotiations with government agencies" |
| Did your organization implement any remedial actions to address competitive concerns? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| Please describe the remedial actions taken                   | Descriptive   | Text Area             | String       | "Divested subsidiary in conflicting market, modified exclusive dealing agreements, implemented pricing transparency measures" |
| Are there any legal actions from previous reporting periods that were resolved during this reporting period? | Yes/No        | Radio Button          | Boolean      | Yes                                                          |
| What was the final outcome of these previously reported legal actions? | Descriptive   | Text Area             | String       | "Settlement reached for $2M with no admission of guilt, compliance monitor appointed for 18 months" |
| Additional comments or context about anti-competitive behavior legal actions | Descriptive   | Text Area             | String       | "All legal actions stem from industry-wide investigation initiated in 2022. Organization has cooperated fully with authorities." |

# GRI 207 Tax Standard

## Tax Strategy and Governance (207-1)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Does your organization have a documented tax strategy approved by the Board of Directors or equivalent governing body? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| Who is responsible for reviewing and approving the tax strategy? | Multiple Choice | Dropdown     | String    | Board of Directors                                           |
| How frequently is your tax strategy reviewed and updated?    | Multiple Choice | Dropdown     | String    | Annually                                                     |
| Does your tax strategy include your approach to tax risk management? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| Does your tax strategy address how you engage with tax authorities? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| Is your tax strategy publicly available?                     | Yes/No          | Radio Button | Boolean   | No                                                           |
| Does your tax strategy align with your business strategy and reflect commercial substance? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What is the primary objective of your tax strategy?          | Open Text       | Text Area    | String    | To ensure compliance with all applicable tax laws while optimizing tax efficiency in alignment with business operations |

## Tax Governance and Risk Management (207-2)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Does your organization have a dedicated tax function or department? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| How many full-time equivalent employees work in tax-related roles? | Numeric         | Number Input | Integer   | 12                                                           |
| Does your organization have a tax risk management framework? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| How does your organization identify tax risks?               | Multiple Choice | Checkbox     | Array     | Regular risk assessments, External advisory, Internal audits |
| What is the frequency of tax risk assessments?               | Multiple Choice | Dropdown     | String    | Quarterly                                                    |
| Does your organization have established tax risk appetite and tolerance levels? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| Who has ultimate responsibility for tax decisions in your organization? | Open Text       | Text Input   | String    | Chief Financial Officer                                      |
| Does your organization use external tax advisors?            | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| How does your organization ensure tax compliance across all jurisdictions? | Open Text       | Text Area    | String    | Through a combination of internal controls, regular training, and engagement with local tax advisors |

## Tax Transparency and Stakeholder Engagement (207-3)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Does your organization engage with tax authorities beyond mandatory requirements? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What types of engagement do you have with tax authorities?   | Multiple Choice | Checkbox     | Array     | Advance pricing agreements, Tax rulings, Cooperative compliance programs |
| Does your organization participate in any cooperative compliance programs? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| How does your organization handle disagreements with tax authorities? | Open Text       | Text Area    | String    | Through formal dispute resolution processes, including mutual agreement procedures where applicable |
| Does your organization provide tax-related information to stakeholders beyond regulatory requirements? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What stakeholders receive tax-related information from your organization? | Multiple Choice | Checkbox     | Array     | Investors, Regulators, Civil society organizations           |
| Does your organization publish any voluntary tax transparency reports? | Yes/No          | Radio Button | Boolean   | No                                                           |
| How does your organization respond to public concerns about its tax practices? | Open Text       | Text Area    | String    | Through transparent communication and engagement with relevant stakeholders |

## Country-by-Country Tax Reporting (207-4)

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer       |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | -------------------- |
| Is your organization required to file Country-by-Country (CbC) reports? | Yes/No        | Radio Button | Boolean   | Yes                  |
| In how many tax jurisdictions does your organization operate? | Numeric       | Number Input | Integer   | 15                   |
| What was your organization's total revenue in the most recent reporting period? | Numeric       | Number Input | Decimal   | 2500000000           |
| What was your organization's total income tax paid in the most recent reporting period? | Numeric       | Number Input | Decimal   | 180000000            |
| What was your organization's total income tax accrued in the most recent reporting period? | Numeric       | Number Input | Decimal   | 195000000            |
| Please provide the total number of employees by tax jurisdiction | File Upload   | File Input   | File      | [Upload spreadsheet] |
| Please provide revenue breakdown by tax jurisdiction         | File Upload   | File Input   | File      | [Upload spreadsheet] |
| Please provide profit/loss before tax by jurisdiction        | File Upload   | File Input   | File      | [Upload spreadsheet] |
| Are there any jurisdictions where you have operations but no tax presence? | Yes/No        | Radio Button | Boolean   | No                   |
| Do you have any stateless income (income not subject to tax in any jurisdiction)? | Yes/No        | Radio Button | Boolean   | No                   |

## Transfer Pricing and Related Party Transactions

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | -------------- |
| Does your organization have transfer pricing policies?       | Yes/No        | Radio Button | Boolean   | Yes            |
| Are your transfer pricing policies based on the arm's length principle? | Yes/No        | Radio Button | Boolean   | Yes            |
| What percentage of your total revenue involves related party transactions? | Numeric       | Number Input | Decimal   | 35.5           |
| Does your organization maintain transfer pricing documentation? | Yes/No        | Radio Button | Boolean   | Yes            |
| Have you had any transfer pricing disputes in the last three years? | Yes/No        | Radio Button | Boolean   | Yes            |
| What was the total amount of transfer pricing adjustments in the last reporting period? | Numeric       | Number Input | Decimal   | 5000000        |

## Tax Incentives and Special Regimes

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Does your organization benefit from any tax incentives or special tax regimes? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What types of tax incentives does your organization utilize? | Multiple Choice | Checkbox     | Array     | R&D tax credits, Investment incentives, Export incentives    |
| What was the total value of tax incentives received in the most recent reporting period? | Numeric         | Number Input | Decimal   | 25000000                                                     |
| Please describe the business rationale for utilizing these tax incentives | Open Text       | Text Area    | String    | Tax incentives support our R&D activities and manufacturing investments in developing markets |

## Tax Disputes and Uncertainties

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | -------------- |
| Does your organization currently have any ongoing tax disputes? | Yes/No        | Radio Button | Boolean   | Yes            |
| What is the total amount under dispute with tax authorities? | Numeric       | Number Input | Decimal   | 15000000       |
| How many tax audits has your organization been subject to in the last three years? | Numeric       | Number Input | Integer   | 8              |
| What is the total amount of uncertain tax positions recorded in your financial statements? | Numeric       | Number Input | Decimal   | 12000000       |
| Does your organization have any advance tax agreements or rulings? | Yes/No        | Radio Button | Boolean   | Yes            |

## Additional Context and Qualitative Information

| Question                                                     | Question Type | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ---------- | --------- | ------------------------------------------------------------ |
| Please describe any significant changes to your tax strategy in the reporting period | Open Text     | Text Area  | String    | We implemented a new global tax technology platform and enhanced our tax risk management framework |
| What are the main tax risks facing your organization?        | Open Text     | Text Area  | String    | Changes in international tax regulations, transfer pricing disputes, and increasing tax transparency requirements |
| How does your organization ensure alignment between tax planning and business substance? | Open Text     | Text Area  | String    | All tax planning initiatives must demonstrate clear business purpose and economic substance before implementation |
| Please provide any additional context about your tax approach that stakeholders should understand | Open Text     | Text Area  | String    | Our tax strategy is designed to support sustainable business growth while maintaining the highest standards of tax compliance and transparency |

# GRI 301 Materials

## 301-1: Materials used by weight or volume

| Question                                                     | Question Type      | Input Type    | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ------------------ | ------------- | ---------------- | ------------------------------------------------------------ |
| What is your primary industry sector?                        | Multiple Choice    | Dropdown      | String           | Manufacturing - Electronics                                  |
| What is your organization's main product category?           | Open-ended         | Text Input    | String           | Consumer electronics, smartphones                            |
| Please list all raw materials used in your production process | Open-ended         | Text Area     | Array of Strings | Steel, aluminum, plastic polymers, lithium, rare earth elements |
| What is the total weight of renewable materials used in the reporting period? | Quantitative       | Number Input  | Float (tonnes)   | 1250.5                                                       |
| What is the total weight of non-renewable materials used in the reporting period? | Quantitative       | Number Input  | Float (tonnes)   | 8750.2                                                       |
| Which materials do you classify as renewable in your operations? | Multiple Selection | Checkbox List | Array of Strings | Bamboo fiber, recycled paper, bio-based plastics             |
| Which materials do you classify as non-renewable in your operations? | Multiple Selection | Checkbox List | Array of Strings | Steel, aluminum, petroleum-based plastics, rare earth minerals |
| Do you have a system to track material usage by weight/volume? | Yes/No             | Radio Button  | Boolean          | Yes                                                          |
| What unit of measurement do you use for tracking materials?  | Multiple Choice    | Radio Button  | String           | Tonnes                                                       |
| What is your reporting period?                               | Date Range         | Date Picker   | Date Range       | January 1, 2024 - December 31, 2024                          |

## 301-2: Recycled input materials used

| Question                                                     | Question Type      | Input Type    | Data Type          | Example Answer                                               |
| ------------------------------------------------------------ | ------------------ | ------------- | ------------------ | ------------------------------------------------------------ |
| Do you use recycled materials in your production process?    | Yes/No             | Radio Button  | Boolean            | Yes                                                          |
| What is the total weight of recycled input materials used?   | Quantitative       | Number Input  | Float (tonnes)     | 450.8                                                        |
| What percentage of total materials used consists of recycled input materials? | Quantitative       | Number Input  | Float (percentage) | 15.2                                                         |
| Please list the types of recycled materials you use          | Open-ended         | Text Area     | Array of Strings   | Recycled steel, recycled aluminum, recycled plastics, recycled paper |
| What is the source of your recycled materials?               | Multiple Selection | Checkbox List | Array of Strings   | Post-consumer waste, Post-industrial waste, Internal waste streams |
| Do you have certification for your recycled materials?       | Yes/No             | Radio Button  | Boolean            | Yes                                                          |
| Which certifications do your recycled materials have?        | Multiple Selection | Checkbox List | Array of Strings   | FSC Recycled, GREENGUARD, Cradle to Cradle                   |
| How do you verify the recycled content of your input materials? | Multiple Choice    | Dropdown      | String             | Third-party certification                                    |
| What challenges do you face in increasing recycled material usage? | Open-ended         | Text Area     | String             | Supply chain availability, quality consistency, cost considerations |

## 301-3: Reclaimed products and their packaging materials

| Question                                                     | Question Type      | Input Type    | Data Type          | Example Answer                                               |
| ------------------------------------------------------------ | ------------------ | ------------- | ------------------ | ------------------------------------------------------------ |
| Do you have a product take-back or reclamation program?      | Yes/No             | Radio Button  | Boolean            | Yes                                                          |
| What is the total weight of reclaimed products in the reporting period? | Quantitative       | Number Input  | Float (tonnes)     | 125.3                                                        |
| What is the total weight of reclaimed packaging materials?   | Quantitative       | Number Input  | Float (tonnes)     | 45.7                                                         |
| What percentage of products sold were reclaimed?             | Quantitative       | Number Input  | Float (percentage) | 8.5                                                          |
| What types of products do you reclaim?                       | Multiple Selection | Checkbox List | Array of Strings   | End-of-life electronics, Returned products, Defective products |
| How do you collect reclaimed products?                       | Multiple Selection | Checkbox List | Array of Strings   | Take-back programs, Retail collection points, Mail-in programs |
| What happens to reclaimed products after collection?         | Multiple Selection | Checkbox List | Array of Strings   | Refurbishment, Material recovery, Recycling, Proper disposal |
| Do you track reclaimed products by product category?         | Yes/No             | Radio Button  | Boolean            | Yes                                                          |
| Please specify product categories and their reclamation rates | Open-ended         | Text Area     | String             | Smartphones: 12%, Laptops: 6%, Accessories: 3%               |
| What is your target reclamation rate for the next reporting period? | Quantitative       | Number Input  | Float (percentage) | 10.0                                                         |

## Additional Context and Validation Questions

| Question                                                     | Question Type      | Input Type    | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ------------------ | ------------- | ---------------- | ------------------------------------------------------------ |
| Which GRI 301 disclosures are material to your organization? | Multiple Selection | Checkbox List | Array of Strings | 301-1, 301-2, 301-3                                          |
| Do you have a materials management policy?                   | Yes/No             | Radio Button  | Boolean          | Yes                                                          |
| Who is responsible for materials data collection in your organization? | Open-ended         | Text Input    | String           | Chief Sustainability Officer                                 |
| How frequently do you collect materials usage data?          | Multiple Choice    | Dropdown      | String           | Monthly                                                      |
| What data sources do you use for materials reporting?        | Multiple Selection | Checkbox List | Array of Strings | ERP systems, Purchase orders, Production records, Supplier data |
| Do you face any data quality challenges in materials reporting? | Open-ended         | Text Area     | String           | Inconsistent supplier data, Manual data collection processes |
| Have you externally assured your materials data?             | Yes/No             | Radio Button  | Boolean          | No                                                           |
| Do you set targets for materials usage reduction?            | Yes/No             | Radio Button  | Boolean          | Yes                                                          |
| What are your key materials-related sustainability goals?    | Open-ended         | Text Area     | String           | Reduce virgin material usage by 20%, Increase recycled content to 25% |
| Do you engage with suppliers on materials sustainability?    | Yes/No             | Radio Button  | Boolean          | Yes                                                          |

## Data Quality and Boundary Questions

| Question                                                     | Question Type      | Input Type    | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ------------------ | ------------- | ---------------- | ------------------------------------------------------------ |
| What is the boundary of your materials reporting?            | Multiple Selection | Checkbox List | Array of Strings | Direct operations, Tier 1 suppliers, Joint ventures          |
| Do you include all subsidiaries in your materials data?      | Yes/No             | Radio Button  | Boolean          | Yes                                                          |
| How do you ensure data accuracy for materials reporting?     | Multiple Selection | Checkbox List | Array of Strings | Internal audit, Third-party verification, Management review  |
| What estimation methods do you use for missing data?         | Open-ended         | Text Area     | String           | Extrapolation from previous periods, Industry benchmarks     |
| Do you restate previous years' materials data?               | Yes/No             | Radio Button  | Boolean          | No                                                           |
| What significant changes occurred in your materials usage this year? | Open-ended         | Text Area     | String           | New supplier relationships, Product design changes           |
| Are there any materials excluded from your reporting?        | Yes/No             | Radio Button  | Boolean          | Yes                                                          |
| Please explain any exclusions and their rationale            | Open-ended         | Text Area     | String           | Excluded office supplies due to immateriality (less than 0.1% of total) |

# GRI 302 Energy

## 302-1: Energy Consumption Within the Organization

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | -------------------------------------------- |
| What is your total fuel consumption from non-renewable sources in joules or multiples? | Quantitative    | Number Input | Float     | 2,500,000 GJ                                 |
| What is your total fuel consumption from renewable sources in joules or multiples? | Quantitative    | Number Input | Float     | 850,000 GJ                                   |
| What is your total electricity consumption in joules or multiples? | Quantitative    | Number Input | Float     | 1,200,000 GJ                                 |
| What is your total heating consumption in joules or multiples? | Quantitative    | Number Input | Float     | 450,000 GJ                                   |
| What is your total cooling consumption in joules or multiples? | Quantitative    | Number Input | Float     | 320,000 GJ                                   |
| What is your total steam consumption in joules or multiples? | Quantitative    | Number Input | Float     | 180,000 GJ                                   |
| What types of non-renewable fuels does your organization consume? | Multiple Choice | Checkbox     | Array     | Natural gas, Coal, Diesel, Gasoline          |
| What types of renewable fuels does your organization consume? | Multiple Choice | Checkbox     | Array     | Biomass, Biogas, Solar thermal, Geothermal   |
| Do you purchase electricity from the grid?                   | Yes/No          | Radio Button | Boolean   | Yes                                          |
| Do you generate renewable electricity on-site?               | Yes/No          | Radio Button | Boolean   | Yes                                          |
| What is your total on-site renewable electricity generation in joules? | Quantitative    | Number Input | Float     | 95,000 GJ                                    |
| Which standards, methodologies, or assumptions did you use to calculate energy consumption? | Open Text       | Text Area    | String    | ISO 14064-1, GHG Protocol Corporate Standard |

## 302-2: Energy Consumption Outside of the Organization

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                             |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ---------------------------------------------------------- |
| What is your total energy consumption outside the organization in joules? | Quantitative    | Number Input | Float     | 750,000 GJ                                                 |
| Does your organization track energy consumption in its value chain? | Yes/No          | Radio Button | Boolean   | Yes                                                        |
| Which categories of upstream energy consumption do you track? | Multiple Choice | Checkbox     | Array     | Business travel, Employee commuting, Purchased goods       |
| Which categories of downstream energy consumption do you track? | Multiple Choice | Checkbox     | Array     | Product transportation, Product use, End-of-life treatment |
| What is the energy consumption from business travel in joules? | Quantitative    | Number Input | Float     | 125,000 GJ                                                 |
| What is the energy consumption from employee commuting in joules? | Quantitative    | Number Input | Float     | 85,000 GJ                                                  |
| What is the energy consumption from purchased goods and services in joules? | Quantitative    | Number Input | Float     | 340,000 GJ                                                 |
| What standards or methodologies did you use for calculations? | Open Text       | Text Area    | String    | GHG Protocol Scope 3 Standard, ISO 14040                   |

## 302-3: Energy Intensity

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                      |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ----------------------------------- |
| What is your organization's energy intensity ratio?          | Quantitative    | Number Input | Float     | 0.85 GJ per unit of production      |
| What organization-specific metric did you use as the denominator? | Dropdown        | Select       | String    | Units of production                 |
| What types of energy are included in the intensity ratio?    | Multiple Choice | Checkbox     | Array     | Fuel, Electricity, Heating, Cooling |
| Does the ratio use energy consumption within or outside the organization? | Dropdown        | Select       | String    | Within the organization             |
| What was your total energy consumption used in the intensity calculation? | Quantitative    | Number Input | Float     | 4,250,000 GJ                        |
| What was your total organizational metric value used as denominator? | Quantitative    | Number Input | Float     | 5,000,000 units                     |

## 302-4: Reduction of Energy Consumption

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| What is the total amount of energy reductions achieved in joules? | Quantitative    | Number Input | Float     | 185,000 GJ                                                   |
| Which types of energy are included in the reductions?        | Multiple Choice | Checkbox     | Array     | Electricity, Natural gas, Heating                            |
| What is the basis for calculating reductions?                | Dropdown        | Select       | String    | Direct measurement of energy before and after                |
| What standards or methodologies did you use for calculations? | Open Text       | Text Area    | String    | ISO 50001, IPMVP Protocol                                    |
| What initiatives contributed to energy reductions?           | Open Text       | Text Area    | String    | LED lighting upgrades, HVAC optimization, equipment replacement |
| Over what time period were these reductions achieved?        | Date Range      | Date Picker  | String    | January 2023 - December 2023                                 |
| What was your baseline year for comparison?                  | Number Input    | Number Input | Integer   | 2022                                                         |

## 302-5: Reductions in Energy Requirements of Products and Services

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | ------------------------------------------------------------ |
| What reductions in energy requirements have you achieved for products? | Quantitative  | Number Input | Float     | 125,000 GJ reduction                                         |
| What reductions in energy requirements have you achieved for services? | Quantitative  | Number Input | Float     | 45,000 GJ reduction                                          |
| What is the basis for calculating these reductions?          | Dropdown      | Select       | String    | Lifecycle assessment comparison                              |
| What baseline year or period did you use for comparison?     | Number Input  | Number Input | Integer   | 2022                                                         |
| Which products or services achieved the most significant reductions? | Open Text     | Text Area    | String    | Product line A (40% reduction), Service package B (25% reduction) |
| What design changes or improvements drove these reductions?  | Open Text     | Text Area    | String    | Improved insulation, energy-efficient components, optimized algorithms |
| What standards or methodologies did you use for calculations? | Open Text     | Text Area    | String    | ISO 14040/14044 LCA standards, Energy Star guidelines        |

## General Context Questions

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                      |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ----------------------------------- |
| What is your organization's primary industry sector?         | Dropdown        | Select       | String    | Manufacturing                       |
| What is the reporting period for this data?                  | Date Range      | Date Picker  | String    | January 1, 2023 - December 31, 2023 |
| What geographical regions does this data cover?              | Multiple Choice | Checkbox     | Array     | North America, Europe, Asia-Pacific |
| How many facilities are included in this reporting?          | Quantitative    | Number Input | Integer   | 15                                  |
| What is the primary unit of measurement your organization uses for energy? | Dropdown        | Select       | String    | Gigajoules (GJ)                     |
| Does your organization have an energy management system in place? | Yes/No          | Radio Button | Boolean   | Yes                                 |
| Is your energy data third-party verified?                    | Yes/No          | Radio Button | Boolean   | Yes                                 |
| Who is the primary contact for energy data within your organization? | Open Text       | Text Input   | String    | John Smith, Sustainability Manager  |

# GRI 303 Water and Effluents

## Management Approach Questions

| Question                                                     | Question Type | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ---------- | --------- | ------------------------------------------------------------ |
| How does your organization identify water-related impacts in your operations? | Open-ended    | Text area  | String    | "We conduct annual water risk assessments using WRI Aqueduct tool and engage with local stakeholders to identify impacts on water availability and quality" |
| What are your organization's water-related commitments, goals, and targets? | Open-ended    | Text area  | String    | "Achieve 25% reduction in water consumption by 2030, zero liquid discharge at manufacturing facilities, and maintain water quality standards exceeding regulatory requirements" |
| Who is responsible for water stewardship in your organization? | Open-ended    | Text area  | String    | "Chief Sustainability Officer oversees water strategy, with site-level Environmental Managers responsible for implementation and monitoring" |

## GRI 303-1: Interactions with Water as a Shared Resource

| Question                                                     | Question Type                  | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------------------------ | ---------- | --------- | ------------------------------------------------------------ |
| From which water sources does your organization withdraw water? | Multiple choice (multi-select) | Checkboxes | Array     | ["Surface water", "Groundwater", "Municipal water supply", "Rainwater"] |
| In which geographic areas do your water-intensive operations occur? | Open-ended                     | Text area  | String    | "Primary manufacturing facilities in water-stressed regions: Chennai, India; Cape Town, South Africa; California Central Valley, USA" |
| How do you assess water-related impacts in areas where you operate? | Open-ended                     | Text area  | String    | "We use WWF Water Risk Filter and conduct local stakeholder consultations to assess physical, regulatory, and reputational water risks" |
| What standards, methodologies, or tools do you use for water management? | Open-ended                     | Text area  | String    | "ISO 14046 for water footprint assessment, Alliance for Water Stewardship Standard, and CDP Water Security questionnaire methodology" |

## GRI 303-2: Management of Water Discharge-Related Impacts

| Question                                                 | Question Type          | Input Type    | Data Type | Example Answer                                               |
| -------------------------------------------------------- | ---------------------- | ------------- | --------- | ------------------------------------------------------------ |
| What is the quality of your water discharges?            | Multiple choice        | Dropdown      | String    | "Treated to meet or exceed local regulatory standards"       |
| How do you determine discharge quality requirements?     | Open-ended             | Text area     | String    | "Based on local environmental regulations, receiving water body sensitivity, and internal environmental standards which often exceed regulatory requirements" |
| Do you have water discharge-related goals and targets?   | Yes/No                 | Radio buttons | Boolean   | true                                                         |
| If yes, what are your water discharge goals and targets? | Conditional open-ended | Text area     | String    | "Achieve zero liquid discharge at 3 manufacturing sites by 2027, reduce biochemical oxygen demand in discharge by 30% by 2025" |
| How do you monitor water discharge quality and quantity? | Open-ended             | Text area     | String    | "Continuous online monitoring systems with monthly third-party verification testing for key parameters including pH, COD, BOD, and heavy metals" |

## GRI 303-3: Water Withdrawal

| Question                                                     | Question Type                  | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------------------------ | ------------ | --------- | ------------------------------------------------------------ |
| What was your total water withdrawal in the reporting period (megaliters)? | Numerical                      | Number input | Float     | 1250.5                                                       |
| What was your withdrawal from surface water (megaliters)?    | Numerical                      | Number input | Float     | 450.2                                                        |
| What was your withdrawal from groundwater (megaliters)?      | Numerical                      | Number input | Float     | 300.8                                                        |
| What was your withdrawal from seawater (megaliters)?         | Numerical                      | Number input | Float     | 0                                                            |
| What was your withdrawal from produced water (megaliters)?   | Numerical                      | Number input | Float     | 0                                                            |
| What was your withdrawal from third-party water (megaliters)? | Numerical                      | Number input | Float     | 499.5                                                        |
| Which of your water sources are in water-stressed areas?     | Multiple choice (multi-select) | Checkboxes   | Array     | ["Groundwater in Chennai facility", "Municipal supply in Cape Town facility"] |
| What was your total withdrawal from water-stressed areas (megaliters)? | Numerical                      | Number input | Float     | 380.4                                                        |
| How do you define water-stressed areas?                      | Open-ended                     | Text area    | String    | "Areas with baseline water stress >40% according to WRI Aqueduct tool, or regions officially designated as water-scarce by local authorities" |

## GRI 303-4: Water Discharge

| Question                                                     | Question Type                  | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------------------------ | ------------ | --------- | ------------------------------------------------------------ |
| What was your total water discharge in the reporting period (megaliters)? | Numerical                      | Number input | Float     | 980.3                                                        |
| What was your discharge to surface water (megaliters)?       | Numerical                      | Number input | Float     | 420.1                                                        |
| What was your discharge to groundwater (megaliters)?         | Numerical                      | Number input | Float     | 0                                                            |
| What was your discharge to seawater (megaliters)?            | Numerical                      | Number input | Float     | 0                                                            |
| What was your discharge to third parties (megaliters)?       | Numerical                      | Number input | Float     | 560.2                                                        |
| What was your total discharge to water-stressed areas (megaliters)? | Numerical                      | Number input | Float     | 180.5                                                        |
| What substances of concern are present in your water discharge? | Multiple choice (multi-select) | Checkboxes   | Array     | ["Heavy metals", "Organic compounds", "Nutrients (nitrogen/phosphorus)"] |
| How do you prioritize substances of concern for disclosure?  | Open-ended                     | Text area    | String    | "Based on regulatory requirements, potential environmental impact, stakeholder concerns, and material risk to receiving water bodies" |

## GRI 303-5: Water Consumption

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | ------------------------------------------------------------ |
| What was your total water consumption in the reporting period (megaliters)? | Numerical     | Number input | Float     | 270.2                                                        |
| What was your total water consumption in water-stressed areas (megaliters)? | Numerical     | Number input | Float     | 199.9                                                        |
| How do you calculate water consumption?                      | Open-ended    | Text area    | String    | "Water consumption = Total water withdrawal - Total water discharge, measured using calibrated flow meters and calculated monthly" |
| What are the main drivers of water consumption in your operations? | Open-ended    | Text area    | String    | "Cooling tower evaporation (45%), product incorporation (30%), facility cleaning and maintenance (15%), landscape irrigation (10%)" |

## Water Efficiency and Conservation

| Question                                                     | Question Type         | Input Type    | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------------- | ------------- | --------- | ------------------------------------------------------------ |
| What water efficiency measures have you implemented?         | Open-ended            | Text area     | String    | "Closed-loop cooling systems, rainwater harvesting, greywater recycling, low-flow fixtures, and process optimization to reduce water intensity by 15%" |
| What was your water intensity ratio for the reporting period? | Numerical             | Number input  | Float     | 2.1                                                          |
| What unit do you use for water intensity calculation?        | Open-ended            | Short text    | String    | "Megaliters per million USD revenue"                         |
| Do you reuse or recycle water in your operations?            | Yes/No                | Radio buttons | Boolean   | true                                                         |
| If yes, what volume of water was reused/recycled (megaliters)? | Conditional numerical | Number input  | Float     | 450.8                                                        |

## Water-Related Incidents and Compliance

| Question                                                     | Question Type          | Input Type    | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | ------------- | --------- | ------------------------------------------------------------ |
| Were there any significant water-related incidents during the reporting period? | Yes/No                 | Radio buttons | Boolean   | false                                                        |
| If yes, describe the incidents and response measures         | Conditional open-ended | Text area     | String    | ""                                                           |
| Were there any regulatory violations related to water?       | Yes/No                 | Radio buttons | Boolean   | false                                                        |
| If yes, describe the violations and corrective actions       | Conditional open-ended | Text area     | String    | ""                                                           |
| What is your process for handling water-related complaints?  | Open-ended             | Text area     | String    | "24/7 community hotline, quarterly stakeholder meetings, and formal grievance mechanism with third-party mediation available" |

## Stakeholder Engagement

| Question                                                     | Question Type                  | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------------------------ | ---------- | --------- | ------------------------------------------------------------ |
| How do you engage with stakeholders on water-related issues? | Open-ended                     | Text area  | String    | "Annual water stewardship forums with local communities, quarterly meetings with regulatory authorities, and participation in watershed management committees" |
| Which stakeholder groups do you engage with regarding water? | Multiple choice (multi-select) | Checkboxes | Array     | ["Local communities", "Regulatory authorities", "NGOs", "Other water users", "Suppliers"] |
| How do you incorporate stakeholder feedback into water management? | Open-ended                     | Text area  | String    | "Feedback is reviewed by our Water Stewardship Committee and integrated into annual water management plans with formal response provided to stakeholders" |

## Future Planning and Targets

| Question                                                     | Question Type          | Input Type    | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | ------------- | --------- | ------------------------------------------------------------ |
| What are your water-related targets for the next reporting period? | Open-ended             | Text area     | String    | "Reduce total water consumption by 8%, implement water recycling at 2 additional facilities, achieve AWS certification at primary manufacturing site" |
| How do you plan to address water risks identified?           | Open-ended             | Text area     | String    | "Invest in water-efficient technologies, diversify water sources, strengthen partnerships with local water authorities, and implement nature-based solutions for water management" |
| Do you participate in collective action for water stewardship? | Yes/No                 | Radio buttons | Boolean   | true                                                         |
| If yes, describe your collective action initiatives          | Conditional open-ended | Text area     | String    | "Member of CEO Water Mandate, participate in regional watershed management alliance, and co-fund community water infrastructure projects" |

# GRI 304 Biodiversity

## Disclosure 304-1: Operational sites owned, leased, managed in, or adjacent to, protected areas and areas of high biodiversity value outside protected areas

| Question                                                     | Question Type   | Input Type   | Data Type   | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | ----------- | ------------------------------------------------------------ |
| How many operational sites does your organization own, lease, or manage? | Quantitative    | Number input | Integer     | 15                                                           |
| Which of your operational sites are located within protected areas? Please list site names and locations. | Qualitative     | Text area    | String/List | "Manufacturing Plant A - Yellowstone Buffer Zone, Wyoming; Office Complex B - Marine Protected Area, California" |
| What types of protected areas are your sites located in or adjacent to? | Multiple choice | Checkbox     | Array       | ["National Parks", "Marine Protected Areas", "UNESCO Biosphere Reserves"] |
| Which operational sites are located in areas of high biodiversity value outside protected areas? | Qualitative     | Text area    | String/List | "Distribution Center C - Adjacent to critical habitat for endangered species X; Facility D - Within 5km of Important Bird Area" |
| What is the total area (in hectares) of your operational sites in or adjacent to protected areas? | Quantitative    | Number input | Decimal     | 245.7                                                        |
| What type of operation and size of operational area exists in each biodiversity-sensitive location? | Qualitative     | Text area    | String      | "Manufacturing - 50 hectares; Warehousing - 25 hectares; Administrative offices - 5 hectares" |

## Disclosure 304-2: Significant impacts of activities, products, and services on biodiversity

| Question                                                     | Question Type    | Input Type         | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ---------------- | ------------------ | ---------------- | ------------------------------------------------------------ |
| What are the direct impacts of your operations on biodiversity? | Multiple choice  | Checkbox           | Array            | ["Habitat modification", "Pollution", "Introduction of invasive species"] |
| What are the indirect impacts of your operations on biodiversity? | Multiple choice  | Checkbox           | Array            | ["Supply chain impacts", "Product lifecycle effects", "Infrastructure development"] |
| Have you identified any significant impacts on endangered or threatened species? | Yes/No + Details | Radio + Text area  | Boolean + String | "Yes - Operations may affect habitat of critically endangered Species X through water usage reduction" |
| Do your activities result in habitat fragmentation?          | Yes/No + Details | Radio + Text area  | Boolean + String | "Yes - Road construction has created barriers for wildlife movement corridors" |
| What pollution types from your operations affect biodiversity? | Multiple choice  | Checkbox           | Array            | ["Water pollution", "Air emissions", "Noise pollution", "Light pollution"] |
| Have you conducted biodiversity impact assessments? When were they last updated? | Yes/No + Date    | Radio + Date input | Boolean + Date   | "Yes - Last assessment completed March 2024"                 |
| What species are most significantly affected by your operations? | Qualitative      | Text area          | String           | "Migratory bird species during breeding season; Aquatic invertebrates in downstream waterways" |

## Disclosure 304-3: Habitats protected or restored

| Question                                                     | Question Type    | Input Type        | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ---------------- | ----------------- | ---------------- | ------------------------------------------------------------ |
| What is the total size (in hectares) of habitats your organization has protected or restored? | Quantitative     | Number input      | Decimal          | 150.5                                                        |
| What types of habitats has your organization protected or restored? | Multiple choice  | Checkbox          | Array            | ["Wetlands", "Forests", "Grasslands", "Marine ecosystems"]   |
| Are your habitat protection/restoration efforts conducted in partnership with third parties? | Yes/No + Details | Radio + Text area | Boolean + String | "Yes - Partnership with Local Conservation Trust and State Environmental Agency" |
| What restoration methods have you implemented?               | Multiple choice  | Checkbox          | Array            | ["Native species replanting", "Invasive species removal", "Soil remediation", "Water body restoration"] |
| What is the success rate of your habitat restoration projects? | Quantitative     | Number input      | Percentage       | 85                                                           |
| How do you monitor the success of habitat protection and restoration efforts? | Qualitative      | Text area         | String           | "Quarterly biodiversity surveys; Annual third-party ecological assessments; Continuous water quality monitoring" |
| What standards or methodologies guide your habitat protection work? | Multiple choice  | Checkbox          | Array            | ["IUCN Guidelines", "Local regulatory requirements", "Industry best practices", "Third-party certification standards"] |

## Disclosure 304-4: IUCN Red List species and national conservation list species with habitats in areas affected by operations

| Question                                                     | Question Type    | Input Type        | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ---------------- | ----------------- | ---------------- | ------------------------------------------------------------ |
| How many IUCN Red List species have habitats in areas affected by your operations? | Quantitative     | Number input      | Integer          | 8                                                            |
| Please list the IUCN Red List species affected by your operations and their threat categories. | Qualitative      | Text area         | String           | "California Condor (Critically Endangered); Monarch Butterfly (Endangered); Gray Wolf (Least Concern)" |
| How many species on national conservation lists have habitats affected by your operations? | Quantitative     | Number input      | Integer          | 12                                                           |
| Please list the nationally listed species and their conservation status. | Qualitative      | Text area         | String           | "Desert Tortoise (Threatened - US ESA); Spotted Owl (Near Threatened - State List)" |
| What specific impacts do your operations have on these listed species? | Qualitative      | Text area         | String           | "Potential habitat disturbance during construction phases; Noise impacts during migration periods" |
| What measures have you taken to minimize impacts on threatened species? | Qualitative      | Text area         | String           | "Seasonal construction restrictions; Wildlife corridors; Modified lighting to reduce impacts on nocturnal species; Buffer zones around sensitive habitats" |
| Do you have species management plans or contribute to species recovery programs? | Yes/No + Details | Radio + Text area | Boolean + String | "Yes - Contribute to Monarch Butterfly conservation program; Implement bat-friendly lighting protocols" |

## General Biodiversity Management Questions

| Question                                                     | Question Type   | Input Type          | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------------- | -------------- | ------------------------------------------------------------ |
| Does your organization have a formal biodiversity policy?    | Yes/No + Upload | Radio + File upload | Boolean + File | "Yes - Biodiversity Policy v2.1 (attached)"                  |
| What is your organization's approach to biodiversity risk assessment? | Qualitative     | Text area           | String         | "Annual biodiversity risk assessments conducted by environmental consultants; Integration with EMS processes; Stakeholder consultation" |
| How does your organization integrate biodiversity considerations into business planning? | Qualitative     | Text area           | String         | "Biodiversity impacts included in project EIAs; Board-level sustainability committee oversight; Integration with supply chain assessments" |
| What biodiversity-related targets has your organization set? | Qualitative     | Text area           | String         | "Net positive impact by 2030; 50% reduction in habitat disturbance by 2027; Zero extinction debt from operations" |
| How do you engage with local communities and stakeholders on biodiversity issues? | Qualitative     | Text area           | String         | "Quarterly community meetings; Indigenous peoples consultation; Collaboration with local environmental NGOs" |
| What biodiversity training do you provide to employees?      | Qualitative     | Text area           | String         | "Annual biodiversity awareness training for all staff; Specialized training for field personnel; Contractor biodiversity requirements" |
| Do you participate in any biodiversity-related initiatives or commitments? | Multiple choice | Checkbox            | Array          | ["Business for Nature", "Science Based Targets for Nature", "UN Global Compact", "Local biodiversity partnerships"] |

# GRI 305 Emissions

## Scope 1 Emissions (Direct GHG Emissions)

| Question                                                     | Question Type            | Input Type    | Data Type | Example Answer                                             |
| ------------------------------------------------------------ | ------------------------ | ------------- | --------- | ---------------------------------------------------------- |
| What is your organization's total gross direct (Scope 1) GHG emissions in metric tons of CO2 equivalent? | Quantitative             | Number input  | Float     | 15,234.56                                                  |
| Which greenhouse gases are included in your Scope 1 calculations? | Multiple Choice          | Checkbox      | Array     | ["CO2", "CH4", "N2O", "HFCs"]                              |
| What is the chosen base year for your Scope 1 emissions?     | Date Selection           | Date picker   | Integer   | 2020                                                       |
| What were your Scope 1 emissions in the base year (metric tons CO2e)? | Quantitative             | Number input  | Float     | 14,789.23                                                  |
| What emission factors and Global Warming Potential (GWP) rates did you use? | Open-ended               | Text area     | String    | "IPCC Fifth Assessment Report (AR5) - 100 year GWP values" |
| What methodology did you use to calculate Scope 1 emissions? | Multiple Choice          | Radio buttons | String    | "The Greenhouse Gas Protocol Corporate Standard"           |
| Do you have any biogenic CO2 emissions from the combustion of biomass? | Yes/No                   | Toggle        | Boolean   | true                                                       |
| If yes, what is the total biogenic CO2 emissions in metric tons? | Conditional Quantitative | Number input  | Float     | 567.89                                                     |

## Scope 2 Emissions (Energy Indirect GHG Emissions)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| What is your organization's total gross location-based Scope 2 GHG emissions in metric tons of CO2 equivalent? | Quantitative    | Number input | Float     | 8,945.12                                                     |
| What is your organization's total gross market-based Scope 2 GHG emissions in metric tons of CO2 equivalent? | Quantitative    | Number input | Float     | 7,234.67                                                     |
| What were your Scope 2 emissions in the base year using location-based method (metric tons CO2e)? | Quantitative    | Number input | Float     | 9,123.45                                                     |
| What were your Scope 2 emissions in the base year using market-based method (metric tons CO2e)? | Quantitative    | Number input | Float     | 8,456.78                                                     |
| Which gases are included in your Scope 2 calculations?       | Multiple Choice | Checkbox     | Array     | ["CO2", "CH4", "N2O"]                                        |
| What emission factors did you use for location-based calculations? | Open-ended      | Text area    | String    | "National grid emission factors from EPA eGRID database"     |
| What emission factors did you use for market-based calculations? | Open-ended      | Text area    | String    | "Supplier-specific emission factors and residual mix factors" |

## Scope 3 Emissions (Other Indirect GHG Emissions)

| Question                                                     | Question Type   | Input Type              | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ----------------------- | --------- | ------------------------------------------------------------ |
| What is your organization's total gross Scope 3 GHG emissions in metric tons of CO2 equivalent? | Quantitative    | Number input            | Float     | 125,678.90                                                   |
| What were your Scope 3 emissions in the base year (metric tons CO2e)? | Quantitative    | Number input            | Float     | 118,234.56                                                   |
| Which Scope 3 categories are relevant to your organization?  | Multiple Choice | Checkbox                | Array     | ["Purchased goods and services", "Business travel", "Employee commuting"] |
| For each relevant category, what are the emissions in metric tons CO2e? | Dynamic List    | Repeating number inputs | Object    | {"Category 1": 45000, "Category 6": 2500, "Category 7": 1800} |
| What methodology did you use to calculate Scope 3 emissions? | Open-ended      | Text area               | String    | "GHG Protocol Corporate Value Chain (Scope 3) Standard with spend-based and activity-based approaches" |
| What emission factors did you use for Scope 3 calculations?  | Open-ended      | Text area               | String    | "DEFRA emission factors, EPA emission factors, and supplier-specific data where available" |

## GHG Emissions Intensity

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| What is your organization's GHG emissions intensity ratio?   | Quantitative    | Number input | Float     | 2.34                                                         |
| What is the unit for your intensity ratio denominator?       | Multiple Choice | Dropdown     | String    | "metric tons CO2e per million USD revenue"                   |
| Which scopes are included in your intensity ratio?           | Multiple Choice | Checkbox     | Array     | ["Scope 1", "Scope 2"]                                       |
| What types of GHG emissions are included in the intensity ratio? | Open-ended      | Text area    | String    | "Direct CO2, CH4, and N2O emissions plus indirect CO2 emissions from purchased electricity" |

## Reduction of GHG Emissions

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| What is the total reduction in GHG emissions achieved as a direct result of reduction initiatives, in metric tons CO2e? | Quantitative    | Number input | Float     | 3,456.78                                                     |
| Which gases are included in this reduction calculation?      | Multiple Choice | Checkbox     | Array     | ["CO2", "CH4", "N2O"]                                        |
| What is the base year or baseline against which reductions are reported? | Date Selection  | Date picker  | Integer   | 2020                                                         |
| Which scopes are included in the reported reductions?        | Multiple Choice | Checkbox     | Array     | ["Scope 1", "Scope 2"]                                       |
| What methodology was used to calculate the reductions?       | Open-ended      | Text area    | String    | "Comparison of current year emissions against base year, adjusting for any structural changes" |
| Describe the specific reduction initiatives implemented      | Open-ended      | Text area    | String    | "LED lighting retrofits, HVAC system upgrades, renewable energy procurement, employee training programs" |

## Organizational Boundaries and Reporting Period

| Question                                                     | Question Type          | Input Type        | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | ----------------- | --------- | ------------------------------------------------------------ |
| What reporting period does this data cover?                  | Date Range             | Date range picker | Object    | {"start": "2023-01-01", "end": "2023-12-31"}                 |
| What consolidation approach did you use for defining organizational boundaries? | Multiple Choice        | Radio buttons     | String    | "Operational control"                                        |
| Are there any significant changes in organizational boundaries compared to previous reporting periods? | Yes/No                 | Toggle            | Boolean   | false                                                        |
| If yes, describe the changes and their impact on emissions data | Conditional Open-ended | Text area         | String    | "Acquired subsidiary XYZ Corp in Q2, adding approximately 2,500 tons CO2e to Scope 1 emissions" |
| What percentage of your total operations (by revenue, production, or other metric) is covered by this emissions data? | Quantitative           | Number input      | Float     | 95.5                                                         |

## Data Quality and Verification

| Question                                                     | Question Type          | Input Type    | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | ------------- | --------- | ------------------------------------------------------------ |
| Has this emissions data been externally verified or assured? | Multiple Choice        | Radio buttons | String    | "Limited assurance by third-party auditor"                   |
| If verified, who was the verification provider?              | Conditional Open-ended | Text input    | String    | "EY Climate Change and Sustainability Services"              |
| What is the overall data quality rating for your emissions inventory? | Multiple Choice        | Dropdown      | String    | "High - mostly direct measurements and supplier-specific data" |
| Describe any significant assumptions or estimations used in your calculations | Open-ended             | Text area     | String    | "Estimated 15% of Scope 3 Category 1 emissions using spend-based approach due to lack of supplier-specific data" |
| Are there any known data gaps or limitations in your emissions inventory? | Open-ended             | Text area     | String    | "Limited data availability for some international subsidiaries; working to improve data collection systems" |

## Additional Context

| Question                                                     | Question Type          | Input Type            | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | --------------------- | --------- | ------------------------------------------------------------ |
| What is your organization's primary industry sector?         | Multiple Choice        | Dropdown              | String    | "Manufacturing - Automotive"                                 |
| What are your organization's total annual revenues (in USD)? | Quantitative           | Number input          | Float     | 2500000000                                                   |
| How many employees does your organization have?              | Quantitative           | Number input          | Integer   | 15000                                                        |
| In which countries/regions does your organization operate?   | Multiple Choice        | Multi-select dropdown | Array     | ["United States", "Canada", "Mexico", "Germany"]             |
| Does your organization have any science-based emission reduction targets? | Yes/No                 | Toggle                | Boolean   | true                                                         |
| If yes, describe your emission reduction targets and timeline | Conditional Open-ended | Text area             | String    | "50% reduction in Scope 1 and 2 emissions by 2030 (base year 2020), aligned with 1.5°C pathway" |

# GRI 306 Waste

| Question                                                     | Question Type | Input Type     | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | -------------- | --------- | ------------------------------------------------------------ |
| What is your organization's name and primary industry sector? | Contextual    | Text           | String    | "ABC Manufacturing Corp - Automotive Parts Manufacturing"    |
| What reporting period are you collecting data for?           | Contextual    | Date Range     | Date      | "January 1, 2024 - December 31, 2024"                        |
| Which organizational boundaries does this waste data cover? (subsidiaries, joint ventures, etc.) | Contextual    | Multi-select   | Array     | "Parent company only", "All subsidiaries", "Joint ventures >50% ownership" |
| What is the total weight of waste generated during the reporting period? | Quantitative  | Number         | Float     | 2,450.75                                                     |
| What unit of measurement are you using for waste quantities? | Contextual    | Dropdown       | String    | "Metric tons", "Kilograms", "Pounds"                         |
| How much hazardous waste was generated?                      | Quantitative  | Number         | Float     | 125.5                                                        |
| How much non-hazardous waste was generated?                  | Quantitative  | Number         | Float     | 2,325.25                                                     |
| What types of hazardous waste does your organization generate? | Categorical   | Multi-select   | Array     | "Chemical solvents", "Heavy metals", "Contaminated materials", "Electronic waste" |
| What types of non-hazardous waste does your organization generate? | Categorical   | Multi-select   | Array     | "Paper/cardboard", "Plastic", "Metal scraps", "Food waste", "Wood waste" |
| How much waste was diverted from disposal through reuse?     | Quantitative  | Number         | Float     | 45.2                                                         |
| How much waste was diverted from disposal through recycling? | Quantitative  | Number         | Float     | 890.3                                                        |
| How much waste was diverted from disposal through composting? | Quantitative  | Number         | Float     | 12.8                                                         |
| How much waste was diverted from disposal through recovery (including energy recovery)? | Quantitative  | Number         | Float     | 234.7                                                        |
| What is the total amount of waste diverted from disposal?    | Calculated    | Auto-calculate | Float     | 1,182.0                                                      |
| How much waste was directed to disposal through incineration with energy recovery? | Quantitative  | Number         | Float     | 156.4                                                        |
| How much waste was directed to disposal through incineration without energy recovery? | Quantitative  | Number         | Float     | 23.1                                                         |
| How much waste was directed to disposal through landfilling? | Quantitative  | Number         | Float     | 678.9                                                        |
| How much waste was directed to disposal through other disposal operations? | Quantitative  | Number         | Float     | 89.3                                                         |
| What other disposal methods are you using?                   | Descriptive   | Text Area      | String    | "Deep well injection for liquid hazardous waste"             |
| What is the total amount of waste directed to disposal?      | Calculated    | Auto-calculate | Float     | 947.7                                                        |
| Do you have any waste for which the disposal method is unknown? | Binary        | Yes/No         | Boolean   | "No"                                                         |
| If yes, what is the quantity of waste with unknown disposal method? | Conditional   | Number         | Float     | 0                                                            |
| What methods do you use to collect waste data?               | Methodology   | Multi-select   | Array     | "Direct measurement", "Waste hauler records", "Vendor invoices", "Estimation based on production" |
| How do you ensure the accuracy of your waste data?           | Methodology   | Text Area      | String    | "Monthly reconciliation with waste hauler records, quarterly audits, waste stream sampling" |
| Do you track waste generation by facility or location?       | Binary        | Yes/No         | Boolean   | "Yes"                                                        |
| Which facilities or locations generate the most waste?       | Conditional   | Multi-select   | Array     | "Manufacturing Plant A", "Distribution Center B", "Corporate Headquarters" |
| What percentage of your waste data is based on actual measurements vs. estimates? | Methodology   | Percentage     | Float     | 85.5                                                         |
| Do you have waste reduction targets or goals?                | Binary        | Yes/No         | Boolean   | "Yes"                                                        |
| What are your specific waste reduction targets?              | Conditional   | Text Area      | String    | "Reduce total waste generation by 15% by 2025, achieve 90% diversion rate from landfill" |
| What waste reduction initiatives have you implemented?       | Descriptive   | Text Area      | String    | "Implemented circular economy principles, increased recycling programs, switched to reusable packaging" |
| Do you work with certified waste management vendors?         | Binary        | Yes/No         | Boolean   | "Yes"                                                        |
| What certifications do your waste management vendors hold?   | Conditional   | Multi-select   | Array     | "ISO 14001", "R2 Certification", "Local environmental permits" |
| Do you conduct waste audits or assessments?                  | Binary        | Yes/No         | Boolean   | "Yes"                                                        |
| How frequently do you conduct waste audits?                  | Conditional   | Dropdown       | String    | "Annually", "Quarterly", "Monthly", "As needed"              |
| Are there any significant changes in waste generation compared to the previous reporting period? | Comparative   | Yes/No + Text  | Mixed     | "Yes - 12% increase due to expanded production capacity"     |
| What are the main factors affecting your waste generation?   | Analytical    | Text Area      | String    | "Production volume, product mix changes, seasonal variations, new manufacturing processes" |
| Do you track waste costs (disposal, management, treatment)?  | Binary        | Yes/No         | Boolean   | "Yes"                                                        |
| What were your total waste management costs for the reporting period? | Financial     | Number         | Float     | 145000.00                                                    |
| What currency are you reporting financial data in?           | Contextual    | Dropdown       | String    | "USD", "EUR", "GBP", "JPY"                                   |
| Do you have any waste-related incidents or spills to report? | Compliance    | Yes/No         | Boolean   | "No"                                                         |
| If yes, please describe the incidents and remediation actions taken. | Conditional   | Text Area      | String    | ""                                                           |
| Are there any regulatory or legal requirements affecting your waste reporting? | Compliance    | Text Area      | String    | "EPA RCRA reporting requirements, state hazardous waste manifests, local solid waste permits" |
| Do you participate in any waste-related industry initiatives or programs? | Engagement    | Multi-select   | Array     | "Ellen MacArthur Foundation", "Zero Waste to Landfill certification", "Industry recycling consortium" |
| What challenges do you face in waste data collection and management? | Analytical    | Text Area      | String    | "Inconsistent data from multiple facilities, difficulty tracking small waste streams, vendor reporting delays" |
| Do you publicly disclose your waste data in sustainability reports? | Transparency  | Yes/No         | Boolean   | "Yes"                                                        |
| Are there any additional contextual factors that affect your waste data interpretation? | Contextual    | Text Area      | String    | "Major facility renovation in Q3 generated additional construction waste" |

# GRI 307 Environmental Compliance

| Question                                                     | Question Type       | Input Type              | Data Type            | Example Answer                                               |
| ------------------------------------------------------------ | ------------------- | ----------------------- | -------------------- | ------------------------------------------------------------ |
| What is your organization's legal name and primary business activity? | Identification      | Text Input              | String               | "ABC Manufacturing Corp - Industrial equipment manufacturing" |
| What is your reporting period for this GRI 307 disclosure?   | Temporal            | Date Range              | Date                 | "January 1, 2024 to December 31, 2024"                       |
| In which countries/jurisdictions does your organization operate? | Geographic          | Multi-select            | Array                | "United States, Canada, Mexico, Germany"                     |
| Have you received any monetary fines for non-compliance with environmental laws during the reporting period? | Compliance Status   | Yes/No + Follow-up      | Boolean + Numeric    | "Yes - $250,000 total in fines"                              |
| How many separate environmental fines did you receive during the reporting period? | Quantitative        | Number Input            | Integer              | "3 separate fines"                                           |
| What was the total monetary value of environmental fines received? | Financial           | Currency Input          | Numeric (Currency)   | "$250,000 USD"                                               |
| Please list each environmental fine individually with amount and reason | Detailed Breakdown  | Table/List Input        | Array of Objects     | "Fine 1: $150,000 - Air emission violation; Fine 2: $75,000 - Wastewater discharge; Fine 3: $25,000 - Waste storage violation" |
| Have you received any non-monetary sanctions for environmental non-compliance? | Compliance Status   | Yes/No + Follow-up      | Boolean + Text       | "Yes - Temporary suspension of discharge permit for 30 days" |
| How many non-monetary sanctions did you receive during the reporting period? | Quantitative        | Number Input            | Integer              | "2 sanctions"                                                |
| Please describe each non-monetary sanction in detail         | Descriptive         | Long Text               | Text                 | "1. Temporary permit suspension for wastewater discharge (30 days). 2. Mandatory installation of additional monitoring equipment within 90 days." |
| Were any environmental fines or sanctions brought through dispute resolution mechanisms? | Legal Process       | Yes/No + Follow-up      | Boolean + Text       | "Yes - One fine currently under appeal in federal court"     |
| Have any environmental compliance cases been settled out of court? | Legal Process       | Yes/No + Follow-up      | Boolean + Text       | "No out-of-court settlements during reporting period"        |
| What types of environmental laws were violated? (Air, Water, Waste, Chemicals, etc.) | Categorization      | Multi-select Checkboxes | Array                | "Air Quality Standards, Wastewater Discharge Regulations"    |
| Which specific environmental regulations or standards were violated? | Regulatory Details  | Text Input              | Text                 | "Clean Air Act Section 112, NPDES Permit Requirements under Clean Water Act" |
| What were the root causes of each environmental compliance violation? | Root Cause Analysis | Long Text               | Text                 | "Equipment malfunction in scrubber system, inadequate maintenance procedures, staff training gaps" |
| Have you implemented corrective actions to address the violations? | Remedial Action     | Yes/No + Follow-up      | Boolean + Text       | "Yes - Upgraded equipment, revised maintenance schedule, enhanced staff training program" |
| What is the current status of each compliance case? (Resolved, Ongoing, Under Appeal) | Status Tracking     | Dropdown Selection      | String               | "2 cases resolved, 1 case under appeal"                      |
| Were there any repeat violations of the same environmental regulations? | Pattern Analysis    | Yes/No + Follow-up      | Boolean + Text       | "No repeat violations during reporting period"               |
| Did any violations result in environmental harm or damage?   | Impact Assessment   | Yes/No + Follow-up      | Boolean + Text       | "Minor soil contamination - remediated within 60 days"       |
| What was the financial impact of remediation or cleanup costs? | Financial Impact    | Currency Input          | Numeric (Currency)   | "$45,000 for soil remediation and monitoring"                |
| Have you disclosed these environmental compliance issues in other reports? | Cross-Reference     | Yes/No + Follow-up      | Boolean + Text       | "Yes - disclosed in SEC 10-K filing and sustainability report" |
| Are there any ongoing investigations by environmental regulators? | Ongoing Issues      | Yes/No + Follow-up      | Boolean + Text       | "One ongoing EPA investigation into historical waste disposal practices" |
| Have you received any notices of violation that haven't resulted in fines yet? | Early Warning       | Yes/No + Follow-up      | Boolean + Text       | "Two notices of violation received - corrective actions completed" |
| What is your organization's total budget for environmental compliance? | Resource Allocation | Currency Input          | Numeric (Currency)   | "$2.5 million annually for compliance activities"            |
| Do you have environmental management systems in place? (ISO 14001, etc.) | Management Systems  | Yes/No + Follow-up      | Boolean + Text       | "Yes - ISO 14001 certified since 2019"                       |
| How do you monitor and track environmental compliance across operations? | Monitoring Process  | Long Text               | Text                 | "Monthly compliance audits, quarterly management reviews, real-time monitoring systems for air and water emissions" |
| Have you identified any potential future compliance risks?   | Risk Assessment     | Yes/No + Follow-up      | Boolean + Text       | "Yes - new regulations on PFAS chemicals may require process modifications" |
| What percentage of your operations are subject to environmental regulations? | Coverage Assessment | Percentage Input        | Numeric (Percentage) | "85% of operations subject to federal environmental regulations" |
| Are there any material environmental compliance issues not yet resolved? | Materiality         | Yes/No + Follow-up      | Boolean + Text       | "No material unresolved compliance issues"                   |
| Have you engaged external consultants or legal counsel for compliance issues? | External Support    | Yes/No + Follow-up      | Boolean + Text       | "Yes - environmental law firm for appeals process, consulting firm for remediation" |
| What measures have you taken to prevent future environmental violations? | Prevention Strategy | Long Text               | Text                 | "Enhanced monitoring systems, increased compliance training frequency, upgraded equipment maintenance protocols" |
| Do you have environmental compliance insurance coverage?     | Risk Management     | Yes/No + Follow-up      | Boolean + Text       | "Yes - $10 million environmental liability insurance policy" |

# GRI 308 Supplier Environmental

| Question                                                     | Question Type     | Input Type       | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ----------------- | ---------------- | --------- | ------------------------------------------------------------ |
| **Management Approach Questions**                            |                   |                  |           |                                                              |
| Does your organization have a formal policy for screening suppliers on environmental criteria? | Yes/No            | Radio Button     | Boolean   | Yes                                                          |
| What environmental criteria do you use to screen new suppliers? (Select all that apply) | Multiple Choice   | Checkbox         | Array     | ["ISO 14001 certification", "Carbon footprint assessment", "Waste management practices"] |
| How frequently do you assess existing suppliers for environmental performance? | Single Choice     | Dropdown         | String    | "Annually"                                                   |
| What is the total number of suppliers in your supply chain?  | Quantitative      | Number Input     | Integer   | 150                                                          |
| What percentage of your procurement budget is spent with suppliers that have been screened using environmental criteria? | Quantitative      | Number Input (%) | Float     | 75.5                                                         |
| **308-1: New suppliers that were screened using environmental criteria** |                   |                  |           |                                                              |
| How many new suppliers were added to your supply chain during the reporting period? | Quantitative      | Number Input     | Integer   | 25                                                           |
| How many of these new suppliers were screened using environmental criteria? | Quantitative      | Number Input     | Integer   | 20                                                           |
| What percentage of new suppliers were screened using environmental criteria? | Calculated/Manual | Number Input (%) | Float     | 80.0                                                         |
| Which environmental screening methods do you use for new suppliers? (Select all that apply) | Multiple Choice   | Checkbox         | Array     | ["Environmental questionnaire", "Site visits", "Third-party audits"] |
| Do you require new suppliers to have environmental certifications? | Yes/No            | Radio Button     | Boolean   | Yes                                                          |
| Which environmental certifications do you require or prefer? (Select all that apply) | Multiple Choice   | Checkbox         | Array     | ["ISO 14001", "EMAS", "Energy Star"]                         |
| **308-2: Negative environmental impacts in the supply chain and actions taken** |                   |                  |           |                                                              |
| How many suppliers were assessed for environmental impacts during the reporting period? | Quantitative      | Number Input     | Integer   | 100                                                          |
| How many suppliers were identified as having significant actual environmental impacts? | Quantitative      | Number Input     | Integer   | 5                                                            |
| How many suppliers were identified as having significant potential environmental impacts? | Quantitative      | Number Input     | Integer   | 8                                                            |
| What types of actual environmental impacts were identified? (Select all that apply) | Multiple Choice   | Checkbox         | Array     | ["Water pollution", "Air emissions", "Soil contamination"]   |
| What types of potential environmental impacts were identified? (Select all that apply) | Multiple Choice   | Checkbox         | Array     | ["Deforestation risk", "Chemical spills", "Energy inefficiency"] |
| How many suppliers agreed to improvement plans following the assessment? | Quantitative      | Number Input     | Integer   | 12                                                           |
| How many suppliers improved their environmental performance following the assessment? | Quantitative      | Number Input     | Integer   | 10                                                           |
| How many supplier relationships were terminated due to environmental impact assessments? | Quantitative      | Number Input     | Integer   | 1                                                            |
| **Detailed Impact Assessment**                               |                   |                  |           |                                                              |
| Please describe the most significant actual environmental impact identified in your supply chain | Open-ended        | Text Area        | String    | "A key supplier was found to be discharging untreated wastewater into local water bodies, affecting aquatic ecosystems" |
| What corrective actions were implemented for suppliers with significant environmental impacts? | Open-ended        | Text Area        | String    | "Implemented water treatment systems, provided environmental training, established monthly monitoring" |
| What is the timeline for suppliers to address identified environmental issues? | Single Choice     | Dropdown         | String    | "6 months"                                                   |
| Do you provide environmental training or capacity building to suppliers? | Yes/No            | Radio Button     | Boolean   | Yes                                                          |
| How do you monitor supplier compliance with environmental requirements? | Multiple Choice   | Checkbox         | Array     | ["Regular audits", "Self-assessment questionnaires", "Third-party monitoring"] |
| **Geographic and Sector Analysis**                           |                   |                  |           |                                                              |
| In which geographic regions do you assess suppliers for environmental impacts? (Select all that apply) | Multiple Choice   | Checkbox         | Array     | ["North America", "Europe", "Asia-Pacific"]                  |
| Which supplier categories/sectors do you prioritize for environmental assessment? (Select all that apply) | Multiple Choice   | Checkbox         | Array     | ["Manufacturing", "Logistics", "Raw materials"]              |
| What percentage of your supply chain (by spend) has been assessed for environmental impacts? | Quantitative      | Number Input (%) | Float     | 85.0                                                         |
| **Risk Management**                                          |                   |                  |           |                                                              |
| Do you have a supplier environmental risk register?          | Yes/No            | Radio Button     | Boolean   | Yes                                                          |
| How do you classify environmental risk levels of suppliers?  | Single Choice     | Dropdown         | String    | "High/Medium/Low risk categories"                            |
| What is your process for managing high environmental risk suppliers? | Open-ended        | Text Area        | String    | "Quarterly assessments, mandatory improvement plans, escalation to senior management" |
| Do you require suppliers to report environmental incidents to your organization? | Yes/No            | Radio Button     | Boolean   | Yes                                                          |
| How many environmental incidents were reported by suppliers during the reporting period? | Quantitative      | Number Input     | Integer   | 3                                                            |
| **Collaboration and Engagement**                             |                   |                  |           |                                                              |
| Do you collaborate with suppliers to improve environmental performance? | Yes/No            | Radio Button     | Boolean   | Yes                                                          |
| What types of collaboration initiatives do you have with suppliers? (Select all that apply) | Multiple Choice   | Checkbox         | Array     | ["Joint sustainability projects", "Knowledge sharing", "Best practice workshops"] |
| Do you provide financial incentives for suppliers to improve environmental performance? | Yes/No            | Radio Button     | Boolean   | No                                                           |
| Do you include environmental performance criteria in supplier contracts? | Yes/No            | Radio Button     | Boolean   | Yes                                                          |
| **Reporting and Transparency**                               |                   |                  |           |                                                              |
| Do you publicly report on supplier environmental performance? | Yes/No            | Radio Button     | Boolean   | Yes                                                          |
| Do you require suppliers to publicly report their environmental performance? | Yes/No            | Radio Button     | Boolean   | No                                                           |
| How do you communicate environmental expectations to suppliers? | Multiple Choice   | Checkbox         | Array     | ["Supplier code of conduct", "Contract clauses", "Training sessions"] |
| **Validation Questions**                                     |                   |                  |           |                                                              |
| Who is responsible for supplier environmental assessments in your organization? | Single Choice     | Dropdown         | String    | "Procurement team with sustainability support"               |
| What is the reporting period for this GRI 308 data?          | Date Range        | Date Picker      | String    | "January 1, 2024 - December 31, 2024"                        |
| Has this data been verified by a third party?                | Yes/No            | Radio Button     | Boolean   | No                                                           |
| Are there any limitations or exclusions in your supplier environmental assessment data? | Open-ended        | Text Area        | String    | "Small suppliers (<$10K annual spend) are excluded from formal assessment" |

# GRI 401 Employment

## Basic Employment Information

| Question                                                   | Question Type  | Input Type   | Data Type  | Example Answer                        |
| ---------------------------------------------------------- | -------------- | ------------ | ---------- | ------------------------------------- |
| What is your organization's name?                          | Identification | Text         | String     | "ABC Corporation"                     |
| What reporting period are you collecting data for?         | Date Range     | Date Picker  | Date Range | "January 1, 2024 - December 31, 2024" |
| In which countries/regions does your organization operate? | Geographic     | Multi-select | Array      | ["United States", "Canada", "Mexico"] |
| What is your organization's primary industry sector?       | Classification | Dropdown     | String     | "Manufacturing"                       |

## Employment Data (401-1: New Employee Hires and Employee Turnover)

| Question                                                     | Question Type | Input Type     | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | -------------- | --------- | ------------------------------------------------------------ |
| How many new employees were hired during the reporting period? | Quantitative  | Number         | Integer   | 150                                                          |
| Please break down new hires by age group: Under 30, 30-50, Over 50 | Demographic   | Number inputs  | Object    | {"under30": 75, "30to50": 60, "over50": 15}                  |
| Please break down new hires by gender (Male, Female, Other/Undisclosed) | Demographic   | Number inputs  | Object    | {"male": 80, "female": 65, "other": 5}                       |
| Please break down new hires by region/country                | Geographic    | Dynamic inputs | Object    | {"USA": 100, "Canada": 30, "Mexico": 20}                     |
| How many employees left the organization during the reporting period? | Quantitative  | Number         | Integer   | 120                                                          |
| Please break down employee departures by age group: Under 30, 30-50, Over 50 | Demographic   | Number inputs  | Object    | {"under30": 50, "30to50": 45, "over50": 25}                  |
| Please break down employee departures by gender (Male, Female, Other/Undisclosed) | Demographic   | Number inputs  | Object    | {"male": 65, "female": 50, "other": 5}                       |
| Please break down employee departures by region/country      | Geographic    | Dynamic inputs | Object    | {"USA": 80, "Canada": 25, "Mexico": 15}                      |
| What was the total number of employees at the end of the reporting period? | Quantitative  | Number         | Integer   | 1250                                                         |
| What methods do you use to track employee turnover?          | Process       | Multi-select   | Array     | ["HR Information System", "Exit Interviews", "Monthly Reports"] |

## Benefits Information (401-2: Benefits Provided to Full-time Employees)

| Question                                                     | Question Type | Input Type     | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | -------------- | --------- | ------------------------------------------------------------ |
| Does your organization provide life insurance to full-time employees? | Benefits      | Yes/No/Partial | String    | "Yes"                                                        |
| Does your organization provide healthcare benefits to full-time employees? | Benefits      | Yes/No/Partial | String    | "Yes"                                                        |
| Does your organization provide disability coverage to full-time employees? | Benefits      | Yes/No/Partial | String    | "Yes"                                                        |
| Does your organization provide retirement provisions/pension plans to full-time employees? | Benefits      | Yes/No/Partial | String    | "Yes"                                                        |
| Does your organization provide stock ownership plans to full-time employees? | Benefits      | Yes/No/Partial | String    | "Partial"                                                    |
| What additional benefits do you provide to full-time employees? | Benefits      | Multi-select   | Array     | ["Flexible working hours", "Professional development", "Wellness programs"] |
| Are these benefits available to part-time employees?         | Benefits      | Yes/No/Varies  | String    | "Varies by benefit type"                                     |
| Are these benefits available to temporary employees?         | Benefits      | Yes/No/Varies  | String    | "No"                                                         |
| Do benefit offerings vary by location/country?               | Benefits      | Yes/No         | Boolean   | true                                                         |
| If benefits vary by location, please specify key differences | Benefits      | Text Area      | String    | "European locations include additional vacation days due to local regulations" |

## Parental Leave (401-3: Parental Leave)

| Question                                                     | Question Type | Input Type    | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ------------- | --------- | ------------------------------------------------------------ |
| How many employees were entitled to parental leave during the reporting period? | Quantitative  | Number inputs | Object    | {"male": 45, "female": 38, "other": 2}                       |
| How many employees took parental leave during the reporting period? | Quantitative  | Number inputs | Object    | {"male": 35, "female": 36, "other": 1}                       |
| How many employees returned to work after parental leave ended? | Quantitative  | Number inputs | Object    | {"male": 32, "female": 34, "other": 1}                       |
| How many employees who returned from parental leave were still employed 12 months later? | Quantitative  | Number inputs | Object    | {"male": 30, "female": 32, "other": 1}                       |
| What is your organization's standard parental leave policy duration? | Policy        | Text Area     | String    | "12 weeks paid leave for primary caregiver, 6 weeks for secondary caregiver" |
| Does parental leave policy differ by gender?                 | Policy        | Yes/No        | Boolean   | false                                                        |
| Does parental leave policy vary by location/country?         | Policy        | Yes/No        | Boolean   | true                                                         |
| What percentage of parental leave is paid?                   | Policy        | Percentage    | Float     | 100.0                                                        |

## Workforce Composition and Context

| Question                                                     | Question Type  | Input Type    | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | -------------- | ------------- | --------- | ------------------------------------------------------------ |
| What is the total workforce size at the end of the reporting period? | Quantitative   | Number        | Integer   | 1250                                                         |
| Please break down your workforce by employment type (Full-time, Part-time, Temporary, Contract) | Classification | Number inputs | Object    | {"fulltime": 1000, "parttime": 150, "temporary": 50, "contract": 50} |
| Please break down your workforce by gender                   | Demographic    | Number inputs | Object    | {"male": 650, "female": 580, "other": 20}                    |
| Please break down your workforce by age group                | Demographic    | Number inputs | Object    | {"under30": 400, "30to50": 650, "over50": 200}               |
| How do you define "significant locations of operation" for reporting purposes? | Definition     | Text Area     | String    | "Locations with more than 100 employees or representing >5% of total workforce" |
| What challenges does your organization face in employment data collection? | Qualitative    | Multi-select  | Array     | ["Data privacy regulations", "Multiple HR systems", "Remote workforce tracking"] |
| How frequently do you collect employment data?               | Process        | Dropdown      | String    | "Monthly"                                                    |
| What systems do you use to track employment data?            | Process        | Multi-select  | Array     | ["SAP SuccessFactors", "Workday", "Custom databases"]        |

## Data Quality and Verification

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | ------------------------------------------------------------ |
| How do you ensure accuracy of employment data?               | Process       | Multi-select | Array     | ["Regular audits", "Cross-system verification", "Manager reviews"] |
| Are there any data limitations or exclusions in your reporting? | Qualitative   | Text Area    | String    | "Joint venture employees excluded; acquired companies included from acquisition date" |
| Who is responsible for employment data collection and verification? | Process       | Text         | String    | "HR Analytics team with oversight from Chief People Officer" |
| Have you had your employment data externally verified?       | Verification  | Yes/No       | Boolean   | true                                                         |
| What methodology do you use to calculate turnover rates?     | Methodology   | Dropdown     | String    | "Average of beginning and ending headcount"                  |

# GRI 402: Labor/Management Relations

## Disclosure 402-1: Minimum notice periods regarding operational changes

| Question                                                     | Question Type           | Input Type            | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ----------------------- | --------------------- | ---------------- | ------------------------------------------------------------ |
| What is the minimum notice period your organization provides to employees before implementing significant operational changes? | Open-ended              | Text input            | String           | "30 days written notice for organizational restructuring, 60 days for facility closures" |
| Does your organization have different notice periods for different types of operational changes? | Yes/No with follow-up   | Radio buttons + Text  | Boolean + String | "Yes - 14 days for schedule changes, 30 days for role changes, 90 days for layoffs" |
| Are minimum notice periods specified in collective bargaining agreements? | Yes/No with follow-up   | Radio buttons + Text  | Boolean + String | "Yes - CBA requires 45 days notice for any workforce reduction affecting union members" |
| What types of operational changes does your organization consider significant enough to require employee notification? | Multiple choice + Other | Checkboxes + Text     | Array + String   | "Layoffs, facility closures, major restructuring, technology implementations, shift schedule changes" |
| How does your organization communicate operational changes to employees? | Multiple choice + Other | Checkboxes + Text     | Array + String   | "Email notifications, town halls, direct supervisor meetings, union representatives" |
| Are there different notice requirements for different employee categories (union vs non-union, management vs staff)? | Yes/No with details     | Radio buttons + Text  | Boolean + String | "Yes - Union employees: 60 days, Management: 30 days, Contract workers: 14 days" |
| In which countries/jurisdictions does your organization operate, and do local laws require specific notice periods? | Geographic + Legal      | Text input + Dropdown | String + Array   | "USA (WARN Act - 60 days), Germany (3 months), Canada (varies by province)" |
| Has your organization had any instances in the past reporting period where shorter notice was provided than policy requires? | Yes/No with explanation | Radio buttons + Text  | Boolean + String | "No instances of non-compliance with notice requirements"    |
| What is the shortest notice period your organization has provided for operational changes in the past year? | Quantitative            | Number input + Text   | Integer + String | "7 days for emergency facility closure due to safety concerns" |
| Does your organization provide notice periods longer than legally required? | Yes/No with details     | Radio buttons + Text  | Boolean + String | "Yes - we provide 90 days notice while local law only requires 30 days" |

## Employee Representation and Consultation

| Question                                                     | Question Type                   | Input Type                | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ------------------------------- | ------------------------- | ---------------- | ------------------------------------------------------------ |
| What percentage of your workforce is covered by collective bargaining agreements? | Quantitative                    | Number input (percentage) | Float            | "67% of employees are covered by collective bargaining agreements" |
| How many labor unions or employee representative bodies operate within your organization? | Quantitative                    | Number input              | Integer          | "3 unions: Manufacturing Workers Union, Technical Staff Association, Management Union" |
| What formal consultation processes exist between management and employee representatives? | Open-ended                      | Text area                 | String           | "Monthly joint committee meetings, quarterly strategic planning sessions, annual contract negotiations" |
| Are there employee representatives on your organization's board of directors or management committees? | Yes/No with details             | Radio buttons + Text      | Boolean + String | "Yes - 2 employee representatives sit on the supervisory board" |
| How often does management meet with employee representatives to discuss operational matters? | Frequency                       | Dropdown + Number         | String + Integer | "Monthly scheduled meetings plus ad-hoc meetings as needed"  |
| What topics are typically discussed in labor-management meetings? | Multiple choice + Other         | Checkboxes + Text         | Array + String   | "Workplace safety, operational changes, compensation, training programs, working conditions" |
| Does your organization have a formal dispute resolution process for labor-management issues? | Yes/No with process description | Radio buttons + Text      | Boolean + String | "Yes - 3-step grievance process: direct supervisor, HR review, external arbitration" |
| How many formal grievances or disputes were filed by employee representatives in the past year? | Quantitative with categories    | Number input + Text       | Integer + String | "12 grievances filed: 5 resolved at supervisor level, 4 at HR level, 3 went to arbitration" |
| What mechanisms exist for employees to provide feedback on proposed operational changes? | Multiple choice + Other         | Checkboxes + Text         | Array + String   | "Employee surveys, focus groups, suggestion boxes, union representative feedback" |
| Are employee representatives involved in strategic planning processes? | Yes/No with details             | Radio buttons + Text      | Boolean + String | "Yes - union representatives participate in annual strategic planning workshops" |

## Operational Changes Impact Assessment

| Question                                                     | Question Type               | Input Type                | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | --------------------------- | ------------------------- | ---------------- | ------------------------------------------------------------ |
| What types of operational changes has your organization implemented in the past year? | Multiple choice + Other     | Checkboxes + Text         | Array + String   | "Technology upgrades, facility consolidation, new product line launch, remote work policy implementation" |
| How many employees were affected by operational changes in the past reporting period? | Quantitative with breakdown | Number input + Text       | Integer + String | "450 employees affected: 200 relocated, 150 retrained, 100 role changes" |
| What is your organization's process for assessing the impact of operational changes on employees? | Process description         | Text area                 | String           | "Impact assessment committee reviews all changes affecting >10 employees, includes HR, operations, and employee representative" |
| How far in advance does your organization typically begin planning for major operational changes? | Time period                 | Number input + Dropdown   | Integer + String | "6-12 months advance planning for major changes like facility moves or system implementations" |
| What support does your organization provide to employees affected by operational changes? | Multiple choice + Other     | Checkboxes + Text         | Array + String   | "Retraining programs, relocation assistance, career counseling, temporary income support" |
| Has your organization conducted any workforce reductions in the past year? | Yes/No with details         | Radio buttons + Text      | Boolean + String | "Yes - 50 positions eliminated through voluntary early retirement program" |
| What criteria does your organization use to determine when employee consultation is required for operational changes? | Criteria list               | Text area                 | String           | "Changes affecting >5% of workforce, facility closures, major technology changes, policy modifications" |
| How does your organization measure employee satisfaction with the change management process? | Measurement methods         | Multiple choice + Text    | Array + String   | "Post-change surveys, focus groups, retention rates, grievance tracking" |
| What percentage of planned operational changes in the past year were modified based on employee feedback? | Quantitative                | Number input (percentage) | Float            | "35% of proposed changes were modified based on employee and union input" |
| Does your organization have a formal change management policy or framework? | Yes/No with description     | Radio buttons + Text      | Boolean + String | "Yes - follows ADKAR change management methodology with mandatory employee consultation steps" |

## Collective Bargaining and Agreements

| Question                                                     | Question Type           | Input Type               | Data Type               | Example Answer                                               |
| ------------------------------------------------------------ | ----------------------- | ------------------------ | ----------------------- | ------------------------------------------------------------ |
| How many collective bargaining agreements is your organization currently party to? | Quantitative            | Number input             | Integer                 | "5 active collective bargaining agreements covering different employee groups" |
| When do your current collective bargaining agreements expire? | Date information        | Date inputs + Text       | Array of Dates + String | "Manufacturing: Dec 2024, Office staff: June 2025, Maintenance: March 2026" |
| What is the average duration of your collective bargaining agreements? | Time period             | Number input + Dropdown  | Integer + String        | "3 years average duration with option for 1-year extensions" |
| How many employees are covered under each collective bargaining agreement? | Quantitative breakdown  | Text area with structure | String                  | "Manufacturing CBA: 850 employees, Office CBA: 200 employees, Maintenance CBA: 75 employees" |
| What key topics are typically covered in your collective bargaining agreements? | Multiple choice + Other | Checkboxes + Text        | Array + String          | "Wages, benefits, working hours, overtime, safety procedures, grievance processes, notice periods" |
| Has your organization experienced any work stoppages or strikes in the past year? | Yes/No with details     | Radio buttons + Text     | Boolean + String        | "No work stoppages in the past year"                         |
| What is your organization's approach to collective bargaining negotiations? | Approach description    | Text area                | String                  | "Interest-based bargaining approach focusing on mutual gains and collaborative problem-solving" |
| How often does your organization renegotiate collective bargaining agreements? | Frequency               | Dropdown + Text          | String                  | "Every 3 years according to contract terms, with annual wage reopeners" |
| What role do employee representatives play in workplace health and safety committees? | Role description        | Text area                | String                  | "Union representatives chair joint health & safety committees, conduct workplace inspections, investigate incidents" |
| Are there any pending labor disputes or negotiations currently ongoing? | Yes/No with status      | Radio buttons + Text     | Boolean + String        | "Yes - currently in negotiations for manufacturing contract renewal, mediation scheduled for next month" |

# GRI 403 Occupational Health and Safety

## Management Approach Questions

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Does your organization have a formal occupational health and safety management system? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| Which occupational health and safety standards does your organization follow? (e.g., ISO 45001, OHSAS 18001) | Multiple Choice | Checkbox     | Array     | ["ISO 45001", "Local regulations", "Industry-specific standards"] |
| Who is responsible for occupational health and safety governance in your organization? | Open Text       | Text Area    | String    | "Chief Safety Officer reports directly to CEO with dedicated H&S committee" |
| How often does senior management review health and safety performance? | Multiple Choice | Dropdown     | String    | "Monthly"                                                    |

## Worker Representation and Participation (403-1)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Do you have formal joint management-worker health and safety committees? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What percentage of your workforce is represented by formal health and safety committees? | Numerical       | Number Input | Float     | 85.5                                                         |
| How are worker representatives selected for health and safety committees? | Open Text       | Text Area    | String    | "Elected by peers in each department with 2-year terms"      |
| How frequently do health and safety committees meet?         | Multiple Choice | Dropdown     | String    | "Monthly"                                                    |
| What authority do worker representatives have in health and safety decisions? | Open Text       | Text Area    | String    | "Authority to halt unsafe work, participate in incident investigations, approve safety procedures" |

## Hazard Identification and Risk Assessment (403-2)

| Question                                                     | Question Type   | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ---------- | --------- | ------------------------------------------------------------ |
| What processes do you use to identify work-related hazards?  | Multiple Choice | Checkbox   | Array     | ["Job safety analysis", "Regular workplace inspections", "Worker reporting systems"] |
| How do workers report health and safety hazards or unsafe situations? | Multiple Choice | Checkbox   | Array     | ["Anonymous reporting system", "Direct supervisor reporting", "Safety app/portal"] |
| How often do you conduct formal risk assessments?            | Multiple Choice | Dropdown   | String    | "Annually for all areas, immediately for new processes"      |
| What methodology do you use for risk assessment?             | Open Text       | Text Input | String    | "Risk matrix (5x5) considering probability and severity"     |
| How do you ensure worker participation in hazard identification? | Open Text       | Text Area  | String    | "Monthly safety walks with worker participation, suggestion systems, safety meetings" |

## Occupational Health Services (403-3)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Do you provide occupational health services to workers?      | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What types of occupational health services do you provide?   | Multiple Choice | Checkbox     | Array     | ["On-site medical clinic", "Health screenings", "Fitness for duty assessments", "Mental health support"] |
| Are occupational health services provided by internal staff or external providers? | Multiple Choice | Radio Button | String    | "Both internal and external"                                 |
| What qualifications do your occupational health professionals have? | Open Text       | Text Area    | String    | "Licensed occupational physicians, certified occupational health nurses, industrial hygienists" |
| How do you protect the confidentiality of worker health information? | Open Text       | Text Area    | String    | "HIPAA compliance, separate medical records system, limited access protocols" |

## Worker Training (403-5)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| What health and safety training do you provide to workers?   | Multiple Choice | Checkbox     | Array     | ["General safety orientation", "Job-specific training", "Emergency procedures", "Equipment-specific training"] |
| How many hours of health and safety training does each new worker receive? | Numerical       | Number Input | Integer   | 40                                                           |
| How frequently do you provide refresher training?            | Multiple Choice | Dropdown     | String    | "Annually"                                                   |
| How do you track and document training completion?           | Open Text       | Text Input   | String    | "Learning management system with completion certificates"    |
| What percentage of your workforce completed required safety training in the reporting period? | Numerical       | Number Input | Float     | 98.5                                                         |

## Worker Health Promotion (403-6)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Do you have programs to promote worker health beyond occupational safety? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What health promotion services do you offer?                 | Multiple Choice | Checkbox     | Array     | ["Wellness programs", "Health screenings", "Vaccination programs", "Mental health support"] |
| How do you facilitate worker access to healthcare services?  | Open Text       | Text Area    | String    | "On-site clinic, health insurance, partnerships with local healthcare providers" |
| What percentage of eligible workers participated in health promotion programs? | Numerical       | Number Input | Float     | 67.3                                                         |

## Injury and Illness Prevention (403-7)

| Question                                                     | Question Type   | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ---------- | --------- | ------------------------------------------------------------ |
| How do you prevent work-related injuries and ill health?     | Open Text       | Text Area  | String    | "Comprehensive safety management system, regular training, hazard controls, safety culture initiatives" |
| What controls do you use to eliminate or minimize health and safety risks? | Multiple Choice | Checkbox   | Array     | ["Engineering controls", "Administrative controls", "Personal protective equipment", "Job rotation"] |
| How do you prioritize risk control measures?                 | Open Text       | Text Area  | String    | "Hierarchy of controls: elimination, substitution, engineering, administrative, PPE" |

## Work-Related Injuries (403-9)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| How many recordable work-related injuries occurred in the reporting period? | Numerical       | Number Input | Integer   | 15                                                           |
| How many work-related fatalities occurred in the reporting period? | Numerical       | Number Input | Integer   | 0                                                            |
| How many high-consequence work-related injuries occurred?    | Numerical       | Number Input | Integer   | 2                                                            |
| What was the rate of recordable work-related injuries per 200,000 hours worked? | Numerical       | Number Input | Float     | 1.2                                                          |
| What were the main types of work-related injuries?           | Multiple Choice | Checkbox     | Array     | ["Cuts/lacerations", "Sprains/strains", "Burns", "Eye injuries"] |
| How many hours did all workers work during the reporting period? | Numerical       | Number Input | Integer   | 2500000                                                      |

## Work-Related Ill Health (403-10)

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| How many cases of recordable work-related ill health occurred? | Numerical       | Number Input | Integer   | 3                                                            |
| How many work-related fatalities from ill health occurred?   | Numerical       | Number Input | Integer   | 0                                                            |
| What were the main types of work-related ill health?         | Multiple Choice | Checkbox     | Array     | ["Respiratory conditions", "Skin conditions", "Musculoskeletal disorders", "Hearing loss"] |
| What was the rate of recordable work-related ill health per 200,000 hours worked? | Numerical       | Number Input | Float     | 0.24                                                         |
| How do you identify and track work-related ill health cases? | Open Text       | Text Area    | String    | "Medical surveillance programs, worker reporting, occupational health assessments" |

## Contractor and Visitor Safety

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | ------------------------------------------------------------ |
| How do you ensure contractor compliance with health and safety requirements? | Open Text     | Text Area    | String    | "Pre-qualification process, safety orientation, regular audits, performance monitoring" |
| Do you include contractors in your injury and illness statistics? | Yes/No        | Radio Button | Boolean   | Yes                                                          |
| How many contractor injuries occurred in the reporting period? | Numerical     | Number Input | Integer   | 2                                                            |
| What safety requirements do you have for visitors?           | Open Text     | Text Area    | String    | "Safety briefing, escort requirements, PPE provision, restricted access areas" |

## Emergency Preparedness

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| Do you have emergency response procedures for all work locations? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| How often do you conduct emergency drills?                   | Multiple Choice | Dropdown     | String    | "Quarterly"                                                  |
| What types of emergencies are covered in your response plans? | Multiple Choice | Checkbox     | Array     | ["Fire", "Chemical spill", "Medical emergency", "Natural disasters", "Security incidents"] |
| How do you communicate emergency procedures to workers?      | Multiple Choice | Checkbox     | Array     | ["Training sessions", "Posted procedures", "Digital communications", "Regular drills"] |

## Performance Monitoring

| Question                                                     | Question Type   | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ---------- | --------- | ------------------------------------------------------------ |
| What key performance indicators do you use to monitor health and safety performance? | Multiple Choice | Checkbox   | Array     | ["Injury rates", "Near miss reporting", "Training completion", "Audit scores"] |
| How frequently do you review health and safety performance data? | Multiple Choice | Dropdown   | String    | "Monthly"                                                    |
| What targets have you set for health and safety performance improvement? | Open Text       | Text Area  | String    | "Zero fatalities, 10% reduction in injury rate, 95% training completion rate" |
| How do you benchmark your performance against industry standards? | Open Text       | Text Area  | String    | "Industry association data, peer company comparisons, regulatory benchmarks" |

# GRI 404 Training and Education

## Core Training Hours and Programs

| Question                                                     | Question Type     | Input Type       | Data Type | Example Answer |
| ------------------------------------------------------------ | ----------------- | ---------------- | --------- | -------------- |
| What is the total number of training hours provided to all employees during the reporting period? | Quantitative      | Number input     | Integer   | 15,240         |
| How many total employees received training during the reporting period? | Quantitative      | Number input     | Integer   | 1,250          |
| What is the average number of training hours per employee?   | Calculated/Manual | Number input     | Decimal   | 12.2           |
| How many formal training programs does your organization offer? | Quantitative      | Number input     | Integer   | 25             |
| What percentage of your workforce participated in training programs? | Calculated/Manual | Percentage input | Decimal   | 85.3           |

## Training Hours by Employee Category

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | -------------- |
| How many training hours were provided to senior management/executives? | Quantitative  | Number input | Integer   | 480            |
| How many training hours were provided to middle management?  | Quantitative  | Number input | Integer   | 1,920          |
| How many training hours were provided to supervisory staff?  | Quantitative  | Number input | Integer   | 2,400          |
| How many training hours were provided to non-management employees? | Quantitative  | Number input | Integer   | 10,440         |
| How many training hours were provided to temporary/contract workers? | Quantitative  | Number input | Integer   | 320            |

## Training Hours by Gender

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | -------------- |
| How many training hours were provided to male employees?     | Quantitative  | Number input | Integer   | 8,640          |
| How many training hours were provided to female employees?   | Quantitative  | Number input | Integer   | 6,240          |
| How many training hours were provided to employees of other/non-binary gender identities? | Quantitative  | Number input | Integer   | 360            |

## Types of Training Programs

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| What types of training programs do you offer? (Select all that apply) | Multiple Choice | Checkbox     | Array     | ["Technical skills", "Leadership development", "Compliance training", "Safety training"] |
| How many hours were dedicated to technical/job-specific skills training? | Quantitative    | Number input | Integer   | 6,200                                                        |
| How many hours were dedicated to leadership and management development? | Quantitative    | Number input | Integer   | 2,100                                                        |
| How many hours were dedicated to compliance and ethics training? | Quantitative    | Number input | Integer   | 3,400                                                        |
| How many hours were dedicated to health and safety training? | Quantitative    | Number input | Integer   | 2,800                                                        |
| How many hours were dedicated to diversity, equity, and inclusion training? | Quantitative    | Number input | Integer   | 740                                                          |

## Training Delivery Methods

| Question                                                     | Question Type   | Input Type       | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ---------------- | --------- | ------------------------------------------------------------ |
| What training delivery methods does your organization use? (Select all that apply) | Multiple Choice | Checkbox         | Array     | ["In-person classroom", "Online/e-learning", "On-the-job training", "External workshops"] |
| What percentage of training was delivered through in-person/classroom sessions? | Quantitative    | Percentage input | Decimal   | 35.0                                                         |
| What percentage of training was delivered through online/digital platforms? | Quantitative    | Percentage input | Decimal   | 45.0                                                         |
| What percentage of training was delivered through on-the-job/mentoring programs? | Quantitative    | Percentage input | Decimal   | 15.0                                                         |
| What percentage of training was delivered through external providers/workshops? | Quantitative    | Percentage input | Decimal   | 5.0                                                          |

## Performance and Career Development

| Question                                                     | Question Type     | Input Type       | Data Type | Example Answer |
| ------------------------------------------------------------ | ----------------- | ---------------- | --------- | -------------- |
| How many employees received formal performance reviews during the reporting period? | Quantitative      | Number input     | Integer   | 1,180          |
| What percentage of employees received regular performance and career development reviews? | Calculated/Manual | Percentage input | Decimal   | 94.4           |
| How many employees participated in career development programs? | Quantitative      | Number input     | Integer   | 420            |
| How many internal promotions occurred during the reporting period? | Quantitative      | Number input     | Integer   | 85             |
| What percentage of leadership positions were filled internally? | Calculated/Manual | Percentage input | Decimal   | 72.0           |

## Performance Reviews by Employee Category

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | -------------- |
| How many senior management employees received performance reviews? | Quantitative  | Number input | Integer   | 25             |
| How many middle management employees received performance reviews? | Quantitative  | Number input | Integer   | 120            |
| How many supervisory staff received performance reviews?     | Quantitative  | Number input | Integer   | 180            |
| How many non-management employees received performance reviews? | Quantitative  | Number input | Integer   | 855            |

## Performance Reviews by Gender

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | -------------- |
| How many male employees received performance reviews?        | Quantitative  | Number input | Integer   | 672            |
| How many female employees received performance reviews?      | Quantitative  | Number input | Integer   | 484            |
| How many employees of other/non-binary gender identities received performance reviews? | Quantitative  | Number input | Integer   | 24             |

## Skills Development and Competency

| Question                                                     | Question Type | Input Type     | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | -------------- | --------- | -------------- |
| Does your organization have a formal skills assessment and development program? | Yes/No        | Radio button   | Boolean   | Yes            |
| How many employees participated in skills gap analysis during the reporting period? | Quantitative  | Number input   | Integer   | 890            |
| What is the average training budget per employee?            | Quantitative  | Currency input | Decimal   | 1,250.00       |
| How many employees received certifications or qualifications through company-sponsored training? | Quantitative  | Number input   | Integer   | 156            |

## Training Effectiveness and Outcomes

| Question                                                     | Question Type   | Input Type       | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ---------------- | --------- | ------------------------------------------------------------ |
| How do you measure training effectiveness? (Select all that apply) | Multiple Choice | Checkbox         | Array     | ["Post-training assessments", "Performance metrics", "Employee feedback", "Business impact measures"] |
| What percentage of employees passed post-training assessments? | Quantitative    | Percentage input | Decimal   | 87.5                                                         |
| How many employees reported improved job performance following training? | Quantitative    | Number input     | Integer   | 945                                                          |
| What is the average employee satisfaction score for training programs? (1-10 scale) | Quantitative    | Number input     | Decimal   | 7.8                                                          |

## Apprenticeships and Internships

| Question                                                     | Question Type     | Input Type       | Data Type | Example Answer |
| ------------------------------------------------------------ | ----------------- | ---------------- | --------- | -------------- |
| How many apprenticeship programs does your organization offer? | Quantitative      | Number input     | Integer   | 5              |
| How many apprentices are currently enrolled in your programs? | Quantitative      | Number input     | Integer   | 35             |
| How many internship positions were provided during the reporting period? | Quantitative      | Number input     | Integer   | 28             |
| What percentage of interns were offered permanent positions? | Calculated/Manual | Percentage input | Decimal   | 64.3           |

## Succession Planning and Leadership Development

| Question                                                     | Question Type | Input Type       | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ---------------- | --------- | -------------- |
| Does your organization have a formal succession planning program? | Yes/No        | Radio button     | Boolean   | Yes            |
| How many employees are identified as high-potential talent?  | Quantitative  | Number input     | Integer   | 125            |
| How many employees participated in leadership development programs? | Quantitative  | Number input     | Integer   | 78             |
| What percentage of critical positions have identified successors? | Quantitative  | Percentage input | Decimal   | 82.0           |

## Training Investment and Resources

| Question                                                     | Question Type     | Input Type       | Data Type | Example Answer |
| ------------------------------------------------------------ | ----------------- | ---------------- | --------- | -------------- |
| What was the total training budget for the reporting period? | Quantitative      | Currency input   | Decimal   | 1,562,500.00   |
| How many internal trainers/facilitators does your organization employ? | Quantitative      | Number input     | Integer   | 12             |
| How many external training providers did you work with?      | Quantitative      | Number input     | Integer   | 8              |
| What percentage of training budget was spent on external providers? | Calculated/Manual | Percentage input | Decimal   | 35.0           |

## Digital Learning and Innovation

| Question                                                     | Question Type | Input Type       | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ---------------- | --------- | -------------- |
| Does your organization use a Learning Management System (LMS)? | Yes/No        | Radio button     | Boolean   | Yes            |
| How many online courses are available to employees?          | Quantitative  | Number input     | Integer   | 147            |
| What percentage of employees actively use digital learning platforms? | Quantitative  | Percentage input | Decimal   | 78.5           |
| How many microlearning modules were completed during the reporting period? | Quantitative  | Number input     | Integer   | 4,250          |

# GRI 405 Diversity and Equal Opportunity

## Organizational Context Questions

| Question                                                     | Question Type  | Input Type            | Data Type        | Example Answer                              |
| ------------------------------------------------------------ | -------------- | --------------------- | ---------------- | ------------------------------------------- |
| What is your organization's total number of employees?       | Quantitative   | Number input          | Integer          | 2,500                                       |
| What reporting period are you collecting data for?           | Administrative | Date range picker     | Date range       | January 1, 2024 - December 31, 2024         |
| Which geographical regions does your organization operate in? | Categorical    | Multi-select dropdown | Array of strings | ["North America", "Europe", "Asia-Pacific"] |
| Does your organization have a formal diversity and inclusion policy? | Yes/No         | Radio buttons         | Boolean          | Yes                                         |

## Employee Demographics by Gender (405-1a)

| Question                                                | Question Type | Input Type   | Data Type | Example Answer |
| ------------------------------------------------------- | ------------- | ------------ | --------- | -------------- |
| How many employees identify as male?                    | Quantitative  | Number input | Integer   | 1,200          |
| How many employees identify as female?                  | Quantitative  | Number input | Integer   | 1,150          |
| How many employees identify as non-binary/other gender? | Quantitative  | Number input | Integer   | 25             |
| How many employees prefer not to disclose their gender? | Quantitative  | Number input | Integer   | 125            |

## Employee Demographics by Age Group (405-1a)

| Question                                   | Question Type | Input Type   | Data Type | Example Answer |
| ------------------------------------------ | ------------- | ------------ | --------- | -------------- |
| How many employees are under 30 years old? | Quantitative  | Number input | Integer   | 750            |
| How many employees are 30-50 years old?    | Quantitative  | Number input | Integer   | 1,400          |
| How many employees are over 50 years old?  | Quantitative  | Number input | Integer   | 350            |

## Governance Body Demographics by Gender (405-1b)

| Question                                                     | Question Type | Input Type   | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ------------ | --------- | -------------- |
| How many governance body members identify as male?           | Quantitative  | Number input | Integer   | 6              |
| How many governance body members identify as female?         | Quantitative  | Number input | Integer   | 4              |
| How many governance body members identify as non-binary/other gender? | Quantitative  | Number input | Integer   | 0              |
| How many governance body members prefer not to disclose their gender? | Quantitative  | Number input | Integer   | 0              |

## Governance Body Demographics by Age Group (405-1b)

| Question                                                 | Question Type | Input Type   | Data Type | Example Answer |
| -------------------------------------------------------- | ------------- | ------------ | --------- | -------------- |
| How many governance body members are under 30 years old? | Quantitative  | Number input | Integer   | 0              |
| How many governance body members are 30-50 years old?    | Quantitative  | Number input | Integer   | 4              |
| How many governance body members are over 50 years old?  | Quantitative  | Number input | Integer   | 6              |

## Additional Diversity Categories (Optional but Recommended)

| Question                                                     | Question Type | Input Type    | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ------------- | --------- | -------------- |
| Does your organization track ethnicity/race data for employees? | Yes/No        | Radio buttons | Boolean   | Yes            |
| If yes, how many employees identify as White/Caucasian?      | Quantitative  | Number input  | Integer   | 1,200          |
| How many employees identify as Black/African American?       | Quantitative  | Number input  | Integer   | 300            |
| How many employees identify as Hispanic/Latino?              | Quantitative  | Number input  | Integer   | 400            |
| How many employees identify as Asian?                        | Quantitative  | Number input  | Integer   | 450            |
| How many employees identify as Native American/Indigenous?   | Quantitative  | Number input  | Integer   | 25             |
| How many employees identify as Other/Mixed race?             | Quantitative  | Number input  | Integer   | 125            |
| Does your organization track disability status for employees? | Yes/No        | Radio buttons | Boolean   | Yes            |
| If yes, how many employees have disclosed having a disability? | Quantitative  | Number input  | Integer   | 150            |

## Compensation Equity Analysis (405-2)

| Question                                                     | Question Type | Input Type    | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | ------------- | --------- | -------------- |
| What is the ratio of basic salary of women to men for non-management roles? | Quantitative  | Decimal input | Float     | 0.98           |
| What is the ratio of basic salary of women to men for junior management roles? | Quantitative  | Decimal input | Float     | 0.95           |
| What is the ratio of basic salary of women to men for senior management roles? | Quantitative  | Decimal input | Float     | 0.92           |
| What is the ratio of basic salary of women to men for top management roles? | Quantitative  | Decimal input | Float     | 0.89           |
| What is the ratio of total remuneration of women to men for non-management roles? | Quantitative  | Decimal input | Float     | 0.97           |
| What is the ratio of total remuneration of women to men for junior management roles? | Quantitative  | Decimal input | Float     | 0.94           |
| What is the ratio of total remuneration of women to men for senior management roles? | Quantitative  | Decimal input | Float     | 0.91           |
| What is the ratio of total remuneration of women to men for top management roles? | Quantitative  | Decimal input | Float     | 0.87           |

## Employee Categories and Levels

| Question                                                     | Question Type | Input Type    | Data Type        | Example Answer                                          |
| ------------------------------------------------------------ | ------------- | ------------- | ---------------- | ------------------------------------------------------- |
| How do you categorize employee levels in your organization?  | Open-ended    | Text area     | String           | "Entry-level, Mid-level, Senior, Management, Executive" |
| How many employee categories do you use for diversity reporting? | Quantitative  | Number input  | Integer          | 5                                                       |
| Do you track diversity data by department or business unit?  | Yes/No        | Radio buttons | Boolean          | Yes                                                     |
| If yes, which departments/units do you track separately?     | Open-ended    | Text area     | Array of strings | ["Engineering", "Sales", "Marketing", "HR", "Finance"]  |

## Data Collection and Verification

| Question                                                     | Question Type | Input Type            | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | --------------------- | ---------------- | ------------------------------------------------------------ |
| How does your organization collect employee demographic data? | Categorical   | Multi-select dropdown | Array of strings | ["Self-identification surveys", "HR records", "Voluntary disclosure"] |
| How frequently is this demographic data updated?             | Categorical   | Dropdown              | String           | "Annually"                                                   |
| What is your organization's response rate for voluntary demographic surveys? | Quantitative  | Percentage input      | Float            | 85.5                                                         |
| Do you have third-party verification of your diversity data? | Yes/No        | Radio buttons         | Boolean          | No                                                           |

## Context and Explanatory Information

| Question                                                     | Question Type | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ---------- | --------- | ------------------------------------------------------------ |
| Are there any significant changes in diversity composition compared to the previous reporting period? | Open-ended    | Text area  | String    | "Increased female representation in senior management by 15%" |
| What diversity and inclusion initiatives were implemented during this reporting period? | Open-ended    | Text area  | String    | "Unconscious bias training, mentorship programs, diverse hiring practices" |
| Are there any legal or cultural factors that limit diversity data collection in your operating regions? | Open-ended    | Text area  | String    | "Some European locations have restrictions on collecting ethnic data" |
| What challenges does your organization face in improving diversity and equal opportunity? | Open-ended    | Text area  | String    | "Limited diverse talent pipeline in technical roles, geographic constraints" |

## Data Quality and Completeness

| Question                                                     | Question Type | Input Type       | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | ---------------- | --------- | ------------------------------------------------------------ |
| What percentage of employees have provided complete demographic information? | Quantitative  | Percentage input | Float     | 92.3                                                         |
| Are there any data gaps or limitations in your diversity reporting? | Open-ended    | Text area        | String    | "Some remote workers haven't completed demographic surveys"  |
| How do you handle employees who prefer not to disclose demographic information? | Open-ended    | Text area        | String    | "Counted separately as 'prefer not to say' category"         |
| What steps are taken to ensure data privacy and confidentiality? | Open-ended    | Text area        | String    | "Anonymized reporting, secure data storage, limited access controls" |

# GRI 406 Non-discrimination 

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| **Policy and Governance**                                    |                 |              |           |                                                              |
| Does your organization have a formal non-discrimination policy? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What protected characteristics does your non-discrimination policy cover? | Multiple Choice | Checkbox     | Array     | ["Race", "Gender", "Age", "Religion", "Sexual orientation", "Disability"] |
| Who is responsible for overseeing non-discrimination compliance in your organization? | Open-ended      | Text Area    | String    | "Chief Human Resources Officer and Diversity & Inclusion Committee" |
| How frequently is your non-discrimination policy reviewed and updated? | Single Choice   | Dropdown     | String    | "Annually"                                                   |
| Are managers and employees trained on non-discrimination policies? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What is the frequency of non-discrimination training?        | Single Choice   | Dropdown     | String    | "Annual mandatory training for all employees"                |
| **Incident Reporting and Management**                        |                 |              |           |                                                              |
| How many discrimination incidents were reported during the reporting period? | Numerical       | Number Input | Integer   | 12                                                           |
| How many discrimination incidents were investigated during the reporting period? | Numerical       | Number Input | Integer   | 12                                                           |
| How many discrimination incidents were resolved during the reporting period? | Numerical       | Number Input | Integer   | 10                                                           |
| What types of discrimination were reported? (by category)    | Multiple Choice | Checkbox     | Array     | ["Gender discrimination", "Racial discrimination", "Age discrimination"] |
| How many incidents involved employees?                       | Numerical       | Number Input | Integer   | 8                                                            |
| How many incidents involved customers/clients?               | Numerical       | Number Input | Integer   | 2                                                            |
| How many incidents involved suppliers/business partners?     | Numerical       | Number Input | Integer   | 2                                                            |
| What was the average time to resolve discrimination incidents? | Numerical       | Number Input | Float     | 45.5                                                         |
| **Incident Breakdown by Protected Characteristics**          |                 |              |           |                                                              |
| Number of incidents related to race/ethnicity discrimination | Numerical       | Number Input | Integer   | 3                                                            |
| Number of incidents related to gender discrimination         | Numerical       | Number Input | Integer   | 4                                                            |
| Number of incidents related to age discrimination            | Numerical       | Number Input | Integer   | 2                                                            |
| Number of incidents related to religion/belief discrimination | Numerical       | Number Input | Integer   | 1                                                            |
| Number of incidents related to sexual orientation discrimination | Numerical       | Number Input | Integer   | 1                                                            |
| Number of incidents related to disability discrimination     | Numerical       | Number Input | Integer   | 1                                                            |
| Number of incidents related to other characteristics         | Numerical       | Number Input | Integer   | 0                                                            |
| **Remedial Actions and Outcomes**                            |                 |              |           |                                                              |
| What remedial actions were taken for substantiated incidents? | Multiple Choice | Checkbox     | Array     | ["Employee counseling", "Policy revision", "Additional training", "Disciplinary action"] |
| How many employees received disciplinary action for discrimination? | Numerical       | Number Input | Integer   | 3                                                            |
| How many employees were terminated due to discrimination violations? | Numerical       | Number Input | Integer   | 1                                                            |
| What compensation or remedies were provided to affected parties? | Open-ended      | Text Area    | String    | "Reinstatement, back pay, and formal apology provided in 2 cases" |
| **Reporting Mechanisms**                                     |                 |              |           |                                                              |
| What channels are available for reporting discrimination?    | Multiple Choice | Checkbox     | Array     | ["Anonymous hotline", "Online portal", "Direct supervisor", "HR department", "Ethics office"] |
| Is anonymous reporting available?                            | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| Are third-party reporting mechanisms available?              | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| How is confidentiality maintained in the reporting process?  | Open-ended      | Text Area    | String    | "All reports handled by independent ethics office with strict confidentiality protocols" |
| **Prevention and Monitoring**                                |                 |              |           |                                                              |
| What proactive measures are in place to prevent discrimination? | Multiple Choice | Checkbox     | Array     | ["Regular bias training", "Diverse hiring panels", "Pay equity audits", "Inclusive leadership development"] |
| How do you monitor for potential discrimination in hiring practices? | Open-ended      | Text Area    | String    | "Regular analysis of hiring data by demographics and external diversity audits" |
| How do you monitor for potential discrimination in promotion practices? | Open-ended      | Text Area    | String    | "Annual review of promotion rates by demographic groups and bias-free promotion criteria" |
| How do you monitor for potential discrimination in compensation? | Open-ended      | Text Area    | String    | "Annual pay equity analysis across all demographic groups and job levels" |
| **Stakeholder Engagement**                                   |                 |              |           |                                                              |
| Do you engage with external organizations on non-discrimination issues? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| Which external organizations do you work with on discrimination prevention? | Open-ended      | Text Area    | String    | "National Association for the Advancement of Colored People, Human Rights Campaign, local disability advocacy groups" |
| Do you participate in industry initiatives related to non-discrimination? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| **Impact Assessment**                                        |                 |              |           |                                                              |
| Have you conducted impact assessments on your non-discrimination practices? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| What were the key findings from your most recent assessment? | Open-ended      | Text Area    | String    | "Identified need for improved accessibility accommodations and enhanced bias training for middle management" |
| What improvements have been implemented based on assessments? | Open-ended      | Text Area    | String    | "Implemented new accessibility features, revised recruitment processes, and enhanced manager training programs" |
| **Legal and Regulatory Compliance**                          |                 |              |           |                                                              |
| Have there been any legal proceedings related to discrimination during the reporting period? | Yes/No          | Radio Button | Boolean   | No                                                           |
| If yes, how many legal cases were filed?                     | Numerical       | Number Input | Integer   | 0                                                            |
| What was the outcome of legal proceedings?                   | Open-ended      | Text Area    | String    | "N/A - No legal proceedings during this period"              |
| What regulatory requirements does your organization follow?  | Multiple Choice | Checkbox     | Array     | ["Equal Employment Opportunity Commission guidelines", "Americans with Disabilities Act", "Title VII of Civil Rights Act"] |
| **Communication and Transparency**                           |                 |              |           |                                                              |
| How do you communicate your non-discrimination commitment to stakeholders? | Multiple Choice | Checkbox     | Array     | ["Corporate website", "Employee handbook", "Annual sustainability report", "Code of conduct"] |
| Do you publicly report on discrimination incidents and responses? | Yes/No          | Radio Button | Boolean   | Yes                                                          |
| How do you ensure transparency while maintaining confidentiality? | Open-ended      | Text Area    | String    | "Report aggregate data and anonymized case studies without identifying individuals involved" |

# GRI 407 Freedom of Association and Collective Bargaining

## Core Disclosure Requirements

| Question                                                     | Question Type   | Input Type     | Data Type     | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | -------------- | ------------- | ------------------------------------------------------------ |
| What is your organization's name?                            | Identification  | Text           | String        | "ABC Manufacturing Corp"                                     |
| What reporting period does this data cover?                  | Temporal        | Date Range     | Date          | "January 1, 2024 - December 31, 2024"                        |
| In which countries/regions does your organization operate?   | Geographic      | Multi-select   | Array[String] | ["United States", "Mexico", "Germany"]                       |
| Does your organization have operations or suppliers in areas where workers' rights to exercise freedom of association or collective bargaining may be violated or at significant risk? | Risk Assessment | Yes/No/Unknown | Boolean       | "Yes"                                                        |
| If yes, what specific risks have been identified?            | Risk Detail     | Multi-select   | Array[String] | ["Legal restrictions on unions", "Cultural barriers", "Management resistance"] |

## Policy and Management Approach

| Question                                                     | Question Type  | Input Type       | Data Type     | Example Answer                                               |
| ------------------------------------------------------------ | -------------- | ---------------- | ------------- | ------------------------------------------------------------ |
| Does your organization have a formal policy on freedom of association and collective bargaining? | Policy         | Yes/No           | Boolean       | "Yes"                                                        |
| Please upload or describe your freedom of association policy | Policy Detail  | File Upload/Text | File/String   | "Policy document uploaded" or "We respect all workers' rights to join unions..." |
| Who is responsible for implementing and monitoring freedom of association policies? | Responsibility | Text             | String        | "Chief Human Resources Officer and local HR managers"        |
| How often do you review and update your freedom of association policies? | Frequency      | Dropdown         | String        | "Annually"                                                   |
| Are your policies communicated to all employees, contractors, and suppliers? | Communication  | Multi-select     | Array[String] | ["Direct employees", "Contractors", "Tier 1 suppliers"]      |

## Operations and Supplier Assessment

| Question                                                     | Question Type | Input Type     | Data Type | Example Answer |
| ------------------------------------------------------------ | ------------- | -------------- | --------- | -------------- |
| How many of your direct operations are located in countries with legal restrictions on freedom of association? | Quantitative  | Number         | Integer   | "3"            |
| What percentage of your total workforce is covered by collective bargaining agreements? | Percentage    | Number (0-100) | Float     | "45.7"         |
| How many of your suppliers have been assessed for risks related to freedom of association and collective bargaining? | Quantitative  | Number         | Integer   | "127"          |
| What percentage of your Tier 1 suppliers have been assessed for these risks? | Percentage    | Number (0-100) | Float     | "85.3"         |
| How many suppliers were identified as having significant risk for violations of freedom of association? | Quantitative  | Number         | Integer   | "8"            |

## Specific Risk Areas and Locations

| Question                                                     | Question Type     | Input Type        | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ----------------- | ----------------- | ---------------- | ------------------------------------------------------------ |
| Please list the specific countries/regions where you have identified risks to freedom of association | Geographic Detail | Multi-select/Text | Array[String]    | ["Bangladesh", "Vietnam", "certain states in USA"]           |
| What types of operations in these areas pose the greatest risk? | Operational Risk  | Multi-select      | Array[String]    | ["Manufacturing facilities", "Supplier factories", "Subcontractor operations"] |
| Are there specific sectors or industries in your supply chain with higher risks? | Sector Risk       | Multi-select      | Array[String]    | ["Textile manufacturing", "Electronics assembly", "Agricultural processing"] |
| Do any of your operations involve migrant workers or vulnerable populations? | Vulnerable Groups | Yes/No + Detail   | Boolean + String | "Yes - seasonal agricultural workers in Region X"            |

## Due Diligence and Monitoring

| Question                                                     | Question Type       | Input Type      | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ------------------- | --------------- | ---------------- | ------------------------------------------------------------ |
| How do you monitor compliance with freedom of association rights in your operations? | Monitoring Method   | Multi-select    | Array[String]    | ["Regular audits", "Employee surveys", "Grievance mechanisms", "Third-party assessments"] |
| How frequently do you conduct assessments of freedom of association risks? | Frequency           | Dropdown        | String           | "Annually for high-risk locations, every 2 years for others" |
| Do you use third-party organizations to assess freedom of association risks? | Third Party         | Yes/No + Detail | Boolean + String | "Yes - we work with [Organization Name] for independent assessments" |
| How do you assess suppliers for freedom of association risks during the procurement process? | Supplier Assessment | Multi-select    | Array[String]    | ["Pre-qualification questionnaires", "On-site audits", "Certification requirements"] |

## Incidents and Remediation

| Question                                                     | Question Type          | Input Type | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | ---------- | --------- | ------------------------------------------------------------ |
| In the reporting period, were there any incidents where workers' rights to freedom of association were violated or restricted? | Incident Occurrence    | Yes/No     | Boolean   | "Yes"                                                        |
| If yes, how many incidents were reported or identified?      | Quantitative           | Number     | Integer   | "2"                                                          |
| Please describe the nature of these incidents                | Incident Detail        | Text Area  | String    | "Two cases of management interference with union organizing activities at Facility A" |
| What corrective actions were taken to address these incidents? | Remediation            | Text Area  | String    | "Management training provided, policy reinforcement, compensation to affected workers" |
| How do you track the effectiveness of remediation measures?  | Effectiveness Tracking | Text Area  | String    | "Follow-up audits, employee feedback surveys, union representative meetings" |

## Stakeholder Engagement

| Question                                                     | Question Type          | Input Type      | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | --------------- | ---------------- | ------------------------------------------------------------ |
| Do you engage with trade unions, worker representatives, or civil society organizations on freedom of association issues? | Stakeholder Engagement | Yes/No + Detail | Boolean + String | "Yes - regular meetings with International Union Federation representatives" |
| How do you ensure workers can freely communicate concerns about freedom of association? | Communication Channels | Multi-select    | Array[String]    | ["Anonymous hotline", "Worker committees", "Direct supervisor meetings", "Third-party grievance system"] |
| Are there any collective bargaining agreements in place at your operations? | Collective Bargaining  | Yes/No + Detail | Boolean + String | "Yes - 12 active agreements covering 3,200 employees"        |
| How do you ensure suppliers respect workers' rights to freedom of association? | Supplier Requirements  | Multi-select    | Array[String]    | ["Contractual requirements", "Regular audits", "Training programs", "Corrective action plans"] |

## Training and Capacity Building

| Question                                                     | Question Type          | Input Type      | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | --------------- | ---------------- | ------------------------------------------------------------ |
| Do management and supervisors receive training on freedom of association and collective bargaining rights? | Management Training    | Yes/No + Detail | Boolean + String | "Yes - annual training for all managers and supervisors"     |
| Are workers informed about their rights regarding freedom of association? | Worker Education       | Yes/No + Detail | Boolean + String | "Yes - included in orientation and annual refresher sessions" |
| Do you provide training or support to suppliers on freedom of association issues? | Supplier Training      | Yes/No + Detail | Boolean + String | "Yes - quarterly workshops for key suppliers"                |
| How do you measure the effectiveness of your training programs? | Training Effectiveness | Text Area       | String           | "Pre/post training assessments, incident tracking, employee surveys" |

## Continuous Improvement

| Question                                                     | Question Type    | Input Type      | Data Type        | Example Answer                                               |
| ------------------------------------------------------------ | ---------------- | --------------- | ---------------- | ------------------------------------------------------------ |
| What improvements have you made to your freedom of association practices in the reporting period? | Improvements     | Text Area       | String           | "Implemented new grievance system, expanded supplier training program, revised policies" |
| What are your targets or goals for improving freedom of association practices? | Future Goals     | Text Area       | String           | "100% supplier assessment completion by 2025, zero tolerance incidents target" |
| How do you benchmark your performance against industry standards or best practices? | Benchmarking     | Text Area       | String           | "Participate in industry working groups, use ILO standards as reference, third-party certifications" |
| Do you publicly report on your freedom of association practices and performance? | Public Reporting | Yes/No + Detail | Boolean + String | "Yes - included in annual sustainability report and website updates" |

# GRI 408 Child Labor

## Management Disclosure Questions

| Question                                                     | Question Type         | Input Type                | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | --------------------- | ------------------------- | -------------- | ------------------------------------------------------------ |
| Does your organization have a formal policy prohibiting child labor? | Yes/No with follow-up | Radio buttons + Text area | Boolean + Text | Yes - "Our Code of Conduct explicitly prohibits employment of anyone under 18 years of age" |
| What is the minimum age for employment in your organization? | Direct factual        | Number input              | Integer        | 18                                                           |
| How does your organization verify the age of employees during recruitment? | Process description   | Text area                 | Text           | "We require government-issued photo ID, birth certificate verification, and maintain copies in personnel files" |
| Does your child labor policy extend to contractors, suppliers, and business partners? | Yes/No with details   | Radio buttons + Text area | Boolean + Text | Yes - "All suppliers must sign our Supplier Code of Conduct which includes child labor prohibitions" |
| What training do HR personnel receive on identifying and preventing child labor? | Training description  | Text area                 | Text           | "Annual 4-hour training on labor law compliance, age verification procedures, and reporting protocols" |

## Operational Data Questions

| Question                                                     | Question Type       | Input Type                | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | ------------------- | ------------------------- | -------------- | ------------------------------------------------------------ |
| How many locations/facilities does your organization operate? | Quantitative        | Number input              | Integer        | 15                                                           |
| In how many countries/jurisdictions does your organization operate? | Quantitative        | Number input              | Integer        | 3                                                            |
| What is your total workforce count?                          | Quantitative        | Number input              | Integer        | 2,450                                                        |
| How many employees are under 18 years of age?                | Quantitative        | Number input              | Integer        | 0                                                            |
| What is the youngest age of any current employee?            | Direct factual      | Number input              | Integer        | 19                                                           |
| How many apprentices or trainees under 18 do you employ?     | Quantitative        | Number input              | Integer        | 0                                                            |
| Do you employ workers aged 16-18 in any capacity?            | Yes/No with details | Radio buttons + Text area | Boolean + Text | No - "Our minimum employment age is 18 across all positions" |

## Risk Assessment Questions

| Question                                                     | Question Type         | Input Type                | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | --------------------- | ------------------------- | -------------- | ------------------------------------------------------------ |
| Have you conducted a child labor risk assessment for your operations? | Yes/No with frequency | Radio buttons + Dropdown  | Boolean + Text | Yes - "Conducted annually as part of our ESG risk assessment" |
| Which of your operational locations are in countries with higher child labor risks? | Risk identification   | Multi-select + Text area  | Array + Text   | "None - all operations in low-risk jurisdictions (US, Canada, Germany)" |
| Do any of your operations involve hazardous work that would be prohibited for workers under 18? | Yes/No with details   | Radio buttons + Text area | Boolean + Text | Yes - "Manufacturing operations involve machinery and chemicals prohibited for minors" |
| What percentage of your supply chain has been assessed for child labor risks? | Percentage            | Slider/Number input       | Percentage     | 85%                                                          |
| How frequently do you audit suppliers for child labor compliance? | Frequency             | Dropdown                  | Text           | "Tier 1 suppliers annually, Tier 2 suppliers every two years" |

## Incident and Remediation Questions

| Question                                                     | Question Type            | Input Type                | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | ------------------------ | ------------------------- | -------------- | ------------------------------------------------------------ |
| Have you identified any instances of child labor in your operations in the reporting period? | Yes/No with details      | Radio buttons + Text area | Boolean + Text | No - "No instances identified through our monitoring systems" |
| Have you identified any instances of child labor in your supply chain in the reporting period? | Yes/No with details      | Radio buttons + Text area | Boolean + Text | No - "Supplier audits revealed no child labor violations"    |
| If child labor was identified, how many cases were reported? | Conditional quantitative | Number input              | Integer        | 0                                                            |
| What remediation actions were taken for any identified cases? | Conditional process      | Text area                 | Text           | "N/A - No cases identified"                                  |
| Do you have a grievance mechanism for reporting child labor concerns? | Yes/No with details      | Radio buttons + Text area | Boolean + Text | Yes - "Anonymous hotline and online reporting system available 24/7" |
| How many child labor-related grievances were received in the reporting period? | Quantitative             | Number input              | Integer        | 0                                                            |

## Supply Chain Management Questions

| Question                                                     | Question Type       | Input Type                | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | ------------------- | ------------------------- | -------------- | ------------------------------------------------------------ |
| What percentage of your suppliers have signed agreements prohibiting child labor? | Percentage          | Slider/Number input       | Percentage     | 100%                                                         |
| How do you monitor supplier compliance with child labor policies? | Process description | Text area                 | Text           | "Annual on-site audits, quarterly self-assessments, and third-party verification for high-risk suppliers" |
| What actions do you take when child labor violations are found in your supply chain? | Process description | Text area                 | Text           | "Immediate remediation plan required, support for affected children, supplier improvement timeline, termination if no progress" |
| Do you provide capacity building support to suppliers on child labor prevention? | Yes/No with details | Radio buttons + Text area | Boolean + Text | Yes - "Annual training workshops and resource sharing on labor compliance best practices" |
| What percentage of your procurement spend is with suppliers verified as child labor-free? | Percentage          | Slider/Number input       | Percentage     | 98%                                                          |

## Reporting and Transparency Questions

| Question                                                     | Question Type          | Input Type                   | Data Type       | Example Answer                                               |
| ------------------------------------------------------------ | ---------------------- | ---------------------------- | --------------- | ------------------------------------------------------------ |
| Do you publicly report on your child labor prevention efforts? | Yes/No with details    | Radio buttons + Text area    | Boolean + Text  | Yes - "Annual sustainability report includes dedicated child labor section" |
| Are you a member of any initiatives or organizations focused on eliminating child labor? | Yes/No with list       | Radio buttons + Multi-select | Boolean + Array | Yes - "UN Global Compact, Fair Labor Association"            |
| Do you collaborate with NGOs or governments on child labor prevention? | Yes/No with details    | Radio buttons + Text area    | Boolean + Text  | Yes - "Partner with local NGOs for community education programs in supplier regions" |
| How do you engage with stakeholders on child labor issues?   | Engagement description | Text area                    | Text            | "Regular stakeholder surveys, community meetings in operational areas, investor briefings on labor practices" |
| What targets have you set for child labor prevention and remediation? | Target description     | Text area                    | Text            | "Maintain zero tolerance policy, achieve 100% supplier certification by 2025, expand due diligence to Tier 3 suppliers" |

## Geographic and Sector-Specific Questions

| Question                                                     | Question Type       | Input Type                | Data Type      | Example Answer                                               |
| ------------------------------------------------------------ | ------------------- | ------------------------- | -------------- | ------------------------------------------------------------ |
| In which industries/sectors does your organization operate?  | Industry selection  | Multi-select              | Array          | ["Manufacturing", "Technology", "Retail"]                    |
| Do any of your operations occur in countries listed on the US Department of Labor's List of Goods Produced by Child Labor? | Yes/No with details | Radio buttons + Text area | Boolean + Text | No - "All operations in countries not listed on TVPRA list"  |
| What is the legal minimum age for employment in each country where you operate? | Legal compliance    | Table input               | Object         | "USA: 16 (18 for hazardous work), Germany: 16, Canada: 16"   |
| Are there any seasonal or temporary work patterns that could increase child labor risks? | Risk identification | Yes/No + Text area        | Boolean + Text | No - "Maintain consistent workforce year-round with no seasonal hiring of minors" |
| Do you operate in or source from regions with known child labor prevalence? | Geographic risk     | Yes/No + Text area        | Boolean + Text | No - "All operations and Tier 1 suppliers in low-risk jurisdictions" |

# GRI 409 Forced or Compulsory Labor

## Overview

This comprehensive questionnaire covers all disclosure requirements for GRI 409: Forced or Compulsory Labor, designed for AI-guided data collection to support sustainability reporting.

| Question                                                     | Question Type   | Input Type   | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | ------------ | --------- | ------------------------------------------------------------ |
| **Basic Company Information**                                |                 |              |           |                                                              |
| What is your organization's name?                            | Identification  | Text         | String    | "Global Manufacturing Corp"                                  |
| What reporting period does this data cover?                  | Contextual      | Date Range   | Date      | "January 1, 2024 - December 31, 2024"                        |
| Which geographical regions do your operations cover?         | Contextual      | Multi-select | Array     | ["North America", "Southeast Asia", "Europe"]                |
| **GRI 409-1: Operations and suppliers at significant risk for incidents of forced or compulsory labor** |                 |              |           |                                                              |
| Have you conducted risk assessments for forced or compulsory labor in your operations? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| How many of your direct operations have been identified as having significant risk for forced or compulsory labor incidents? | Quantitative    | Number       | Integer   | "3"                                                          |
| What percentage of your total operations does this represent? | Quantitative    | Number       | Decimal   | "12.5"                                                       |
| Which specific operations have been identified as high-risk? Please list by location/facility name. | Descriptive     | Long Text    | String    | "Factory A - Vietnam, Warehouse B - Malaysia, Processing Plant C - Thailand" |
| What are the primary risk factors that led to these operations being classified as high-risk? | Multiple Choice | Multi-select | Array     | ["Migrant worker populations", "Subcontracting practices", "Remote locations"] |
| How many suppliers in your supply chain have been assessed for forced labor risks? | Quantitative    | Number       | Integer   | "450"                                                        |
| How many suppliers have been identified as having significant risk for forced or compulsory labor? | Quantitative    | Number       | Integer   | "23"                                                         |
| What percentage of your total suppliers does this high-risk group represent? | Quantitative    | Number       | Decimal   | "5.1"                                                        |
| What percentage of your total procurement spend do these high-risk suppliers represent? | Quantitative    | Number       | Decimal   | "18.2"                                                       |
| Which supplier categories or industries pose the highest risk? | Multiple Choice | Multi-select | Array     | ["Agriculture", "Textiles", "Construction", "Electronics manufacturing"] |
| What specific risk factors have you identified in your supply chain? | Multiple Choice | Multi-select | Array     | ["Use of labor brokers", "Debt bondage practices", "Passport retention", "Excessive overtime"] |
| Do you have suppliers in countries with high forced labor prevalence according to international indices? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| If yes, which countries and how many suppliers in each?      | Descriptive     | Long Text    | String    | "Bangladesh: 5 suppliers, Myanmar: 2 suppliers, Uzbekistan: 1 supplier" |
| **Risk Assessment Methodology**                              |                 |              |           |                                                              |
| What methodology do you use to assess forced labor risks?    | Multiple Choice | Multi-select | Array     | ["On-site audits", "Third-party assessments", "Worker interviews", "Document reviews"] |
| How frequently do you conduct these risk assessments?        | Single Choice   | Dropdown     | String    | "Annually"                                                   |
| Do you use any specific tools or frameworks for assessment?  | Descriptive     | Text         | String    | "ILO indicators, Verité toolkit, UNGP reporting framework"   |
| What data sources do you use to identify high-risk regions or sectors? | Multiple Choice | Multi-select | Array     | ["Global Slavery Index", "US Department of Labor List", "ILO reports", "NGO research"] |
| **Due Diligence Measures**                                   |                 |              |           |                                                              |
| What measures have you taken to address forced labor risks in your operations? | Multiple Choice | Multi-select | Array     | ["Worker training programs", "Grievance mechanisms", "Policy implementation", "Management system improvements"] |
| What measures have you taken to address supplier risks?      | Multiple Choice | Multi-select | Array     | ["Supplier audits", "Contractual requirements", "Capacity building", "Alternative sourcing"] |
| Do you have a specific policy prohibiting forced or compulsory labor? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| Is this policy communicated to all operations and suppliers? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| Do you provide training on forced labor identification and prevention? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| How many employees received forced labor awareness training this reporting period? | Quantitative    | Number       | Integer   | "1,250"                                                      |
| How many suppliers received capacity building or training on forced labor prevention? | Quantitative    | Number       | Integer   | "89"                                                         |
| **Worker Protection Measures**                               |                 |              |           |                                                              |
| Do you have mechanisms for workers to report forced labor concerns safely? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| How many grievances related to forced labor were received this reporting period? | Quantitative    | Number       | Integer   | "7"                                                          |
| How many of these grievances were resolved?                  | Quantitative    | Number       | Integer   | "6"                                                          |
| Do you conduct worker interviews as part of your monitoring process? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| Are these interviews conducted in workers' native languages? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| Do you verify that workers are not required to surrender identity documents? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| Do you verify that workers are not charged recruitment fees? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| **Remediation Actions**                                      |                 |              |           |                                                              |
| Have you identified any actual cases of forced or compulsory labor this reporting period? | Yes/No          | Radio Button | Boolean   | "No"                                                         |
| If yes, how many cases were identified?                      | Quantitative    | Number       | Integer   | "0"                                                          |
| What remediation actions were taken for confirmed cases?     | Descriptive     | Long Text    | String    | "N/A - No cases identified"                                  |
| Have you terminated relationships with any suppliers due to forced labor concerns? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| How many supplier relationships were terminated for this reason? | Quantitative    | Number       | Integer   | "2"                                                          |
| What support was provided to affected workers in remediation cases? | Descriptive     | Long Text    | String    | "N/A - No cases requiring worker remediation"                |
| **Collaboration and Partnerships**                           |                 |              |           |                                                              |
| Do you collaborate with external organizations on forced labor prevention? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| Which organizations do you partner with?                     | Descriptive     | Text         | String    | "ILO, Verité, Fair Labor Association, Local NGOs"            |
| Are you a member of any industry initiatives addressing forced labor? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| Which initiatives are you involved in?                       | Descriptive     | Text         | String    | "Responsible Business Alliance, Better Cotton Initiative"    |
| **Monitoring and Verification**                              |                 |              |           |                                                              |
| Do you use third-party verification for your forced labor assessments? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| What percentage of high-risk operations underwent independent verification this year? | Quantitative    | Number       | Decimal   | "85.0"                                                       |
| What percentage of high-risk suppliers were audited by third parties this year? | Quantitative    | Number       | Decimal   | "75.5"                                                       |
| How do you verify the effectiveness of your forced labor prevention measures? | Multiple Choice | Multi-select | Array     | ["Regular audits", "Worker feedback", "KPI tracking", "External assessments"] |
| **Technology and Innovation**                                |                 |              |           |                                                              |
| Do you use technology solutions to monitor forced labor risks? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| What technologies do you employ?                             | Multiple Choice | Multi-select | Array     | ["Blockchain for supply chain tracking", "AI for risk assessment", "Mobile apps for worker feedback", "Satellite monitoring"] |
| **Challenges and Limitations**                               |                 |              |           |                                                              |
| What are the main challenges you face in addressing forced labor risks? | Multiple Choice | Multi-select | Array     | ["Limited supplier transparency", "Complex supply chains", "Resource constraints", "Cultural barriers"] |
| Are there any operations or suppliers you cannot adequately assess? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| What percentage of your supply chain remains unassessed for forced labor risks? | Quantitative    | Number       | Decimal   | "15.3"                                                       |
| What are the main barriers to complete supply chain visibility? | Descriptive     | Long Text    | String    | "Multi-tier suppliers, informal subcontracting, limited resources for assessment in remote locations" |
| **Future Plans**                                             |                 |              |           |                                                              |
| What are your plans to improve forced labor risk management in the next reporting period? | Descriptive     | Long Text    | String    | "Expand supplier assessment program, implement blockchain traceability, increase worker training frequency" |
| Do you have specific targets for reducing forced labor risks? | Yes/No          | Radio Button | Boolean   | "Yes"                                                        |
| What are these targets?                                      | Descriptive     | Text         | String    | "100% of high-risk suppliers audited annually, zero tolerance policy implementation across all tiers" |

# GRI 410 Security Practices

| Question                                                     | Question Type | Input Type            | Data Type | Example Answer                                               |
| ------------------------------------------------------------ | ------------- | --------------------- | --------- | ------------------------------------------------------------ |
| **General Security Personnel Information**                   |               |                       |           |                                                              |
| How many security personnel does your organization employ directly? | Quantitative  | Number Input          | Integer   | 45                                                           |
| How many security personnel are contracted from external security companies? | Quantitative  | Number Input          | Integer   | 120                                                          |
| What percentage of your total security personnel are directly employed vs. contracted? | Quantitative  | Percentage Input      | Float     | 27% direct, 73% contracted                                   |
| In which countries/regions do you deploy security personnel? | Categorical   | Multi-select Dropdown | Array     | ["United States", "Mexico", "Colombia", "Nigeria"]           |
| What is the total number of security incidents reported in the reporting period? | Quantitative  | Number Input          | Integer   | 23                                                           |
| **Training and Human Rights**                                |               |                       |           |                                                              |
| Do you have formal human rights training programs for security personnel? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| What percentage of directly employed security personnel have received human rights training? | Quantitative  | Percentage Input      | Float     | 85%                                                          |
| What percentage of contracted security personnel have received human rights training? | Quantitative  | Percentage Input      | Float     | 72%                                                          |
| How many hours of human rights training do security personnel receive annually? | Quantitative  | Number Input          | Integer   | 16                                                           |
| What specific human rights topics are covered in your training programs? | Categorical   | Multi-select Checkbox | Array     | ["Use of force", "Detention procedures", "Cultural sensitivity", "Non-discrimination"] |
| Do you require security contractors to provide human rights training to their personnel? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| How do you verify that contracted security personnel have received adequate human rights training? | Open-ended    | Text Area             | String    | "We require training certificates and conduct random audits of contractor training records" |
| **Policies and Procedures**                                  |               |                       |           |                                                              |
| Do you have written policies governing the use of force by security personnel? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| Do your security policies explicitly reference international human rights standards? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| Which international human rights frameworks do your policies reference? | Categorical   | Multi-select Checkbox | Array     | ["UN Universal Declaration of Human Rights", "UN Guiding Principles on Business and Human Rights", "Voluntary Principles on Security and Human Rights"] |
| Do you have procedures for investigating security-related human rights incidents? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| How often are your security policies reviewed and updated?   | Categorical   | Dropdown              | String    | "Annually"                                                   |
| Do you conduct human rights due diligence when selecting security contractors? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| **Incident Reporting and Management**                        |               |                       |           |                                                              |
| How many human rights-related security incidents were reported in the reporting period? | Quantitative  | Number Input          | Integer   | 3                                                            |
| How many of these incidents involved directly employed security personnel? | Quantitative  | Number Input          | Integer   | 1                                                            |
| How many incidents involved contracted security personnel?   | Quantitative  | Number Input          | Integer   | 2                                                            |
| What types of human rights violations occurred?              | Categorical   | Multi-select Checkbox | Array     | ["Excessive use of force", "Unlawful detention", "Discrimination"] |
| How many incidents resulted in formal complaints or legal proceedings? | Quantitative  | Number Input          | Integer   | 1                                                            |
| What corrective actions were taken following security incidents? | Open-ended    | Text Area             | String    | "Additional training provided, policy clarification issued, contractor performance review conducted" |
| Do you have a grievance mechanism for security-related human rights concerns? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| How many grievances were received through this mechanism in the reporting period? | Quantitative  | Number Input          | Integer   | 7                                                            |
| **Monitoring and Oversight**                                 |               |                       |           |                                                              |
| Do you conduct regular audits of security practices for human rights compliance? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| How frequently are security audits conducted?                | Categorical   | Dropdown              | String    | "Quarterly"                                                  |
| Do you monitor security contractor performance regarding human rights? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| What methods do you use to monitor security practices?       | Categorical   | Multi-select Checkbox | Array     | ["Regular audits", "Incident reporting systems", "Community feedback", "CCTV review"] |
| Do you engage with local communities regarding security practices? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| How do you measure the effectiveness of your human rights training programs? | Open-ended    | Text Area             | String    | "Pre/post training assessments, incident rate tracking, feedback surveys, behavioral observations" |
| **Geographic and Operational Context**                       |               |                       |           |                                                              |
| In which high-risk countries or regions do you operate security services? | Categorical   | Multi-select Dropdown | Array     | ["Colombia", "Nigeria", "Myanmar", "Democratic Republic of Congo"] |
| Do you have enhanced human rights protocols for high-risk operating environments? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| What additional measures do you implement in conflict-affected areas? | Open-ended    | Text Area             | String    | "Enhanced community engagement, stricter rules of engagement, increased monitoring frequency" |
| Do you coordinate with local law enforcement or military forces? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| If yes, what safeguards are in place to ensure human rights compliance in these relationships? | Open-ended    | Text Area             | String    | "Joint training programs, clear protocols for interaction, regular review meetings, incident reporting procedures" |
| **Contractor Management**                                    |               |                       |           |                                                              |
| What percentage of your security budget goes to contracted vs. directly employed security? | Quantitative  | Percentage Input      | Float     | 65% contracted, 35% direct                                   |
| Do you include human rights clauses in security contractor agreements? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| How do you assess contractor compliance with human rights requirements? | Open-ended    | Text Area             | String    | "Regular performance reviews, compliance audits, incident tracking, community feedback monitoring" |
| What actions do you take when contractors fail to meet human rights standards? | Open-ended    | Text Area             | String    | "Performance improvement plans, additional training requirements, contract termination for serious violations" |
| Do you provide human rights training directly to contractor personnel? | Binary        | Yes/No Radio          | Boolean   | No                                                           |
| **Reporting and Transparency**                               |               |                       |           |                                                              |
| Do you publicly report on security practices and human rights performance? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| Which stakeholders do you engage with regarding security and human rights issues? | Categorical   | Multi-select Checkbox | Array     | ["Local communities", "NGOs", "Government agencies", "Industry associations"] |
| Have you received any external recognition or certification for security practices? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| If yes, what certifications or recognitions have you received? | Open-ended    | Text Area             | String    | "Voluntary Principles Initiative participant, ISO 18788 certification for private security operations" |
| Do you participate in industry initiatives on security and human rights? | Binary        | Yes/No Radio          | Boolean   | Yes                                                          |
| **Performance Metrics**                                      |               |                       |           |                                                              |
| What is your target for human rights training completion rates? | Quantitative  | Percentage Input      | Float     | 95%                                                          |
| How has your security incident rate changed over the past three years? | Quantitative  | Percentage Input      | Float     | -25%                                                         |
| What percentage of security incidents were resolved satisfactorily for affected parties? | Quantitative  | Percentage Input      | Float     | 78%                                                          |
| How many security personnel were disciplined for human rights violations in the reporting period? | Quantitative  | Number Input          | Integer   | 4                                                            |
| What is the average response time for investigating security-related human rights complaints? | Quantitative  | Number Input          | Integer   | 14 days                                                      |

# GRI 411: Rights of Indigenous Peoples

| Question                                                     | Question Type   | Input Type            | Data Type    | Example Answer                                               |
| ------------------------------------------------------------ | --------------- | --------------------- | ------------ | ------------------------------------------------------------ |
| Does your organization operate on or near indigenous peoples' traditional territories or sacred sites? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| How many operational sites are located on or adjacent to indigenous territories? | Quantitative    | Number Input          | Integer      | 3                                                            |
| Which indigenous communities are affected by your operations? | Open-ended      | Text Area             | String Array | Maasai community in Kenya, Inuit communities in Northern Canada |
| Has your organization conducted a formal assessment of impacts on indigenous peoples' rights? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| When was the most recent indigenous rights impact assessment conducted? | Date            | Date Picker           | Date         | 2024-03-15                                                   |
| Does your organization have a formal policy on indigenous peoples' rights? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| Is your indigenous rights policy publicly available?         | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| Please provide the URL or attachment of your indigenous rights policy | Document/URL    | File Upload/URL Input | String/File  | https://company.com/indigenous-policy.pdf                    |
| Does your organization require Free, Prior, and Informed Consent (FPIC) before operating on indigenous lands? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| How many FPIC processes has your organization initiated in the reporting period? | Quantitative    | Number Input          | Integer      | 2                                                            |
| How many FPIC processes were successfully completed with consent obtained? | Quantitative    | Number Input          | Integer      | 2                                                            |
| How many FPIC processes resulted in consent being withheld?  | Quantitative    | Number Input          | Integer      | 0                                                            |
| What consultation methods does your organization use with indigenous communities? | Multiple Choice | Checkbox Group        | String Array | Community meetings, Elder councils, Traditional leader consultations |
| How frequently do you conduct consultations with affected indigenous communities? | Multiple Choice | Dropdown              | String       | Quarterly                                                    |
| Does your organization have indigenous representatives on its board or advisory committees? | Yes/No          | Radio Button          | Boolean      | No                                                           |
| How many indigenous people are employed by your organization? | Quantitative    | Number Input          | Integer      | 45                                                           |
| What percentage of your workforce identifies as indigenous?  | Quantitative    | Number Input          | Float        | 12.5                                                         |
| Does your organization provide cultural sensitivity training to employees working with indigenous communities? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| How many employees received indigenous cultural awareness training in the reporting period? | Quantitative    | Number Input          | Integer      | 150                                                          |
| Has your organization entered into any formal agreements or partnerships with indigenous communities? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| How many formal agreements with indigenous communities are currently active? | Quantitative    | Number Input          | Integer      | 3                                                            |
| What types of agreements has your organization established with indigenous communities? | Multiple Choice | Checkbox Group        | String Array | Benefit-sharing agreements, Employment agreements, Environmental monitoring partnerships |
| Does your organization provide financial benefits or compensation to indigenous communities? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| What is the total amount of financial benefits provided to indigenous communities in the reporting period? | Quantitative    | Number Input          | Float        | 500000                                                       |
| What types of benefits does your organization provide to indigenous communities? | Multiple Choice | Checkbox Group        | String Array | Revenue sharing, Infrastructure development, Education programs, Healthcare support |
| Has your organization been involved in any disputes or conflicts with indigenous communities? | Yes/No          | Radio Button          | Boolean      | No                                                           |
| How many active disputes with indigenous communities exist currently? | Quantitative    | Number Input          | Integer      | 0                                                            |
| How many disputes with indigenous communities were resolved in the reporting period? | Quantitative    | Number Input          | Integer      | 1                                                            |
| What dispute resolution mechanisms does your organization use? | Multiple Choice | Checkbox Group        | String Array | Mediation, Traditional dispute resolution, Legal arbitration |
| Does your organization have a formal grievance mechanism for indigenous peoples? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| How many grievances from indigenous communities were received in the reporting period? | Quantitative    | Number Input          | Integer      | 3                                                            |
| How many grievances from indigenous communities were resolved in the reporting period? | Quantitative    | Number Input          | Integer      | 3                                                            |
| What is the average time to resolve grievances from indigenous communities? | Quantitative    | Number Input          | Integer      | 45                                                           |
| Does your organization monitor and report on the socio-economic impacts on indigenous communities? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| What socio-economic indicators does your organization track for indigenous communities? | Multiple Choice | Checkbox Group        | String Array | Employment rates, Income levels, Access to education, Healthcare access, Cultural preservation |
| Has your organization contributed to any indigenous community development projects? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| How many community development projects for indigenous peoples were supported in the reporting period? | Quantitative    | Number Input          | Integer      | 5                                                            |
| What is the total investment in indigenous community development projects? | Quantitative    | Number Input          | Float        | 250000                                                       |
| Does your organization support indigenous cultural preservation initiatives? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| What types of cultural preservation support does your organization provide? | Multiple Choice | Checkbox Group        | String Array | Language preservation programs, Traditional knowledge documentation, Sacred site protection |
| Does your organization have indigenous procurement or supplier programs? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| What percentage of procurement spending goes to indigenous-owned businesses? | Quantitative    | Number Input          | Float        | 8.5                                                          |
| Does your organization conduct regular human rights due diligence related to indigenous peoples? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| How often does your organization conduct indigenous rights due diligence assessments? | Multiple Choice | Dropdown              | String       | Annually                                                     |
| Does your organization provide indigenous peoples with access to remedy for human rights violations? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| What remediation mechanisms are available to indigenous communities? | Multiple Choice | Checkbox Group        | String Array | Compensation programs, Restoration projects, Community development funds |
| Has your organization implemented any specific measures to protect indigenous women and children? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| What protective measures for indigenous women and children has your organization implemented? | Open-ended      | Text Area             | String       | Established safe transportation programs, implemented zero-tolerance policies for harassment, created women's leadership programs |
| Does your organization recognize and respect indigenous intellectual property rights? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| Has your organization entered into any traditional knowledge sharing agreements? | Yes/No          | Radio Button          | Boolean      | No                                                           |
| Does your organization have policies to prevent forced displacement of indigenous communities? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| Has any involuntary resettlement of indigenous communities occurred due to your operations? | Yes/No          | Radio Button          | Boolean      | No                                                           |
| If resettlement occurred, were international standards followed (IFC Performance Standard 5)? | Yes/No/N/A      | Radio Button          | String       | N/A                                                          |
| Does your organization report on indigenous rights issues to external stakeholders? | Yes/No          | Radio Button          | Boolean      | Yes                                                          |
| What external frameworks does your organization use for indigenous rights reporting? | Multiple Choice | Checkbox Group        | String Array | UN Declaration on Rights of Indigenous Peoples, ILO Convention 169, GRI Standards |
| Please provide any additional information about your organization's approach to indigenous peoples' rights | Open-ended      | Text Area             | String       | We have established a dedicated Indigenous Affairs department and work closely with traditional leaders to ensure our operations respect cultural values and contribute positively to community wellbeing. |

