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
.legal-doc table{border-collapse:collapse;width:100%;margin:14px 0;font-size:14px;}
.legal-doc th,.legal-doc td{border:1px solid var(--pp-line);padding:8px 10px;text-align:left;vertical-align:top;}
.legal-doc th{background:#f4f9f5;color:var(--pp-ink);}
.legal-doc strong{color:var(--pp-ink);}
.legal-doc em{color:var(--pp-muted);}
`

const CONTENT = `
<h1>Privacy Policy</h1>
<p class="updated">Last updated June 05, 2026</p>

<p>This Privacy Notice for <strong>Newkirk Technologies LLC</strong> (doing business as Polyscope) ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</p>
<ul>
<li>Download and use our mobile application (Polyscope), or any other application of ours that links to this Privacy Notice</li>
<li>Use Polyscope. Polyscope is a mobile application available on iOS and Android that provides real-time Polymarket prediction market intelligence to retail traders. The app monitors publicly available on-chain trading activity on the Polygon blockchain and surfaces whale wallet activity, high-conviction trade signals, and AI-powered trade analysis through a subscription-based mobile experience. Polyscope allows users to track specific Polymarket wallet addresses of their choosing and receive push notifications when those wallets execute trades. The app also surfaces high-volume trades exceeding $100,000 USDC across the Polymarket platform, flagged as high-conviction signals. Premium subscribers have access to an AI-powered trade advisor that synthesizes recent whale activity and market data to provide informational trade insights. The app operates three subscription tiers: a free tier with limited wallet tracking and notifications, a Pro tier ($19.99/month, $155.99/year) with expanded tracking and insider signal alerts, and a Premium tier ($59.99/month, $464.99/year) with unlimited access and AI advisory features. Subscriptions are managed through Apple In-App Purchase (iOS) and Google Play Billing (Android). A free trial is available for new subscribers. Polyscope is a data aggregation and intelligence tool. It does not facilitate the placement of trades, hold user funds, or provide licensed financial advice. All market data displayed is sourced from publicly available blockchain records and the Polymarket Gamma API. Category: Finance / Investment Tools. Target Audience: Adult retail traders actively using the Polymarket prediction market platform. The app is intended for users 17 and older and is not directed at minors. Platform: iOS and Android mobile application. Developer/Company: Newkirk Technologies LLC (Colorado).</li>
<li>Engage with us in other related ways, including any marketing or events</li>
</ul>
<p><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at support@polyscopeapp.com.</p>

<h2 id="summary">Summary of Key Points</h2>
<p><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</em></p>
<p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
<p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>
<p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
<p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
<p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</p>
<p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>
<p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
<p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="/support">polyscopeapp.com/support</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
<p>Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.</p>

<div class="toc">
<h2>Table of Contents</h2>
<ol>
<li><a href="#sec-1">What information do we collect?</a></li>
<li><a href="#sec-2">How do we process your information?</a></li>
<li><a href="#sec-3">What legal bases do we rely on to process your personal information?</a></li>
<li><a href="#sec-4">When and with whom do we share your personal information?</a></li>
<li><a href="#sec-5">What is our stance on third-party websites?</a></li>
<li><a href="#sec-6">Do we offer artificial intelligence-based products?</a></li>
<li><a href="#sec-7">How do we handle your social logins?</a></li>
<li><a href="#sec-8">Is your information transferred internationally?</a></li>
<li><a href="#sec-9">How long do we keep your information?</a></li>
<li><a href="#sec-10">How do we keep your information safe?</a></li>
<li><a href="#sec-11">Do we collect information from minors?</a></li>
<li><a href="#sec-12">What are your privacy rights?</a></li>
<li><a href="#sec-13">Controls for do-not-track features</a></li>
<li><a href="#sec-14">Do United States residents have specific privacy rights?</a></li>
<li><a href="#sec-15">Do other regions have specific privacy rights?</a></li>
<li><a href="#sec-16">Blockchain and wallet address data</a></li>
<li><a href="#sec-17">Do we make updates to this notice?</a></li>
<li><a href="#sec-18">How can you contact us about this notice?</a></li>
<li><a href="#sec-19">How can you review, update, or delete the data we collect from you?</a></li>
</ol>
</div>

<h2 id="sec-1">1. What Information Do We Collect?</h2>
<h3>Personal information you disclose to us</h3>
<p><em>In Short: We collect personal information that you provide to us.</em></p>
<p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
<p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
<ul>
<li>email addresses</li>
<li>device push notification token</li>
<li>subscription and billing status</li>
<li>in-app usage data</li>
<li>crash and error reports</li>
</ul>
<p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
<p><strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by RevenueCat. You may find their privacy notice link(s) here: https://www.revenuecat.com/privacy.</p>
<p>Polyscope accepts subscription payments through Apple In-App Purchase (iOS) and Google Play Billing (Android), managed through RevenueCat. Users complete purchases directly within the app when upgrading to Pro or Premium tiers.</p>
<p><strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media or third-party account details, like your Apple or Google account. If you choose to register in this way, we will collect certain profile information about you from the provider, as described in the section called "How Do We Handle Your Social Logins?" below.</p>
<p><strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
<ul>
<li><strong>Mobile Device Access.</strong> We may request access or permission to certain features from your mobile device, including your mobile device's push notifications, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</li>
<li><strong>Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model, Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, your mobile device's unique device ID, and information about the features of our application(s) you accessed.</li>
<li><strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
</ul>
<p>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
<p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
<h3>Information automatically collected</h3>
<p><em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></p>
<p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
<p>The information we collect includes:</p>
<ul>
<li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
<li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
</ul>

<h2 id="sec-2">2. How Do We Process Your Information?</h2>
<p><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes only with your prior explicit consent.</em></p>
<p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
<ul>
<li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
<li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
<li><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
<li><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
<li><strong>To fulfill and manage your orders.</strong> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
<li><strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
<li><strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
<li><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
</ul>

<h2 id="sec-3">3. What Legal Bases Do We Rely On to Process Your Information?</h2>
<p><em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</em></p>
<p><strong>If you are located in the EU or UK, this section applies to you.</strong></p>
<p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
<ul>
<li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
<li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
<li><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to: analyze how our Services are used so we can improve them to engage and retain users; and diagnose problems and/or prevent fraudulent activities.</li>
<li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
<li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
</ul>
<p><strong>If you are located in Canada, this section applies to you.</strong></p>
<p>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
<p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example: if collection is clearly in the interests of an individual and consent cannot be obtained in a timely way; for investigations and fraud detection and prevention; for business transactions provided certain conditions are met; if it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim; for identifying injured, ill, or deceased persons and communicating with next of kin; if we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse; if it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province; if disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records; if it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced; if the collection is solely for journalistic, artistic, or literary purposes; or if the information is publicly available and is specified by the regulations. We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments.</p>

<h2 id="sec-4">4. When and With Whom Do We Share Your Personal Information?</h2>
<p><em>In Short: We may share information in specific situations described in this section and/or with the following third parties.</em></p>
<p><strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.</p>
<p>The third parties we may share personal information with are as follows:</p>
<ul>
<li><strong>Advertising, Direct Marketing, and Lead Generation:</strong> AdMob</li>
<li><strong>AI Service Providers:</strong> Anthropic</li>
<li><strong>Allow Users to Connect to Their Third-Party Accounts:</strong> Google account and Apple account</li>
<li><strong>Website Performance Monitoring:</strong> Sentry</li>
<li><strong>Authentication:</strong> Clerk</li>
<li><strong>Database and Backend:</strong> Supabase</li>
<li><strong>Analytics:</strong> PostHog</li>
<li><strong>iOS payments and push notifications:</strong> Apple</li>
<li><strong>Android payments and push notifications:</strong> Google</li>
<li><strong>Push notification delivery:</strong> Expo</li>
<li><strong>Subscription and billing management:</strong> RevenueCat</li>
<li><strong>Transactional email:</strong> Resend</li>
</ul>
<p>We also may need to share your personal information in the following situations:</p>
<ul>
<li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
</ul>

<h2 id="sec-5">5. What Is Our Stance on Third-Party Websites?</h2>
<p><em>In Short: We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.</em></p>
<p>The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third-party websites. Any data collected by third parties is not covered by this Privacy Notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.</p>

<h2 id="sec-6">6. Do We Offer Artificial Intelligence-Based Products?</h2>
<p><em>In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em></p>
<p>As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</p>
<p><strong>Use of AI Technologies.</strong> We provide the AI Products through third-party service providers ("AI Service Providers"), including Anthropic. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in "What Legal Bases Do We Rely On to Process Your Personal Information?" You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</p>
<p><strong>Our AI Products.</strong> Our AI Products are designed for the following functions:</p>
<ul><li>AI bots</li></ul>
<p><strong>How We Process Your Data Using AI.</strong> All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</p>
<p><strong>How to Opt Out.</strong> We believe in giving you the power to decide how your data is used. To opt out, you can: log in to your account settings and update your user account; or contact us using the contact information provided.</p>

<h2 id="sec-7">7. How Do We Handle Your Social Logins?</h2>
<p><em>In Short: If you choose to register or log in to our Services using a social media or third-party account, we may have access to certain information about you.</em></p>
<p>Our Services offer you the ability to register and log in using your third-party account details (like your Apple or Google logins). Where you choose to do this, we will receive certain profile information about you from your provider. The profile information we receive may vary depending on the provider concerned, but will often include your name and email address, as well as other information you choose to make available.</p>
<p>We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>

<h2 id="sec-8">8. Is Your Information Transferred Internationally?</h2>
<p><em>In Short: We may transfer, store, and process your information in countries other than your own.</em></p>
<p>Our servers are located in the United States. Regardless of your location, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information (see "When and With Whom Do We Share Your Personal Information?" above), including facilities in the United States, and other countries.</p>
<p>If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.</p>
<p><strong>European Commission's Standard Contractual Clauses:</strong> We have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.</p>

<h2 id="sec-9">9. How Long Do We Keep Your Information?</h2>
<p><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></p>
<p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
<p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

<h2 id="sec-10">10. How Do We Keep Your Information Safe?</h2>
<p><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
<p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

<h2 id="sec-11">11. Do We Collect Information From Minors?</h2>
<p><em>In Short: We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</em></p>
<p>We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at support@polyscopeapp.com.</p>

<h2 id="sec-12">12. What Are Your Privacy Rights?</h2>
<p><em>In Short: Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></p>
<p>In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "How Can You Contact Us About This Notice?" below.</p>
<p>We will consider and act upon any request in accordance with applicable data protection laws.</p>
<p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.</p>
<p>If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</p>
<p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "How Can You Contact Us About This Notice?" below or updating your preferences.</p>
<p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
<h3>Account Information</h3>
<p>If you would at any time like to review or change the information in your account or terminate your account, you can: log in to your account settings and update your user account; or contact us using the contact information provided (support@polyscopeapp.com).</p>
<p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
<p>If you have questions or comments about your privacy rights, you may email us at support@polyscopeapp.com.</p>

<h2 id="sec-13">13. Controls for Do-Not-Track Features</h2>
<p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
<p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>

<h2 id="sec-14">14. Do United States Residents Have Specific Privacy Rights?</h2>
<p><em>In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</em></p>
<h3>Categories of Personal Information We Collect</h3>
<p>The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "What Information Do We Collect?"</p>
<table>
<tr><th>Category</th><th>Examples</th><th>Collected</th></tr>
<tr><td>A. Identifiers</td><td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td><td>YES</td></tr>
<tr><td>B. Personal information as defined in the California Customer Records statute</td><td>Name, contact information, education, employment, employment history, and financial information</td><td>YES</td></tr>
<tr><td>C. Protected classification characteristics under state or federal law</td><td>Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td><td>NO</td></tr>
<tr><td>D. Commercial information</td><td>Transaction information, purchase history, financial details, and payment information</td><td>YES</td></tr>
<tr><td>E. Biometric information</td><td>Fingerprints and voiceprints</td><td>NO</td></tr>
<tr><td>F. Internet or other similar network activity</td><td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td><td>YES</td></tr>
<tr><td>G. Geolocation data</td><td>Device location</td><td>NO</td></tr>
<tr><td>H. Audio, electronic, sensory, or similar information</td><td>Images and audio, video or call recordings created in connection with our business activities</td><td>NO</td></tr>
<tr><td>I. Professional or employment-related information</td><td>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td><td>NO</td></tr>
<tr><td>J. Education Information</td><td>Student records and directory information</td><td>NO</td></tr>
<tr><td>K. Inferences drawn from collected personal information</td><td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td><td>NO</td></tr>
<tr><td>L. Sensitive personal information</td><td></td><td>NO</td></tr>
</table>
<p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of: receiving help through our customer support channels; participation in customer surveys or contests; and facilitation in the delivery of our Services and to respond to your inquiries.</p>
<p>We will use and retain the collected personal information as needed to provide the Services or for: Category A — as long as the user has an account with us; Category B — as long as the user has an account with us; Category D — as long as the user has an account with us; Category F — as long as the user has an account with us.</p>
<h3>Sources of Personal Information</h3>
<p>Learn more about the sources of personal information we collect in "What Information Do We Collect?"</p>
<h3>How We Use and Share Personal Information</h3>
<p>Learn more about how we use your personal information in the section, "How Do We Process Your Information?"</p>
<p><strong>Will your information be shared with anyone else?</strong> We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information. We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "When and With Whom Do We Share Your Personal Information?"</p>
<h3>Your Rights</h3>
<p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
<ul>
<li>Right to know whether or not we are processing your personal data</li>
<li>Right to access your personal data</li>
<li>Right to correct inaccuracies in your personal data</li>
<li>Right to request the deletion of your personal data</li>
<li>Right to obtain a copy of the personal data you previously shared with us</li>
<li>Right to non-discrimination for exercising your rights</li>
<li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
</ul>
<p>Depending upon the state where you live, you may also have the following rights: right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota); right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland); right to obtain a list of specific third parties to which we have disclosed personal data (Minnesota and Oregon); right to obtain a list of third parties to which we have sold personal data (Connecticut); right to review, understand, question, and, depending on where you live, correct how personal data has been profiled (Connecticut and Minnesota); right to limit use and disclosure of sensitive personal data (California); and right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (Florida).</p>
<h3>How to Exercise Your Rights</h3>
<p>To exercise these rights, you can contact us by visiting <a href="/support">polyscopeapp.com/support</a>, by emailing us at support@polyscopeapp.com, or by referring to the contact details at the bottom of this document. Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</p>
<h3>Request Verification</h3>
<p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>
<h3>Appeals</h3>
<p>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at support@polyscopeapp.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>
<h3>California "Shine The Light" Law</h3>
<p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "How Can You Contact Us About This Notice?"</p>

