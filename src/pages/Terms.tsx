import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const STYLE = `
:root{--pp-ink:#1a2232;--pp-body:#3a3f4a;--pp-muted:#6b7280;--pp-accent:#00a344;--pp-line:#e5e7eb;}
.legal-doc{color:var(--pp-body);line-height:1.65;}
.legal-doc h1{color:var(--pp-ink);font-size:30px;margin-bottom:2px;}
.legal-doc h2{color:var(--pp-ink);font-size:20px;margin-top:42px;padding-top:8px;padding-bottom:6px;border-bottom:2px solid var(--pp-accent);scroll-margin-top:16px;}
.legal-doc h3{color:var(--pp-ink);font-size:16px;margin-top:24px;}
.legal-doc .updated{color:var(--pp-muted);font-size:14px;margin-bottom:18px;}
.legal-doc a{color:var(--pp-accent);}
.legal-doc ul,.legal-doc ol{padding-left:22px;}
.legal-doc li{margin-bottom:7px;}
.legal-doc p{margin-bottom:10px;}
.legal-doc .toc{background:#f7faf8;border:1px solid var(--pp-line);border-radius:8px;padding:18px 22px;margin:24px 0;}
.legal-doc .toc h2{border:none;margin:0 0 10px;padding:0;font-size:16px;}
.legal-doc .toc ol{margin:0;padding-left:22px;}
.legal-doc .toc li{margin-bottom:4px;}
.legal-doc strong{color:var(--pp-ink);}
.legal-doc em{color:var(--pp-muted);}
`

