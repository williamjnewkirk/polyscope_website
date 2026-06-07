import { useEffect } from 'react'
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
.legal-doc .clausebox{background:#f7faf8;border-left:4px solid var(--pp-accent);padding:12px 16px;border-radius:4px;margin:16px 0;}
.legal-doc ol.clause{padding-left:22px;}
.legal-doc ol.clause li{margin-bottom:7px;}
.legal-doc strong{color:var(--pp-ink);}
`

const CONTENT = `
<h1>End User License Agreement</h1>
<p class="updated">Last updated June 05, 2026</p>

<p>Polyscope is licensed to You (End-User) by <strong>Newkirk Technologies LLC</strong>, located and registered at 6515 Wydown Blvd. MSC 96891, St. Louis, Missouri 63105, United States ("Licensor"), for use only under the terms of this License Agreement.</p>
<p>By downloading the Licensed Application from Apple's software distribution platform ("App Store") and Google's software distribution platform ("Play Store"), and any update thereto (as permitted by this License Agreement), You indicate that You agree to be bound by all of the terms and conditions of this License Agreement, and that You accept this License Agreement. App Store and Play Store are referred to in this License Agreement as "Services."</p>
<p>The parties of this License Agreement acknowledge that the Services are not a Party to this License Agreement and are not bound by any provisions or obligations with regard to the Licensed Application, such as warranty, liability, maintenance and support thereof. Newkirk Technologies LLC, not the Services, is solely responsible for the Licensed Application and the content thereof.</p>
<p>This License Agreement may not provide for usage rules for the Licensed Application that are in conflict with the latest Apple Media Services Terms and Conditions and Google Play Terms of Service ("Usage Rules"). Newkirk Technologies LLC acknowledges that it had the opportunity to review the Usage Rules and this License Agreement is not conflicting with them.</p>
<p>Polyscope when purchased or downloaded through the Services, is licensed to You for use only under the terms of this License Agreement. The Licensor reserves all rights not expressly granted to You. Polyscope is to be used on devices that operate with Apple's operating systems ("iOS" and "Mac OS") or Google's operating system ("Android").</p>

<div class="toc">
<h2>Table of Contents</h2>
<ol>
<li><a href="#sec-1">The application</a></li>
<li><a href="#sec-2">Scope of license</a></li>
<li><a href="#sec-3">Technical requirements</a></li>
<li><a href="#sec-4">Maintenance and support</a></li>
<li><a href="#sec-5">Use of data</a></li>
<li><a href="#sec-6">User-generated contributions</a></li>
<li><a href="#sec-7">Contribution license</a></li>
<li><a href="#sec-8">Liability</a></li>
<li><a href="#sec-9">Warranty</a></li>
<li><a href="#sec-10">Product claims</a></li>
<li><a href="#sec-11">Legal compliance</a></li>
<li><a href="#sec-12">Contact information</a></li>
<li><a href="#sec-13">Termination</a></li>
<li><a href="#sec-14">Third-party terms of agreements and beneficiary</a></li>
<li><a href="#sec-15">Intellectual property rights</a></li>
<li><a href="#sec-16">Applicable law</a></li>
<li><a href="#sec-17">Miscellaneous</a></li>
</ol>
</div>

<h2 id="sec-1">1. The Application</h2>
<p>Polyscope ("Licensed Application") is a piece of software created to provide real-time Polymarket prediction market intelligence and whale wallet tracking to retail traders through push notifications, high-conviction trade signals, and AI-powered trade analysis — and customized for iOS and Android mobile devices ("Devices"). It is used to monitor publicly available on-chain trading activity on the Polygon blockchain and surface whale wallet trades, high-volume market signals, and AI-generated insights to help users make more informed prediction market trading decisions.</p>

<div class="clausebox">
<h3>Clause 1: Financial Information Disclaimer</h3>
<p>Polyscope is not a registered investment advisor, broker-dealer, financial institution, or licensed financial planner. The information, data, alerts, and analysis provided through the Polyscope platform, including but not limited to whale wallet activity, high-conviction trade signals, and AI-generated trade insights, are provided for informational and educational purposes only and do not constitute financial, investment, legal, or trading advice. Polyscope does not recommend or endorse any specific trade, market position, or financial decision. Users acknowledge that prediction markets involve significant financial risk, that past whale trading activity is not indicative of future results, and that any trading decisions made in reliance on information provided by Polyscope are made solely at the user's own risk. Polyscope assumes no liability for any financial losses incurred by users in connection with their use of the platform. Users who require personalized financial advice should consult a licensed financial advisor, broker, or other qualified professional before making any investment or trading decisions.</p>
<h3>Clause 2: Children's Privacy (COPPA Compliance)</h3>
<p>The Application is not intended for use by children under the age of 17. Polyscope does not knowingly collect personal information from children under 13 years of age. The Application is rated 17+ on the Apple App Store and Google Play Store due to the financial nature of the content and services provided. If we discover that a child under 13 has provided us with personal information, we will delete such information from our systems immediately. Parents and legal guardians who believe their child has provided personal information to Polyscope should contact us immediately at contact@polyscopeapp.com, and we will take prompt action to remove such information and terminate the child's account.</p>
</div>

<h2 id="sec-2">2. Scope of License</h2>
<p>2.1 You are given a non-transferable, non-exclusive, non-sublicensable license to install and use the Licensed Application on any Devices that You (End-User) own or control and as permitted by the Usage Rules, with the exception that such Licensed Application may be accessed and used by other accounts associated with You (End-User, The Purchaser) via Family Sharing or volume purchasing.</p>
<p>2.2 This license will also govern any updates of the Licensed Application provided by Licensor that replace, repair, and/or supplement the first Licensed Application, unless a separate license is provided for such update, in which case the terms of that new license will govern.</p>
<p>2.3 You may not share or make the Licensed Application available to third parties (unless to the degree allowed by the Usage Rules, and with Newkirk Technologies LLC's prior written consent), sell, rent, lend, lease or otherwise redistribute the Licensed Application.</p>
<p>2.4 You may not reverse engineer, translate, disassemble, integrate, decompile, remove, modify, combine, create derivative works or updates of, adapt, or attempt to derive the source code of the Licensed Application, or any part thereof (except with Newkirk Technologies LLC's prior written consent).</p>
<p>2.5 You may not copy (excluding when expressly authorized by this license and the Usage Rules) or alter the Licensed Application or portions thereof. You may create and store copies only on devices that You own or control for backup keeping under the terms of this license, the Usage Rules, and any other terms and conditions that apply to the device or software used. You may not remove any intellectual property notices. You acknowledge that no unauthorized third parties may gain access to these copies at any time. If you sell your Devices to a third party, you must remove the Licensed Application from the Devices before doing so.</p>
<p>2.6 Violations of the obligations mentioned above, as well as the attempt of such infringement, may be subject to prosecution and damages.</p>
<p>2.7 Licensor reserves the right to modify the terms and conditions of licensing.</p>
<p>2.8 Nothing in this license should be interpreted to restrict third-party terms. When using the Licensed Application, You must ensure that You comply with applicable third-party terms and conditions.</p>

<h2 id="sec-3">3. Technical Requirements</h2>
<p>3.1 The Licensed Application requires iOS 14.0 or higher for Apple devices and Android 8.0 (API level 26) or higher for Android devices. Licensor recommends using the latest version of the operating system.</p>
<p>3.2 Licensor attempts to keep the Licensed Application updated so that it complies with modified/new versions of the firmware and new hardware. You are not granted rights to claim such an update.</p>
<p>3.3 You acknowledge that it is Your responsibility to confirm and determine that the app end-user device on which You intend to use the Licensed Application satisfies the technical specifications mentioned above.</p>
<p>3.4 Licensor reserves the right to modify the technical specifications as it sees appropriate at any time.</p>

<h2 id="sec-4">4. Maintenance and Support</h2>
<p>4.1 The Licensor is solely responsible for providing any maintenance and support services for this Licensed Application. You can reach the Licensor at the email address listed in the App Store or Play Store Overview for this Licensed Application.</p>
<p>4.2 Newkirk Technologies LLC and the End-User acknowledge that the Services have no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application.</p>

<h2 id="sec-5">5. Use of Data</h2>
<p>You acknowledge that Licensor will be able to access and adjust Your downloaded Licensed Application content and Your personal information, and that Licensor's use of such material and information is subject to Your legal agreements with Licensor and Licensor's privacy policy: <a href="/privacy">polyscopeapp.com/privacy</a>.</p>
<p>You acknowledge that the Licensor may periodically collect and use technical data and related information about your device, system, and application software, and peripherals, offer product support, facilitate the software updates, and for purposes of providing other services to you (if any) related to the Licensed Application. Licensor may also use this information to improve its products or to provide services or technologies to you, as long as it is in a form that does not personally identify you.</p>

<h2 id="sec-6">6. User-Generated Contributions</h2>
<p>The Licensed Application does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or in the Licensed Application, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Licensed Application and through third-party websites or applications. As such, any Contributions you transmit may be treated in accordance with the Licensed Application Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:</p>
<ol class="clause">
<li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
<li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Licensed Application, and other users of the Licensed Application to use your Contributions in any manner contemplated by the Licensed Application and this License Agreement.</li>
<li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Licensed Application and this License Agreement.</li>
<li>Your Contributions are not false, inaccurate, or misleading.</li>
<li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
<li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
<li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
<li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
<li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
<li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
<li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
<li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
<li>Your Contributions do not otherwise violate, or link to material that violates, any provision of this License Agreement, or any applicable law or regulation.</li>
</ol>
<p>Any use of the Licensed Application in violation of the foregoing violates this License Agreement and may result in, among other things, termination or suspension of your rights to use the Licensed Application.</p>

<h2 id="sec-7">7. Contribution License</h2>
<p>You agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</p>
<p>By submitting suggestions or other feedback regarding the Licensed Application, you agree that we can use and share such feedback for any purpose without compensation to you.</p>
<p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area in the Licensed Application. You are solely responsible for your Contributions to the Licensed Application and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>

<h2 id="sec-8">8. Liability</h2>
<p>8.1 Licensor's responsibility in the case of violation of obligations and tort shall be limited to intent and gross negligence. Only in case of a breach of essential contractual duties (cardinal obligations), Licensor shall also be liable in case of slight negligence. In any case, liability shall be limited to the foreseeable, contractually typical damages. The limitation mentioned above does not apply to injuries to life, limb, or health.</p>
<p>8.2 Licensor takes no accountability or responsibility for any damages caused due to a breach of duties according to Section 2 of this License Agreement. To avoid data loss, You are required to make use of backup functions of the Licensed Application to the extent allowed by applicable third-party terms and conditions of use. You are aware that in case of alterations or manipulations of the Licensed Application, You will not have access to the Licensed Application.</p>
<p>8.3 <strong>Additional Limitations of Liability for Financial Data Applications:</strong> The Company assumes no liability for trading losses, missed opportunities, or financial damages resulting from use of or reliance on information provided through the Application, including but not limited to whale wallet activity alerts, high-conviction trade signals, AI-generated insights, or notification delivery delays or failures. Prediction market trading involves substantial risk of loss, and past whale trading activity is not indicative of future results. The Company is not liable for: (a) inaccuracies in blockchain data sourced from third-party APIs or the Polygon network; (b) API outages, server downtime, or third-party service interruptions affecting data availability; (c) delays in push notification delivery due to network conditions, device settings, or operating system limitations; (d) trading decisions made by users based on information provided by the Application; (e) losses resulting from changes in prediction market odds, market closures, or resolution outcomes; (f) unauthorized access to user accounts resulting from weak passwords, shared credentials, or compromised devices. The Company's maximum aggregate liability under this Agreement shall not exceed the lesser of (a) the total amount paid by the user to the Company in the six months preceding the claim, or (b) the amount paid by the user in connection with the specific transaction or service giving rise to the claim. This limitation applies regardless of the form of action, whether in contract, tort, strict liability, or otherwise. Users acknowledge that the Application provides informational content only and that all trading decisions are made at the user's sole discretion and risk. The Company makes no representations or warranties regarding the accuracy, completeness, timeliness, or reliability of any data displayed in the Application.</p>

<h2 id="sec-9">9. Warranty</h2>
<p>9.1 Licensor warrants that the Licensed Application is free of spyware, trojan horses, viruses, or any other malware at the time of Your download. Licensor warrants that the Licensed Application works as described in the user documentation.</p>
<p>9.2 No warranty is provided for the Licensed Application that is not executable on the device, that has been unauthorizedly modified, handled inappropriately or culpably, combined or installed with inappropriate hardware or software, used with inappropriate accessories, regardless if by Yourself or by third parties, or if there are any other reasons outside of Newkirk Technologies LLC's sphere of influence that affect the executability of the Licensed Application.</p>
<p>9.3 You are required to inspect the Licensed Application immediately after installing it and notify Newkirk Technologies LLC about issues discovered without delay by email provided in Contact Information. The defect report will be taken into consideration and further investigated if it has been emailed within a period of thirty (30) days after discovery.</p>
<p>9.4 If we confirm that the Licensed Application is defective, Newkirk Technologies LLC reserves a choice to remedy the situation either by means of solving the defect or substitute delivery.</p>
<p>9.5 In the event of any failure of the Licensed Application to conform to any applicable warranty, You may notify the Services Store Operator, and Your Licensed Application purchase price will be refunded to You. To the maximum extent permitted by applicable law, the Services Store Operator will have no other warranty obligation whatsoever with respect to the Licensed Application, and any other losses, claims, damages, liabilities, expenses, and costs attributable to any negligence to adhere to any warranty.</p>
<p>9.6 If the user is an entrepreneur, any claim based on faults expires after a statutory period of limitation amounting to twelve (12) months after the Licensed Application was made available to the user. The statutory periods of limitation given by law apply for users who are consumers.</p>

<h2 id="sec-10">10. Product Claims</h2>
<p>Newkirk Technologies LLC and the End-User acknowledge that Newkirk Technologies LLC, and not the Services, is responsible for addressing any claims of the End-User or any third party relating to the Licensed Application or the End-User's possession and/or use of that Licensed Application, including, but not limited to:</p>
<ul>
<li>(i) product liability claims;</li>
<li>(ii) any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and</li>
<li>(iii) claims arising under consumer protection, privacy, or similar legislation.</li>
</ul>

<h2 id="sec-11">11. Legal Compliance</h2>
<p>You represent and warrant that You are not located in a country that is subject to a US Government embargo, or that has been designated by the US Government as a "terrorist supporting" country; and that You are not listed on any US Government list of prohibited or restricted parties.</p>

<h2 id="sec-12">12. Contact Information</h2>
<p>For general inquiries, complaints, questions or claims concerning the Licensed Application, please contact:</p>
<p>Newkirk Technologies LLC<br>
6515 Wydown Blvd. MSC 96891<br>
St. Louis, MO 63105<br>
United States<br>
contact@polyscopeapp.com</p>

<h2 id="sec-13">13. Termination</h2>
<p>The license is valid until terminated by Newkirk Technologies LLC or by You. Your rights under this license will terminate automatically and without notice from Newkirk Technologies LLC if You fail to adhere to any term(s) of this license. Upon License termination, You shall stop all use of the Licensed Application, and destroy all copies, full or partial, of the Licensed Application.</p>

<h2 id="sec-14">14. Third-Party Terms of Agreements and Beneficiary</h2>
<p>Newkirk Technologies LLC represents and warrants that Newkirk Technologies LLC will comply with applicable third-party terms of agreement when using Licensed Application.</p>
<p>In Accordance with Section 9 of the "Instructions for Minimum Terms of Developer's End-User License Agreement," both Apple and Google and their subsidiaries shall be third-party beneficiaries of this End User License Agreement and — upon Your acceptance of the terms and conditions of this License Agreement, both Apple and Google will have the right (and will be deemed to have accepted the right) to enforce this End User License Agreement against You as a third-party beneficiary thereof.</p>

<h2 id="sec-15">15. Intellectual Property Rights</h2>
<p>Newkirk Technologies LLC and the End-User acknowledge that, in the event of any third-party claim that the Licensed Application or the End-User's possession and use of that Licensed Application infringes on the third party's intellectual property rights, Newkirk Technologies LLC, and not the Services, will be solely responsible for the investigation, defense, settlement, and discharge of any such intellectual property infringement claims.</p>

<h2 id="sec-16">16. Applicable Law</h2>
<p>This License Agreement is governed by the laws of the State of Colorado excluding its conflicts of law rules.</p>

<h2 id="sec-17">17. Miscellaneous</h2>
<p>17.1 If any of the terms of this agreement should be or become invalid, the validity of the remaining provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that will achieve the primary purpose.</p>
<p>17.2 Collateral agreements, changes and amendments are only valid if laid down in writing. The preceding clause can only be waived in writing.</p>
`

export default function Eula() {
  useEffect(() => {
    document.title = 'End User License Agreement | Polyscope'
  }, [])

  return (
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
  )
}
