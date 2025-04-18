<script setup>
    import { useIdentityStore } from "../stores/siteIdentity";

    const sitename = useIdentityStore();
</script>

<template>
    <div class="container mx-auto p-3 md:py-8 text-black">
        <div class="max-w-3xl mx-auto p-4 sm:p-10 md:p-24 bg-white rounded-xl shadow-md">
            <h1 class="text-4xl font-bold text-gray-700 mb-4 text-center">Terms of Use - {{sitename.siteName}}</h1>
            <p class="text-gray-700 font-semibold text-lg text-center">August 29, 2023</p>

            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-2">About Us and Our Terms</h2>
                <p>Hello! Welcome to {{sitename.siteName}}. We are a subscription-based service that offers a suite of AI-powered tools designed to assist educators. Throughout these terms ("terms," "terms of service"), you will encounter the terms "we," "us," and/or "{{sitename.siteName}}." These terms are used because we are {{sitename.siteName}}, the entity behind and responsible for the {{sitename.siteName}} subscription service ("Service").</p>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-2">Your Presence on {{sitename.siteName}} Platform</h2>
                <p>By using our web pages located at  <router-link :to="{name: 'home'}"> <span class="underline">https://www.{{sitename.siteName}}.com</span></router-link> ("Site"), you agree to abide by these terms of service. Please note that your presence and usage of the {{sitename.siteName}} platform are subject to your acceptance of these terms, irrespective of whether you possess an account or an active subscription.</p>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-2">Privacy and Your Information</h2>
                <p>Your use of our service is also governed by our Privacy Policy, which explains how we collect, protect, and disclose information resulting from your interaction with our web pages. You can review our Privacy Policy here.</p>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-2">Browsing and Membership</h2>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Becoming a Subscriber</h3>
                    <p>To browse {{sitename.siteName}}, you must be at least 18 years of age. We do not knowingly collect data from or market to individuals under 18 years of age. When using {{sitename.siteName}}, you affirm that you are at least 18 years old or that you are the parent or guardian of a minor who is using the Services with your consent. These terms apply to any use of {{sitename.siteName}}, whether you are a subscribing member or not.</p>
                    
                    <div class="mt-6">
                        <h3 class="text-base font-semibold mb-2">Age Requirements</h3>
                        <p>To subscribe to {{sitename.siteName}}, you must be a minimum of 18 years old. If you are under 18, you can use the account of a parent or legal guardian who is at least 18 years old, with their permission. This adult will be responsible for all your activities related to {{sitename.siteName}}.</p>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-base font-semibold mb-2">Your Responsibility</h3>
                        <p>You are responsible for providing accurate and complete information to {{sitename.siteName}}. Keep your account details up-to-date, including your email address. Your {{sitename.siteName}} subscription is non-transferable, and you are accountable for any activity on {{sitename.siteName}} associated with your account, username, and password. Maintain the security of your credentials, and refrain from sharing your username and password. Account sharing is not permitted. Generated content is licensed for the subscriber's personal use and cannot be transferred to other individuals.</p>
                    </div>
                </div>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Browsing</h3>
                    <p>To browse {{sitename.siteName}}, you must be at least 18 years of age. We do not knowingly collect data from or market to individuals under 18 years of age. When using {{sitename.siteName}}, you affirm that you are at least 18 years old or that you are the parent or guardian of a minor who is using the Services with your consent. These terms apply to any use of {{sitename.siteName}}, whether you are a subscribing member or not.</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Terms of Subscribing</h3>
                    <p>When you subscribe to {{sitename.siteName}}, you do so under these terms: We cannot guarantee the ongoing availability of specific tools on {{sitename.siteName}}. When you generate content, you obtain a license to use the content as defined in the {{sitename.siteName}} End User License Agreement.</p>
                </div>

            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-2">Your Information and Communications</h2>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Privacy</h3>
                    <p>We respect your privacy and handle your information according to our {{sitename.siteName}} Privacy Policy. Our Privacy Policy outlines what information we collect, how it's used, and the rights you have regarding it.</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Confidentiality</h3>
                    <p>We take measures to protect your information and only share it with your consent, as required by law, to provide services, safeguard rights, or fulfill business obligations. While using {{sitename.siteName}}, you might access confidential information about {{sitename.siteName}} or others. You agree not to disclose such confidential information to anyone else.</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Communications</h3>
                    <p>By creating an account on our Service, you consent to receiving newsletters, marketing materials, and other information from us. You can opt out of these communications by using the unsubscribe link or contacting us <router-link :to="{name:'contact'}" class="text-main-color underline">Here</router-link>. By visiting  <router-link :to="{name: 'home'}"> <span class="underline">https://www.{{sitename.siteName}}.com</span></router-link> or sending emails to {{sitename.siteName}}, you agree to receive electronic communications. You acknowledge that electronic communications, including emails and notices on the Site, fulfill any legal requirements for written communication.</p>
                </div>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-2">Transacting as a Subscriber</h2>
                <p>Depending on your chosen payment method, such as credit card, you may be required to pay a handling fee for your monthly subscription. When you become a {{sitename.siteName}} subscriber, you agree to the payment terms corresponding to your chosen payment method, as communicated to you.</p>
                <p>If you select an ongoing payment method and a payment fails, we may suspend your subscription until payment is received. If your subscription is suspended, your rights under these terms will also be suspended. Note that third-party services may facilitate payments and purchases, subject to our Privacy Policy.</p>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-2">Other Legal Considerations</h2>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Eligibility, Suspension, or Termination</h3>
                    <p>Subscribing to {{sitename.siteName}} is a privilege subject to adherence to our rules. While we welcome you to our community, we reserve the right to decide whether a subscriber's use aligns with these terms.</p>
                    <p>We can suspend or terminate your account without notice for reasons including breach of terms, behavior inconsistent with our community values, or actions causing harm to us or others. Permanent account termination prohibits applying for a new account, regardless of subscription status.</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Genuine and Meaningful Interactions</h3>
                    <p>Accuracy is key, and you must avoid misleading others about your identity or intentions. We remove content containing credible threats, hate speech, personal information used for harassment, and repeated unwanted messages. Hate speech, targeting individuals based on attributes, or promoting violence is not allowed.</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Intellectual Property Rights</h3>
                    <p>You have a non-exclusive, non-transferable license to access and use  <router-link :to="{name: 'home'}"> <span class="underline">https://www.{{sitename.siteName}}.com</span></router-link> strictly as outlined in these terms. You may not modify, reverse engineer, publish, or exploit any content without authorization. While you obtain a license to use generated content, it's for personal use and is not transferable.</p>
                    <p>We own {{sitename.siteName}}'s content, excluding subscriber-generated content, including design, trademarks, and intellectual property. You are prohibited from unauthorized use or modification of protected content. Subscriber-generated content is governed by the {{sitename.siteName}} End User License Agreement.</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Copyright, Trademark, and Intellectual Property Claims</h3>
                    <p>We respect intellectual property rights. If you believe content on {{sitename.siteName}} infringes such rights, please refer to our Intellectual Property Policy for guidance.</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Fair Play</h3>
                    <p>Ensure your actions conform to our policies, including the Fair Use Policy and {{sitename.siteName}} End User License Agreement.</p>
                </div>
                
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Linking to and From {{sitename.siteName}}</h3>
                    <p>You need permission to link to {{sitename.siteName}}, and we can revoke that permission at our discretion.</p>
                    <p>{{sitename.siteName}} may contain links to third-party sites. We aren't responsible for their content and link inclusion doesn't imply endorsement. Some services on  <router-link :to="{name: 'home'}"> <span class="underline">https://www.{{sitename.siteName}}.com</span></router-link> are provided by third parties, and you consent to sharing information with them.</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Liability and Indemnity</h3>
                    <p>While we aim to maintain {{sitename.siteName}}'s availability, disruptions might occur without notice. We may block, suspend, or terminate accounts at our discretion. As a third-party subscriber, ensure you have authority to bind that party.</p>
                </div>

                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-2">Disclaimer of Liability</h3>
                    <p>Information, software, products, and services on Tickl</p>
                </div>
            </div>
        </div>
    </div>
</template>