const CONTENT = `
<h1>Terms of Service</h1>
<p class="updated">Last updated June 05, 2026</p>

<h2 id="agreement">Agreement to Our Legal Terms</h2>
<p>We are <strong>Newkirk Technologies LLC</strong>, doing business as Polyscope ("Company," "we," "us," "our"), a company registered in Colorado, United States at 3472 Research Pkwy, Ste 104-8243, Colorado Springs, CO 80920.</p>
<p>We operate the mobile application Polyscope (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>
<p>Polyscope is a mobile application available on iOS and Android that provides real-time Polymarket prediction market intelligence to retail traders. The app monitors publicly available on-chain trading activity on the Polygon blockchain and surfaces whale wallet activity, high-conviction trade signals, and AI-powered trade analysis through a subscription-based mobile experience. Polyscope allows users to track specific Polymarket wallet addresses of their choosing and receive push notifications when those wallets execute trades. The app also surfaces high-volume trades exceeding $100,000 USDC across the Polymarket platform, flagged as high-conviction signals. Premium subscribers have access to an AI-powered trade advisor that synthesizes recent whale activity and market data to provide informational trade insights. The app operates three subscription tiers: a free tier with limited wallet tracking and notifications, a Pro tier ($19.99/month, $155.99/year) with expanded tracking and insider signal alerts, and a Premium tier ($59.99/month, $464.99/year) with unlimited access and AI advisory features. Subscriptions are managed through Apple In-App Purchase (iOS) and Google Play Billing (Android). A free trial (3-days for Premium, 7-days for Pro) is available for new subscribers. Polyscope is a data aggregation and intelligence tool. It does not facilitate the placement of trades, hold user funds, or provide licensed financial advice. All market data displayed is sourced from publicly available blockchain records and the Polymarket Gamma API.</p>
<p>You can contact us by email at contact@polyscopeapp.com, or by mail to 3472 Research Pkwy, Ste 104-8243, Colorado Springs, CO 80920, United States.</p>
<p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Newkirk Technologies LLC, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
<p>We will provide you with prior notice of any scheduled changes to the Services you are using. Changes to these Legal Terms will become effective thirty (30) days after the notice is given, except if the changes apply to new functionality, security updates, bug fixes, a court order, and changes required to comply with applicable law or regulatory requirements, in which case the changes will be effective immediately. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms. If you disagree with such changes, you may terminate Services as per the section "Term and Termination."</p>
<p>The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.</p>
<p>We recommend that you print a copy of these Legal Terms for your records.</p>

<div class="toc">
<h2>Table of Contents</h2>
<ol>
<li><a href="#sec-1">Our services</a></li>
<li><a href="#sec-2">Intellectual property rights</a></li>
<li><a href="#sec-3">User representations</a></li>
<li><a href="#sec-4">User registration</a></li>
<li><a href="#sec-5">Purchases and payment</a></li>
<li><a href="#sec-6">Subscriptions</a></li>
<li><a href="#sec-7">Prohibited activities</a></li>
<li><a href="#sec-8">User generated contributions</a></li>
<li><a href="#sec-9">Contribution license</a></li>
<li><a href="#sec-10">Mobile application license</a></li>
<li><a href="#sec-11">Third-party websites and content</a></li>
<li><a href="#sec-12">Advertisers</a></li>
<li><a href="#sec-13">Services management</a></li>
<li><a href="#sec-14">Privacy policy</a></li>
<li><a href="#sec-15">Term and termination</a></li>
<li><a href="#sec-16">Modifications and interruptions</a></li>
<li><a href="#sec-17">Governing law</a></li>
<li><a href="#sec-18">Dispute resolution</a></li>
<li><a href="#sec-19">Corrections</a></li>
<li><a href="#sec-20">Disclaimer</a></li>
<li><a href="#sec-21">Limitations of liability</a></li>
<li><a href="#sec-22">Indemnification</a></li>
<li><a href="#sec-23">User data</a></li>
<li><a href="#sec-24">Electronic communications, transactions, and signatures</a></li>
<li><a href="#sec-25">California users and residents</a></li>
<li><a href="#sec-26">Miscellaneous</a></li>
<li><a href="#sec-27">Financial information disclaimer</a></li>
<li><a href="#sec-28">Contact us</a></li>
</ol>
</div>

<h2 id="sec-1">1. Our Services</h2>
<p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
<p>Polyscope is compliant with COPPA.</p>

<h2 id="sec-2">2. Intellectual Property Rights</h2>
<h3>Our intellectual property</h3>
<p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
<p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world. The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.</p>
<h3>Your use of our Services</h3>
<p>Subject to your compliance with these Legal Terms, including the "Prohibited Activities" section below, we grant you a non-exclusive, non-transferable, revocable license to: access the Services; and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use.</p>
<p>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
<p>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: contact@polyscopeapp.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</p>
<p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>
<h3>Your submissions</h3>
<p><strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
<p><strong>You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services you: confirm that you have read and agree with our "Prohibited Activities" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading; to the extent permissible by applicable law, waive any and all moral rights to any such Submission; warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and warrant and represent that your Submissions do not constitute confidential information. You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.</p>

<h2 id="sec-3">3. User Representations</h2>
<p>By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.</p>
<p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</p>

<h2 id="sec-4">4. User Registration</h2>
<p>You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>

<h2 id="sec-5">5. Purchases and Payment</h2>
<p>We accept the following forms of payment:</p>
<ul>
<li>Apple In-App Purchase — for iOS users</li>
<li>Google Play Billing — for Android users</li>
</ul>
<p>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.</p>
<p>You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</p>
<p>We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.</p>

<h2 id="sec-6">6. Subscriptions</h2>
<h3>Billing and Renewal</h3>
<p>Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle will depend on the type of subscription plan you choose when you subscribed to the Services.</p>
<h3>Free Trial</h3>
<p>We offer a 3-day free trial to new users who register with the Services. The account will be charged according to the user's chosen subscription at the end of the free trial.</p>
<h3>Cancellation</h3>
<p>You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at contact@polyscopeapp.com.</p>
<h3>Fee Changes</h3>
<p>We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.</p>

<h2 id="sec-7">7. Prohibited Activities</h2>
<p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
<p>As a user of the Services, you agree not to:</p>
<ul>
<li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
<li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
<li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
<li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
<li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
<li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
<li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
<li>Engage in unauthorized framing of or linking to the Services.</li>
<li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
<li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
<li>Delete the copyright or other proprietary rights notice from any Content.</li>
<li>Attempt to impersonate another user or person or use the username of another user.</li>
<li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
<li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
<li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
<li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
<li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
<li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
<li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
<li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
<li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
<li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
<li>Use the Services for the purpose of making financial or investment decisions on behalf of third parties without appropriate licensure.</li>
<li>Attempt to reverse engineer, scrape, or systematically extract data from the Services for use in competing products or services.</li>
</ul>

<h2 id="sec-8">8. User Generated Contributions</h2>
<p>The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that the creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights of any third party; and that your Contributions are not false, inaccurate, misleading, obscene, harassing, libelous, or otherwise objectionable.</p>
<p>Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.</p>

<h2 id="sec-9">9. Contribution License</h2>
<p>You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</p>
<p>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.</p>
<p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>

<h2 id="sec-10">10. Mobile Application License</h2>
<h3>Use License</h3>
<p>If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.</p>
<h3>Apple and Android Devices</h3>
<p>The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an "App Distributor") to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor's terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a "terrorist supporting" country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.</p>

<h2 id="sec-11">11. Third-Party Websites and Content</h2>
<p>The Services may contain (or you may be sent via the App) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.</p>

<h2 id="sec-12">12. Advertisers</h2>
<p>We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.</p>

<h2 id="sec-13">13. Services Management</h2>
<p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>

<h2 id="sec-14">14. Privacy Policy</h2>
<p>We care about data privacy and security. Please review our Privacy Policy: <a href="/privacy">polyscopeapp.com/privacy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.</p>

<h2 id="sec-15">15. Term and Termination</h2>
<p>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
<p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>

<h2 id="sec-16">16. Modifications and Interruptions</h2>
<p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
<p>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</p>

<h2 id="sec-17">17. Governing Law</h2>
<p>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Colorado applicable to agreements made and to be entirely performed within the State of Colorado, without regard to its conflict of law principles.</p>

<h2 id="sec-18">18. Dispute Resolution</h2>
<h3>Informal Negotiations</h3>
<p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</p>
<h3>Binding Arbitration</h3>
<p>If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA's Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules"), both of which are available at the American Arbitration Association (AAA) website. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. If such costs are determined by the arbitrator to be excessive, we will pay all arbitration fees and expenses. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in El Paso County, Colorado. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.</p>
<p>If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in El Paso County, Colorado, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts.</p>
<p>In no event shall any Dispute brought by either Party related in any way to the Services be commenced more than one (1) year after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</p>
<h3>Restrictions</h3>
<p>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>
<h3>Exceptions to Informal Negotiations and Arbitration</h3>
<p>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.</p>

<h2 id="sec-19">19. Corrections</h2>
<p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>

<h2 id="sec-20">20. Disclaimer</h2>
<p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</p>

<h2 id="sec-21">21. Limitations of Liability</h2>
<p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>

<h2 id="sec-22">22. Indemnification</h2>
<p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>

<h2 id="sec-23">23. User Data</h2>
<p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>

<h2 id="sec-24">24. Electronic Communications, Transactions, and Signatures</h2>
<p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>

<h2 id="sec-25">25. California Users and Residents</h2>
<p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</p>

<h2 id="sec-26">26. Miscellaneous</h2>
<p>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.</p>

<h2 id="sec-27">27. Financial Information Disclaimer</h2>
<p>Polyscope is not a registered investment advisor, broker-dealer, financial institution, or licensed financial planner. The information, data, alerts, and analysis provided through the Polyscope platform, including but not limited to whale wallet activity, high-conviction trade signals, and AI-generated trade insights, are provided for informational and educational purposes only and do not constitute financial, investment, legal, or trading advice. Polyscope does not recommend or endorse any specific trade, market position, or financial decision. Users acknowledge that prediction markets involve significant financial risk, that past whale trading activity is not indicative of future results, and that any trading decisions made in reliance on information provided by Polyscope are made solely at the user's own risk. Polyscope assumes no liability for any financial losses incurred by users in connection with their use of the platform. Users who require personalized financial advice should consult a licensed financial advisor, broker, or other qualified professional before making any investment or trading decisions.</p>

<h2 id="sec-28">28. Contact Us</h2>
<p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
<p>Newkirk Technologies LLC<br>
3472 Research Pkwy<br>
Ste 104-8243<br>
Colorado Springs, CO 80920<br>
United States<br>
contact@polyscopeapp.com</p>
`

export default function Terms() {
  return (
    <>
    <Helmet>
      <title>Terms of Service | Polyscope</title>
      <meta name="description" content="Read the Polyscope Terms of Service. Learn the rules and conditions for using the Polyscope app and website." />
      <link rel="canonical" href="https://polyscopeapp.com/terms" />
    </Helmet>
    <main className="min-h-screen bg-ps-black pt-24 pb-20">
      <style>{STYLE}</style>
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="mb-6">
          <Link to="/" className="text-xs text-ps-muted hover:text-ps-green transition-colors">
            ← Back to home
          </Link>
        </div>
        <div className="bg-white rounded-2xl p-8 sm:p-12">
          <div className="legal-doc" dangerouslySetInnerHTML={{ __html: CONTENT }} />
        </div>
      </div>
    </main>
    </>
  )
}
