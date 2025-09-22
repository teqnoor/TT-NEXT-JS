"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Handle header offset
    const header = document.getElementById("header");
    if (header) setHeaderHeight(header.offsetHeight);

    const handleResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldOffset = pathname !== "/";

  return (
    <section className="py-12">
      <div
        style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
      >
        <div className="max-w-6xl mx-auto">
          <h4 className="eczar mb-3 ">PRIVACY POLICY</h4>
          <p className="mb-3">
            Thank you for reading this post, don't forget to subscribe!
          </p>
          <p className="mb-3">
            Tiger Tiger is a brand of Hyperama Plc. Hyperama plc understands
            that your privacy is important to you and that you care about how
            your personal data is used. We respect and value your privacy and
            will only collect and use personal data in ways that are described
            here, and in a way that is consistent with our obligations and your
            rights under the law.
          </p>

          <h4 className="eczar mb-3 ">INFORMATION ABOUT US</h4>
          <p className="mb-3">
            This privacy policy covers the activities and services of Hyperama
            plc and all trading styles of this company, which includes JK Foods.
          </p>
          <p className="mb-3">
            Hyperama plc is a ‘controller’ of your personal data and are
            referred to as ‘we’,’us’ or ‘our’ in this Privacy Policy
          </p>
          <p className="mb-3">
            Hyperama plc is registered with company number 02667340, registered
            address Hyperama, Bull Close Road, Lenton Industrial Estate,
            Nottingham, NG7 2UT. We are registered with the Information
            Commissioner’s Office, or ICO, under registration number Z6436841.
          </p>

          <p className="mb-3">
            If you have any questions in relation to this privacy policy, please
            contact email dpo@hyperama.com or write to Data Protection Officer,
            Hyperama, Lenton Industrial Estate, Nottingham, NG7 2UT
          </p>

          <h4 className="eczar mb-3 ">WHAT DOES THIS NOTICE COVER?</h4>
          <p className="mb-3">
            This Privacy Information explains how we use your personal data: how
            it is collected, how it is held, and how it is processed. It also
            explains your rights under the law relating to your personal data.
          </p>

          <h4 className="eczar mb-3 ">WHAT IS PERSONAL DATA?</h4>
          <p className="mb-3">
            Personal data is defined by the General Data Protection Regulation
            (EU Regulation 2016/679) (the “GDPR”) as ‘any information relating
            to an identifiable person who can be directly or indirectly
            identified in particular by reference to an identifier’.
          </p>

          <p className="mb-3">
            Personal data is, in simpler terms, any information about you that
            enables you to be identified. Personal data covers obvious
            information such as your name and contact details, but it also
            covers less obvious information such as identification numbers,
            electronic location data, and other online identifiers.
          </p>

          <p className="mb-3">
            The personal data that we use is set out in Part 5, below.
          </p>

          <h4 className="eczar mb-3">WHAT ARE MY RIGHTS?</h4>

          <p className="mb-3">
            Under the GDPR, you have the following rights, which we will always
            work to uphold:
          </p>

          <p className="mb-3">
            a) The right to be informed about our or my collection and use of
            your personal data. This Privacy Notice should tell you everything
            you need to know, but you can always contact us to find out more or
            to ask any questions using the details in Part 11.
          </p>

          <p className="mb-3">
            b) The right to access the personal data we hold about you. Part 10
            will tell you how to do this.
          </p>

          <p className="mb-3">
            c) The right to have your personal data rectified if any of your
            personal data held by us is inaccurate or incomplete. Please contact
            us using the details in Part 11 to find out more.
          </p>

          <p className="mb-3">
            d) In certain circumstances, you can also ask us to erase or
            restrict the use of any of your personal data that we process.
          </p>

          <p className="mb-3">
            e) Rights relating to automated decision-making and profiling. We do
            not currently use your personal data in this way, but will notify
            you by updating this privacy policy if this changes.
          </p>
          <p className="mb-3">
            If you are unhappy or have any queries about our use of your
            personal data or exercising your rights as outlined above, please
            contact us using the details provided in Part 11.
          </p>
          <p className="mb-3">
            If you have any cause for complaint about our use of your personal
            data, you have the right to lodge a complaint with the Information
            Commissioner’s Office.
          </p>

          <h4 className="eczar mb-3">WHAT PERSONAL DATA DO WE COLLECT?</h4>

          <p className="mb-3">
            a) If you submit an enquiry via email, or the contact us / enquiry
            pages on our websites, we will collect your name and contact
            details.
          </p>

          <p className="mb-3">
            b) When you become a customer and register for an online customer
            account or complete hard copy application forms, we may collect and
            use some or all of the following personal data (this may vary
            according to your relationship with us):
          </p>

          <p className="mb-3 font-bold">Name</p>
          <p className="mb-3 font-bold">Date of birth</p>
          <p className="mb-3 font-bold">Business Address and Home Address</p>
          <p className="mb-3 font-bold">
            Email address, telephone and mobile numbers
          </p>
          <p className="mb-3 font-bold">Business name</p>
          <p className="mb-3 font-bold">Job title</p>
          <p className="mb-3 font-bold">Proof of id</p>
          <p className="mb-3">
            You will be given an account number which identifies your customer
            account.
          </p>
          <p className="mb-3">
            You may also give us information about business partners or
            associates, in which case you must ensure that you have permission
            to do this.
          </p>
          <p className="mb-3">
            Your bank account details if you are applying for credit.
          </p>
          <p className="mb-3">
            c) When you become a supplier, we may collect and use some or all of
            the following personal data (this may vary according to your
            relationship with us):
          </p>

          <p className="mb-3 font-bold">Name</p>
          <p className="mb-3 font-bold">Date of birth</p>
          <p className="mb-3 font-bold">Business Address and Home Address</p>
          <p className="mb-3 font-bold">Business name</p>
          <p className="mb-3 font-bold">Job title</p>
          <p className="mb-3 font-bold">Address</p>
          <p className="mb-3">
            You may also give us information about business partners or
            associates, in which case you must ensure that you have permission
            to do this.
          </p>
          <p className="mb-3">
            d) We may also indirectly collect and use the following personal
            data about you
          </p>
          <p className="mb-3">
            If you are a customer or supplier of us, we may obtain personal
            information from credit or reference agencies
          </p>
          <p className="mb-3">
            CCTV images of you may be captured on our premises
          </p>
          <p className="mb-3">
            Whenever your account is used, we collect transactional information
            regarding the goods purchased.
          </p>
          <p className="mb-3">
            Details of the emails and other digital communications we send to
            you that you open, including any links in them that you click on.
          </p>

          <p className="mb-3">
            e) If you shop with us through our website or App
          </p>
          <p className="mb-3">
            Technical information including your IP address, login information,
            products you have viewed or searched, browser type, plug-ins you
            use, operating systems and platforms, mobile device identifiers,
            URL, page response time, download errors, length of visit to certain
            pages, page interaction information, methods used to browse away
            from the page
          </p>

          <h4 className="eczar mb-3">HOW DO YOU USE MY PERSONAL DATA?</h4>
          <p className="mb-3">
            Under the GDPR, we must always have a lawful basis for using
            personal data. This may be because you have consented to our use of
            your personal data, or because it is in our legitimate business
            interests to use it. Your personal data may be used for one of the
            following purposes:
          </p>

          <p className="mb-3">Providing and managing your account</p>

          <p className="mb-3">Supplying our products and services to you.</p>

          <p className="mb-3">
            Analysing your purchasing behavior to provide you with personalised
            products and services
          </p>

          <p className="mb-3">
            Communicating with you. This may include responding to emails or
            calls from you.
          </p>

          <p className="mb-3">
            For customers that hold credit accounts, to carry out periodic
            credit checks
          </p>

          <p className="mb-3">Maintain your credit account</p>

          <p className="mb-3">
            We may anonymise the data we hold about you or your business and
            share it with our suppliers for their own reporting or marketing
            activities
          </p>

          <p className="mb-3">
            We may anonymise the data we hold about you or your business and
            share it with third parties who may also share the anonymised data
            with third party suppliers and partners for their sales and market
            research purposes.
          </p>

          <p className="mb-3">
            CCTV images are obtained for the prevention of crime and for
            security purposes
          </p>
          <p className="mb-3">
            Fraud and crime prevention. Your data may be passed to fraud
            prevention agencies if a fraud or crime is suspected or identified.
          </p>
          <p className="mb-3">
            With your permission and/or where permitted by law, we may also use
            your personal data for marketing communications, which may include
            contacting you by email, telephone, text message or post with
            information, news, and offers on our products and services. You will
            not be sent any unlawful marketing or spam. We will always work to
            fully protect your rights and comply with our obligations under the
            GDPR and the Privacy and Electronic Communications (EC Directive)
            Regulations 2003. You will always have the opportunity to opt-out of
            any particular method of communication (email, text, phone,
            telephone).
          </p>

          <h4 className="eczar mb-3">MARKETING</h4>
          <p className="mb-3">
            If you choose to hear from us, we may send you information based on
            what is most relevant to you or things you have told us you like.
            This may be by post, email, SMS(text) or telephone
          </p>

          <h4 className="eczar mb-3">CHANGING YOUR PREFERENCES</h4>
          <p className="mb-3">
            You can change your marketing preferences at any time by following
            the simple opt out instructions on any post, email or SMS
            communication we send you, by emailing OptOut@hyperama, or by
            writing to us at: Data Protection Officer, Hyperama, Lenton
            Industrial Estate, Nottingham, NG7 2UT
          </p>

          <p className="mb-3">
            However, there are some communications that we still need to send,
            for example, statements, direct debit notifications, contract price
            change notifications.
          </p>

          <h4 className="eczar mb-3">
            HOW LONG WILL YOU KEEP MY PERSONAL DATA?
          </h4>
          <p className="mb-3">
            We will not keep your personal data for any longer than is necessary
            for our purposes, including the purposes of satisfying any legal,
            accounting, or reporting requirements. If you have any queries about
            data retention, then please email dpo@hyperama.com
          </p>

          <p className="mb-3">
            The security of your personal data is important to us, and to
            protect your data, we take a number of important measures, including
            the following:
          </p>

          <p className="mb-3">
            Computer safeguards such as firewalls and data encryption
          </p>

          <p className="mb-3">
            Physical, electronic and procedural safeguards to our buildings and
            files.
          </p>

          <h4 className="eczar mb-3">DISCLOSURE OF YOUR PERSONAL DATA</h4>
          <p className="mb-3">
            Your personal data may be shared for one of the following purposes:
          </p>

          <p className="mb-3">
            With service providers that carry out certain functions for us.
            These include for example companies that help up with technology
            services, data storage and our marketing activities.Credit reference
            agencies when you have applied for credit.
          </p>

          <p className="mb-3">Hyperama employees</p>

          <p className="mb-3">
            Occasionally we if we are under a duty to disclose or share your
            personal data to comply with a legal obligation (for example to
            share CCTV footage of you with the police) or to enforce or apply
            our Terms of Use or Terms and Conditions of Sale.
          </p>

          <h4 className="eczar mb-3">HOW CAN I ACCESS MY PERSONAL DATA?</h4>
          <p className="mb-3">
            If you want to know what personal data we have about you, you can
            ask us for details of that personal data and for a copy of it (where
            any such personal data is held). This is known as a “subject access
            request”.
          </p>

          <p className="mb-3">
            All subject access requests should be made in writing and sent to
            the email or postal addresses shown in Part 11
          </p>

          <p className="mb-3">
            There is not normally any charge for a subject access request. If
            your request is ‘manifestly unfounded or excessive’ (for example, if
            you make repetitive requests) a fee may be charged to cover our
            administrative costs in responding.
          </p>

          <p className="mb-3">
            We will respond to your subject access request within one month of
            receiving it. Normally, we aim to provide a complete response,
            including a copy of your personal data within that time. In some
            cases, however, particularly if your request is more complex, more
            time may be required up to a maximum of three months from the date
            we receive your request.
          </p>

          <h4 className="eczar mb-3">COOKIES</h4>
          <p className="mb-3">
            Cookies are small text files stored on your computer when you visit
            certain websites. We use first party cookies (cookies that we have
            set, that can only be read by our website) to personalise your
            online experience. We also use third party cookies (cookies that are
            set by an organisation other than the owner of the website) for the
            purposes of website measurement and targeted advertising.
          </p>

          <h4 className="eczar mb-3">HOW DO I CONTACT YOU?</h4>
          <p className="mb-3">
            To contact us about anything to do with your personal data and data
            protection, including to make a subject access request, please use
            the following details
          </p>

          <p className="mb-3">Email address: dpo@hyperama.com</p>

          <p className="mb-3">
            Postal Address: Data Protection Officer, Hyperama, Lenton Industrial
            Estate, Nottingham, NG7 2UT
          </p>

          <p className="mb-3">
            We may need to verify your identity in order to process your request
            and ask you to provide valid identification documents to allow us to
            do so.
          </p>

          <h4 className="eczar mb-3">CHANGES TO THIS PRIVACY NOTICE</h4>
          <p className="mb-3">
            Hyperama plc may change this Privacy Notice from time to time. This may be necessary, for example, if the law changes, or if we change our business in a way that affects personal data protection.
          </p>

          <p className="mb-3">Any changes will be made available on our website.</p>

        </div>
      </div>
    </section>
  );
}