<h2 id="sec-15">15. Do Other Regions Have Specific Privacy Rights?</h2>
<p><em>In Short: You may have additional rights based on the country you reside in.</em></p>
<h3>Australia and New Zealand</h3>
<p>We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act). This Privacy Notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information. If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular: offer you the products or services that you want; respond to or help with your requests; manage your account with us; and confirm your identity and protect your account. At any time, you have the right to request access to or correction of your personal information. If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commissioner and a breach of New Zealand's Privacy Principles to the Office of New Zealand Privacy Commissioner.</p>
<h3>Republic of South Africa</h3>
<p>At any time, you have the right to request access to or correction of your personal information. If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the Information Regulator (South Africa) — General enquiries: enquiries@inforegulator.org.za; Complaints (complete POPIA/PAIA form 5): PAIAComplaints@inforegulator.org.za &amp; POPIAComplaints@inforegulator.org.za.</p>

<h2 id="sec-16">16. Blockchain and Wallet Address Data</h2>
<p>Polyscope displays publicly available on-chain transaction data sourced from the Polygon blockchain and the Polymarket Gamma API. Wallet addresses that users choose to track within the app are public blockchain identifiers — they are not financial account credentials and are not associated with any personally identifiable information by Polyscope. Users voluntarily enter wallet addresses they wish to monitor; Polyscope does not collect wallet addresses associated with the user's own financial accounts unless the user explicitly enters them. All blockchain data displayed within the app was already publicly accessible on the Polygon network prior to its display in Polyscope.</p>

<h2 id="sec-17">17. Do We Make Updates to This Notice?</h2>
<p><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
<p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

<h2 id="sec-18">18. How Can You Contact Us About This Notice?</h2>
<p>If you have questions or comments about this notice, you may email us at support@polyscopeapp.com or contact us by post at:</p>
<p>Newkirk Technologies LLC<br>
6515 Wydown Blvd. MSC 96891<br>
St. Louis, MO 63105<br>
United States</p>

<h2 id="sec-19">19. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
<p>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a href="/support">polyscopeapp.com/support</a>.</p>
`

export default function Privacy() {
  return (
    <>
    <Helmet>
      <title>Privacy Policy | Polyscope</title>
      <meta name="description" content="Read the Polyscope Privacy Policy. Learn how Newkirk Technologies LLC collects, uses, and protects your personal data." />
      <link rel="canonical" href="https://polyscopeapp.com/privacy" />
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
